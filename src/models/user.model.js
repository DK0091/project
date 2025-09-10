import mongoose , {Schema} from 'mongoose'
import bcrypt from 'bcrypt'
import jwt from 'jsonwebtoken'

const userschema = new Schema({
    username:{
        type:String,
        required:true,
        unique:true,
        lowercase:true,
        trim:true,
        index:true

    },
      email:{
        type:String,
        required:true,
        unique:true,
        lowercase:true,
        trim:true,
    },
      fullname:{
        type:String,
        required:true,
        trim:true,
        index:true
    },
      avatar:{
        type:String,
        required:true,
    },
    coverimg:{
        type:String
    },
    watchhistory:{
        type:Schema.Types.ObjectId,
        ref:"Video"
    },
    password:{
        type:String,
        required:[true,'Password is required']
    },
    refreshtoken:{
        type:String
    }

},{timestamps:true})

userschema.pre("save",async function(next){
    if(!this.isModified("password")){
        return next()
    }
    this.password=bcrypt.hash(this.password,10)

})
userschema.methods.isPasswordCorrect = async function(password){
   return await bcrypt.compare(password,this.password)
}

userschema.methods.generateAccesstoken = function(){
   jwt.sign(
    {
    id:this.id,
    email:this.email,
    fullname:this.fullname,
    username:this.username
   },
   process.env.ACCESS_TOKEN_SECRET,
   {
    expiresIn:process.env.ACCESS_TOKEN_EXPIRY
   }
)
}
userschema.methods.generateAccesstoken = function(){
   jwt.sign(
    {
    id:this.id,
    email:this.email,
   },
   process.env.REFRESH_TOKEN_EXPIRY,
   {
    expiresIn:process.env.REFRESH_TOKEN_EXPIRY
   }
)
}


export const User = mongoose.model("User",userschema)
