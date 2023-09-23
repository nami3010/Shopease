const mongoose = require('mongoose');
const schema = mongoose.Schema;
const schmaName = require('../constants').schemas;
const accountType = require('../constants').accountType;
const status = require('../constants').status;
const bcrypt = require('bcrypt');
const crypto = require('crypto');

var userSchema = new schema({
    name: { type: String, required: true },
    email: { type: String, required: true },
    password: {
        type: String, required: function () {
            return (this.isSocialLogin == false) ? true : false
        }
    },
    imageUrl: { type: String },
    age: { type: Number },
    isDeleted:{ type: Boolean, default: false },
    accountType: { type: String, enum: [accountType.CUSTOMER, accountType.BUSSINESSUSER, accountType.SUPERADMIN], default: accountType.CUSTOMER },
    status: { type: String, enum: [status.active, status.inactive], default: status.active },
  

    resetPasswordToken: {
        type: String
    },
    resetPasswordExpires: {
        type: Date
    },
   
});
User = module.exports = mongoose.model(schmaName.users, userSchema)