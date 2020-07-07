class Rectangle {
    constructor(height, width) {
      this.height = height;
      this.width = width;
    }
    
    get area() {
      return this.calcArea();
    }
  
    calcArea() {
      return this.height * this.width;
    }
  }
  
  class NewRectangle extends Rectangle {
      constructor(height, width, text, bgColor) {
          super(height, width);
          this.text = text;
          this.bgColor = bgColor;
      }

      showMyProps() {
          console.log(`Text: ${this.text}, color is :${this.bgColor} \n Hello world!`);
      }
  }

const newObj = new NewRectangle(20, 30, 'IJUHYGuyg', 'white');

console.log(newObj.area);
newObj.showMyProps();
// => \/
// script.js:30 600
// script.js:24 Text: IJUHYGuyg, color is :white 
//  Hello world!
// -------
// создадим внука нашего первого объекта
class New2NewRectangle extends NewRectangle {
    constructor(height, width, long, text, bgColor, monitor) {
        super(height, width, text, bgColor);
        this.long = long;
        this.monitor = monitor;
    }

    get dostavka() {
        return this.showMyMonitor();
    }

    volumeBox() {
        return Math.floor(this.height * this.width * this.long / 1000);
    }

    showMyMonitor() {
        console.log(`Monitor is : ${this.monitor}, color is :${this.bgColor} 
        \n Коробка объемом ${this.volumeBox()} литров или ${this.volumeBox() / 1000} кубометров
        \n Скоро приедет!`);
    }
}

const vnukRectangle = new New2NewRectangle(15, 50, 54,  "Это монитор", "black", 'Philips');

console.log(vnukRectangle.dostavka);
// Monitor is : Philips, color is :black 
        
//  Коробка объемом 40 литров или 0.04 кубометров
        
//  Скоро приедет!
console.log(vnukRectangle.area);
// 750
console.log(vnukRectangle.calcArea());
//750

  //-------
  const square = new Rectangle(10, 10);
  
  console.log(square.area); // 100
  //  another method:
  console.log(square.calcArea()); // 100


  // безымянный
  var IvarWithoutClassName = class {
    constructor(height, width) {
      this.height = height;
      this.width = width;
    }
  };
  console.log(IvarWithoutClassName.name);
  // отобразится: "IvarWithoutClassName" 
  
  // именованный
  var MyNameIsClassName= class ClassHaveTheName {
    constructor(height, width) {
      this.height = height;
      this.width = width;
    }
  };  
  console.log(MyNameIsClassName.name);
  // отобразится: "ClassHaveTheName" 