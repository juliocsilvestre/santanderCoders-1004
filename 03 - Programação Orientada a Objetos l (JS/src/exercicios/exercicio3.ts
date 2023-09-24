class Rectangle {
  constructor(private width: number, private height: number) {}

  calcularArea(): number {
    return this.width * this.height;
  }
}

let rec1 = new Rectangle(100, 100);
let rec2 = new Rectangle(10, 32);
console.log(rec1.calcularArea(), rec2.calcularArea());
