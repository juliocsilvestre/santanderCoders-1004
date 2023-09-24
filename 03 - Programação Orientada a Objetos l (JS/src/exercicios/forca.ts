// Criar um jogo da forca usando OO;
// Pelo menos três classes para três entidades presentes no sistema do jogo (GameController, Player e Match);
// O usuário deve poder chutar a palavra de uma vez;
// O usuário deve poder jogar/tentar novamente (reiniciar);
// Deve haver uma dica ou tema visualmente indicados;
// O jogo deve possuir pontuação;
// saudades css

class GameController {
  palavras: string[] = ["casa", "carro", "computador", "gato", "sol", "lua", "água", "árvore", "montanha", "praia"];
  tentativas: string[] = [];
  jogoFinalizado = false;
  jogador = new Jogador();
  partida = new Partida();

  constructor() {
    this.sortearPalavra();
  }

  verificarPalavra(letra: string): void {
    // if (palavra.length > 1) {
    //   this.verificarChute(palavra);
    // }

    this.tentativas.push(letra);

    this.mostrarForca(letra);
  }

  //   verificarChute(palavra: string): boolean {
  //     return this.palavras.includes(palavra);
  //   }

  sortearPalavra(): void {
    let aux = this.palavras[Math.floor(Math.random() * this.palavras.length)];
    this.partida.setPalavraSelecionada(aux);
  }

  mostrarDica(): void {
    console.log("A palavra possui " + this.partida.getPalavraSelecionada().length + " letras");
  }

  mostrarForca(letra: string) {
    let palavraSelecionada = this.partida.getPalavraSelecionada();

    if (!palavraSelecionada.includes(letra)) {
      this.jogador.perderVida();
    }

    let textoExibicao = "";

    console.clear();
    console.log("Vidas restantes: " + this.jogador.getVidas());
    for (let i = 0; i < palavraSelecionada.length; i++) {
      const aux = palavraSelecionada[i];
      if (this.tentativas.includes(aux)) {
        textoExibicao += aux;
      } else {
        textoExibicao += "_";
      }
    }

    console.log(textoExibicao);

    this.mostrarDica();
    this.verificarFimDoJogo(textoExibicao);
  }

  verificarFimDoJogo(textoExibicao: string) {
    // if (exibicaoPalavra.textContent === palavraSelecionada) {
    //   mostrarResultado(true);
    //   gameIsOver = true; // Definir gameIsOver como true quando o jogo é ganho
    //   desabilitarTeclado();
    // }

    if (this.jogador.getVidas() == 0 || !textoExibicao.includes("_")) {
      console.log("entrou");

      this.jogoFinalizado = true;
    }
  }
}

class Jogador {
  private vidas: number = 6;

  getVidas(): number {
    return this.vidas;
  }

  perderVida(): void {
    if (this.vidas > 0) {
      this.vidas--;
    } else {
      throw Error("Game over!");
    }
  }
}

class Partida {
  private palavraSelecionada: string;

  getPalavraSelecionada(): string {
    return this.palavraSelecionada;
  }

  setPalavraSelecionada(palavra: string): void {
    this.palavraSelecionada = palavra;
  }
}

let controller = new GameController();
console.log(controller.partida.getPalavraSelecionada());

console.log(controller);

while (!controller.jogoFinalizado) {
  let palavra = prompt("Digite uma letra ou uma palavra:");
  console.log(palavra);
  controller.verificarPalavra(palavra);
}
