class Person {
  name: string;
  age: number;

  constructor(name: string, age: number) {
    this.name = name;
    this.age = age;
  }

  dizerOi(): void {
    console.log(`Olá, eu me chamo ${this.name}`);
  }

  getSaudacao(): string {
    return `Olá eu me chamo ${this.name} e eu tenho ${this.age} anos`;
  }
}

let p1 = new Person("Joana", 19);

// let p2: Person = {
//   age: 21,
//   name: "José",
// dizerOi() {

// },
// };

console.log(p1);
// console.log(p2);
