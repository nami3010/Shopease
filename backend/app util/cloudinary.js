const cloudinary = require("cloudinary").v2;
const streamifier = require("streamifier");

     async function uploadImage(req){
        cloudinary.config({ 
            cloud_name: "dr2yfmjsy",
  api_key: "178388763665342",
  api_secret: "TC-GTGQOzqu2Z2tc9H5Cnis5hR8",
          });
          let streamUpload = async (req) => {
            return new Promise((resolve, reject) => {
                let stream = cloudinary.uploader.upload_stream(
                  (error, result) => {
                    if (result) {
                      resolve(result);
                    } else {
                      reject(error);
                    }
                  }
                );
    
              streamifier.createReadStream(req.file.buffer).pipe(stream);
            });
        };
    
            let result = await streamUpload(req);
            return result;
    }
    module.exports = {
        uploadImage
    }