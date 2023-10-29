
const code = require('../constants').http_codes;
const msg = require('../constants').messages;
const accountType = require('../constants').accountType;
const admindao = require('./adminDao')
const bcrypt = require('bcrypt');
const util =require('../app util/util')
function authenticateUser(req, res) {
    let { email, password } = req.body;
    let query = { email: email}
    return admindao.findOne(query).then((result) => {
        // console.log("🚀 ~ file: adminService.js:9 ~ authenticateUser ~ email:", email,password,bcrypt.compareSync(password, result.password))
        console.log("🚀 ~ file: adminService.js:9 ~ returnadmindao.find ~ result:", result)
        if (!result) {
            res.json({ code: code.notFound, message: msg.userNotFound })
        }
        else if (bcrypt.compareSync(password, result.password)) 
        {
            
            console.log("🚀 ~ file: adminService.js:20 ~ returnadmindao.findOne ~ result.accountType:", (result.accountType==accountType.ADMIN))
            let token = (result.accountType == accountType.ADMIN) ? util.generateToken(result, process.env.ADMIN_SECRET) : util.generateToken(result, process.env.USER_SECRET);
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
        console.log("authenticateUser -> err", err)
        res.json({ code: code.ineternalError, message: msg.internalServerError })
    })
}
function createadmin(req,res){
    admindao.findOne({ "accountType": accountType.ADMIN }).then(async (data) => {
        if (!data || data.length == 0) {
            const obj = {
                "name": "Admin",
                "email": process.env.ADMIN_EMAIL,
                "password": process.env.ADMIN_PASSWORD,
                "accountType": accountType.ADMIN
            }
            let updatedPass = await bcrypt.hashSync(obj.password, bcrypt.genSaltSync(10));
            obj.password = updatedPass;
            return admindao.create(obj).then((result) => {
                console.log("=================Admin created========================")
            })
        }
    }).catch((err) => {
        console.error({ err })
    })
}
module.exports={
    authenticateUser,
    createadmin
}