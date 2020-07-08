'use strict';
const inputRub = document.querySelector('#rub'),
      inputUsd = document.querySelector('#usd');


inputRub.addEventListener('input', () => {
    // Событие change происходит по окончании изменения значения элемента формы, когда это изменение зафиксировано.
    // Событие input срабатывает тут же при изменении значения текстового элемента 

    const request = new XMLHttpRequest();

    // request.open(method, url, async, login, password);
    request.open('GET', 'js/current.json');
    request.setRequestHeader('Content-type', 'application/json; chatset=utf-8');
    request.send();

    request.addEventListener('load', () => {
        if (request.status === 200) {
            console.log(request.response);
            const data = JSON.parse(request.response);
            inputUsd.value = (+inputRub.value  / data.current.usd).toFixed(2);
        } else {
            inputUsd.value = "Что-то пошло не так";
        }
    });

    // request.addEventListener('readystatechange', () => {
    //     if (request.readyState === 4 && request.status === 200) {
    //         console.log(request.response);
    //         const data = JSON.parse(request.response);
    //         inputUsd1.value = (+inputRub.value  / data.current.usd).toFixed(2);
    //     } else {
    //         inputUsd1.value = "Что-то пошло не так";
    //     }
    // });

    // status #404 etc, #200- ok
    // statusText - текстоое писание ответа
    // response - ответ
    // readyState - текущее состояние объекта // 4 - Done
});


