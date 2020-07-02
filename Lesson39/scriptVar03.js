const btn = document.querySelector(".btn");
let timeId8,
    i = 0;

btn.addEventListener('click', () => {
    // const timeId8 = setTimeout(logger8, 2000);  
    timeId8 = setInterval(logger, 500);
    // будет бесконечны цикл
    // каждые  2 сек в консоли будет
    // text
});

function logger () {
    if (i === 3) {
        clearInterval(timeId8); // отмена выполнения
    }
    console.log('text');
    i++;
}

// возможна проблема при вызове тяжелой ыункции
//в этом случае logger будет вызываться сразу после окончвния, без 
// ожидания 0,5 сек
//
let id = setTimeout(function logZaderjka() {
    console.log("Hi !");
    id = setTimeout(logZaderjka, 5000);
    console.log("Hi !!");
}, 1000);
