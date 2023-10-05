let BaseDao = require('../dao/baseDao');
const adminModel = require('../schema/user')
const adminDao = new BaseDao(adminModel);

function create(data) {
    return adminDao.save(data).then((result) => {
        return result;
    })
}

function findOne(query){
    return adminDao.findOne(query,).then((result)=>{
        return result; 
    })
}
function findOneAndUpdate(query,update,options){
    return adminDao.findOneAndUpdate(query,update,options).then((result)=>{
        return result; 
    })
}
function remove(query){
    return adminDao.remove(query,).then((result)=>{
        return result; 
    })
}
module.exports = {
    create,
    findOne,
    findOneAndUpdate,
    remove
}