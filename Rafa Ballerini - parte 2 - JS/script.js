function adicionarTarefa() {
     
      let inputTarefa = document.getElementById("inputTarefa");
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

            const listaTarefas = document.getElementById("listaTarefas");
            let novaTarefa = document.createElement("li");
            novaTarefa.textContent = tarefa;
            listaTarefas.appendChild(novaTarefa);
      }

      
      inputTarefa.value = "";
}
