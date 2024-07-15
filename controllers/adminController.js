const Product= require("../models/productSchema")
const Order= require("../models/orderSchema")


//@desc addproduct role:admin
//@Methode post 
//Path /addproduct
//@access privet
const addProduct =async(req,res)=>{
    try{  
        const {title,description,price,poster}= req.body
        const newProduct = await Product.create(req.body)
    res.status(201).json({msg:"product added", product:newProduct})
            }
    catch(err){
        res.status(500).json({msg:"something went wrong /in addProduct ", err: err.message})
    }
}


//@desc updateProduct role:admin
//@Methode put 
//Path /updateproduct/:id
//@access privet
const updateProduct =async(req,res)=>{
    try{  
    const updateProduct = await Product.findByIdAndUpdate(req.params.id,{...req.body})
    res.status(201).json({msg:"product updated", product:updateProduct})
    }
    catch(err){
        res.status(500).json({msg:"something went wrong /in updateproduct ", err: err.message})
    }
}


//@desc deleteProduct role:admin
//@Methode delete 
//Path /deleteproduct
//@access privet
const deleteProduct =async(req,res)=>{
    try{  
        const deleteProduct = await Product.findByIdAndDelete(req.params.id)
        res.status(201).json({msg:"product deleted", product:deleteProduct})
        }
        catch(err){
            res.status(500).json({msg:"something went wrong /in deleteProduct ", err: err.message})
        }
}


//@desc getOrders role:admin
//@Methode get 
//Path /getorders
//@access privet
const getOrders =async(req,res)=>{
    try{  
       
        const getOrders = await Order.find()
    res.status(201).json({msg:"order found succesfylly", getOrders})
            }
    catch(err){
        res.status(500).json({msg:"something went wrong /in getorders ", err: err.message})
    }
}


module.exports= {addProduct,getOrders,updateProduct,deleteProduct}