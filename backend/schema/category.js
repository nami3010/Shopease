const mongoose = require("mongoose");
const schema = mongoose.Schema;
const schemaName = require("../constants").schemas;

const status = require("../constants").status;

var CategorySchema = new schema({
  name: { type: String, required: true },
  description: { type: String, required: true },
  isDeleted: { type: Boolean, default: false },
  createdBy: { type: mongoose.Schema.Types.ObjectId, ref: schemaName.users },
});

Category = module.exports = mongoose.model(schemaName.category, CategorySchema);
