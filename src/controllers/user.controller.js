import asyncHandler from '../utils/asynchandler.js'
import {User} from "../models/user.model.js"
import ApiError from '../utils/apierror.js';
import route from '../routes/user.route.js';
import {uploadCloudinary} from '../utils/cloudinary.js';
import ApiResponse from '../utils/apires.js'


const userregister = asyncHandler (async (req , res )=>{
     const {username,email,password,fullname}= req.body;
    if(!username||!email||!password||!fullname){
        throw new ApiError(400,"ALL Fields are mandatory")
    }
    const userexisted= await User.findOne({
        $or:[{username},{email}]
    })
    if(userexisted){
        throw new ApiError(409,"User with same username or email already exist")
    }
    const avatarpath = await req.files?.avatar?.[0]?.path;
    const coverimagepath=await req.files?.coverimg?.[0]?.path;
    if(!avatarpath){
        throw new ApiError(400,"avatar is required");
    }
    const cloudavatarpath= await uploadCloudinary(avatarpath);
    

const cloudcoverpath = coverimagepath ? await uploadCloudinary(coverimagepath) : "";

    if(!cloudavatarpath){
        throw new ApiError(400,"avatar is required");
    }

     const Createduser = await User.create({
        username,
        fullname,
        email,
        password,
         avatar: cloudavatarpath
        
     })
     Createduser.password=undefined;
     Createduser.refreshtoken=undefined;

     if(!Createduser){
        throw new ApiError(500,"there is an error on server side")
     }

     return res.status(201).json(
        new ApiResponse(200,Createduser,"User registered successfully")
     )
})


export {userregister}