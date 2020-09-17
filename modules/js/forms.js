import {openModal, closeModal} from './modal';
import {postData} from '../services/services';

function forms(formSelector, modalTimerId) {
    // Forms Lesson 53
    const formy = document.querySelectorAll(formSelector);
    const mess = {
        loading: 'img/form/spinner.svg',
        success: 'Спасибо! Мы с Вами скоро свяжемся.',
        failure: 'Что-то пошло не так ...',
    };

    formy.forEach(inem => {
        bindPostData(inem);
    });

    function bindPostData(formaB) {
        formaB.addEventListener("submit", (e) => {
            e.preventDefault(); // в AJAX обязательно

            let statusMess = document.createElement('img');
            statusMess.src = mess.loading;
            statusMess.style.cssText = `
                display: block;
                margin: 0 auto; 
            `;
            formaB.insertAdjacentElement('afterend', statusMess);

            const dataFormaB = new FormData(formaB);

            const json = JSON.stringify(Object.fromEntries(dataFormaB.entries()));

            postData('http://localhost:3000/requests', json)
                .then(data => {
                    console.log(data);
                    showThanksModalSpecial(mess.success);
                    statusMess.remove();
                })
                .catch(() => {
                    showThanksModalSpecial(mess.failure);
                })
                .finally(() => formaB.reset());
        });
    }

    // Lesson 54 Отправка форм
    function showThanksModalSpecial(mess) {
        const previousDivDialog = document.querySelector('.modal__dialog');

        previousDivDialog.classList.add('hide');

        openModal('.modal', modalTimerId);

        const thanksModalDiv = document.createElement('div');

        thanksModalDiv.classList.add('modal__dialog');

        thanksModalDiv.innerHTML = `
                <div class="modal__content">
                    <div  class="modal__close" data-close>×</div>
                    <div class="modal__title">${mess}</div>
                </div>
        `;

        document.querySelector('.modal').append(thanksModalDiv);

        setTimeout(() => {
            thanksModalDiv.remove(); // clearning
            previousDivDialog.classList.add('show'); // and fixing
            previousDivDialog.classList.remove('hide');
            closeModal('.modal'); // everything well done, close box "modal"
        }, 4000);
    }

}

export default forms;