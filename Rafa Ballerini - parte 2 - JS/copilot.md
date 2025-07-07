# Explicação sobre Loops e Escopo de Variáveis em JavaScript

## O que é um loop?

Um loop (ou laço de repetição) é uma estrutura de programação que permite executar um bloco de código várias vezes, de forma repetitiva, enquanto uma condição for verdadeira. Ele é útil para automatizar tarefas repetitivas, como percorrer listas ou executar ações até que um critério seja atendido.

Exemplo do código:
```javascript
for (i; i < tarefas.length; i++) {
    let novaTarefa = document.createElement("li");
    novaTarefa.textContent = tarefas[i];
    listaTarefas.appendChild(novaTarefa);
}
```
Assim, o loop facilita a manipulação de vários elementos de forma eficiente e automática.

---

## Por que as tarefas não aparecem como listas?

O array `tarefas` está sendo declarado **dentro** da função `adicionarTarefa()`. Assim, toda vez que você chama essa função, o array é recriado vazio, e a tarefa recém-adicionada é perdida logo em seguida.

Além disso, a função `renderizarTarefas()` tenta acessar o array `tarefas`, mas ele não está disponível fora da função `adicionarTarefa()`.

**Como corrigir:**  
Declare o array `tarefas` fora das funções, no topo do seu script, para que ele seja global e mantenha as tarefas adicionadas.

Exemplo corrigido:
```javascript
let tarefas = []; // Agora é global

function adicionarTarefa() {
    // ...código...
    tarefas.push(tarefa);
    renderizarTarefas();
    // ...código...
}

function renderizarTarefas() {
    // ...código...
    for (let i = 0; i < tarefas.length; i++) {
        // ...código...
    }
}
```

---

## Explicação simples sobre escopo

Quando você escreve `let tarefas = []` **dentro** da função, esse array só existe enquanto a função está rodando. Assim que a função termina, o array some e tudo que estava dentro dele é perdido.

Por isso, quando você chama `adicionarTarefa()`, ele cria um array vazio, coloca a tarefa, mostra na tela, e logo depois o array desaparece. Na próxima vez que você adicionar uma tarefa, tudo começa do zero de novo.

Se você quer guardar as tarefas para usar em outras funções (como `renderizarTarefas()`), precisa criar o array **fora** das funções. Assim, ele fica "visível" para todas as funções e não some quando uma função termina.

**Resumo:**  
- **Dentro da função:** o array só existe ali e depois some.
- **Fora da função:** o array existe o tempo todo e pode ser usado por qualquer função.

---

## Código original para referência

```javascript
function adicionarTarefa() {
   let tarefas = []
   // ...restante do código...
}
```

## Explicação sobre o array tarefas e escopo de variáveis

Quando você cria o array `let tarefas = []` **dentro** da função, toda vez que a função roda, esse array é criado do zero (vazio).  
Então, quando você adiciona uma tarefa, ela entra nesse array, mas assim que a função termina, esse array deixa de existir — ele "some" da memória.  
Na próxima vez que você chama a função, um novo array vazio é criado, e o processo se repete.

**O que isso significa na prática?**  
- A tarefa recém adicionada até chega a ser colocada no array, mas como o array só existe dentro da função, ele não é guardado para a próxima vez.
- Por isso, a lista (`ul`) não mostra as tarefas anteriores, só a atual (ou nenhuma, dependendo do código).

**Quando você coloca o array fora da função:**  
- O array existe o tempo todo enquanto a página está aberta.
- Todas as tarefas adicionadas ficam guardadas nele e podem ser mostradas na lista (`ul`).

**Resumo:**  
O que "some" é o array inteiro (com todas as tarefas), não só a tarefa recém adicionada. Por isso, nada fica salvo para mostrar


## Diferença entre usar `tarefa` e `tarefas[i]` no loop

Quando você usa `tarefa` dentro do loop:

```javascript
for (i; i < tarefas.length; i++) {
    let novaTarefa = document.createElement("li");
    novaTarefa.textContent = tarefa; // Mostra sempre o último valor digitado
    listaTarefas.appendChild(novaTarefa);
}
```
- Todas as linhas da lista vão mostrar o mesmo texto: o último valor digitado.

Quando você usa `tarefas[i]` dentro do loop:

```javascript
for (i; i < tarefas.length; i++) {
    let novaTarefa = document.createElement("li");
    novaTarefa.textContent = tarefas[i]; // Mostra cada tarefa salva no array
    listaTarefas.appendChild(novaTarefa);
}
```
- Cada linha da lista mostra uma tarefa diferente, conforme foi adicionada ao array.

**Resumo:**  
- `tarefa`: repete o último valor em todas as linhas.
- `tarefas[i]`: mostra cada tarefa corretamente.

---

## Por que colocar a variável `i` nos colchetes de `tarefas`?

