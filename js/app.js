document.addEventListener("DOMContentLoaded", function () {
    let taskInput = document.querySelector("#taskInput");
    let addTask = document.querySelector("#addTaskButton");
    let removeDoneTasks = document.querySelector("#removeFinishedTasksButton");
    let taskList = document.querySelector(".rightSection .taskListContainer #taskList");
    let counter = document.querySelector(".counter #counter");
    let doneTasks = document.querySelectorAll("#taskList li.done");
    let taskPriory = document.querySelector("#priory");

    addTask.addEventListener("click", function () {
        if(taskInput.value.length>5&&taskInput.value.length<100&&taskPriory.value>-1&&taskPriory.value<11) {

            let newTask = document.createElement("li");
            let newTitle = document.createElement("h1");
            newTitle.innerText = taskInput.value;
            let taskPriority = document.createElement("p");
            taskPriority.classList.add("taskPriority");
            let priorityNumber = document.createElement("span");
            taskPriority.innerText = `Task priority: `;
            priorityNumber.innerText = taskPriory.value;
            taskPriority.appendChild(priorityNumber);
            let deleteBtn = document.createElement("button");
            deleteBtn.innerText = "Delete";
            deleteBtn.classList.add("deleteBtn");
            let completeBtn = document.createElement("button");
            completeBtn.innerText = "Complete";
            completeBtn.classList.add("completeBtn");
            newTask.appendChild(newTitle);
            newTask.appendChild(taskPriority);
            newTask.appendChild(deleteBtn);
            newTask.appendChild(completeBtn);
            taskList.appendChild(newTask);

            completeBtn.addEventListener("click", function () {
                this.parentElement.classList.toggle("done");
                doneTasks = document.querySelectorAll("#taskList li.done");
                counter.innerText = taskList.children.length - doneTasks.length;
            });
            deleteBtn.addEventListener("click", function () {
                let toRemove = this.parentElement;
                toRemove.parentElement.removeChild(toRemove);
                doneTasks = document.querySelectorAll("#taskList li.done");
                counter.innerText = taskList.children.length - doneTasks.length;
            });
            taskInput.value = '';
            taskPriory.value = "";
            doneTasks = document.querySelectorAll("#taskList li.done");
            counter.innerText = taskList.children.length - doneTasks.length;

            let finalList = Array.from(taskList.children);
            finalList.sort(function (a,b) {
                return b.querySelector("p.taskPriority span").innerText - a.querySelector("p.taskPriority span").innerText;
            });
            taskList.innerHTML="";
            finalList.forEach(function (element) {
                taskList.appendChild(element);
            })
        }
        else {
            alert("Niepoprawna d³ugoœæ nazwy zadania lub niepoprawny priorytet");
            }
    });
    removeDoneTasks.addEventListener("click", function () {
        let doneTasks = taskList.querySelectorAll(".done");
        doneTasks.forEach(function (doneTask) {
            let toRemove = doneTask;
            toRemove.parentElement.removeChild(toRemove);
        });
    });

});