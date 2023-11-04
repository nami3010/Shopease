let BaseDao = require('../dao/baseDao');
const userModel = require('../schema/user')
const userDao = new BaseDao(userModel);

function create(data) {
    return userDao.save(data).then((result) => {
        return result;
    })
}

function findOne(query){
    return userDao.findOne(query,).then((result)=>{
        return result; 
    })
}
function find(query){
    return userDao.find(query,).then((result)=>{
        return result; 
    })
}
function findOneAndUpdate(query,update,options){
    return userDao.findOneAndUpdate(query,update,options).then((result)=>{
        return result; 
    })
}
function remove(query){
    return userDao.remove(query,).then((result)=>{
        return result; 
    })
}
module.exports = {
    create,
    findOne,
    findOneAndUpdate,
    remove,
    find
}
