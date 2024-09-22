const cloudinary = require('cloudinary').v2;
const fs = require('fs');
const HttpError = require("standard-http-error")


cloudinary.config({ 
    cloud_name: process.env.cloudinary_cloud_name, 
    api_key: process.env.cloudinary_api_key, 
    api_secret: process.env.cloudinary_api_secret, 
});



const uploadOnCloudinary = async(localFilePath)=>{
    
    try{
        const response = await cloudinary.uploader.upload
        (
        localFilePath,
        {resource_type:'auto'}
        )
        fs.unlinkSync(localFilePath);
        return response;
    }
    catch(err){
        fs.unlinkSync(localFilePath);
        return new HttpError(500,err);
    }
 
    
}

module.exports={
    uploadOnCloudinary
}