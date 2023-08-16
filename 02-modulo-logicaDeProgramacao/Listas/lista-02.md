### Dicionários (Objetos):

1- Crie um objeto que represente um estudante com propriedades como nome, idade, curso e notas. Acesse e exiba essas propriedades.

const estudante = {
nome: "Julio Silvestre",
idade: 29,
curso: "Santander Coders",
notas: [8.5, 7.9, 9.2, 6.8]
};

console.log("Nome do estudante:", estudante.nome);
console.log("Idade do estudante:", estudante.idade);
console.log("Curso do estudante:", estudante.curso);
console.log("Notas do estudante:", estudante.notas);

2- Crie um dicionário que mapeie nomes de países a suas respectivas capitais. Crie uma função que receba o nome de um país e retorne a capital correspondente.

const paisesCapitais = {
Brasil: "Brasília",
EstadosUnidos: "Washington, D.C.",
Canadá: "Ottawa",
França: "Paris",
Alemanha: "Berlim",
Japão: "Tóquio",
China: "Pequim",
Índia: "Nova Deli",
Austrália: "Canberra",
ReinoUnido: "Londres"
};

function obterCapital(pais) {
const capital = paisesCapitais[pais];
if (capital) {
return capital;
} else {
return "Capital não encontrada para o país informado.";
}
}

console.log(obterCapital("Brasil")); // Saída: Brasília
console.log(obterCapital("França")); // Saída: Paris
console.log(obterCapital("Japão")); // Saída: Tóquio
console.log(obterCapital("Itália")); // Saída: Capital não encontrada para o país informado.

3- Crie um dicionário com nomes de frutas e seus preços. Escreva uma função que calcule o preço total de uma cesta de frutas.

const frutasPrecos = {
banana: 2,
maça: 3,
laranja: 1.5,
morango: 4,
uva: 2.8
};

function calcularPrecoTotal(cesta) {
const total = cesta.reduce((acumulador, fruta) => acumulador + frutasPrecos[fruta], 0);
return total;
}

const cestaDeFrutas = ["banana", "maça", "laranja", "morango", "uva"];
console.log("Preço total da cesta de frutas:", calcularPrecoTotal(cestaDeFrutas));

4- Crie um objeto que represente um livro com propriedades como título, autor, ano de publicação, etc. Crie uma função que imprima as informações do livro em um formato legível.

const livro = {
titulo: "Aventuras Fantásticas",
autor: "Carlos Magno",
anoPublicacao: 2022
};

function imprimirInfoLivro(livro) {
console.log("Título:", livro.titulo);
console.log("Autor:", livro.autor);
console.log("Ano de Publicação:", livro.anoPublicacao);
}

imprimirInfoLivro(livro);

### Map:

5- Dado um array de números, crie um novo array onde cada número seja elevado ao quadrado.

const numeros = [1, 2, 3, 4, 5];
const numerosAoQuadrado = numeros.map(numero => numero \* numero);
console.log("Números ao quadrado:", numerosAoQuadrado);

6- Dado um array de palavras, crie um novo array com a primeira letra de cada palavra em maiúscula.

const palavras = ["hello", "world", "javascript", "programming"];
const primeirasLetrasMaiusculas = palavras.map(palavra => palavra.charAt(0).toUpperCase() + palavra.slice(1));
console.log("Palavras com primeiras letras maiúsculas:", primeirasLetrasMaiusculas);

7- Crie um array de objetos representando produtos com propriedades como nome, preço e quantidade. Use o método map() para calcular o valor total de cada produto (preço \* quantidade).

const produtos = [
{ nome: "Camiseta", preco: 25, quantidade: 3 },
{ nome: "Calça", preco: 50, quantidade: 2 },
{ nome: "Tênis", preco: 80, quantidade: 1 }
];

const valoresTotais = produtos.map(produto => produto.preco \* produto.quantidade);
console.log("Valores totais dos produtos:", valoresTotais);

