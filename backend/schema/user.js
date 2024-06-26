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
    dob:{type:String},
    isDeleted:{ type: Boolean, default: false },
    accountType: { type: String, enum: [accountType.CUSTOMER, accountType.ADMIN], default: accountType.CUSTOMER },
    status: { type: String, enum: [status.active, status.inactive], default: status.active },
  
cart:[{
    productId:{type: mongoose.Schema.Types.ObjectId, ref: schmaName.products },
    count:{type:Number},
    createdAt: { type: Date, default: Date.now }
}],
    resetPasswordToken: {
        type: String
    },
    resetPasswordExpires: {
        type: Date
    },
    createdBy: { type: mongoose.Schema.Types.ObjectId, ref: schmaName.users },
    updatedBy: { type: mongoose.Schema.Types.ObjectId, ref: schmaName.users }
   
});
User = module.exports = mongoose.model(schmaName.users, userSchema)