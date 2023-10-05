const adminRouter = require('express').Router();
const validate = require('./adminValidator')
const actions = require('./adminAction')


// actions.createadmin()
adminRouter.get('/test',(req, res, next) => {
console.log("Hello from admin ")
    });
    
adminRouter.route('/login')
.post([validate.validateLogin], (req, res) => {
    actions.login(req, res)
});
module.exports = adminRouter;