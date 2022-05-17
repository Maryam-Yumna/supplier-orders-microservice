let router = require("express").Router();

//Controllers
const supplierOrderController = require("../controller/controller");

//home route
router.get("/", (req, res) => {
  res.send("CTSE-Assignment3");
});

//Supplier routes
router.route("/supplierorder").get(supplierOrderController.getsupplierOrders);
router.route("/supplierorder/:id").get(supplierOrderController.getSupplierOrderById);
router.route("/supplierorder").post(supplierOrderController.addSupplierOrder);
router.route("/supplierorder/:id").delete(supplierOrderController.deleteSupplierOrder);
router.route("/supplierorder/:id").put(supplierOrderController.updateSupplierOrder);

module.exports = router;