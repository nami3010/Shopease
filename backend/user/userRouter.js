const userRouter = require('express').Router();
const validate = require('./userValidator')
const actions = require('./userAction')

userRouter.route('/signup')
.post([], (req, res) => {
    actions.signup(req, res)
});
userRouter.route('/login')
.post([validate.validateLogin], (req, res) => {
    actions.login(req, res)
});
userRouter.route('/changePassword')
    .put([validate.validateChangePassword, validate.verifyToken], (req, res) => {
        actions.changePassword(req, res)
    });
userRouter.route('/add')
.post([
], (req, res) => {
    actions.add(req, res)
});
userRouter.route('/list')
.get([
], (req, res) => {
    actions.list(req, res)
});
userRouter.route('/edit/:id')
.put([
], (req, res) => {
    actions.edit(req, res)
});
userRouter.route('/delete/:id')
.put([], (req, res) => {
    actions.deleteUser(req, res)
});
userRouter.route('/addToCart')
.post([], (req, res) => {
    actions.addToCart(req, res)
});
userRouter.route('/removefromCart')
.post([], (req, res) => {
    actions.removefromcart(req, res)
});
userRouter.route('/updateCart')
.post([], (req, res) => {
    actions.updateCart(req, res)
});
userRouter.route('/getfromCart')
.get([], (req, res) => {
    actions.getfromcart(req, res)
});
userRouter.route('/emptyCart')
.get([], (req, res) => {
    actions.emptyCart(req, res)
});
userRouter.route('/process-payment')
.post([], (req, res) => {
    actions.payment(req, res)
});
userRouter.route('/success-payment')
.post([], (req, res) => {
    actions.Successpayment(req, res)
});
userRouter.route('/uploadPhoto')
    .post([], (req, res) => {
        actions.uploadPhoto(req, res)
    })
module.exports = userRouter;
