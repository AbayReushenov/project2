/*
id задания: 2 
Задание: Пользователь вводит длину оснований трапеции (a и b), а также высоту трапеции h. Программа выводит сообщение: «Площадь трапеции будет равна <значение>». Площадь вычисляется по формуле ((a + b) / 2) * h, где a, b - основания, h - высота.
*/

// let a = prompt(`Введите длину стороны 'a'`, 1),
//     b = prompt(`Введите длину стороны 'b'`, 1),
//     h = prompt(`Введите высоту трапеции 'h'`, 1);
// const s =((a + b) / 2) * h;  
// alert (`«Площадь трапеции будет равна ${s.toFixed(3)}»`); 


const panel = document.querySelector('body');

panel.insertAdjacentHTML('afterbegin', `
    <div class='wrapper'>
        <h1>Расчет площади трапеции</h1>
        <dl>
            <dt>Введите длину стороны 'a' </dt>
                <dd><input type="number" id="ai" value="1"></dd>
            <dt>Введите длину стороны 'b' </dt>
                <dd><input type="number" id="bi" value="1"></dd>
            <dt>Введите высоту трапеции 'h' </dt>
                <dd><input type="number" id="hi" value="1"></dd>
        </dl>
        <p>Нажмите на кнопку чтобы получиь результат</p>
        <button onclick="trapFunction()">Получить результат</button>
        <dl>
            <dt>Площадь трапеции будет равна:</dt>
                <dd id="si"></dd>
        </dl>
    </div>
    `);

function trapFunction() {
    const as = document.getElementById('ai').value,
          bs = document.getElementById('bi').value,
          hs = document.getElementById('hi').value,
          summa = ((as + bs) / 2) * hs;
    document.getElementById('si').innerHTML = summa.toFixed(3);
}
