class Animal {
  makeSound(): void {}
  eat(): void {}
}

class Bird extends Animal {
  makeSound(): void {
    console.log("Piu piu");
  }

  eat(): void {
    console.log("Comendo sementes");
  }
}

class Dog extends Animal {
  makeSound(): void {
    console.log("Au au");
  }

  eat(): void {
    console.log("Comendo o gato da vizinha");
  }
}

class Cat extends Animal {
  makeSound(): void {
    console.log("Miau miau");
  }

  eat(): void {
    console.log("Comendo passarinho");
  }
}

let dog = new Dog();
let cat = new Cat();
let bird = new Bird();

dog.eat();
dog.makeSound();

cat.eat();
cat.makeSound();

bird.eat();
bird.makeSound();
