const mongoose = require("mongoose");

const Schema = mongoose.Schema;
const supplierOrderSchema = new Schema({
  supplier: {
    type: String
  },
  totalAmount: {
    type: Number
  },
  items:[{
    item: String,
    quantity: Number,
    cost:Number,
  }],
  orderDate:{
    type: Date,
    default: Date.now(),
  },
  status:{
    type: String,
  }
});
const SupplierOrder = mongoose.model("SupplierOrder", supplierOrderSchema);
module.exports = SupplierOrder;