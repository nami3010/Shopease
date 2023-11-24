const code = require('../constants').http_codes;
const msg = require('../constants').messages;
const userdao = require('./userDao')
const util =require('../app util/util')
async function validateLogin(req, res, next) {
   
    if (req.body.email && req.body.password) {
        next()
    }
    else {
        return res.json({ code: code.badRequest, message: msg.invalidBody })
    }
}
function validateChangePassword(req, res, next) {
    if (req.body.oldPassword && req.body.newPassword) {
        let oldPass = req.body.oldPassword.trim(),
            newPass = req.body.newPassword.trim()
        if (oldPass && newPass) {
            next()
        }
        else {
            res.json({ code: code.badRequest, message: msg.invalidBody })
        }
    }
    else {
        res.json({ code: code.badRequest, message: msg.invalidBody })
    }
}
async function verifyToken(req, res, next) {
    let token = req.headers['authorization']
    await jwt.verify(token, process.env.USER_SECRET, (err) => {
        if (err) {
            return res.json({ code: code.unAuthorized, message: msg.invalidToken })
        }
        else {
            let obj = util.decodeToken(token)
            let query = { _id: obj.id }
            userdao.finduser(query).then((data) => {
                if (!data) {
                    return res.json({ code: code.unAuthorized, message: msg.invalidToken })
                } else {
                    next();
                }
            }).catch((err) => {
                return res.json({ code: code.internalError, message: msg.internalServerError }) //msg.internalServerError })
            })
        }
    })
}
module.exports={
    validateLogin,
    validateChangePassword,
    verifyToken
}
