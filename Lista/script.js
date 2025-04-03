
function addTask(){  //Função para adicionar uma nova tarefa
    let input = document.getElementById("taskInput");  //Captura o campo de entrada de texto 
    let taskText = input.ariaValueMax.trim();  //Obtém o valor digitado e remove espaços extras

    if (taskText === "") return;  //Se o campo estiver vazio, a função para aqui.

    let li = document.createElement("li");  //Cria um elemento <li> para a lista
    li.innerHTML = `${taskText} <button onclick ="removeTask(this)">X</button>`;  //Adiciona o texto da tarefa a um botão de remoção

    //adiciona um evento de cliqueao item da lista, marcação 
    li.addEventListener("click", function(){
        this.classList.toggle("done"); 
    });
}