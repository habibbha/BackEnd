const mongoose =require("mongoose")

const orderSchema = mongoose.Schema({
    createAt:{
        type:Date,
        default:new Date()
    },
    products:Array, //  we can add many products in orders so type is array 

    owner:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"user"  // mongodb add "s" in registration always
    }
    
})

const Order = mongoose.model("order",orderSchema)
module.exports= Order