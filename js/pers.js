var task = document.getElementById("task")
var taskResult = document.getElementById("taskResult")
var taskText = document.getElementById("taskText")
var totaltasks = document.getElementById("totaltasks")
var menuBtn = document.getElementById("menu-btn")
var navbar = document.getElementById("navBar")


setTimeout(() => {
    location.reload()

}, 100000000)
let today = new Date();


let month = today.getMonth() + 1;
let year = today.getFullYear();
let date = today.getDate();
let current_date = `${month}/${date}/${year}`;

let hours = (today.getHours());
let minutes = (today.getMinutes());
let seconds = (today.getSeconds());
let current_time = `${hours}:${minutes}:${seconds}`;





// var taskList = [];
if (localStorage.getItem("two") != null) {
    var taskList = JSON.parse(localStorage.getItem("two"))

    display()
}
else {
    taskList = []
    totaltasks = 0

}

function display() {
    var container = ""
    for (var i = 0; i < taskList.length; i++) {
        container += `
         <div class="secColor-bg overflow-hidden d-flex p-3 col-11 rounded-3 align-items-center m-auto mt-4 position-relative animation taskT" data-id="${taskList[i].id}" >
                        
         <div class="content">
  <label class="checkBox">
   
    <input class="" type="checkbox" onclick="checkbtn(${taskList[i].id})" id="checkbox" ${taskList[i].check ? 'checked' : ''}>
    <div class="transition"></div>
  </label>
</div>
                       <div class="ms-3 ">
                           <p class=" fs-4 text-light " style="margin-bottom: 0;${taskList[i].check ? 'text-decoration:line-through;' : ''} " id="taskText" >${taskList[i].oneTask}</p>
                           <p class=" text-muted mt-0 mb-0">Date:${taskList[i].dateVal}<span></span></p>
                           <p class=" text-muted mt-0 mb-0">Time:${taskList[i].timeVal} <span></span></p>
                       </div>

                       <div class="text-end position-absolute end-10">
                       <button class="btn1" onclick="deleteItam(${i})">
                       <i class="fa-solid fa-trash icon" style="color: #ffffff;"></i>
                     </button></div>
               <br>
                   </div>
        `
        total()
    }
    taskResult.innerHTML = container
}
function addBtn() {
    var tasks = {
        id: Date.now(),
        oneTask: task.value,
        dateVal: current_date,
        timeVal: current_time,
        check: false
    }
    if (task.value != "") {
        taskList.push(tasks)
        localStorage.setItem("two", JSON.stringify(taskList))
        location.reload()
    }
    else if (task.value == "") {

        alert("Write somthing :(")
    }
    else {

    }
    clear()
    display()
}
function checkbtn(id) {

    console.log(id);
    var allTasks = document.querySelectorAll(".taskT")
    for (var i = 0; i < allTasks.length; i++) {

        if (allTasks[i].getAttribute("data-id") == id) {
            var taskText = allTasks[i].querySelector("#taskText")
            var checkbox = allTasks[i].querySelector("#checkbox")
            for (var a = 0; a < taskList.length; a++) {
                if (taskList[a].id == id) {
                    taskList[a].check = checkbox.checked
                }
            }
            if (checkbox.checked == true) {

                taskText.style.textDecoration = "line-through"
             
               
            }
            else {
                taskText.style.textDecoration = "none"
              


            }
            localStorage.setItem("two", JSON.stringify(taskList))
        }
    }

}

function clear() {
    task.value = ""
}


function deleteItam(i) {
    taskList.splice(i, 1)
    localStorage.setItem("two", JSON.stringify(taskList))

    display()
}

function total() {
    totaltasks.innerHTML = taskList.length
}
function search(term) {
    var result = ``
    for (var i = 0; i < taskList.length; i++) {
        if (taskList[i].oneTask.includes(term.trim()) == true) {
            result += `
            <div class="secColor-bg overflow-hidden d-flex p-3 col-11 rounded-3 align-items-center m-auto mt-4 position-relative animation"  >
                          <div class="content" >
                              <label class="checkBox">
                              <input id="ch1" type="checkbox" onclick="checkbtn()">
                              <div class="transition"></div>
                              </label>
                          </div>   
                          <div class="ms-3 ">
                              <p class="  fs-4 text-light" style="margin-bottom: 0;" id="taskText">${taskList[i].oneTask}</p>
                              <p class="  text-muted mt-0 mb-0">Date: ${taskList[i].dateVal}<span></span></p>
                              <p class="  text-muted mt-0 mb-0">Time: ${taskList[i].timeVal} <span></span></p>
                          </div>
   
                          <div class="text-end position-absolute end-10">
                          <button class="btn1" onclick="deleteItam(${i})">
                          <i class="fa-solid fa-trash icon" style="color: #ffffff;"></i>
                        </button></div>
                  <br>
                  
                      </div>
           `
        }
    }
    taskResult.innerHTML = result
}
menuBtn.addEventListener("click", () => {

    navbar.classList.toggle("d-block")
})

// if(taskList.check == false){
//     taskText.style.color = "red"
// }
// else if (taskList.check == true){
//     taskText.style.color = "red"

// }
// else{
//     console.log("ksjdfh")
// }