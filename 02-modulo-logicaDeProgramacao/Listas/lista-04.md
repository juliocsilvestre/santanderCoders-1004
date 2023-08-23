## Callback

Exercício 1: Callback Básico
Crie uma função chamada executarCallback que recebe uma função de callback como argumento e a executa.

function executarCallback(callback) {
callback();
}

function minhaCallback() {
console.log("Callback feito!");
}

executarCallback(minhaCallback);

Exercício 2: Manipulação de Array
Crie uma função chamada dobrarNumeros que recebe um array de números e uma função de callback. A função dobrarNumeros deve aplicar a função de callback a cada elemento do array e retornar um novo array com os elementos dobrados.

function dobrarNumeros(array, callback) {
const novoArray = array.map(numero => callback(numero));
return novoArray;
}

function dobrar(numero) {
return numero \* 2;
}

const numeros = [1, 2, 3, 4];
const numerosDobrados = dobrarNumeros(numeros, dobrar);
console.log(numerosDobrados);

Exercício 3: Filtragem com Callback
Crie uma função chamada filtrarPalavras que recebe um array de palavras e uma função de callback. A função filtrarPalavras deve retornar um novo array contendo apenas as palavras que atendem ao critério da função de callback.

function filtrarPalavras(array, callback) {
const novoArray = array.filter(palavra => callback(palavra));
return novoArray;
}

function palavraComecaComA(palavra) {
return palavra.startsWith("a");
}

const palavras = ["apple", "banana", "grape", "apricot"];
const palavrasFiltradas = filtrarPalavras(palavras, palavraComecaComA);
console.log(palavrasFiltradas);

Exercício 4: Ordenação com Callback
Crie uma função chamada ordenarNumeros que recebe um array de números e uma função de callback para determinar a ordem de ordenação. A função ordenarNumeros deve retornar um novo array com os números ordenados de acordo com o critério da função de callback.

function ordenarNumeros(array, callback) {
const novoArray = array.slice().sort(callback);
return novoArray;
}

function compararNumeros(a, b) {
return a - b;
}

const numeros = [3, 1, 4, 2];
const numerosOrdenados = ordenarNumeros(numeros, compararNumeros);
console.log(numerosOrdenados);

Exercício 5: Timer com Callback
Crie uma função chamada executarAposTempo que recebe uma função de callback e um tempo em milissegundos. A função executarAposTempo deve agendar a execução da função de callback após o tempo especificado.

function executarAposTempo(callback, tempo) {
setTimeout(callback, tempo);
}

function minhaCallback() {
console.log("Callback executado após o tempo especificado.");
}

executarAposTempo(minhaCallback, 2000); // Executa após 2 segundos

## Promise

Exercício 1: Criando uma Promise Simples
Crie uma Promise simples que retorna uma mensagem de sucesso após 2 segundos. Use a função setTimeout para simular um atraso.

function mensagemAposAtraso() {
return new Promise((resolve) => {
setTimeout(() => {
resolve("Mensagem de sucesso após 2 segundos.");
}, 2000);
});
}

mensagemAposAtraso().then((mensagem) => {
console.log(mensagem);
});

Exercício 2: Tratamento de Erro em Promise
Crie uma Promise que simula uma operação que pode falhar. Se a operação for bem-sucedida, resolva a Promise com uma mensagem de sucesso. Caso contrário, rejeite-a com uma mensagem de erro. (Lembre-se de usar o reject)

function operacaoQuePodeFalhar() {
return new Promise((resolve, reject) => {
const sucessoSimulado = Math.random() < 0.5;
if (sucessoSimulado) {
resolve("Operação bem-sucedida!");
} else {
reject("Erro na operação.");
}
});
}

operacaoQuePodeFalhar()
.then((mensagem) => {
console.log(mensagem);
})
.catch((erro) => {
console.error(erro);
});

Exercício 4: Encadeamento de Promises
Crie um encadeamento de Promises que realiza uma sequência de operações assíncronas. Por exemplo, faça uma requisição a uma API, processe os dados e, em seguida, realize outra operação.

function requisitarAPI() {
return fetch("URL_DA_API")
.then((response) => response.json())
.then((dados) => {
// Processar os dados
return dados.processados;
})
.then((dadosProcessados) => {
// Realizar outra operação com os dados processados
return dadosProcessados.resultado;
})
.catch((erro) => {
console.error("Ocorreu um erro:", erro);
});
}

requisitarAPI().then((resultado) => {
console.log("Resultado final:", resultado);
});

Exercício 1: Promessa com Atraso Aleatório
Crie uma função que retorna uma Promise que será resolvida após um tempo aleatório entre 1 e 5 segundos. Use a função setTimeout e Math.random() para criar esse atraso variável.

async function mensagemAposAtraso() {
await new Promise((resolve) => {
setTimeout(resolve, 2000);
});
return "Mensagem após atraso de 2 segundos.";
}

mensagemAposAtraso().then((mensagem) => {
console.log(mensagem);
});

Exercício 2: Rejeição de Promessa
Crie uma função que retorna uma Promise que será rejeitada após um tempo aleatório entre 1 e 3 segundos.

async function operacaoQuePodeFalhar() {
try {
const sucessoSimulado = Math.random() < 0.5;
if (sucessoSimulado) {
return "Operação bem-sucedida!";
} else {
throw new Error("Erro na operação.");
}
} catch (erro) {
console.error(erro.message);
}
}

operacaoQuePodeFalhar();

## async e await

Exercício 1: Função Assíncrona Simples
Crie uma função assíncrona que retorna uma mensagem após um atraso de 2 segundos.

async function mensagemAposAtraso() {
await new Promise((resolve) => {
setTimeout(resolve, 2000);
});
return "Mensagem após atraso de 2 segundos.";
}

mensagemAposAtraso().then((mensagem) => {
console.log(mensagem);
});

Exercício 2: Tratamento de Erros com async/await
Crie uma função assíncrona que simula uma operação que pode falhar. Use try e catch para lidar com erros.

async function operacaoQuePodeFalhar() {
try {
const sucessoSimulado = Math.random() < 0.5;
if (sucessoSimulado) {
return "Operação bem-sucedida!";
} else {
throw new Error("Erro na operação.");
}
} catch (erro) {
console.error(erro.message);
}
}

operacaoQuePodeFalhar();

Exercício 3: Encadeamento com async/await
Crie uma série de funções assíncronas que dependem dos resultados anteriores.

async function funcao1() {
// Realizar operação assíncrona
return resultado1;
}

async function funcao2(resultado1) {
// Realizar operação assíncrona usando resultado1
return resultado2;
}

async function funcao3(resultado2) {
// Realizar operação assíncrona usando resultado2
return resultado3;
}

(async () => {
const resultado1 = await funcao1();
const resultado2 = await funcao2(resultado1);
const resultado3 = await funcao3(resultado2);
console.log("Resultado final:", resultado3);
})();

Exercício 5: Consumindo API com async/await
Crie uma função que utiliza fetch com async e await para buscar dados de uma API.

async function buscarDadosDaAPI() {
try {
const response = await fetch("URL_DA_API");
const dados = await response.json();
return dados;
} catch (erro) {
console.error("Erro ao buscar dados:", erro);
}
}

buscarDadosDaAPI().then((dados) => {
console.log("Dados da API:", dados);
});
