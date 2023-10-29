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
module.exports = userRouter;