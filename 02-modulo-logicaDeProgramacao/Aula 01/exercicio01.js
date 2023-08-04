// Implementar um controle de estado que determina se o Ken vai abrir o coração ou não de acordo com o amor da barbie

let modalAberto = false; // Variável para controlar o estado do modal
let amorDaBarbie = true; // Variável para controlar o amor da Barbie (true ou false)

function abrirModal() {
	console.log("Antes de abrir o modal");
	console.log("Valor da variável", modalAberto);

	if (amorDaBarbie) {
		console.log("Ken abre o coração <3");
		modalAberto = true; // Atualizando o ESTADO do modal para verdadeiro, ou seja, modal aberto
	} else {
		console.log("Ken não abre o coração :(");
	}

	console.log("Depois de abrir o modal");
	console.log("Valor da variável", modalAberto);
}

console.log("Fora da função");
console.log("Valor da variável", modalAberto);

function fecharModal() {
	modalAberto = false; // Atualizando o ESTADO do modal para falso, ou seja, modal fechado
}

abrirModal();
