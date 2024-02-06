var _a;
window.onload = loadTasks;
(_a = document.querySelector("form")) === null || _a === void 0 ? void 0 : _a.addEventListener("submit", function (e) {
    e.preventDefault();
    addTask();
});
function loadTasks() {
    var tasksString = localStorage.getItem("tasks");
    if (!tasksString)
        return;
    var tasks = JSON.parse(tasksString);
    tasks.forEach(function (task) {
        var list = document.querySelector("ul");
        var li = document.createElement("li");
        li.innerHTML = "<input type=\"checkbox\" onclick=\"taskComplete(this)\" class=\"check\" ".concat(task.completed ? 'checked' : '', ">\n            <input type=\"text\" value=\"").concat(task.task, "\" class=\"task ").concat(task.completed ? 'completed' : '', "\" onfocus=\"getCurrentTask(this)\" onblur=\"editTask(this)\">\n            <i class=\"fa fa-trash\" onclick=\"removeTask(this)\"></i>");
        list === null || list === void 0 ? void 0 : list.insertBefore(li, list.children[0]);
    });
}
function addTask() {
    var taskInput = document.querySelector("form input");
    var list = document.querySelector("ul");
    if (!taskInput || taskInput.value === "") {
        return;
    }
    if (document.querySelector("input[value=\"".concat(taskInput.value, "\"]"))) {
        var answer = prompt("Task already exists! Do you want to add it again? Enter Y/y to confirm");
        if (answer !== "Y" && answer !== "y") {
            return;
        }
    }
    var tasks = JSON.parse(localStorage.getItem("tasks") || "[]");
    tasks.push({ task: taskInput.value, completed: false });
    localStorage.setItem("tasks", JSON.stringify(tasks));
    var li = document.createElement("li");
    li.innerHTML = "<input type=\"checkbox\" onclick=\"taskComplete(this)\" class=\"check\">\n        <input type=\"text\" value=\"".concat(taskInput.value, "\" class=\"task\" onfocus=\"getCurrentTask(this)\" onblur=\"editTask(this)\">\n             <i class=\"fa fa-trash\" onclick=\"removeTask(this)\"></i>");
    list === null || list === void 0 ? void 0 : list.insertBefore(li, list.children[0]);
    taskInput.value = "";
}
function taskComplete(event) {
    var _a;
    var tasks = JSON.parse(localStorage.getItem("tasks") || "[]");
    tasks.forEach(function (task) {
        var _a;
        if (task.task === ((_a = event.nextElementSibling) === null || _a === void 0 ? void 0 : _a.nodeValue)) {
            task.completed = !task.completed;
        }
    });
    localStorage.setItem("tasks", JSON.stringify(tasks));
    (_a = event.nextElementSibling) === null || _a === void 0 ? void 0 : _a.classList.toggle("completed");
}
function removeTask(event) {
    var _a;
    var tasks = JSON.parse(localStorage.getItem("tasks") || "[]");
    tasks.forEach(function (task) {
        var _a, _b;
        if (task.task === ((_b = (_a = event.parentNode) === null || _a === void 0 ? void 0 : _a.children[1]) === null || _b === void 0 ? void 0 : _b.nodeValue)) {
            tasks.splice(tasks.indexOf(task), 1);
        }
    });
    localStorage.setItem("tasks", JSON.stringify(tasks));
    (_a = event.parentElement) === null || _a === void 0 ? void 0 : _a.remove();
}
var currentTask = null;
function getCurrentTask(event) {
    currentTask = event.value;
}
