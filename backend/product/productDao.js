let BaseDao = require('../dao/baseDao');
const productModel = require('../schema/product')
const productDao = new BaseDao(productModel);

function create(data) {
    return productDao.save(data).then((result) => {
        return result;
    })
}

function findOne(query){
    return productDao.findOne(query,).then((result)=>{
        return result; 
    })
}
function find(query){
    return productDao.find(query,).populate('category').then((result)=>{
        return result; 
    })
}
function findOneAndUpdate(query,update,options){
    return productDao.findOneAndUpdate(query,update,options).then((result)=>{
        console.log("result",result)
        return result; 
    })
}
function remove(query){
    return productDao.remove(query,).then((result)=>{
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