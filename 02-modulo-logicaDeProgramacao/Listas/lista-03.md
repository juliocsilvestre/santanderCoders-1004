01.Crie uma função que calcule a soma de dois números.

function calcularSoma(numero1, numero2) {
return numero1 + numero2;
}
02.Escreva uma função que calcule o produto de três números.

function calcularProduto(numero1, numero2, numero3) {
return numero1 _ numero2 _ numero3;
}

03.Crie uma função que verifique se um número é par ou ímpar.

function verificarParOuImpar(numero) {
if (numero % 2 === 0) {
return "Par";
} else {
return "Ímpar";
}
}

04.Escreva uma função que inverta uma string (por exemplo, "hello" se torna "olleh").

function inverterString(texto) {
return texto.split('').reverse().join('');
}

05.Crie uma função que retorne o maior valor de um array de números.

function encontrarMaiorValor(array) {
return Math.max(...array);
}

06.Escreva uma função que calcule a média de um array de números.

function calcularMedia(array) {
const soma = array.reduce((total, numero) => total + numero, 0);
return soma / array.length;
}

07.Crie uma função que verifique se uma palavra é um palíndromo (lê-se igual de trás para frente).

function verificarPalindromo(palavra) {
const palavraFormatada = palavra.toLowerCase().replace(/[^a-zA-Z]/g, '');
const palavraReversa = palavraFormatada.split('').reverse().join('');
return palavraFormatada === palavraReversa;
}

08.Escreva uma função que conte quantas vezes uma determinada letra aparece em uma string.

function contarLetra(texto, letra) {
const expressaoRegular = new RegExp(letra, 'gi');
const ocorrencias = texto.match(expressaoRegular);
return ocorrencias ? ocorrencias.length : 0;
}

09.Crie uma função que calcule o fatorial de um número.

function calcularFatorial(numero) {
if (numero === 0 || numero === 1) {
return 1;
} else {
return numero \* calcularFatorial(numero - 1);
}
}

10.Escreva uma função que converta graus Celsius para Fahrenheit.

function converterCelsiusParaFahrenheit(celsius) {
return (celsius \* 9/5) + 32;
}

11.Crie uma função que encontre o valor mínimo e máximo em um array de números.

function encontrarMinimoMaximo(array) {
const minimo = Math.min(...array);
const maximo = Math.max(...array);
return { minimo, maximo };
}

12.Escreva uma função que calcule a sequência de Fibonacci até um determinado número de termos.

function calcularFibonacci(quantidade) {
const fibonacci = [0, 1];
for (let i = 2; i < quantidade; i++) {
fibonacci[i] = fibonacci[i - 1] + fibonacci[i - 2];
}
return fibonacci;
}

13.Crie uma função que verifique se um número é primo.

function verificarPrimo(numero) {
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

14.Escreva uma função que remova os elementos duplicados de um array.

function removerDuplicados(array) {
return Array.from(new Set(array));
}

15.Crie uma função que ordene um array de números em ordem crescente.

function ordenarNumeros(array) {
return array.sort((a, b) => a - b);
}

16.Escreva uma função que retorne o número de dias entre duas datas.

function calcularDiferencaDias(data1, data2) {
const milissegundosPorDia = 1000 _ 60 _ 60 \* 24;
const diferencaMilissegundos = Math.abs(data2 - data1);
return Math.floor(diferencaMilissegundos / milissegundosPorDia);
}

17.Crie uma função que calcule o raio de um círculo com base em sua área.

function calcularRaio(area) {
return Math.sqrt(area / Math.PI);
}

18.Escreva uma função que encontre o segundo maior valor em um array de números.

function encontrarSegundoMaior(array) {
const numerosOrdenados = array.sort((a, b) => b - a);
return numerosOrdenados[1];
}

19.Crie uma função que converta um valor em dólares para outra moeda com base em uma taxa de câmbio.

function converterDolarParaMoeda(dolar, taxa) {
return dolar \* taxa;
}

20.Escreva uma função que verifique se duas strings são anagramas (contêm as mesmas letras, mas em ordens diferentes).

function verificarAnagrama(string1, string2) {
const str1Formatada = string1.toLowerCase().replace(/[^a-zA-Z]/g, '');
const str2Formatada = string2.toLowerCase().replace(/[^a-zA-Z]/g, '');

const sortedStr1 = str1Formatada.split('').sort().join('');
const sortedStr2 = str2Formatada.split('').sort().join('');

return sortedStr1 === sortedStr2;
}
