console.clear();

let aux = new Person("Monica", 33);
// aux.dizerOi();

let saudacao = aux.getSaudacao();
console.log(saudacao);

let funcAux = (aux1: number, aux2: string): boolean => {
  console.log("Dentro da função funcAux");

  console.log(aux1);
  console.log(aux2);

  return false;
};

function print(aux: (param1: number, param2: string) => boolean) {
  let value = aux(1, "tst");
  console.log(value);
}

print(funcAux);

function algumaCoisa(aux: string): void {}

let algumaCoisa2 = function (aux: string): void {};

algumaCoisa("");
algumaCoisa2("outra stirng");

let algumaCoisa3 = (aux: string): void => {};

algumaCoisa3("parametro algumas coisa 3");
