const taskInput = document.querySelector("#task_input")
const addBtn = document.querySelector(".plus_icon")
const taskBox  = document.querySelector(".display_data")

function addTask(){
    addBtn.addEventListener("click", function(){
        var clutter = ""
        const taskValue = taskInput.value.trim();
        if(taskValue === ""){
            document.querySelector(".error").textContent = "Empty task is not allowed";
        }
        else{
            document.querySelector(".error").textContent = "";
            const taskDiv = document.createElement("div");
            taskDiv.className = "task";
            taskDiv.innerHTML = `<div class="task_data"><div class="check"></div><span>${taskValue}</span></div><div><img src="/img/delete.svg" class="delete" /></div>`;
            taskBox.appendChild(taskDiv);
            taskInput.value = "";
        }   
        saveTasks()
    })
    taskInput.addEventListener("keydown", function(event) {
        if (event.key === "Enter") {
            addBtn.click();
        }
        saveTasks()
    });
}
addTask()

function taskStatus(){
    taskBox.addEventListener("click", function(e){
        const a = e.target
        // console.log(e)
        if(a.tagName == "DIV"){
            a.classList.toggle("checked")
        }
        saveTasks()
    })
}
taskStatus()

function deleteTask(){
    taskBox.addEventListener("click", function(e){
        if(e.target.className == "delete"){
            e.target.parentElement.parentElement.remove()
        }
        saveTasks()
    })
}
deleteTask()

function saveTasks(){
    localStorage.setItem("task", taskBox.innerHTML)
}
function showSavedTasks(){
    taskBox.innerHTML = localStorage.getItem("task")
}
showSavedTasks()