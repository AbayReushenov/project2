class Polygon {
  constructor(height, width) {
    this.name = 'Polygon';
    this.height = height;
    this.width = width;
  }

  getHelloPhrase() {
    return `Привет, я — ${this.name}`;
  }
}

class Square extends Polygon {
  constructor(length) {
    // здесь вызван конструктор родительского класса со значением lengths
    // использованным для значений width и height класса Polygon 
    super(length, length);
    // в производных классах super() необходимо вызывать перед this
    // иначе будет выведено сообщение об ошибке
    this.name = 'Square';
    this.length = length;
  }

  getCustomHelloPhrase() {
    const polygonPhrase = super.getHelloPhrase(); // доступ к родительскому методу с синтаксисом super.X()
    return `${polygonPhrase} with a length of ${this.length}`;
  }

  get area() {
    return this.height * this.width;
  }
}

const mySquare = new Square(10);

console.log(mySquare.area) 
console.log(mySquare.getHelloPhrase()) 
console.log(mySquare.getCustomHelloPhrase()) 
// 100
// Привет, я — Square
// Привет, я — Square with a length of 10