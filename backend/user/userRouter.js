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
userRouter.route('/process-payment')
.post([], (req, res) => {
    actions.payment(req, res)
});
module.exports = userRouter;