Quando você escreve `tarefas[i]`, está acessando cada elemento do array `tarefas` usando o índice `i`.

Exemplo:
```javascript
let tarefas = ["Estudar", "Ler", "Caminhar"];
// tarefas[0] é "Estudar"
// tarefas[1] é "Ler"
// tarefas[2] é "Caminhar"
```

No loop:
```javascript
for (let i = 0; i < tarefas.length; i++) {
    console.log(tarefas[i]);
}
```
- Isso mostra cada tarefa, uma por vez.

**Resumo:**  
Colocar `i` entre colchetes faz o código pegar cada tarefa do array, uma por uma, na ordem em que

# Conversa sobre Lista de Tarefas em JavaScript

## O que é um array?

Arrays são estruturas de dados que permitem armazenar vários valores em uma única variável. Cada valor em um array é chamado de elemento e pode ser acessado por um índice numérico, começando do zero. Por exemplo:

```javascript
let frutas = ["banana", "maçã", "laranja"];
```

## O que é um loop?

Loop é uma estrutura de repetição usada para executar um bloco de código várias vezes, de acordo com uma condição. Em JavaScript, os loops mais comuns são `for`, `while` e `do...while`. Eles são úteis para percorrer arrays, processar listas de dados ou repetir tarefas até que uma condição seja satisfeita.

Exemplo de loop `for`:

```javascript
for (let i = 0; i < frutas.length; i++) {
    alert(frutas[i]);
}
```

## Por que o botão "Limpar Lista" não está funcionando?

O problema é que a função `limparLista` estava definida **dentro** da função `renderizarTarefas`. Assim, ela só existe dentro desse escopo e não pode ser chamada de fora, por exemplo, pelo seu HTML ou por outro script.

**Como corrigir:**  
Mova a função `limparLista` para fora da função `renderizarTarefas`:

```javascript
function renderizarTarefas() {
      // ...código...
}

function limparLista() {
      tarefas.length = 0;
      renderizarTarefas();
      const mensagem = document.getElementById("mensagem");
      mensagem.textContent = "Lista limpa com sucesso!";
      mensagem.style.color = "#2a7414";
}
```

## Como fazer o botão "Limpar Lista" aparecer apenas quando houver itens?

Adicione o botão dinamicamente apenas se houver tarefas:

```javascript
const botaoLimpar = document.getElementById("LimparLista");
if (botaoLimpar) {
      botaoLimpar.remove();
}

if (tarefas.length > 0) {
      const botaoLimpar = document.createElement("button");
      botaoLimpar.id = "LimparLista";
      botaoLimpar.textContent = "Limpar Lista";
      botaoLimpar.onclick = limparLista;
      listaTarefas.appendChild(botaoLimpar);
}
```

## O que é `parentNode`?

O `parentNode` serve para acessar o elemento pai de um nó no DOM. Ele é usado para adicionar o botão "Limpar Lista" **fora** da `<ul>` (lista de tarefas), colocando o botão como "irmão" da lista, e não como um item dentro dela.

## Tem como fazer sem usar `parentNode`?

Sim! Você pode adicionar o botão "Limpar Lista" diretamente no HTML e só mostrar ou esconder ele com JavaScript:

**HTML:**
```html
<button id="btnLimparLista" style="display:none;">Limpar Lista</button>
```

**JavaScript:**
```javascript
const botaoLimpar = document.getElementById("btnLimparLista");
if (tarefas.length > 0) {
      botaoLimpar.style.display = "inline";
} else {
      botaoLimpar.style.display = "none";
}
botaoLimpar.onclick = limparLista;
```

## Posso colocar o botão "Limpar Lista" dentro da `<ul>` com `appendChild`?

Pode sim! Usando `listaTarefas.appendChild(botaoLimpar)`, o botão vai aparecer como um item da lista, logo após as tarefas. Se quiser que ele fique fora da lista, use `listaTarefas.parentNode.appendChild(botaoLimpar)`.

## Por que não consigo adicionar nada na lista depois de criar o botão?

Provavelmente você usou o mesmo nome para a função e para o botão (`limparLista`). Isso faz com que a função seja sobrescrita pelo botão. Use nomes diferentes:

```javascript
const botaoLimparLista = document.createElement("button");
botaoLimparLista.id = "LimparLista";
botaoLimparLista.textContent = "Limpar Lista";
botaoLimparLista.onclick = limparLista;
listaTarefas.appendChild(botaoLimparLista);
```

## O botão "Limpar Lista" não está funcionando

Verifique se você está atribuindo corretamente a função ao evento `onclick`:

```javascript
botaoLimpar.onclick = limparLista; // Correto!
```

Se fizer `botaoLimpar.onclick = botaoLimpar;`, não vai funcionar.

---

Se precisar de mais alguma coisa ou quiser aprender mais sobre JavaScript, é só perguntar. Bons