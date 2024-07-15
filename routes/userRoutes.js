const express = require ("express")
const router = express.Router()
const {check} = require ("express-validator")
const userController=require("../controllers/userController")
const authMiddleware = require ("../middleware/authMiddleware")

router.post("/register",[check("email","email is not valid").isEmail().normalizeEmail(),
    check("password","your password must at least contain 8 characters, one number,one symbol").isStrongPassword({

        minLenght :5 , minSymbols:1, minLowercase:1 ,minUppercase:1 , minNumbers:1})],userController.register)





router.post("/login",userController.login)
router.get("/all",userController.getAllUsers) 
router.get("/getproduct",userController.getProduct)  // methode get all always before every methode 
router.get("/:id",userController.getUserData) // test the data with postman by methode get (after register or login test data if registered or not )
// no need authMiddleware (bring data from database already created by admin)
router.post("/createorder",authMiddleware,userController.createOrder)
router.get("/getuserorders",authMiddleware,userController.getUserOrders)           

module.exports=router