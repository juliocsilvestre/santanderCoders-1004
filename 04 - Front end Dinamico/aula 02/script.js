const body = document.querySelector("body");

const style = document.createElement("style");
style.textContent = `body {
    background-image: url(./background.jpg); 
}`

document.head.appendChild(style);

const app = document.querySelector("app");

const container = document.createElement("div");
container.classList.add("container");

const h1 = document.createElement("h1");
h1.innerText = "Churrascômetro";

const calculator = document.createElement("div");
calculator.classList.add("calculator");

const firstRow = document.createElement("div");
firstRow.classList.add("row");

const firstInputGroup = document.createElement("div");
firstInputGroup.classList.add("input-group");

const label = document.createElement("label");
label.setAttribute("for","people");
label.innerText = "Pessoas";

const input = document.createElement("input");
input.setAttribute("type", "number");
input.setAttribute("id", "people");
input.setAttribute("value", "0");
input.classList.add("input-valid");

const buttonGroup = document.createElement("div");
buttonGroup.classList.add("button-group");

const buttonMinus = document.createElement("button");
buttonMinus.classList.add("input-group__button--small");
buttonMinus.innerText = "-";

const buttonPlus = document.createElement("button");
buttonPlus.classList.add("input-group__button--small");
buttonPlus.innerText = "+";

const secondRow = document.createElement("div");
secondRow.classList.add("row");

const secondInputGroup = document.createElement("div");
secondInputGroup.classList.add("input-group");

const buttonCalculate = document.createElement("button");
buttonCalculate.classList.add("input-group__button--big");
buttonCalculate.innerText = "Calcular";

container.appendChild(h1);
container.appendChild(calculator);

calculator.appendChild(firstRow);
firstRow.appendChild(firstInputGroup);
firstInputGroup.appendChild(label);

firstInputGroup.appendChild(input);
firstInputGroup.appendChild(buttonGroup);
buttonGroup.appendChild(buttonMinus);
buttonGroup.appendChild(buttonPlus);

calculator.appendChild(secondRow);
secondRow.appendChild(secondInputGroup);
secondInputGroup.append(buttonCalculate);

app.appendChild(container);