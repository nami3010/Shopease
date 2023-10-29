const code = require('../constants').http_codes;
const msg = require('../constants').messages;
const categorydao = require('./categoryDao')
const util =require('../app util/util')


function add(req,res){
    let token = req.headers['authorization']
    let obj = util.decodeToken(token)
    req.body.createdBy = "6521724680c3bd87ddec7cbc"//obj.id;
    const data = req.body
            return categorydao.create(data).then((result) => {
                res.json({ code: code.ok, message: msg.categoryadd })
        
    }).catch((err) => {
        res.json({ code: code.internalError, message: err })
    })
}


module.exports={
    add
}