'use strict';

const chel = {
    name: "Evgeniy",
    age: 25,
    bisnessIncome: 100,
    get chelBisiness() {
        return this.bisnessIncome;
    },
    wife: " NAtasha",
    set chelBisiness(newInfo) {
        this.bisnessIncome = newInfo;
    }
};

console.log( chel.bisnessIncome);
console.log( chel.chelBisiness);
console.log('---');

console.log( chel.bisnessIncome = 500);
console.log( chel.bisnessIncome);
console.log( chel.chelBisiness);
console.log('---');

console.log( chel.chelBisiness = 200);
console.log( chel.bisnessIncome);
console.log( chel.chelBisiness);
console.log('---');

chel.bisnessIncome = 0;
console.log( chel.bisnessIncome);
console.log( chel.chelBisiness);
console.log('---');

chel.chelBisiness = 2000;
console.log( chel.bisnessIncome);
console.log( chel.chelBisiness);
