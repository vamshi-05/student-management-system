let click=0;
async function fetchData(){
    const response= await fetch("http://localhost:3000/students")
    if(response.ok){
        const students= await response.json()
        const studentList=document.getElementById("student_list")
        studentList.innerHTML="";
        students.forEach((student)=>{
            const data = document.createElement("tr");
            data.innerHTML = `
                <td>${student.id}</td>
                <td>${student.name}</td>
                <td>${student.age}</td>
                <td>${student.course}</td>

                <td><button id="icon" onclick="updateData(${student.id})"> <i class="fa-solid fa-user-pen"></i></button>
                <button id="icon" onclick="deleteData(${student.id})"> <i class="fa-solid fa-user-xmark"></i></button></td>
            `
            studentList.appendChild(data);
        })
    }
    else{
        alert("Failed to load")

    }
}
document.addEventListener("DOMContentLoaded",fetchData)

async function addData(){
    const id=document.getElementById("rollno").value;
    const name=document.getElementById("name").value;
    const age=document.getElementById("age").value;
    const course=document.getElementById("course").value;
    const response=await fetch("http://localhost:3000/students",{
        method : "POST",
        body:JSON.stringify({
            "id" : id,
            "name" : name,
            "age" : age,
            "course" : course

        })
    })
    if(response.ok){
        fetchData()
    }
    else{
        alert("Failed to add student ")
    }

}

async function deleteData(id){
    const response= await fetch(`http://localhost:3000/students/${id}`,{
        method : "DELETE"
    })
    if(response.ok){
        fetchData()
    }
    else{
        alert("Failed to Delete...")
    }
}
async function updateData(id){

    if(click==0)
    {const student=await fetch(`http://localhost:3000/students/${id}`)
    if(student.ok){
        const s= await student.json()

        console.log(s)
        document.getElementById("rollno").value=s.id;
        document.getElementById("name").value=s.name;
        document.getElementById("age").value=s.age;
        document.getElementById("course").value=s.course;
    }
    else{
        alert("Unable to edit...")
    }
    click=1;
}
else
   { const rid=document.getElementById("rollno").value;
    const name=document.getElementById("name").value;
    const age=document.getElementById("age").value;
    const course=document.getElementById("course").value;
    const response= await fetch(`http://localhost:3000/students/${id}`,{
        method : "PATCH",
        body :JSON.stringify({
            "id" : id,
            "name" : name,
            "age" : age,
            "course" : course
        })
    })
    if(response.ok){
        fetchData()
    }
    else{
        alert("Failed to Update...")
    }
    click=1;
    }
    
}
