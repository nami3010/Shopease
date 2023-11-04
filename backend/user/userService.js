
const code = require('../constants').http_codes;
const msg = require('../constants').messages;
const accountType = require('../constants').accountType;
const userdao = require('./userDao')
const bcrypt = require('bcrypt');
const util =require('../app util/util')
function login(req, res) {
    let { email, password } = req.body;
    let query = { email: email,accountType:accountType.CUSTOMER}
    return userdao.findOne(query).then((result) => {
      
        if (!result) {
            res.json({ code: code.notFound, message: msg.userNotFound })
        }
        else if (bcrypt.compareSync(password, result.password)) 
        {
            let token = util.generateToken(result, process.env.USER_SECRET);
            let data = {
                _id: result._id,
                email: result.email,
                // accountType: result.accountType,
                fname: result.fname
            }
            res.json({ code: code.ok, message: msg.loggedIn, token: token, data: data })
        }
        else {
            res.json({ code: code.badRequest, message: msg.invalidPassword })

        }
    }).catch((err) => {
        res.json({ code: code.ineternalError, message: msg.internalServerError })
    })
}
function signup(req,res){
    console.log("🚀 ~ file: userService.js:49 ~ userdao.findOne ~ req.body.email:", req.body.email)
    userdao.findOne({ "email": req.body.email }).then(async (data) => {
        console.log("🚀 ~ file: userService.js:37 ~ userdao.findOne ~ data:", data)
        if (!data || data.length == 0) {
            let updatedPass = await bcrypt.hashSync(req.body.password, bcrypt.genSaltSync(10));
            req.body.password = updatedPass;
            return userdao.create(req.body).then((result) => {
                console.log("User registered successfully")
                res.json({ code: code.ok, message: msg.userCreated, data:result })
            })
        }else{

            res.json({ code: code.badRequest, message: msg.emailAlreadyRegistered })
        }
    }).catch((err) => {
        res.json({ code: code.ineternalError, message: msg.internalServerError })
    })
}

function add(req,res){
    let token = req.headers['authorization']
    console.log("🚀 ~ file: productService.js:9 ~ add ~ token:", token)
    let obj = util.decodeToken(token)
    req.body.createdBy = obj.id;
    const data = req.body;
    util.validateEmail(req.body.email)
            return userdao.create(data).then((result) => {
                res.json({ code: code.ok, result:result })
        
    }).catch((err) => {
        res.json({ code: code.internalError, message: err })
    })
}
function list(req,res){
    let query={isDeleted:"false",accountType:"customer"}
            return userdao.find(query).then((result) => {
                res.json({ code: code.ok,data:result })
        
    }).catch((err) => {
        res.json({ code: code.internalError, message: err })
    })
}
function edit(req,res){
    let token = req.headers['authorization']
    console.log("🚀 ~ file: productService.js:9 ~ add ~ req.query.id:", req.params.id)
    let obj = util.decodeToken(token)
    req.body.updatedBy = obj.id;
    let query = { _id: req.params.id },
    update = req.body,
    options = { new: true };
            return userdao.findOneAndUpdate(query,update,options).then((result) => {
                res.json({ code: code.ok,msg:msg.updateUser, result:result })
        
    }).catch((err) => {
        res.json({ code: code.internalError, message: err })
    })
}
function deleteUser(req, res) {

    let query = { _id: req.params.id },
    update = {isDeleted:"true"},
    options = { new: true };
    return userdao.findOneAndUpdate(query,update,options).then((result) => {
        res.json({ code: code.ok, message: msg.userdeleted })
    }).catch((err) => {
        res.json({ code: code.ineternalError, message: msg.internalServerError })

    })
}
module.exports={
    login,
    signup,
    add,
    list,
    edit,
    deleteUser
}
