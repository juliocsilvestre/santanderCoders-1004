abstract class Humano {
  protected altura: number;
  protected peso: number;
  protected tipoSanguineo: "O" | "A" | "B" | "AB";

  constructor(altura: number, peso: number) {
    this.altura = altura;
    this.peso = peso;
  }

  calculaImc(): number {
    return this.peso * this.altura ** 2;
  }
}

class Crianca extends Humano {
  constructor(altura: number, peso: number) {
    super(altura, peso);
  }

  getTipoSanguineo(): string {
    return this.tipoSanguineo;
  }
}

let c1 = new Crianca(50, 5);

console.log(c1);
