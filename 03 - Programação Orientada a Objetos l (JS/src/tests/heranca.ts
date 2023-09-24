class Animal1 {
  raca: string;
  nome: string;
  quantosOlhos: number;

  constructor(raca: string, nome: string, quantosOlhos: number) {
    this.raca = raca;
    this.nome = nome;
    this.quantosOlhos = quantosOlhos;
  }

  fazerBarulho(): void {
    console.log("AAAAAAAAAAAAAAAAA");
  }
}

class Cachorro extends Animal1 {
  puroSangue: boolean;
  constructor(raca: string, nome: string, quantosOlhos: number, puroSangue: boolean) {
    super(raca, nome, quantosOlhos);
    this.puroSangue = puroSangue;
  }

  fazerBarulho(): void {
    console.log("Au au");
  }
}

class Gato extends Animal1 {
  vacinado: boolean;

  constructor(raca: string, nome: string, quantosOlhos: number, vacinado: boolean) {
    super(raca, nome, quantosOlhos);
    this.vacinado = vacinado;
  }
}

let a = new Animal1("seila", "Augusto", 2);

let c = new Cachorro("Golden", "Tiozinho", 10, false);
c.fazerBarulho();

let g1 = new Gato("Vira lata 1", "Mingau", 80, true);
let g2 = new Gato("Vira lata 2", "Rogerinho", 1, false);
let g3 = new Gato("Vira lata 3", "Ronaldo", 2, true);

function aux2(animal: Animal1) {
  animal.fazerBarulho();
  console.log(animal.nome, animal.quantosOlhos, animal.raca);
}
