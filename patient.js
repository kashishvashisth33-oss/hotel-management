const mongoose= require("mangoose");

const patient= mongoose.schema({
Name:{
    type:String,
    required:True
    },
    disease:{
        type:String,
        required:True
    },
    wardnumber:{
        type:String,
        required:True
    },
    admitteddate:{
        type:String,
        required:True
    }
})
module.exports={
TodoModel
}