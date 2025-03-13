// โหลดรายการจาก Local Storage เมื่อเปิดเว็บ
document.addEventListener("DOMContentLoaded", loadTasks);

function addTask() {
    let taskInput = document.getElementById("taskInput");
    let taskText = taskInput.value.trim();

    if (taskText !== "") {
        let li = document.createElement("li");
        li.textContent = taskText;

        document.getElementById("taskList").appendChild(li);
        saveTask(taskText); // บันทึกลง Local Storage
        taskInput.value = ""; // ล้างช่อง input
    }
}

// บันทึกข้อมูลลง Local Storage
function saveTask(task) {
    let tasks = JSON.parse(localStorage.getItem("tasks")) || [];
    tasks.push(task);
    localStorage.setItem("tasks", JSON.stringify(tasks));
}

// โหลดงานที่เคยบันทึกไว้
function loadTasks() {
    let tasks = JSON.parse(localStorage.getItem("tasks")) || [];
    tasks.forEach(task => {
        let li = document.createElement("li");
        li.textContent = task;
        document.getElementById("taskList").appendChild(li);
    });
}
