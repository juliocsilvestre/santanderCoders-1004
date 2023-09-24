class Produto {
  id: number;
  nome: string;
  preco: number;
  estoque: number;
  tipoPedido: "online" | "local";
}

class CarrinhoDeCompras {
  private itens: Produto[] = [];

  adicionarItem(produto: Produto, quantidade: number): void {
    if (produto.estoque == 0) {
      console.error("Produto indisponível!");
      return;
    }

    if (produto.estoque < quantidade) {
      console.error("Produto insuficiente no estoque!");
      return;
    }

    for (let i = 0; i < quantidade; i++) {
      produto.estoque--;
      this.itens.push(produto);
    }
  }

  removerItem(produto: Produto, quantidade: number): void {
    let index = this.verificaProdutoNoCarrinho(produto);
    if (index != -1) {
      for (let i = 0; i < quantidade; i++) {
        this.itens.splice(index, 1);
        index = this.verificaProdutoNoCarrinho(produto);
        if (index == -1) {
          break;
        }
      }
      produto.estoque += quantidade;
    } else {
      console.error("Produto não cadastrado ao carrinho!");
    }
  }

  verificaProdutoNoCarrinho(produto: Produto): number {
    let index = this.itens.findIndex((value) => value.id == produto.id);
    return index;
  }

  calcularTotal(): number {
    // método moderno
    let total: number = this.itens.reduce((accumulator, product) => accumulator + product.preco, 0);

    // método tradicional
    // for (let i = 0; i < this.itens.length; i++) {
    //   total += this.itens[i].preco;
    // }

    return total;
  }

  getProdutosLocal(): Produto[] {
    return this.itens.filter((value) => value.tipoPedido == "local");
  }

  getProdutosOnline(): Produto[] {
    return this.itens.filter((value) => value.tipoPedido == "online");
  }
}

abstract class Pedido {
  id: number;
  data: Date;
  itens: Produto[] = [];
  abstract calcularTotal(): number;

  constructor(id: number, data: Date) {
    this.id = id;
    this.data = data;
  }
}

class PedidoOnline extends Pedido {
  enderecoEntrega: string;

  constructor(id: number, data: Date, enderecoEntrega: string) {
    super(id, data);
    this.enderecoEntrega = enderecoEntrega;
  }

  calcularTotal(): number {
    let total: number = this.itens.reduce((accumulator, product) => accumulator + product.preco, 0);
    total += 20;
    return total;
  }
}

class PedidoLocal extends Pedido {
  loja: string;

  constructor(id: number, data: Date, loja: string) {
    super(id, data);
    this.loja = loja;
  }

  calcularTotal(): number {
    return this.itens.reduce((accumulator, product) => accumulator + product.preco, 0);
  }
}

class Cliente {
  constructor(
    public nome: string,
    public email: string,
    public carrinho: CarrinhoDeCompras,
    public pedidos: Pedido[]
  ) {}
}

const produto4: Produto = {
  id: 4,
  nome: "Relógio",
  preco: 99.99,
  estoque: 30,
  tipoPedido: "local",
};

const produto5: Produto = {
  id: 5,
  nome: "Bolsa",
  preco: 49.99,
  estoque: 20,
  tipoPedido: "online",
};

const produto6: Produto = {
  id: 6,
  nome: "Óculos de Sol",
  preco: 39.99,
  estoque: 40,
  tipoPedido: "local",
};

const produto7: Produto = {
  id: 7,
  nome: "Chapéu",
  preco: 19.99,
  estoque: 15,
  tipoPedido: "online",
};

const produto8: Produto = {
  id: 8,
  nome: "Cinto",
  preco: 9.99,
  estoque: 60,
  tipoPedido: "local",
};

let carrinho = new CarrinhoDeCompras();
let cliente = new Cliente("José", "jose@gmail.com", carrinho, []);

carrinho.adicionarItem(produto4, 3);
carrinho.adicionarItem(produto5, 8);

// console.log(carrinho);

carrinho.removerItem(produto4, 2);
carrinho.removerItem(produto5, 2);

console.log(carrinho);
console.log(carrinho.calcularTotal());

let pedidoLocal = new PedidoLocal(1, new Date(), "Loja 2");
let pedidoOnline = new PedidoOnline(2, new Date(), "Rua copacabana");

pedidoLocal.itens = carrinho.getProdutosLocal();
pedidoOnline.itens = carrinho.getProdutosOnline();

console.log(pedidoLocal, pedidoOnline);

let cli = new Cliente("jose", "jose@gmail.com", carrinho, [pedidoLocal, pedidoOnline]);
console.log(cli);

let valorTotalPedidos = cli.pedidos.reduce((accumulator, product) => accumulator + product.calcularTotal(), 0);

console.log(pedidoLocal.calcularTotal());
console.log(pedidoOnline.calcularTotal());

console.log(valorTotalPedidos);

function BaseParameters() {
  return function <T extends { new (...args: any[]): {} }>(constructor: T) {
    return class extends constructor {
      id = Math.random();
      createdAt = new Date();
    };
  };
}
