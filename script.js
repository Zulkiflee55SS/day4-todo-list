document.addEventListener("DOMContentLoaded", function () {
    loadTasks();
    checkTaskList(); // ตรวจสอบสถานะของกรอบ
});

function addTask() {
    let taskInput = document.getElementById("taskInput");
    let taskText = taskInput.value.trim();
    let taskList = document.getElementById("taskList");
    let taskContainer = document.getElementById("taskContainer");

    if (taskText !== "") {
        let li = document.createElement("li");
        li.textContent = taskText;

        let deleteBtn = document.createElement("button");
        deleteBtn.textContent = "❌";
        deleteBtn.classList.add("delete-btn");
        deleteBtn.onclick = function () {
            li.remove();
            deleteTask(taskText);
            checkTaskList(); // ตรวจสอบว่าเหลืองานไหม
        };

        li.appendChild(deleteBtn);
        taskList.appendChild(li);
        saveTask(taskText);
        taskInput.value = "";

        taskContainer.style.display = "block"; // แสดงกล่องเมื่อมีงาน
    }
}

function checkTaskList() {
    let taskList = document.getElementById("taskList");
    let taskContainer = document.getElementById("taskContainer");

    if (taskList.children.length === 0) {
        taskContainer.style.display = "none"; // ซ่อนกล่องถ้าไม่มีงาน
    } else {
        taskContainer.style.display = "block"; // แสดงกล่องถ้ามีงาน
    }
}

function saveTask(task) {
    let tasks = JSON.parse(localStorage.getItem("tasks")) || [];
    tasks.push(task);
    localStorage.setItem("tasks", JSON.stringify(tasks));
}

function loadTasks() {
    let tasks = JSON.parse(localStorage.getItem("tasks")) || [];
    let taskList = document.getElementById("taskList");

    tasks.forEach(task => {
        let li = document.createElement("li");
        li.textContent = task;

        let deleteBtn = document.createElement("button");
        deleteBtn.textContent = "❌";
        deleteBtn.classList.add("delete-btn");
        deleteBtn.onclick = function () {
            li.remove();
            deleteTask(task);
            checkTaskList(); // ตรวจสอบว่าเหลืองานไหม
        };

        li.appendChild(deleteBtn);
        taskList.appendChild(li);
    });

    checkTaskList(); // ตรวจสอบสถานะของกรอบหลังโหลด
}

function deleteTask(task) {
    let tasks = JSON.parse(localStorage.getItem("tasks")) || [];
    tasks = tasks.filter(t => t !== task);
    localStorage.setItem("tasks", JSON.stringify(tasks));
}