8- Converta um array de temperaturas em graus Celsius para Fahrenheit usando a fórmula (C \* 9/5) + 32.
const temperaturasCelsius = [0, 10, 25, 30, 15];
const temperaturasFahrenheit = temperaturasCelsius.map(tempC => (tempC \* 9/5) + 32);
console.log("Temperaturas em Fahrenheit:", temperaturasFahrenheit);

### Reduce:

9- Dado um array de números, use o método reduce() para calcular a soma de todos os elementos.

const numerosParaSoma = [10, 20, 30, 40, 50];
const somaDosNumeros = numerosParaSoma.reduce((acumulador, numero) => acumulador + numero, 0);
console.log("Soma dos números:", somaDosNumeros);

10- Crie um array de strings e use o método reduce() para concatenar todas as strings em uma única string.

const arrayDeStrings = ["Olá", "Mundo,", "bem", "vindo", "ao", "Javascript"];
const stringConcatenada = arrayDeStrings.reduce((acumulador, string) => acumulador + " " + string, "");
console.log("String concatenada:", stringConcatenada);

11- Dado um array de objetos representando despesas com propriedades como valor e categoria, use o método reduce() para calcular o total de despesas de uma categoria específica.

const despesas = [
{ valor: 50, categoria: 'Alimentação' },
{ valor: 100, categoria: 'Transporte' },
{ valor: 30, categoria: 'Alimentação' },
{ valor: 200, categoria: 'Outros' },
{ valor: 150, categoria: 'Transporte' }
];

const categoriaDesejada = 'Alimentação';
const totalDespesasCategoria = despesas.reduce((acumulador, despesa) => {
if (despesa.categoria === categoriaDesejada) {
return acumulador + despesa.valor;
} else {
return acumulador;
}
}, 0);

console.log(`Total de despesas na categoria ${categoriaDesejada}: ${totalDespesasCategoria}`);

12- Dado um array de números, use o método reduce() para encontrar o maior número no array.

const numerosParaMaior = [5, 12, 8, 20, 3];
const maiorNumero = numerosParaMaior.reduce((maior, numero) => (numero > maior ? numero : maior), 0);
console.log("Maior número:", maiorNumero);

### Laços de Repetiçoes

13- Imprima os números de 1 a 10 utilizando um loop for.

for (let i = 1; i <= 10; i++) {
console.log(i);
}

14- Imprima os números pares de 1 a 20 utilizando um loop for.

for (let i = 2; i <= 20; i += 2) {
console.log(i);
}

15- Calcule a soma dos números de 1 a 50 utilizando um loop for.

let soma = 0;
for (let i = 1; i <= 50; i++) {
soma += i;
}
console.log("Soma dos números de 1 a 50:", soma);

16- Imprima a tabuada do 7 utilizando um loop for.

const tabuadaDoSete = 7;
for (let i = 1; i <= 10; i++) {
console.log(`${tabuadaDoSete} x ${i} = ${tabuadaDoSete * i}`);
}

17- Escreva um programa que solicite ao usuário um número e imprima a sequência de números de 1 até o número inserido, utilizando um loop for.

const numeroInserido = parseInt(prompt("Digite um número:"));
for (let i = 1; i <= numeroInserido; i++) {
console.log(i);
}

18- Escreva um programa que solicite ao usuário um número e verifique se ele é primo.

const numeroPrimo = parseInt(prompt("Digite um número para verificar se é primo:"));
let primo = true;
for (let i = 2; i < numeroPrimo; i++) {
if (numeroPrimo % i === 0) {
primo = false;
break;
}
}
if (primo) {
console.log(`${numeroPrimo} é primo.`);
} else {
console.log(`${numeroPrimo} não é primo.`);
}

19- Crie um programa que gere a sequência de Fibonacci até o décimo termo. (Dica: o próximo termo é a soma dos dois termos anteriores)

const termosFibonacci = [0, 1];
for (let i = 2; i < 10; i++) {
termosFibonacci[i] = termosFibonacci[i - 1] + termosFibonacci[i - 2];
}
console.log("Sequência de Fibonacci até o décimo termo:", termosFibonacci);

20- Crie um programa que solicite ao usuário um número e calcule o fatorial desse número.

