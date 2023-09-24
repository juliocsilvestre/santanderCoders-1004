// interface Humano {
//   altura: number;
//   peso: number;
//   tipoSanguineo: string;

//   calculaImc(): number;
// }

// class Homem implements Humano {
//   constructor(public altura: number, public peso: number, public tipoSanguineo: string) {}

//   calculaImc(): number {
//     return this.peso / this.altura ** 2;
//   }
// }

// let homem = {
//   altura: 1.7,
//   peso: 80,
//   tipoSanguineo: "O",
//   calculaImc: function () {
//     return this.peso / this.altura ** 2;
//   },
// };
// // console.log(h);

// let aux1: Humano = {
//   altura: 1.6,
//   peso: 80,
//   tipoSanguineo: "O",
//   calculaImc: function () {
//     return this.peso / this.altura ** 2;
//   },
// };

// console.log(aux1);
// console.log(aux1.calculaImc());

// function funcTeste(humano: Humano) {
//   console.log(humano.calculaImc());
// }

// funcTeste(homem);
