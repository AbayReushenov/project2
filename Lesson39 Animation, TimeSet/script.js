const btn = document.querySelector(".btn");
// let timeId8,
//     i = 0;

 
function myAnimation() {
    const element = document.querySelector('.box');
    let pos = 0;

    const id = setInterval(frame, 1000/24);
    function frame() {
        if (pos == 300) {
            clearInterval(id);
        } else {
            pos++;
            element.style.top = pos + 'px';
            element.style.left = pos + 'px';

        }
    }
}    

btn.addEventListener('click', myAnimation);



// btn.addEventListener('click', () => {
//     // const timeId8 = setTimeout(logger8, 2000);  
//     timeId8 = setInterval(logger, 500);
//     // будет бесконечны цикл
//     // каждые  2 сек в консоли будет
//     // text
// });

// function logger () {
//     if (i === 3) {
//         clearInterval(timeId8); // отмена выполнения
//     }
//     console.log('text');
//     i++;
// }

// возможна проблема при вызове тяжелой ыункции
//в этом случае logger будет вызываться сразу после окончвния, без 
// ожидания 0,5 сек
//
// let id = setTimeout(function logZaderjka() {
//     console.log("Hi !");
//     id = setTimeout(logZaderjka, 5000);
//     console.log("Hi !!");
// }, 1000);
