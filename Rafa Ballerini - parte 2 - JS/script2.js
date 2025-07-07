let tarefas = [];

function adicionarTarefa() {
      const inputTarefa = document.getElementById("inputTarefa");
      let tarefa = inputTarefa.value.trim();

      const mensagem = document.getElementById("mensagem");

      if (tarefa == "") {
            mensagem.textContent = "Por favor, digite uma tarefa válida.";
            mensagem.style.color = "#9c240f";
      } else {
            mensagem.textContent = "Tarefa adicionada com sucesso";
            mensagem.style.color = "#2a7414";     
            tarefas.push(tarefa);
            renderizarTarefas();
      }
      inputTarefa.value = "";
}

function removerTarefa(i) {
      tarefas.splice(i, 1);
      renderizarTarefas();
}

function editarTarefa(i) {
      let tarefaEditada = prompt("Editar tarefa");
      if (tarefaEditada && tarefaEditada.trim() !== "") {
            tarefas[i] = tarefaEditada.trim();
            renderizarTarefas();
      }
}

function limparLista() {
      tarefas.length = 0;
      renderizarTarefas();
      const mensagem = document.getElementById("mensagem");
      mensagem.textContent = "Lista limpa com sucesso!";
      mensagem.style.color = "#2a7414";
}

function renderizarTarefas() {
      const listaTarefas = document.getElementById("listaTarefas");
      listaTarefas.innerHTML = "";

      for (let i = 0; i < tarefas.length; i++) {
            let novaTarefa = document.createElement("li");
            novaTarefa.textContent = tarefas[i];

            novaTarefa.style.setProperty('--delay', `${i * 0.2}s`);

            let botaoRemover = document.createElement("button");
            botaoRemover.className = "remover";
            botaoRemover.textContent = "Remover";
            botaoRemover.onclick = function() {
                  removerTarefa(i);
            };

            let botaoEditar = document.createElement("button");
            botaoEditar.className = "editar";
            botaoEditar.textContent = "Editar";
            botaoEditar.onclick = function() {
                  editarTarefa(i);
            };

            novaTarefa.appendChild(botaoRemover);
            novaTarefa.appendChild(botaoEditar);
            listaTarefas.appendChild(novaTarefa);
      }

      // Remover botão antigo, se existir
      const botaoLimparAntigo = document.getElementById("LimparLista");
      if (botaoLimparAntigo) {
            botaoLimparAntigo.remove();
      }

      // Adicionar botão "Limpar Lista" se houver tarefas
      if (tarefas.length > 0) {
            const botaoLimpar = document.createElement("button");
            botaoLimpar.id = "LimparLista";
            botaoLimpar.textContent = "Limpar Lista";
            botaoLimpar.onclick = limparLista;
            listaTarefas.appendChild(botaoLimpar);
      }
}