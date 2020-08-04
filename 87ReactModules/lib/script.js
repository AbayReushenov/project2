"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.button = button;
exports.default = void 0;

function button() {
  return "button";
} // class


class Slider {
  // export default class Slider {    //каквариант export default ..etc
  constructor(shirina, visota, kolvo) {
    this.shirina = shirina;
    this.visota = visota;
    this.kolvo = kolvo;
  }

  sledSlyde() {
    console.log("Move right!");
  }

  nazadSlyde() {
    console.log("Move left");
  }

  ktoEstyYa() {
    console.log(this.shirina, this.visota, this.kolvo);
  }

} // const sliderMy = new Slider(500, 299, 12),
//       sliderNeMoy  = new Slider(100, 50, 5)
// sliderMy.ktoEstyYa() //500 299 12
// sliderNeMoy.ktoEstyYa() //100 50 5
//создаемм НАСЛЕДНИКА нашего класса
// extends
//super (...)


class Autoslider extends Slider {
  constructor(shirina, visota, kolvo, newAuto) {
    super(shirina, visota, kolvo);
    this.newAuto = newAuto;
  }

  newMethodPlay() {
    console.log("Autoplay: ".concat(this.newAuto));
  }

} // const slider = new Autoslider(599, 299, 4, true)
// slider.ktoEstyYa()  //599 299 4
// slider.newMethodPlay() //Autoplay: true
// export {button as btn, Slider}


var _default = Slider; // default = ONLY "ONE"

exports.default = _default;