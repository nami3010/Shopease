
const code = require('../constants').http_codes;
const msg = require('../constants').messages;
const admindao = require('../admin/adminDao')
const jwt = require('jsonwebtoken')
const util =require('../app util/util')


async function verifyAccess(req, res, next) {
    let token = req.headers['authorization']
    console.log("🚀 ~ file: categoryValidator.js:11 ~ verifyAccess ~ token:", token)
    await jwt.verify(token,process.env.ADMIN_SECRET, (err) => {
        if (err) {
            console.log("🚀 ~ file: categoryValidator.js:13 ~ awaitjwt.verify ~ err:", err)
            return res.json({ code: code.unAuthorized, message: msg.invalidToken })
        }
        else {
            let obj = util.decodeToken(token)
            let query = { _id: obj.id }
            admindao.findOne(query).then((data) => {
                console.log("🚀 ~ file: categoryValidator.js:19 ~ admindao.findOne ~ data:", data)
                if (!data) {
                    return res.json({ code: code.unAuthorized, message: msg.invalidToken })
                } else {
                    console.log("verifyToken -> data", data.accountType)
                    if (data.accountType == accountType.ADMIN) {
                        next();
                    } else {
                        return res.json({ code: code.unAuthorized, message: "You are not authorized to add category" })
                    }
                }
            }).catch((err) => {
                return res.json({ code: code.internalError, message: msg.internalServerError }) //msg.internalServerError })
            })
        }
    })
}

module.exports = {
    verifyAccess
}