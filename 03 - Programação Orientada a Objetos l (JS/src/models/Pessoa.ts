export class Pessoa {
  nome: string = "";
  altura: number = 0;
  peso: number = 0;

  dizerOi(): void {
    console.log(`Olá, me chamo ${this.nome}, muito prazer!`);
  }
}
