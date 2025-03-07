document.addEventListener("DOMContentLoaded", () => {
  const taskInput = document.getElementById("taskInput");
  const addTaskButton = document.getElementById("addTaskButton");
  const taskList = document.getElementById("taskList");

  // Função para adicionar uma nova tarefa
  function addTask() {
    const taskText = taskInput.value.trim();

    if (taskText === "") {
      alert("O campo de tarefa não pode estar vazio!");
      return;
    }

    const taskItem = document.createElement("li");
    taskItem.className = "task-item";

    taskItem.innerHTML = `
      <span>${taskText}</span>
      <button class="removeTaskButton">Remover</button>
    `;

    // Adicionar evento ao botão de remover
    taskItem.querySelector(".removeTaskButton").addEventListener("click", () => {
      taskList.removeChild(taskItem);
    });

    taskList.appendChild(taskItem);
    taskInput.value = ""; // Limpar o campo de entrada
    taskInput.focus(); // Focar no campo
  }

  // Evento de clique no botão adicionar
  addTaskButton.addEventListener("click", addTask);

  // Adicionar tarefa ao pressionar Enter
  taskInput.addEventListener("keypress", (event) => {
    if (event.key === "Enter") {
      addTask();
    }
  });
});