const numeroFatorial = parseInt(prompt("Digite um número para calcular o fatorial:"));
let fatorial = 1;
for (let i = 1; i <= numeroFatorial; i++) {
fatorial \*= i;
}
console.log(`O fatorial de ${numeroFatorial} é ${fatorial}`);

21- Escreva um programa que imprima a seguinte série: 1, 3, 6, 10, 15, 21, ..., onde cada número é a soma dos números naturais consecutivos.

let soma = 0;
for (let i = 1; i <= 10; i++) {
soma += i;
console.log(soma);
}

22- Crie um programa que encontre e imprima todos os números perfeitos de 1 a 1000. Um número perfeito é aquele cuja soma de seus divisores (excluindo ele mesmo) é igual ao próprio número.

function calcularDivisores(numero) {
const divisores = [];
for (let i = 1; i < numero; i++) {
if (numero % i === 0) {
divisores.push(i);
}
}
return divisores;
}

for (let i = 1; i <= 1000; i++) {
const divisores = calcularDivisores(i);
const somaDivisores = divisores.reduce((acumulador, divisor) => acumulador + divisor, 0);
if (somaDivisores === i) {
console.log(`${i} é um número perfeito.`);
}
}

23- Crie um jogo em que o computador escolhe um número aleatório entre 1 e 100, e o jogador deve adivinhar qual é esse número. O jogo deve fornecer dicas informando se o número a ser adivinhado é maior ou menor do que o palpite do jogador, e o jogo deve continuar até que o jogador acerte o número.

const numeroAleatorio = Math.floor(Math.random() \* 100) + 1;
let palpite;
do {
palpite = parseInt(prompt("Adivinhe o número (entre 1 e 100):"));
if (palpite > numeroAleatorio) {
console.log("O número é menor.");
} else if (palpite < numeroAleatorio) {
console.log("O número é maior.");
}
} while (palpite !== numeroAleatorio);
console.log("Parabéns! Você acertou.");

24- Crie um programa que gere a sequência de números de Fibonacci usando um loop while até que o próximo termo seja maior que 1000.

let termo1 = 0;
let termo2 = 1;
while (termo2 <= 1000) {
console.log(termo2);
const proximoTermo = termo1 + termo2;
termo1 = termo2;
termo2 = proximoTermo;
}

25- Escreva um programa que calcule a média de uma lista de números. O usuário deve fornecer quantos números deseja inserir, e em seguida, inserir os números.

const quantidadeNumeros = parseInt(prompt("Quantos números você deseja inserir?"));
let somaNumeros = 0;
for (let i = 1; i <= quantidadeNumeros; i++) {
const numero = parseFloat(prompt(`Digite o número ${i}:`));
somaNumeros += numero;
}
const media = somaNumeros / quantidadeNumeros;
console.log(`A média dos números é: ${media}`);

26- Escreva um programa que peça ao usuário para adivinhar um número secreto entre 1 e 100. O programa deve fornecer dicas como "maior" ou "menor" até que o jogador adivinhe corretamente.

const numeroSecreto = Math.floor(Math.random() \* 100) + 1;
let palpiteUsuario;
do {
palpiteUsuario = parseInt(prompt("Adivinhe o número secreto (entre 1 e 100):"));
if (palpiteUsuario > numeroSecreto) {
console.log("O número secreto é menor.");
} else if (palpiteUsuario < numeroSecreto) {
console.log("O número secreto é maior.");
}
} while (palpiteUsuario !== numeroSecreto);
console.log("Parabéns! Você adivinhou o número secreto.");

27- Crie um programa que gere a sequência de números primos até um número fornecido pelo usuário.

const limite = parseInt(prompt("Digite um número para gerar os números primos até esse limite:"));
for (let i = 2; i <= limite; i++) {
let primo = true;
for (let j = 2; j < i; j++) {
if (i % j === 0) {
primo = false;
break;
}
}
if (primo) {
console.log(i);
}
}

28- Escreva um código JavaScript que utilize um laço de repetição while para imprimir os números pares de 0 a 10.

