/* Operadores:

1- Escreva um programa que calcule a área de um retângulo com base no comprimento e largura fornecidos pelo usuário.*/

/* let base = parseFloat(prompt("Digite a base do Retangulo: "));
let altura = parseFloat(prompt("Digite a altura do Retangulo: "));
let areaRetangulo = base * altura;

console.log("A area do Retangulo é: " + areaRetangulo.toFixed(2)); */

/* 2- Crie um programa que determine se um número é par ou ímpar utilizando o operador de módulo (%).

const numeroUsuario = prompt("Digite um número:");
const numeroConvertido = parseInt(numeroUsuario);

function verificarParImpar(numero) {
    if (numero % 2 === 0) {
        console.log("O número é par.");
            return "O número é par.";
        } else {
            console.log("O número é ímpar.");
                return "O número é ímpar.";
    }
}

verificarParImpar(numeroConvertido);

3- Escreva uma função que verifique se uma string fornecida pelo usuário contém a palavra "JavaScript".

const stringUsuario = prompt("Digite uma frase ou texto:");
const stringConvertida = stringUsuario.toLowerCase();

function verificarString(string) {
    if(stringConvertida.includes("javascript")) {
        console.log("A string contém a palavra JavaScript.");
        return true; } else {
            console.log("A string não contém a palavra JavaScript.");
            return false; 
        }
    }

4- Implemente um programa que compare duas strings e determine se elas são iguais, ignorando maiúsculas e minúsculas.

const string1 = prompt("Digite um texto ou frase:");
const string2 = prompt("Digite um texto ou frase:");
const string1LowerCase = string1.toLowerCase();
const string2LowerCase = string2.toLowerCase();

if (string1LowerCase === string2LowerCase) {
    console.log("As strings são iguais.");
    return: true; } else {
        console.log("As strings são diferentes.");
        return: false;
    }
}


5- Crie uma função que concatene duas listas (arrays) e retorne a lista resultante.

const lista1 = [1, 2, 3];
const lista2 = [4, 5, 6];

function concatenarListas(lista1, lista2) {
    const listaConcatenada = lista1.concat(lista2);
    console.log('A lista concatenada é :' + listaConcatenada);
    return listaConcatenada;
}

Funções Nativas:

6- Escreva um programa que calcule a média dos valores em um array utilizando a função reduce() e length.

function calcularMedia(array) {
    if (array.length === 0) {
    return 0;
    }
    const soma = array.reduce((acumulador, valor) => acumulador + valor, 0);
    const media = soma / array.length;
}

const valores = [10, 5, 8, 3, 6];
const mediaValores = calcularMedia(valores);

console.log("Valores:", valores);
console.log("Média:", mediaValores);




7- Crie uma função que retorne a data e hora atuais no formato legível: "Dia/Mês/Ano Hora:Minuto:Segundo".
function obterDataHoraAtual() {
    const dataAtual = new Date();
    const opcoes = {
    day: '2-digit',
    month: '2-digit',
    year: 'numeric',
    hour: '2-digit',
    minute: '2-digit',
    second: '2-digit',
    };

    return dataAtual.toLocaleString('pt-BR', opcoes);
}

const dataHoraAtual = obterDataHoraAtual();
console.log(dataHoraAtual);


8- Implemente um programa que encontre o maior valor em um array usando a função Math.max().
function encontrarMaiorValor(array) {
    const maiorValor = Math.max(...array);
    return maiorValor;
}

let numeros = [10, 5, 8, 20, 3, 6];
const maiorNumero = encontrarMaiorValor(numeros);

console.log("Array:", numeros);
console.log("Maior valor:", maiorNumero);

9- Escreva uma função que gere um número inteiro aleatório entre dois valores dados como argumentos.
function gerarNumeroAleatorio(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    const numeroAleatorio = Math.floor(Math.random() * (max - min + 1)) + min;
    return numeroAleatorio;
}
const numeroAleatorio = gerarNumeroAleatorio(1, 10);
console.log(numeroAleatorio);

10- Crie um programa que verifique se um número dado pelo usuário é um número primo usando uma função.
function verificarNumeroPrimo(numero) {
    if (numero <= 1) {
    return false;
    }

    for (let i = 2; i <= Math.sqrt(numero); i++) {
    if (numero % i === 0) {
        return false;
    }
}
    return true;
}

const numeroUsuario = prompt("Digite um número inteiro para verificar se é primo:");
const numeroConvertido = parseInt(numeroUsuario);

if (verificarNumeroPrimo(numeroConvertido)) {
    alert("O número é primo.");
} else {
    alert("O número não é primo.");
}

Coerção e Tipos de Dados:

11- Declare uma variável com valor "5" (string) e outra variável com valor 2 (número). Multiplique as duas variáveis e explique o resultado.
const valorString = "5";
const valorNumero = 2;
const resultado = valorString * valorNumero;
console.log(resultado);
// O resultado é 10, pois o JavaScript converteu a string "5" para o número 5 e realizou a multiplicação.


12- Converta a string "123" em um número inteiro e armazene-o em uma variável.
const minhaString = "123";
const meuNumero = parseInt(minhaString);

console.log(meuNumero);

13- Escreva um programa que adicione um número e uma string. 
const numero = 420;
const minhaString = " é a resposta para tudo.";

const resultado = numero + minhaString;

console.log(resultado);


14- Explique o resultado e discuta a coerção que ocorre.
Aqui ocorre a coerção implícita. O JavaScript, ao perceber que o operador (+) 
está sendo utilizado com um número e uma string, realiza a coerção automática 
para que ambos os operandos sejam do mesmo tipo.
Nesse caso, ele converte o número 420 em uma string antes de realizar a concatenação.


15- Declare uma variável com o valor null e outra variável com o valor undefined. Verifique se são iguais em valor e tipo.
const valorNull = null;
const valorUndefined = undefined;

const saoIguais = valorNull === valorUndefined;
console.log(saoIguais);

16- Crie um programa que determine se uma variável é do tipo função usando o operador typeof.
const minhaVariavel = 420;

if (typeof minhaVariavel === 'function') {
    console.log('A variável é uma função.');
} else {
    console.log('A variável não é uma função.');
}

Operadores Matemáticos e Lógicos:

18- Escreva um programa que calcule o resultado da expressão: (10 + 5) * 3 / 20.

const resultado = (10 + 5) * 3 / 20;
function imprimirResultado(resultado) {
    console.log("O resultado da expressão (10 + 5) * 3 / 20 é :" + resultado )
}

imprimirResultado(resultado);

19- Crie uma função que verifique se um número é positivo e ímpar ao mesmo tempo.

function positivoEImpar(numero) {
    if (numero > 0 && numero % 2 !== 0) {
    console.log("O número é positivo e ímpar.")
        return true;
    } else {
        console.log("O número não é positivo e ímpar.")
    return false;
    }
}


20- Implemente um programa que determine se um ano fornecido pelo usuário é bissexto ou não, 
considerando as regras: 
(a) Anos divisíveis por 4 são bissextos; 
(b) Anos divisíveis por 100 não são bissextos, a menos que também sejam divisíveis por 400.

function anoBissexto(ano) {
    if ((ano % 4 === 0 && ano % 100 !== 0) || ano % 400 === 0) {
        return true;
        } else {
            return false;
    }
}

const anoUsuario = prompt("Digite um ano para verificar se é bissexto:");
const anoConvertido = parseInt(anoUsuario);

if (anoBissexto(anoConvertido)) {
    console.log(anoConvertido + " é um ano bissexto.");
    }   else {
            console.log(anoConvertido + " não é um ano bissexto.");
}

21- Escreva uma função que determine se uma pessoa tem permissão para entrar em um clube: 
idade mínima de 18 anos 
e não estar na lista de membros banidos (use operadores lógicos).

const membrosBanidos = ["Clovis", "Ken", "Java"];

function verificacao(idade, nome) {
    if (idade >= 18 && !membrosBanidos.includes(nome)) {
    return true;
    } else {
    return false;
    }
}

const nomeUsuario = prompt("Digite seu nome:");
const idadeUsuario = prompt("Digite sua idade:");
const idadeConvertida = parseInt(idadeUsuario);

if (verificacao(idadeConvertida, nomeUsuario)) {
    console.log("Bem-vindo(a) ao clube!");
} else {
    console.log("Você não tem permissão para entrar no clube.");
}


22- Crie um programa que simule um sistema de login. 
Peça ao usuário um nome de usuário e uma senha, e 
verifique se correspondem aos valores esperados. 

const nomeUsuarioUtilizado = "usuario420";
const senha = "senha420";

const nomeUsuario = prompt("Digite o nome de usuário:");
const senha = prompt("Digite a senha:");

if (nomeUsuario === nomeUsuarioUtilizado && senha === senhaEsperada) {
    console.log("Login bem-sucedido! Bem-vindo(a), " + nomeUsuario + "!");
} else {
    console.log("Nome de usuário ou senha incorretos. Tente novamente.");
}
*/
