function adicionarTarefa() {
      // Define uma mensagem de sucesso ao adicionar a tarefa


      let mensagem = "Tarefa adicionada com sucesso!";

      // Obtém o elemento do input onde o usuário digita a tarefa

      let inputTarefa = document.getElementById("inputTarefa");

      // Pega o valor digitado pelo usuário no input
      
      let tarefa = inputTarefa.value;

      // Exibe a mensagem de sucesso em um elemento com id "mensagem"
      
      document.getElementById

      ("mensagem").textContent = mensagem;

      // Obtém a lista de tarefas (elemento <ul> ou <ol>)

      let listaTarefas = document.getElementById("listaTarefas");

      // Cria um novo elemento de lista (<li>) para a nova tarefa

      let novaTarefa = document.createElement("li");

      // Define o texto do novo <li> como a tarefa digitada

      novaTarefa.textContent = tarefa;

      // Adiciona o novo <li> à lista de tarefas

      listaTarefas.appendChild(novaTarefa);

      // Limpa o campo de input para o usuário digitar outra tarefa
      inputTarefa.value = ""
}