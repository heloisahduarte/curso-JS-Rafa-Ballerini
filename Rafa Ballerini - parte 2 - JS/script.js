
let tarefas = []

function adicionarTarefa() {
     
      
      const inputTarefa = document.getElementById("inputTarefa");
      let tarefa = inputTarefa.value.trim();

      const mensagem = document.getElementById("mensagem");

      if (tarefa == "") {
            let mensagemErro = "Por favor, digite uma tarefa válida.";
            mensagem.textContent = mensagemErro;
            mensagem.style.color = "#9c240f";
      } else {
            let mensagemSucesso = "Tarefa adicionada com sucesso";
            mensagem.textContent = mensagemSucesso;
            mensagem.style.color = "#2a7414";     

            tarefas.push(tarefa);

            renderizarTarefas();
      }

      
      inputTarefa.value = "";
}

function renderizarTarefas() {

      const listaTarefas = document.getElementById("listaTarefas");
      listaTarefas.innerHTML = "";

      //for itens na lista
      //1. item inicial (iterador)
      //2. item final (condição)
      //3. se vai ser de 1 em 1 elemento ou se pula

      //for (iterador, consdição, frequecncia)

      //i++ = i+1


      let i = 0;

      for (i; i < tarefas.length; i++) {
            let novaTarefa = document.createElement("li");
            novaTarefa.textContent = tarefas[i];


            let botaoRemover = document.createElement("button");
            botaoRemover.className = "remover";
            botaoRemover.textContent = "Remover";

            novaTarefa.appendChild(botaoRemover);
            listaTarefas.appendChild(novaTarefa);
      }

      
}
