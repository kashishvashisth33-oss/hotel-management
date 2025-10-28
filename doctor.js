const mongoose= require("mangoose");

const doctor= mongoose.schema({
Name:{
    type:String,
    required:True
    },
    email:{
        type:String,
        required:True
    },
    password:{
        type:String,
        required:True
    },
    
})
module.exports={
TodoModel
}