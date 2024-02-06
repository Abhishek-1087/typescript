window.onload = loadTasks;
document.querySelector("form")?.addEventListener("submit", e => {
    e.preventDefault();
    addTask();
});

interface Task {
    task: string;
    completed: boolean;
}

function loadTasks(): void {
    const tasksString = localStorage.getItem("tasks");
    if (!tasksString) return;
    const tasks: Task[] = JSON.parse(tasksString);
    tasks.forEach(task => {
        const list = document.querySelector("ul");
        const li = document.createElement("li");
        li.innerHTML = `<input type="checkbox" onclick="taskComplete(this)" class="check" ${task.completed ? 'checked' : ''}>
            <input type="text" value="${task.task}" class="task ${task.completed ? 'completed' : ''}" onfocus="getCurrentTask(this)" onblur="editTask(this)">
            <i class="fa fa-trash" onclick="removeTask(this)"></i>`;
        list?.insertBefore(li, list.children[0]);
    });
}

function addTask(): void {
    const taskInput = document.querySelector("form input") as HTMLInputElement;
    const list = document.querySelector("ul");
    if (!taskInput || taskInput.value === "") {
        return;
    }
    if (document.querySelector(`input[value="${taskInput.value}"]`)) {
        let answer = prompt("Task already exists! Do you want to add it again? Enter Y/y to confirm");
        if (answer !== "Y" && answer !== "y") {
            return;
        }
    }
    const tasks: Task[] = JSON.parse(localStorage.getItem("tasks") || "[]");
    tasks.push({ task: taskInput.value, completed: false });
    localStorage.setItem("tasks", JSON.stringify(tasks));

    const li = document.createElement("li");
    li.innerHTML = `<input type="checkbox" onclick="taskComplete(this)" class="check">
        <input type="text" value="${taskInput.value}" class="task" onfocus="getCurrentTask(this)" onblur="editTask(this)">
             <i class="fa fa-trash" onclick="removeTask(this)"></i>`;
    list?.insertBefore(li, list.children[0]);
    taskInput.value = "";
}

function taskComplete(event: HTMLInputElement): void {
    const tasks: Task[] = JSON.parse(localStorage.getItem("tasks") || "[]");
    tasks.forEach(task => {
        if (task.task === event.nextElementSibling?.nodeValue) {
            task.completed = !task.completed;
        }
    });
    localStorage.setItem("tasks", JSON.stringify(tasks));
    event.nextElementSibling?.classList.toggle("completed");
}

function removeTask(event: HTMLElement): void {
    const tasks: Task[] = JSON.parse(localStorage.getItem("tasks") || "[]");
    tasks.forEach(task => {
        if (task.task === event.parentNode?.children[1]?.nodeValue) {
            tasks.splice(tasks.indexOf(task), 1);
        }
    });
    localStorage.setItem("tasks", JSON.stringify(tasks));
    event.parentElement?.remove();
}

let currentTask: string | null = null;
function getCurrentTask(event: HTMLInputElement): void {
    currentTask = event.value;
}
