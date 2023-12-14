const express = require("express")
const app = express();
const mongoose=require("mongoose");
const bodyParser=require('body-parser');
const env = require('dotenv').config()
app.use(bodyParser.json())
const cors = require('cors');
const cloudinary = require('cloudinary').v2;

const multer = require('multer');
const path = require('path');
const corsOptions ={
    origin:'*', 
    credentials:true,            //access-control-allow-credentials:true
    optionSuccessStatus:200
}
app.use(cors(corsOptions));
app.listen(8000)
const connectToMongo = async () =>{
    try{
mongoose.connect('mongodb+srv://nami:12345@cluster0.1hhp7q8.mongodb.net/Capstone?retryWrites=true&w=majority')
    }catch(error){
    console.log("🚀 ~ file: index.js:11 ~ connectToMongo ~ error:", error)

    }
}
// Configure Cloudinary
cloudinary.config({
    cloud_name: 'dr2yfmjsy',
    api_key: '178388763665342',
    api_secret: 'TC-GTGQOzqu2Z2tc9H5Cnis5hR8',
    secure: true,
  });
  const storage = multer.memoryStorage();
  const upload = multer({ storage: storage });
  
  // Define the route for uploading an image
  app.post('/upload', upload.single('image'), (req, res) => {
    // Upload the image to Cloudinary
    cloudinary.uploader.upload_stream({ resource_type: 'auto' }, (error, result) => {
      if (error) {
        console.error(error);
        return res.status(500).json({ error: 'Upload failed' });
      }
  
      // The result object contains information about the uploaded image
      const { secure_url, public_id, format, width, height } = result;
  
      // You can use this information as needed, for example, send it as a response
      res.json({
        secure_url,
        public_id,
        format,
        width,
        height
      });
    }).end(req.file.buffer);
  });
  
connectToMongo()
require('./router')(app)
