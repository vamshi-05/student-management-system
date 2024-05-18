const studentModel=require('../model/student.model.js')


const getStudents = async (req,res)=>{
    const students=await studentModel.find({})
    res.status(200).send(students)
}

const getStudent = async (req,res)=>{
    const student=await studentModel.findById(req.params.id)
    if(!student)
        res.status(404).json({message : "Student not found with id "})
    else
        res.status(200).send(student)
}

const addStudents= async (req,res)=>{
   try{
        studentModel.create(req.body);
        
        res.status(200).send(req.body);
   }
   catch(error){
    res.status(404).json({message : "unable to add student"})
   }
}

const updateStudents= async (req,res)=>{
   try{
        //console.log(req.body)
        await studentModel.findByIdAndUpdate(req.params.id,req.body);
        const student=await studentModel.findById(req.params.id)
        console.log(student)
        if(student)
            res.status(200).send(student);
        else
            res.status(404).json({message : "student id not found"})
   }
   catch(error){
    res.status(404).json({message : "student id not found in data"})
   }
}
/*
const replaceStudents= async (req,res)=>{
   try{
        const id=req.params.id
        console.log(req.body)
        await studentModel.findByOneAndReplace({_id :{$:id}},req.body);
        
        const student=await studentModel.findById(id)
        console.log(student)
        if(student)
            res.status(200).send(student);
        else
            res.status(404).json({message : "student id not found"})
   }
   catch(error){
    res.status(404).json({message : "student id not found in data"})
   }
}
*/

module.exports={
    getStudents,
    addStudents,
    getStudent,
    updateStudents,

}