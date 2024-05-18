const express=require('express')
const app=express();
require('dotenv').config()
const port =process.env.port;
const studentRoutes=require('./routes/student.route')
const mongoose=require('mongoose')
mongoose.connect("mongodb://localhost:27017/jpmc")
.then((res)=>{console.log("connection success")})
app.use(express.urlencoded({extended : true}))

app.use('/api/students',studentRoutes)

app.get('/',(req,res)=>{
    res.status(200).send("Home page")
})
app.listen(port,()=>{console.log(`server is listening at ${port}`)})