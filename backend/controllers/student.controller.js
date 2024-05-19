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
        
        // console.log(req.body)
        await studentModel.create({
            "_id" : req.body._id,
            "name" : req.body.name,
            "age" : req.body.age,
            "course" : req.body.course
        });
        
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

const deleteStudent= async (req,res)=>{
    try{
        const student= await studentModel.findByIdAndDelete(req.params.id)
        if(!student)
            res.status(400).send({"message" : "failed to delete"})
        else
            res.status(200).send(student);
    }
    catch(error){
        res.status(404).send({"message" : "unable to delete student"})
    }
}

module.exports={
    getStudents,
    addStudents,
    getStudent,
    updateStudents,
    deleteStudent,

}