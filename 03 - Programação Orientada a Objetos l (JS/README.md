# 1004-santander-coders

Claro, vou criar uma lista com 50 exercícios práticos sobre orientação a objetos em TypeScript para você. Esses exercícios são projetados para ajudar a consolidar seus conhecimentos sobre os princípios de orientação a objetos. Lembre-se de que a prática constante é essencial para aprimorar suas habilidades de programação. Vamos lá:

**Exercícios Básicos:**

1. Crie uma classe chamada `Person` com propriedades `name` e `age`. Instancie alguns objetos dessa classe.
2. Adicione um método à classe `Person` que imprime uma saudação com o nome da pessoa.
3. Crie uma classe `Rectangle` com propriedades `width` e `height`. Adicione um método que calcula a área do retângulo.
4. Crie uma classe `Circle` com propriedade `radius` e um método que calcula a área do círculo.
5. Crie uma classe `Car` com propriedades `make`, `model` e `year`. Crie um método que retorna a descrição do carro.
6. Crie uma classe `Student` com propriedades `name` e `grades` (um array). Adicione um método que calcula a média das notas.
7. Crie uma classe `BankAccount` com propriedades `balance` e `owner`. Adicione métodos para depositar e sacar dinheiro.
8. Crie uma classe `Book` com propriedades `title`, `author` e `year`. Crie um método que retorna os detalhes do livro.
9. Crie uma classe `Product` com propriedades `name`, `price` e `quantity`. Adicione métodos para calcular o valor total e exibir os detalhes.
10. Crie uma classe `Employee` com propriedades `name`, `role` e `salary`. Adicione um método que calcula um aumento de salário com base em uma porcentagem.

**Exercícios Intermediários:** 11. Crie uma classe `Bank` que contém uma coleção de contas bancárias. Adicione métodos para adicionar contas, fazer transferências e calcular o saldo total do banco. 12. Crie uma classe `Shape` com método `calculateArea()`. Crie subclasses `Square`, `Triangle` e `Pentagon` que implementam esse método. 13. Crie uma classe `Playlist` que contém objetos da classe `Song`. Adicione métodos para adicionar músicas, remover músicas e calcular a duração total da playlist. 14. Crie uma classe `Person` com propriedade `address`. Crie uma classe `Address` separada e associe-a à classe `Person`. 15. Crie uma hierarquia de classes para representar diferentes tipos de veículos. Cada classe deve ter métodos específicos, como `startEngine()` e `stopEngine()`. 16. Crie uma classe `Bank` que contém uma coleção de contas bancárias (classe `BankAccount`). Adicione métodos para calcular o saldo médio e encontrar a conta com o saldo mais alto. 17. Crie uma classe `Animal` com métodos `eat()` e `makeSound()`. Crie subclasses como `Dog`, `Cat` e `Bird` com implementações específicas. 18. Crie uma classe `Shape` com método `draw()`. Crie subclasses como `Circle`, `Square` e `Triangle` com implementações de desenho. 19. Crie uma classe `Company` com propriedades `name` e `employees`. Adicione métodos para adicionar e remover funcionários, e calcular a folha de pagamento. 20. Crie uma classe `Game` com propriedades `name` e `players`. Adicione métodos para adicionar e remover jogadores, e determinar se o jogo está ativo.

**Exercícios Avançados:** 21. Crie uma classe `Bank` com um método para simular uma transação bancária que envolve várias contas, garantindo consistência. 22. Implemente um sistema de herança múltipla usando interfaces para representar diferentes habilidades que um personagem de jogo pode ter. 23. Crie uma classe `Database` que permite operações de CRUD (criar, ler, atualizar e excluir) em objetos que implementam uma interface específica. 24. Implemente um padrão de projeto Singleton para uma classe `Logger` que registra informações em todo o aplicativo. 25. Crie uma classe `StateMachine` que permite definir estados e transições, útil para modelar comportamentos complexos. 26. Crie uma classe `EventEmitter` que permite registrar ouvintes para eventos e emitir eventos para notificar os ouvintes. 27. Implemente uma classe `Cache` que armazena resultados de funções para entradas específicas, melhorando o desempenho. 28. Crie uma classe `ShapeFactory` que gera objetos `Shape` com base em parâmetros fornecidos. 29. Implemente um mecanismo de observação (Observer Pattern) onde um objeto observável notifica seus observadores sobre mudanças. 30. Crie uma classe `DependencyInjectionContainer` para gerenciar a injeção de dependência em um aplicativo TypeScript.

Lembre-se de que esses exercícios são apenas pontos de partida e você pode expandir cada um deles para criar desafios mais complexos à medida que aprimora suas habilidades em orientação a objetos e TypeScript.

Exercício bônus:

Modelando uma Loja Virtual

Imagine que você está desenvolvendo um sistema para uma loja virtual e precisa modelar algumas classes para gerenciar produtos, carrinhos de compras e pedidos. Use TypeScript para criar as classes e seus métodos. Certifique-se de utilizar os conceitos de herança, encapsulamento e polimorfismo.

Crie uma classe Produto com as seguintes propriedades:

id (número)
nome (string)
preco (número)
estoque (número)
Crie uma classe CarrinhoDeCompras com as seguintes propriedades:

itens (um array de produtos)
adicionarItem(produto: Produto, quantidade: number): void: adiciona um produto ao carrinho na quantidade especificada.
removerItem(produto: Produto, quantidade: number): void: remove um produto do carrinho na quantidade especificada.
calcularTotal(): number: calcula o valor total do carrinho.
Crie uma classe abstrata Pedido com as seguintes propriedades e métodos:

id (número)
data (Date)
itens (um array de produtos)
total (número)
calcularTotal(): number: método abstrato que deve ser implementado pelas subclasses.
Crie duas subclasses de Pedido:

PedidoOnline: representa um pedido feito online, com uma propriedade adicional enderecoEntrega (string).
PedidoLocal: representa um pedido feito em uma loja física, com uma propriedade adicional loja (string).
Crie uma classe Cliente com as seguintes propriedades:

nome (string)
email (string)
carrinho (instância de CarrinhoDeCompras)
pedidos (um array de pedidos)
Crie um exemplo de uso dessas classes em que você:

Cria alguns produtos.
Cria um cliente.
Adiciona produtos ao carrinho do cliente.
Realiza um pedido online e um pedido local.
Calcula o valor total dos pedidos.
Certifique-se de usar conceitos de herança, encapsulamento e polimorfismo onde apropriado. Isso ajudará a praticar e solidificar seus conhecimentos em Orientação a Objetos em TypeScript.