let numPar = 0;
while (numPar <= 10) {
console.log(numPar);
numPar += 2;
}

29- Escreva um código JavaScript que solicite ao usuário um número e utilize um laço de repetição do-while para verificar se o número inserido é uma potência de 2.

let numeroPotencia = parseInt(prompt("Digite um número para verificar se é uma potência de 2:"));
let potencia = 1;
let expoente = 0;
while (potencia < numeroPotencia) {
potencia = Math.pow(2, expoente);
expoente++;
}
if (potencia === numeroPotencia) {
console.log(`${numeroPotencia} é uma potência de 2.`);
} else {
console.log(`${numeroPotencia} não é uma potência de 2.`);
}

30- Escreva um código JavaScript que utilize um laço de repetição while para calcular a soma dos números de 1 a 100 e exiba o resultado.

let somaNumeros = 0;
let contador = 1;
while (contador <= 100) {
somaNumeros += contador;
contador++;
}
console.log("A soma dos números de 1 a 100 é:", somaNumeros);

### Condicionais

31- Verificação de vogal ou consoante

Peça ao usuário para digitar uma letra.
Use uma estrutura condicional para verificar se a letra é uma vogal ou uma consoante.
Exiba uma mensagem indicando se a letra é uma vogal ou consoante.

const letra = prompt("Digite uma letra:").toLowerCase();
if (letra === 'a' || letra === 'e' || letra === 'i' || letra === 'o' || letra === 'u') {
console.log("A letra digitada é uma vogal.");
} else {
console.log("A letra digitada é uma consoante.");
}

32- Calculadora simples

Peça ao usuário para digitar dois números e uma operação matemática (+, -, \*, /).
Use uma estrutura condicional para realizar a operação selecionada nos números dados.
Exiba o resultado da operação.

const numero1 = parseFloat(prompt("Digite o primeiro número:"));
const numero2 = parseFloat(prompt("Digite o segundo número:"));
const operacao = prompt("Digite a operação (+, -, _, /):");
let resultado;
switch (operacao) {
case '+':
resultado = numero1 + numero2;
break;
case '-':
resultado = numero1 - numero2;
break;
case '_':
resultado = numero1 \* numero2;
break;
case '/':
resultado = numero1 / numero2;
break;
default:
console.log("Operação inválida.");
}
console.log("Resultado:", resultado);

33- Verificação de número primo

Peça ao usuário para digitar um número.
Use uma estrutura condicional para verificar se o número é primo (divisível apenas por 1 e por ele mesmo).
Exiba uma mensagem indicando se o número é primo ou não.

const numero = parseInt(prompt("Digite um número:"));
let primo = true;
if (numero <= 1) {
primo = false;
} else {
for (let i = 2; i < numero; i++) {
if (numero % i === 0) {
primo = false;
break;
}
}
}
if (primo) {
console.log(`${numero} é um número primo.`);
} else {
console.log(`${numero} não é um número primo.`);
}

34- Conversão de temperatura

Peça ao usuário para digitar uma temperatura em graus Celsius.
Use uma estrutura condicional para converter a temperatura para Fahrenheit ou Kelvin, de acordo com a escolha do usuário.
Exiba o resultado da conversão.

const temperaturaCelsius = parseFloat(prompt("Digite a temperatura em graus Celsius:"));
const opcao = prompt("Digite a opção desejada (F para Fahrenheit, K para Kelvin):").toUpperCase();
let temperaturaConvertida;
switch (opcao) {
case 'F':
temperaturaConvertida = (temperaturaCelsius \* 9/5) + 32;
console.log(`Temperatura em Fahrenheit: ${temperaturaConvertida} °F`);
break;
case 'K':
temperaturaConvertida = temperaturaCelsius + 273.15;
console.log(`Temperatura em Kelvin: ${temperaturaConvertida} K`);
break;
default:
console.log("Opção inválida.");
}

35- Dia da semana por extenso

Peça ao usuário para digitar um número de 1 a 7 representando um dia da semana.
Use uma estrutura condicional switch para exibir o nome completo do dia da semana correspondente ao número digitado.

