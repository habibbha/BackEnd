const mongoose = require("mongoose")

const productSchema = mongoose.Schema({
    title:{
        type:String,
        require:true
    },
    description:{
        type:String,
        require:true
    },
    price:{
        type:Number,
        require:true
    },
    poster :{
        type:String,  // image in form of url placed as a string type
        require:true
    }
})

const Product = mongoose.model("product", productSchema)
module.exports= Product