// // Criando a classe
// class Pessoa {
//   private nome: string;
//   private altura: number;
//   private peso: number;
//   private imc: number;

//   carro: Carro;

//   gato: Gato;

//   constructor(nome: string, alturaC: number, pesoC: number, carroC: Carro, gatoC: Gato) {
//     nome = nome;
//     this.altura = alturaC;
//     this.peso = pesoC;
//     this.carro = carroC;
//     this.imc = pesoC / alturaC ** 2;

//     if (gatoC.estaVivo()) {
//       this.gato = gatoC;
//     } else {
//       this.gato = null;
//     }
//   }

//   getNome(): string {
//     return this.nome;
//   }

//   getImc(podeConsultarImc: boolean): number {
//     if (podeConsultarImc) {
//       return this.imc;
//     } else {
//       throw Error("Usuário não pode consultar IMC");
//     }
//   }

//   setImc(): void {
//     this.imc = this.peso / this.altura ** 2;
//   }

//   setGato(gato: Gato): void {
//     if (gato.estaVivo()) {
//       this.gato = gato;
//     } else {
//       throw Error("Não tem como cadastrar um gato que tá morto");
//     }
//   }

//   getGato(): Gato {
//     if (this.gato != null && this.gato.estaVivo()) {
//       return this.gato;
//     } else {
//       throw Error(`O gato da pessoa ${this.nome} morreu`);
//     }
//   }
// }

// class Carro {
//   ano: number;
//   marca: string;
//   potencia: number;

//   constructor(anoC: number, marcaC: string, potenciaC: number) {
//     this.ano = anoC;
//     this.marca = marcaC;
//     this.potencia = potenciaC;
//   }
// }

// class Gato {
//   numVidas: number = 7;
//   constructor(private nome: string, private raca: string, private puro: boolean, private taVivo: boolean) {}

//   getNome(): string {
//     return this.nome;
//   }

//   estaVivo(): boolean {
//     return this.taVivo;
//   }

//   matar(): void {
//     if (this.numVidas == 0) {
//       this.taVivo = false;
//       throw Error("O gato já ta morto");
//     } else {
//       this.numVidas--;
//     }
//   }

//   reviver(): void {
//     if (this.numVidas == 0) {
//       throw Error("Sem vidas restantes");
//     } else {
//       this.taVivo = true;
//       this.numVidas--;
//     }
//   }
// }

// console.log("Hello World");

// // criando uma função com parâmetros tipados estaticamente
// // e atribuindo tipagem ao retorno da função
// function somar(value1: number, value2: number): number {
//   return value1 + value2;
// }

// let valorSomado = somar(10, 1);

// console.log(valorSomado);

// // tipagem dinâmica
// let aux1 = "";
// let aux2 = 0;
// let aux3 = false;

// //tipagem estática
// let aux4: string;
// let aux5: number;
// let aux6: boolean;

// let carro1: Carro = {
//   ano: 1998,
//   marca: "Wolkswagen",
//   potencia: 180,
// };

// let g = new Gato("Mingau", "persa", true, true);

// // instanciando um objeto
// let p = new Pessoa("Ana", 150, 50, carro1, g);
// p.setImc();
// console.log(p.getImc(true));
// console.log(p.getGato());

// // let p2: Pessoa = {
// //   altura: 170,
// //   nome: "Caroline",
// //   peso: 70,
// //   carro: carro1,
// // };

// console.log(p);
// console.log(g);

// console.log(carro1);

// // console.clear();

// let gatinho = new Gato("Fuzil", "Vira-lata", true, true);
// gatinho.matar();
// gatinho.reviver();
// console.log(gatinho);

// console.clear();

class Ser {
  constructor(public nome: string[]) {}
}

let aux3: Ser = new Ser(["Joao", "Jose", "Maria"]);

console.log(aux3);
