'use strict';

class UserStandart {
    constructor(xName, xAge) {
        this.name = xName;
    // this.age = xAge;
        this._userAge = xAge;
    }

    //вне конструктора!!!
    #surname = 'Reushenov';

    functiuonSay() {
        console.log(`User name is: ${this.name} ${this.#surname}, age is ${this._userAge}`);
    }

    functiuonSay3 = () => {
        console.log(`User name is: ${this.name} ${this.#surname}, age is ${this._userAge}`);
    }

    get age() {
        return this._userAge;
    }

    set age(xAge) {
        if (typeof xAge === 'number' && xAge > 0 && xAge < 110) {
            this._userAge = xAge;
        } else {
            console.log('Недопустимое значение!');
        }
    }

    get surnameGet() {
        return this.#surname;
    }

    set surnameSet(surname) {
        if (typeof surname === 'string' && surname.length < 50) {
            this.#surname = surname;
        } else {
            console.log('Недопустимое значение!');
        }
    }
}


const abay = new UserStandart('Abay', 53);

abay.functiuonSay();
abay.functiuonSay3();
console.log(abay.surname);
// console.log(abay.#surname);
console.log(abay.surnameGet);
abay.surnameSet = "Fedorovitch";
console.log(abay.surnameGet);
abay.functiuonSay();
abay.functiuonSay3();


