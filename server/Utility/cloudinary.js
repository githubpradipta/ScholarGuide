const cloudinary = require('cloudinary').v2;
const fs = require('fs');
const HttpError = require("standard-http-error")

cloudinary.config({ 
    cloud_name: 'dlhflzvyz', 
    api_key: '523281526242656', 
    api_secret: 'UpqrK20XYK_aEEYlx7Kir59K1EI' 
});

const uploadOnCloudinary = async(localFilePath)=>{
    try{
        const response = await cloudinary.uploader.upload
        (
        localFilePath,{
            resource_type:'auto'
        })
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