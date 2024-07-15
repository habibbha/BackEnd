const express= require ("express")
const router = express.Router()
const adminMiddleware =require("../middleware/adminMiddleware")
const {addProduct,updateProduct,deleteProduct,getOrders} = require("../controllers/adminController")


router.post("/addproduct",addProduct)
router.put("/updateproduct/:id",adminMiddleware,updateProduct)
router.delete("/deleteproduct/:id",adminMiddleware,deleteProduct)
router.get("/getorders",adminMiddleware,getOrders)

module.exports = router