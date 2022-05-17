const SupplierOrder = require("../model/model");

//add SupplierOrder
const addSupplierOrder = async (req, res) => {
  try {
    let newSupplierOrder = new SupplierOrder(req.body);
    await newSupplierOrder.save();
    res.status(200).send(newSupplierOrder);
  } catch (error) {
    res.status(500).send(error);
  }
};

//get all supplierOrders
const getsupplierOrders = async (req, res) => {
  try {
    let supplierOrders = await SupplierOrder.find();
    res.status(200).send(supplierOrders);
  } catch (error) {
    res.status(500).send(error);
  }
};

//get  SupplierOrder by id
const getSupplierOrderById = async (req, res) => {
  try {
    let supplierOrder = await SupplierOrder.findById(req.params.id);
    res.status(200).send(supplierOrder);
  } catch (error) {
    res.status(500).send(error);
  }
};

//delete  supplierOrder
const deleteSupplierOrder = async (req, res) => {
  try {
    await SupplierOrder.findByIdAndDelete(req.params.id);
    res.status(200).send("SupplierOrder Deleted");
  } catch (error) {
    res.status(500).send(error);
  }
};

//update supplierOrder
const updateSupplierOrder = async (req, res) => {
  try {
    let supplierOrder = await SupplierOrder.findByIdAndUpdate(req.params.id, req.body);
    res.status(200).send(supplierOrder);
  } catch (error) {
    res.status(500).send(error);
  }
};

module.exports = {
    addSupplierOrder,
    getsupplierOrders,
    getSupplierOrderById,
    deleteSupplierOrder,
    updateSupplierOrder,
};