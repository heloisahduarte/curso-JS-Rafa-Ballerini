//Arquivo JS não formatado


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


     

      for ( let i = 0; i < tarefas.length; i++) {
            let novaTarefa = document.createElement("li");
            novaTarefa.textContent = tarefas[i];


            let botaoRemover = document.createElement("button");
            botaoRemover.className = "remover";
            botaoRemover.textContent = "Remover";

            botaoRemover.onclick = function() {
                  removerTarefa(i);
      }



            let botaoEditar = document.createElement("button");
            botaoEditar.className = "editar";
            botaoEditar.textContent = "Editar";
            
            botaoEditar.onclick = function() {
                  editarTarefa(i);
            }


            novaTarefa.appendChild(botaoRemover);
            novaTarefa.appendChild(botaoEditar);
            listaTarefas.appendChild(novaTarefa);
      }

      function removerTarefa(i) {
            tarefas.splice(i, 1);
            renderizarTarefas();
      }
      
      function editarTarefa(i) {
            let tarefaEditada = prompt("Editar tarefa")

            if (tarefaEditada.trim !== "") {
                  tarefas[i] = tarefaEditada;
                  renderizarTarefas();
            }
      }

     const botaoLimpar = document.getElementById("LimparLista");
      if (botaoLimpar) {
            botaoLimpar.remove();
      }

      // Adicionar botão "Limpar Lista" se houver tarefas
      if (tarefas.length > 0) {
            const botaoLimpar = document.createElement("button");
            botaoLimpar.id = "LimparLista";
            botaoLimpar.textContent = "Limpar Lista";
            botaoLimpar.onclick = limparLista;

            // Adicione o botão após a lista de tarefas
            listaTarefas.appendChild(botaoLimpar)
      }

      function limparLista() {
      tarefas.length = 0;
      renderizarTarefas();
      const mensagem = document.getElementById("mensagem");
      mensagem.textContent = "Lista limpa com sucesso!";
      mensagem.style.color = "#2a7414";
}
}

//function limparLista() {
            //tarefas.length = 0;
           // renderizarTarefas();
           // const mensagem = document.getElementById("mensagem");
           // mensagem.textContent = "Lista limpa com sucesso!";
     // 