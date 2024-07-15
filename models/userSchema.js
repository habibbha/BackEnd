const mongoose =require("mongoose")

const userSchema = mongoose.Schema({
    name:{
        type:String,
        require:true
    },
    email:{
        type:String,
        require:true
    },
    password:{
        type:String,
        require:true
    },
    role :{
        type:String,
        enum:["user","admin"],    // enum means how many role we have he in this code we have user and admin 
        default:"user"           // default role is made as user
    }
})

const User =mongoose.model("user",userSchema)
module.exports= User