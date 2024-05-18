const mongoose=require('mongoose')

const studentSchema=mongoose.Schema({
    _id :{
        type : String,
        required : true
    },
    name : String,
    age : Number,
    course : String
})

const studentModel=mongoose.model("student",studentSchema)

module.exports=studentModel