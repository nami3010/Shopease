const jwt = require('jsonwebtoken')
const generator = require('generate-password')
const nodemailer = require('nodemailer')
const CODE = require('../constants/index').http_codes;
const MSG = require('../constants/index').messages;

var fs = require('fs')
var path = require('path')
var multer = require('multer');

var storage = multer.diskStorage({
    destination: function (req, file, callback) {
        callback(null, './img');
    },
    filename: function (req, file, callback) {
        let file_name = file.fieldname + '-' + Date.now() + path.extname(file.originalname)
        req.newFile_name.push(file_name);
        callback(null, file_name);
    }
});
var upload = multer({
    storage: storage,
    fileFilter: function (req, file, callback) {
        checkFileType(file, callback)
    }

}).array('img', 5);

var  addFoodItem = async (prodObj) => {

    console.log('insid add food item in util js')
    try{
        let imgResult;
        console.log("foodObj is--->",prodObj.file);
        if(prodObj.file){
            imgResult = await this.cloudinary.uploadImage(prodObj);
        }
      
       
        console.log('image-- result', imgResult)
        // const {name,cookTime,price,resturant,categories} = prodObj.body;

        // const foodItem = {
        //     name,
        //     cookTime,
        //     price: +price,
        //     resturant: new ObjectId(resturant),
        //     categories: categories.split(","),
        //     image : imgResult ? imgResult.url : '',
        //     isDisabled: false
        //   }
      
        //   const fItem = await FoodModel.create(foodItem);
        //   return fItem;
    }catch(err){
        console.log("Error in creating food item isss--->",err);
        throw err;
    }
}



function validateEmail(data) {
    let regex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    return regex.test(data)
}

function validatePassword(data) {
    let regex = /^(?=.*[A-z])(?=.*[0-9])(?=.*[@#$_-])\S{8,20}$/;
    return regex.test(data)
}

function generateToken(data, secret) {
    console.log("🚀 ~ file: util.js:41 ~ generateToken ~ data, secret:", data, secret)
    let obj = {
        id: data._id,
        fname: data.fname,
        email: data.email,
        // role: data.role
    }
    return jwt.sign(obj, secret, { expiresIn: '720hr' })
}
// async function sendEMail(receiverid, data) {
//     var tansporter = nodemailer.createTransport({
//         service: process.env.MAIL_SERVICE,
//         auth: {
//             user: process.env.USERID,
//             pass: process.env.PASSWORD
//         }
//     })


//     var mailoption = {

//         from: `<${process.env.USERID}>`,
//         to: receiverid,
//         subject: data.subject,
//         // text: 'That was easy!'
//         html: data.html

//     }
//     return new Promise(function (resolve, reject) {
//         tansporter.sendMail(mailoption, (err) => {
//             (err) ? reject(err) : resolve(true)
//         })
//     })

// }

// function generateRandomPassword() {
//     return generator.generate({
//         length: 10,
//         numbers: true
//     })
// }

function decodeToken(token) {
    console.log("🚀 ~ file: util.js:85 ~ decodeToken ~ token:", token)
    return jwt.decode(token)
}
// var verifyUsrToken = async function (jwtToken) {
//     try {
//         let payload = await jwt.verify(jwtToken, process.env.ADMIN_SECRET);
//         console.log("payload", payload)
//         return payload
//     } catch (e) {
//         return({ code: CODE.BADREQUEST, message: MSG.internalServerError })
//     }
// };





function checkFileType(file, callback) {
    const fileTypes = /jpeg|jpg|png|gif/;
    const extName = fileTypes.test(path.extname(file.originalname).toLocaleLowerCase());
    if (extName) {
        return callback(null, true);
    }
    else {
        callback('Error:Images only!')
    }
}











module.exports = {
    validateEmail,
    validatePassword,
    generateToken,
    // sendEMail,
    // generateRandomPassword,
    decodeToken,
    // verifyUsrToken,
    upload,
    checkFileType,
    addFoodItem
}