const diaSemana = parseInt(prompt("Digite um número de 1 a 7 representando um dia da semana:"));
switch (diaSemana) {
case 1:
console.log("Domingo");
break;
case 2:
console.log("Segunda-feira");
break;
case 3:
console.log("Terça-feira");
break;
case 4:
console.log("Quarta-feira");
break;
case 5:
console.log("Quinta-feira");
break;
case 6:
console.log("Sexta-feira");
break;
case 7:
console.log("Sábado");
break;
default:
console.log("Número inválido.");
}

36- Verificação de ano bissexto

Peça ao usuário para digitar um ano.
Use uma estrutura condicional para verificar se o ano é bissexto (divisível por 4 e não por 100, exceto se for divisível por 400).
Exiba uma mensagem indicando se o ano é bissexto ou não.

const ano = parseInt(prompt("Digite um ano:"));
if ((ano % 4 === 0 && ano % 100 !== 0) || (ano % 400 === 0)) {
console.log(`${ano} é um ano bissexto.`);
} else {
console.log(`${ano} não é um ano bissexto.`);
}

37- Contador de vogais e consoantes

Peça ao usuário para digitar uma palavra ou frase.
Use uma estrutura condicional para contar o número de vogais e consoantes na entrada.
Exiba os resultados separadamente.

const palavraOuFrase = prompt("Digite uma palavra ou frase:").toLowerCase();
let vogais = 0;
let consoantes = 0;
for (const caractere of palavraOuFrase) {
if (caractere >= 'a' && caractere <= 'z') {
if (caractere === 'a' || caractere === 'e' || caractere === 'i' || caractere === 'o' || caractere === 'u') {
vogais++;
} else {
consoantes++;
}
}
}
console.log(`Número de vogais: ${vogais}`);
console.log(`Número de consoantes: ${consoantes}`);

38- Verificação de número positivo, negativo ou zero

Peça ao usuário para digitar um número.
Use uma estrutura condicional para verificar se o número é positivo, negativo ou zero.
Exiba uma mensagem indicando a natureza do número.

const numeroVerificar = parseFloat(prompt("Digite um número:"));
if (numeroVerificar > 0) {
console.log("O número é positivo.");
} else if (numeroVerificar < 0) {
console.log("O número é negativo.");
} else {
console.log("O número é zero.");
}

39- Sistema de bilhete de cinema

Peça ao usuário para digitar sua idade e se tem cartão de estudante (responda com "sim" ou "não").
Use uma estrutura condicional para determinar o preço do bilhete de cinema de acordo com as regras: menores de 18 anos pagam $5, estudantes pagam $8 e os demais pagam $10.
Exiba o preço do bilhete.

const idade = parseInt(prompt("Digite sua idade:"));
const temCartaoEstudante = prompt("Você tem cartão de estudante? (sim ou não)").toLowerCase();
let precoBilhete;
if (idade < 18) {
precoBilhete = 5;
} else if (idade >= 18 && temCartaoEstudante === 'sim') {
precoBilhete = 8;
} else {
precoBilhete = 10;
}
console.log(`O preço do bilhete de cinema é $${precoBilhete}.`);

40- Verificação de palíndromo

Peça ao usuário para digitar uma palavra ou frase.
Use uma estrutura condicional para verificar se a entrada é um palíndromo (lê-se igual de trás para frente e de frente para trás).
Exiba uma mensagem indicando se a entrada é um palíndromo ou não.

const entrada = prompt("Digite uma palavra ou frase:");
const entradaFormatada = entrada.toLowerCase().replace(/\s+/g, '');

let palindromo = true;

for (let i = 0; i < Math.floor(entradaFormatada.length / 2); i++) {
if (entradaFormatada[i] !== entradaFormatada[entradaFormatada.length - 1 - i]) {
palindromo = false;
break;
}
}

if (palindromo) {
console.log(`"${entrada}" é um palíndromo.`);
} else {
console.log(`"${entrada}" não é um palíndromo.`);
}
