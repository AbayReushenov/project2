function calc() {
    // Calc lesson 66, 67
    const kilocalor = document.querySelector('.calculating__result span');

    let sex, height, weight, age, ratio = 1.375;

    if (localStorage.getItem('sex')) {
        sex = localStorage.getItem('sex');
    } else {
        sex = 'female';
        localStorage.setItem('sex', 'female');
    }

    if (localStorage.getItem('ratio')) {
        ratio = localStorage.getItem('ratio');
    } else {
        ratio = '1.375';
        localStorage.setItem('ratio', '1.375');
    }

    function initLocalSettings(selecot, activoClass) {
        const elements = document.querySelectorAll(selecot);

        elements.forEach(eLem => {
            eLem.classList.remove(activoClass);
            if (eLem.getAttribute('id') === localStorage.getItem('sex')) {
                eLem.classList.add(activoClass);
            }
            if (eLem.getAttribute('data-ratio') === localStorage.getItem('ratio')) {
                eLem.classList.add(activoClass);
            }
        });
    }

    initLocalSettings('#gender div', 'calculating__choose-item_active');
    initLocalSettings('.calculating__choose_big div', 'calculating__choose-item_active');

    function calcTotal() {
        if (!sex || !height || !weight || !age || !ratio) {
            kilocalor.textContent = '____';
            return;
        }

        if (sex === 'female') {
            kilocalor.textContent = Math.round((447.6 + (9.2 * weight) + (3.1 * height) - (4.3 * age)) * ratio);
        } else {
            kilocalor.textContent = Math.round((88.36 + (13.4 * weight) + (4.8 * height) - (5.7 * age)) * ratio);
        }
    }

    calcTotal();

    function getStatInfo(selector, classFlagAktiven) {
        const elementsCalc = document.querySelectorAll(selector);

        elementsCalc.forEach(itemDiv => {
            itemDiv.addEventListener('click', (event) => {
                if (event.target.getAttribute('data-ratio')) {
                    ratio = +event.target.getAttribute('data-ratio');
                    localStorage.setItem('ratio', +event.target.getAttribute('data-ratio'));
                } else {
                    sex = event.target.getAttribute('id');
                    localStorage.setItem('sex', event.target.getAttribute('id'));
                }

                elementsCalc.forEach(intem => {
                    intem.classList.remove(classFlagAktiven);
                });

                event.target.classList.add(classFlagAktiven);

                calcTotal();

            });
        });

    }

    getStatInfo('#gender div', 'calculating__choose-item_active');
    getStatInfo('.calculating__choose_big div', 'calculating__choose-item_active');

    function getInputOrDinamicInfo(selectorID) {
        const nashInput = document.querySelector(selectorID);

        nashInput.addEventListener('input', () => { // событие 'input' состоялось

            if (nashInput.value.match(/\D/g)) { // вводится не число
                nashInput.style.border = '1px solid red';
                nashInput.classList.add('blink');

            } else {
                nashInput.style.border = 'none';
                nashInput.classList.remove('blink');
            }
            switch (nashInput.getAttribute('id')) { //  in this div there is 'id'
                // if there is === 'true'
                case 'height':
                    height = +nashInput.value; // we will get new value for the element
                    break; // mission have been complited

                case 'weight':
                    weight = +nashInput.value; // we will get new value for the element
                    break;

                case 'age':
                    age = +nashInput.value; // we will get new value for the element
                    break;

            }

            calcTotal();
        });
    }

    getInputOrDinamicInfo('#height');
    getInputOrDinamicInfo('#age');
    getInputOrDinamicInfo('#weight');

}

module.exports = calc;