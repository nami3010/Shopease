
// const customerRouter = require('../customer/customerRouter')
// const productRouter = require('../product/productRouter')
const adminRouter =require('../admin/adminRouter')
const http = require('http');


module.exports = function (app) {
    // app.use('/user', customerRouter)
    // app.use('/product', productRouter)
    app.use('/admin',adminRouter)
   
}