const taskList = document.getElementById("taskList");
const totalTasksEl = document.getElementById("totalTasks");
const completedTasksEl = document.getElementById("completedTasks");
const incompleteTasksEl = document.getElementById("incompleteTasks");
const notification = document.getElementById("notification");

const modal = document.getElementById("taskModal");
const taskForm = document.getElementById("taskForm");
const btnOpenAddForm = document.getElementById("btnOpenAddForm");
const btnCancel = document.getElementById("btnCancel");
const modalTitle = document.getElementById("modalTitle");

let isEditMode = false;
let tasks = JSON.parse(localStorage.getItem("tasks")) || [];

function renderTasks() {
    if (tasks.length === 0) {
        taskList.innerHTML = `<p style="text-align:center; color:#777;">Chưa có công việc nào.</p>`;
    } else {
        const htmls = tasks.map((task) => {
            return `
                <div class="task-card ${task.isCompleted ? 'completed' : ''}">
                    <div class="task-info">
                        <h3>${task.title}</h3>
                        <p>${task.description}</p>
                        <p><strong>Hạn:</strong> ${task.dueDate} | <strong>Ưu tiên:</strong> <span class="badge ${task.priority.replace(" ", ".")}">${task.priority}</span></p>
                    </div>
                    <div class="task-actions">
                        <label>
                            <input type="checkbox" onchange="toggleTaskStatus('${task.id}')" ${task.isCompleted ? 'checked' : ''}> Hoàn thành
                        </label>
                        <button onclick="prepareEdit('${task.id}')" ${task.isCompleted ? 'disabled' : ''}>Sửa</button>
                        <button onclick="deleteTask('${task.id}')" style="background:#dc3545; color:white;">Xóa</button>
                    </div>
                </div>
            `;
        });
        taskList.innerHTML = htmls.join("");
    }
    updateStats();
}

function updateStats() {
    const total = tasks.length;
    const completed = tasks.filter(t => t.isCompleted).length; 
    const incomplete = total - completed;

    totalTasksEl.innerText = total;
    completedTasksEl.innerText = completed;
    incompleteTasksEl.innerText = incomplete;
}

btnOpenAddForm.addEventListener("click", () => {
    taskForm.reset();
    document.getElementById("taskId").value = "";
    isEditMode = false;
    modalTitle.innerText = "Thêm công việc mới";
    modal.style.display = "block";
});

btnCancel.addEventListener("click", () => {
    modal.style.display = "none";
});

taskForm.addEventListener("submit", function(e) {
    e.preventDefault();

    const taskData = {
        title: document.getElementById("title").value,
        description: document.getElementById("description").value,
        dueDate: document.getElementById("dueDate").value,
        priority: document.getElementById("priority").value,
    };

    if (!isEditMode) {
        taskData.id = Date.now().toString();
        taskData.isCompleted = false; 
        tasks.push(taskData);
        showNotification("Đã thêm công việc thành công!");
    } else {

    }

    saveAndRender();
    modal.style.display = "none";
});

function saveAndRender() {
    localStorage.setItem("tasks", JSON.stringify(tasks));
    renderTasks();
}

function showNotification(message) {
    notification.innerText = message;
    setTimeout(() => { notification.innerText = ""; }, 3000);
}