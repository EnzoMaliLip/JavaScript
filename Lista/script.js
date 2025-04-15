let isDarkTheme = false;

// Função para adicionar uma nova tarefa
function addTask() {
    let input = document.getElementById("taskInput");
    let taskText = input.value.trim();
    let category = document.getElementById("categoryInput").value;
    let dueDate = document.getElementById("dueDateInput").value;

    if (taskText === "" || category === "") return;

    let li = createTaskElement(taskText, category, dueDate);
    document.getElementById("taskList").appendChild(li);
    input.value = "";
    document.getElementById("categoryInput").value = "";
    document.getElementById("dueDateInput").value = "";
    updateTaskCount(); // Atualiza a contagem após adicionar
    saveTasksToLocalStorage(); // Salva no localStorage
}

// Função para criar um elemento de tarefa
function createTaskElement(taskText, category, dueDate) {
    let li = document.createElement("li");
    li.innerHTML = `${taskText} (${category}) - Vencimento: ${dueDate} <button onclick="removeTask(this)">X</button>`;
    li.addEventListener("click", function() {
        this.classList.toggle("done");
        updateTaskCount(); // Atualiza a contagem ao marcar/desmarcar
        saveTasksToLocalStorage(); // Salva no localStorage
    });
    li.addEventListener("dblclick", function() {
        editTask(this);
    });
    li.classList.add("task"); // Adiciona classe para animação
    return li;
}

// Função para remover uma tarefa
function removeTask(button) {
    button.parentElement.remove();
    updateTaskCount(); // Atualiza a contagem após remover
    saveTasksToLocalStorage(); // Salva no localStorage
}

// Função para limpar todas as tarefas
function clearTasks() {
    let taskList = document.getElementById("taskList");
    taskList.innerHTML = ""; // Limpa a lista
    updateTaskCount(); // Atualiza a contagem
    saveTasksToLocalStorage(); // Salva no localStorage (limpando)
}

// Função para atualizar a contagem de tarefas
function updateTaskCount() {
    let totalTasks = document.getElementById("totalTasks");
    let completedTasks = document.getElementById("completedTasks");
    let taskList = document.getElementById("taskList");
    let tasks = taskList.children;
    let total = tasks.length;
    let completed = 0;

    for (let i = 0; i < tasks.length; i++) {
        if (tasks[i].classList.contains("done")) {
            completed++;
        }
    }

    totalTasks.textContent = total;
    completedTasks.textContent = completed;
}

// Função para salvar as tarefas no localStorage
function saveTasksToLocalStorage() {
    let taskList = document.getElementById("taskList");
    let tasks = [];
    for (let i = 0; i < taskList.children.length; i++) {
        let task = {
            text: taskList.children[i].textContent.split(" (")[0], // Remove o "X" e a categoria
            category: taskList.children[i].textContent.split(" (")[1].split(")")[0], // Captura a categoria
            dueDate: taskList.children[i].textContent.split(" - Vencimento: ")[1].split(" ")[0], // Captura a data de vencimento
            completed: taskList.children[i].classList.contains("done")
        };
        tasks.push(task);
    }
    localStorage.setItem("tasks", JSON.stringify(tasks));
}

// Função para carregar as tarefas do localStorage ao carregar a página
function loadTasksFromLocalStorage() {
    let tasks = JSON.parse(localStorage.getItem("tasks")) || [];
    let taskList = document.getElementById("taskList");
    taskList.innerHTML = ""; // Limpa a lista antes de carregar
    tasks.forEach(task => {
        let li = createTaskElement(task.text, task.category, task.dueDate);
        if (task.completed) {
            li.classList.add("done");
        }
        taskList.appendChild(li);
    });
    updateTaskCount();
}

// Função para editar uma tarefa
function editTask(li) {
    let currentText = li.firstChild.textContent.trim();
    let currentCategory = li.innerHTML.match(/$$(.*?)$$/)[1];
    let currentDueDate = li.innerHTML.split(" - Vencimento: ")[1].split(" ")[0];

    let newText = prompt("Editar tarefa:", currentText);
    if (newText && newText.trim() !== "") {
        li.firstChild.textContent = newText + " ";
        li.innerHTML = li.innerHTML.replace(/$$.*?$$/, `(${currentCategory}) - Vencimento: ${currentDueDate}`); // Atualiza a categoria e data
        saveTasksToLocalStorage(); // Salva no localStorage
        updateTaskCount(); // Atualiza a contagem
    }
}

// Função para filtrar tarefas
function filterTasks(status) {
    let taskList = document.getElementById("taskList");
    let tasks = taskList.children;

    for (let i = 0; i < tasks.length; i++) {
        tasks[i].style.display = "list-item"; // Reseta a exibição de todas as tarefas
        if (status === "pending" && tasks[i].classList.contains("done")) {
            tasks[i].style.display = "none"; // Oculta tarefas concluídas
        } else if (status === "completed" && !tasks[i].classList.contains("done")) {
            tasks[i].style.display = "none"; // Oculta tarefas pendentes
        }
    }
}

// Função para alternar entre tema claro e escuro
function toggleTheme() {
    isDarkTheme = !isDarkTheme;
    document.body.classList.toggle("dark-theme", isDarkTheme);
}

// Adiciona um evento para carregar as tarefas ao carregar a página
window.onload = function() {
    loadTasksFromLocalStorage();
};