
const userRouter = require('../user/userRouter')
const productRouter = require('../product/productRouter')
const adminRouter =require('../admin/adminRouter')
const categoryRouter =require('../category/categoryRouter')
const http = require('http');


module.exports = function (app) {
    app.use('/user', userRouter)
    app.use('/product', productRouter)
    app.use('/admin',adminRouter)
    app.use('/category',categoryRouter)
   
}