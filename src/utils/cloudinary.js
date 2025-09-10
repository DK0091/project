import {v2 as cloudinary} from "cloudinary"
import fs from "fs"

cloudinary.config({ 
  cloud_name: process.env.CLOUD_NAME, 
  api_secret: process.env.CLOUDINARY_SECRET, 
  api_key: process.env.CLOUDINARY_KEY
});

const uploadCloudinary = async function(localfilepath){
  try {
    if(!localfilepath) return null
     const result = await cloudinary.uploader.upload(localfilepath,{
      resource_type:"auto"
    })
    fs.unlinkSync(localfilepath)
    return result.secure_url
  } catch (error) {
    fs.unlinkSync(localfilepath)
    throw error
  }
}

export default uploadCloudinary

