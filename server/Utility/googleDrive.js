const fs = require('fs')
const { google } = require('googleapis')

const private_key =  process.env.Drive_PrivateKey;
const client_email = process.env.Drive_email;



const SCOPE = ["https://www.googleapis.com/auth/drive"];


async function Drive_authorize(){
  try
    {const jwtClient = new google.auth.JWT(
        client_email,
        null,
        private_key.replace(/\\n/g, '\n'),
        SCOPE
    )

    await jwtClient.authorize();

    return jwtClient;}
    catch(err){
      console.log("err here");
      
    }
}
const Drive_uploadFile = async (authClient,localFilePath,filename) => {
  
    const drive = google.drive({ version: 'v3', auth: authClient });
  
    const fileMetadata = {
      name: filename, // Name of the file in Drive
      parents: ["1vdt04DE7ZCi1jq84QCGDaM4e2SYY6UOW"] // Folder ID in Drive
    };
  
    const media = {
      mimeType: 'application/pdf', 
      body: fs.createReadStream(localFilePath),
    };
  
    try {
      const file = await drive.files.create({
        resource: fileMetadata,
        media: media,
        fields: 'id'
      });

      const fileId = file.data.id;

      const fileInfo = await drive.files.get({
        fileId: fileId,
        fields: 'webViewLink, webContentLink'
      });

      return fileInfo.data;

    } catch (err) {
      console.error("Error during upload: ", err);
      throw err;
    }
  };

module.exports={
    Drive_authorize,
    Drive_uploadFile
}