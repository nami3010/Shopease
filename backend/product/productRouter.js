const express = require("express");
const bodyParser = require("body-parser");
const productRouter = require("express").Router();
const validate = require("./productValidator");
const actions = require("./productAction");
const multer = require("multer");
const upload = multer();
const app = express();
// const cors = require("cors");
const util =require('../app util/cloudinary')
// const corsOptions = {
//     origin: "*",
//     credentials: true, //access-control-allow-credentials:true
//     optionSuccessStatus: 200,
//   };
//   app.use(cors(corsOptions));


//app.use(bodyParser.urlencoded({ limit: '50mb', extended: true }));

//const upload = multer();

// productRouter.route('/add')
// .post([
// ],upload.single('prodImage'), (req, res) => {
//     console.log('inside prod router ', req)
//     actions.add(req, res)
// });
productRouter.route("/add").post(upload.single("photo"), (req, res) => {
  console.log("file is------>",req.body);
  if(req.file){
    util.uploadImage(req).then((resu) => {
       req.body.photos = resu.url;
       actions.add(req, res);
    });
  }
  else{
    // show error
  }

  // console.log("inside prod router ", req.body); // 'req.file' should contain the uploaded file
  
});

productRouter.route("/list").get([], (req, res) => {
  actions.list(req, res);
});
productRouter.route("/edit/:id").put([], (req, res) => {
  actions.edit(req, res);
});
productRouter.route("/delete/:id").put([validate.verifyAccess], (req, res) => {
  actions.deleteProduct(req, res);
});
productRouter.route("/get/:id").get([], (req, res) => {
  actions.getById(req, res);
});
productRouter.route("/getByCat/:id").get([], (req, res) => {
  actions.getByCatId(req, res);
});
module.exports = productRouter;
