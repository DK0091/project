import {v2 as cloudinary} from "cloudinary"
import fs from "fs"

const uploadCloudinary = async function(localfilepath){
  try {
    // Configure Cloudinary only when the function is called
    cloudinary.config({ 
      cloud_name: process.env.CLOUDINARY_CLOUD_NAME, 
      api_key: process.env.CLOUDINARY_API_KEY,
      api_secret: process.env.CLOUDINARY_API_SECRET, 
    });
    
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

export  {uploadCloudinary}

