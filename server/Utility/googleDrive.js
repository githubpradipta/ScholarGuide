const fs = require('fs')
const { google } = require('googleapis')

const apikeys = require('./googleDriveApi.json')

const SCOPE = ["https://www.googleapis.com/auth/drive"];

async function Drive_authorize(){
    const jwtClient = new google.auth.JWT(
        apikeys.client_email,
        null,
        apikeys.private_key,
        SCOPE
    )

    await jwtClient.authorize();

    return jwtClient;
}

const Drive_uploadFile = async (authClient,localFilePath) => {
  
    const drive = google.drive({ version: 'v3', auth: authClient });
  
    const fileMetadata = {
      name: "example.pdf", // Name of the file in Drive
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