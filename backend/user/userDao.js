let BaseDao = require('../dao/baseDao');
const userModel = require('../schema/user')
const userDao = new BaseDao(userModel);
const Product = require('../schema/product')
function create(data) {
    return userDao.save(data).then((result) => {
        return result;
    })
}

function findOne(query){
    console.log("query",query)
    return userDao.findOne(query,).then((result)=>{
        console.log("result",result)
        return result; 
    })
}

async function populateProductId(cartItems) {
    try {
      const populatedItems = await Promise.all(
        cartItems.map(async (item) => {
            console.log("in map",item)
          const populatedItem = await Product.populate(item, { path: 'productId'});
          return populatedItem;
        })
      );
      return populatedItems;
    } catch (error) {
      console.error(error);
      // Handle the error
    }
  }
  
function findOnePop(query){
    console.log("query",query)
    return userDao.findOne(query,).
    
    then(async(result)=>{
       var populatedItems = result.cart;
            try {
                await Promise.all(
                    populatedItems.map(async (item) => {
                      console.log("in map",item)
                    const populatedItem = await Product.populate(item, { path: 'productId'});
                    return populatedItem;
                  })
                );
                console.log("poppulated items",populatedItems)
                return populatedItems;
              } catch (error) {
                console.error(error);
                // Handle the error
              }
        })
        .catch((error) => {
          console.error(error);
          // Handle the error
        });
        // return result; 
    
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
    find,
    findOnePop
}
