'use strict';

(function(){
console.log('this is anonym selfcalling function');
}());
console.log('---------------*--------------*---------------*---------------');

const hiddenFunction = (function(){
    console.log('check1');

    const privat = function() {
        console.log("I am privat");
        console.log('selfcalling function => hiddenFunction = (function(){..}())');
    };
    
    console.log('check2');
    
    return {
        privatSayHello: privat
    };

  //  console.log('check3');

}());
console.log('---------------*--------------*---------------*---------------');
// hiddenFunction();
hiddenFunction.privatSayHello();
console.log('---------------*--------------*---------------*---------------');
const hiddenFunction2 = (function() {
    const privat2 = function() {
        console.log("I am privat2");
        console.log('selfcalling function => hiddenFunction2 = (function(){..}())');
    };

    return {
        privatSayHello2: privat2
    };
}());
console.log('---------------*--------------*---------------*---------------');
hiddenFunction2.privatSayHello2();
console.log('---------------*--------------*---------------*---------------');
var multiplyES5 = function(x, y) {
    console.log('var multiplyES5 = function(x, y)');
    hiddenFunction.privatSayHello();
    hiddenFunction2.privatSayHello2();
    return x * y;
  };
  console.log('---------------*--------------*---------------*---------------');
console.log(multiplyES5(2, 5));
console.log('---------------*--------------*---------------*---------------');  
var multiplyES5Xa = function(x, y) {
    console.log( x * y);
  };
  console.log('---------------*--------------*---------------*---------------');
multiplyES5Xa(20, 10);
console.log('---------------*--------------*---------------*---------------');