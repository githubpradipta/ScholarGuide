const cloudinary = require('cloudinary').v2;
const fs = require('fs');
const HttpError = require("standard-http-error")


cloudinary.config({ 
    cloud_name: process.env.cloudinary_cloud_name, 
    api_key: process.envcloudinary_api_key, 
    api_secret: process.env.cloudinary_api_secret, 
});



const uploadOnCloudinary = async(localFilePath)=>{
    console.log(localFilePath);
    
    try{
        const response = await cloudinary.uploader.upload
        (
        localFilePath,
        {resource_type:'raw'}
        )
        fs.unlinkSync(localFilePath);
        return response;
    }
    catch(err){
        fs.unlinkSync(localFilePath);
        return new HttpError(500);
    }
 
    
}

module.exports={
    uploadOnCloudinary
}