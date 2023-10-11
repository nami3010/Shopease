const mongoose = require('mongoose');
const schema = mongoose.Schema;
const schemaName = require('../constants').schemas;
const productCategories = require('../constants').productCategories;

const status = require('../constants').status;

var ProductSchema = new schema({
  
    name: { type: String, required: true },
    email: { type: String, required: true },
    isDeleted: { type: Boolean, default: false },
    category: { type: mongoose.Types.ObjectId, ref: schemaName.category },
    description: { type: String, required: true },
    photos: [String],
    createdBy: { type: mongoose.Schema.Types.ObjectId, ref: schemaName.users },
  

});

User = module.exports = mongoose.model(schemaName.product, ProductSchema)

