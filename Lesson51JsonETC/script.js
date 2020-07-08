'use strict';

const persone = {
    name: "Alex",
    tel: "+789032489034298",
    parents: {
        mom: "Olga",
        dad: "Mike",
        friendOfMom: "Don Pedro Huan Armavailus",
        girlfriendOfDad: "Simona de Bulvar"
    }
    };

const clone = JSON.parse(JSON.stringify(persone));

clone.parents.friendOfMom = "Petrovich";

persone.parents.girlfriendOfDad = "Heleonora";

// console.log(JSON.stringify(persone));

const btn = document.querySelector(".classb01"),
      btn2 = document.querySelector('#idnomer102'),
      btn3 = document.querySelector('button[data-atr="3"]'),
      btn4 = document.querySelector('button[data-atr="4"]');
      
      

btn.addEventListener('click', () => console.log(JSON.stringify(persone)));
btn2.addEventListener('click', () => console.log(JSON.parse(JSON.stringify(persone))));
btn3.addEventListener('click', () => console.log(clone.parents));
btn4.addEventListener('click', () => console.log(persone.parents));






