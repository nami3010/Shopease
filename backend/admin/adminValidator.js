const code = require('../constants').http_codes;
const msg = require('../constants').messages;


async function validateLogin(req, res, next) {
    console.log("🚀 ~ file: AdminValidator.js:7 ~ validateLogin ~ req.body:", req.body)
    if (req.body.email && req.body.password) {
        next()
    }
    else {
        return res.json({ code: code.badRequest, message: msg.invalidBody })
    }
}

module.exports={
    validateLogin
}