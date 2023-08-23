function contagemRegressivaJulio() {
    const userInput = prompt("Digite o tempo em segundos para iniciarmos a contagem:");

    if (userInput === null || userInput === "") {
        console.log("Tempo invalido, coloque um numero ai autarquia.");
        return;
    }

    const totalTime = parseInt(userInput, 10);
    let remainingTime = totalTime;

    if (isNaN(totalTime) || totalTime <= 0) {
        console.log("Tempo inválido. A contagem não será iniciada, me ajude a te ajudar.");
        return;
    }

    const intervalId = setInterval(() => {
        if (remainingTime <= 0) {
            console.log("Acabousse o que era doce");
            clearInterval(intervalId);
        } else {
            console.log(remainingTime);
            remainingTime--;
        }
    }, 1000);
}

contagemRegressivaJulio();
