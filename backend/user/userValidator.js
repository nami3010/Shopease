const code = require('../constants').http_codes;
const msg = require('../constants').messages;


async function validateLogin(req, res, next) {
   
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