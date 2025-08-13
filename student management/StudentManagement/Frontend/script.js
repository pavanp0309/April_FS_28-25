let apiUrl=`http://localhost:3000/students`

// access all the Html elements 
const userForm=document.querySelector("#studentform")
const sName=document.querySelector(".sname")
const sEmail=document.querySelector(".semail")
const sMobile=document.querySelector(".smobile")
const sAge=document.querySelector(".sage")
const saveBtn=document.querySelector(".create-btn")
const studentTable=document.querySelector("#studenttable")
const Toastele=document.querySelector("#liveToast")
const Toastmsg=document.querySelector(".toast-msg")
const toast=new bootstrap.Toast(Toastele)


// function to show the alert Msgs (custome errors)
async function showMsg(msg,bgcolor="primary") {
    Toastele.className=`toast bg-${bgcolor}` // updating the color of toast based on user Action
    Toastmsg.textContent=msg // toast msg based on user action 
    toast.show()
    
}

// function to fetch the data from backend
async function fetchStudents() {
    try {
        // 
        let res=await fetch(apiUrl,{method:"GET"})
        if(!res.ok) throw new Error(`failed to fetch the data${res.status}`,)
        let students=await res.json()
        // console.log(students.map(ele=>console.log(ele)))
        renderTable(students)
    } catch (error) {
        console.log(error.message)
        await showMsg(`error:${error.message}`,"danger")
    }
}
// function to display the fetched data of frontend
async function  renderTable(students) {
    studentTable.innerHTML=students.map(student=>{
        return ` <tr class=''  id=${student.id}>
              <td>${student.id}</td>
              <td>${student.name}</td>
              <td>${student.email}</td>
              <td>${student.age}</td>
              <td>${student.mobile}</td>
              <td>
              <button class="btn btn-success">edit</button>
            <button class="btn btn-danger">delete</button>
           </td>
            </tr>`
    }).join("")
}


fetchStudents()
// function to perform the crud