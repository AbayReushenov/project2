function closeModal(selectorTargetModal) {
    const modal = document.querySelector(selectorTargetModal);

    modal.classList.add('hide');
    modal.classList.remove('show'); 
    document.body.style.overflow = '';
}

function openModal(selectorTargetModal, modalTimerId) {
    const modal = document.querySelector(selectorTargetModal);

    modal.classList.add('show');
    modal.classList.remove('hide');
    document.body.style.overflow = 'hidden';

    console.log(modalTimerId);
    if (modalTimerId) {
        clearInterval(modalTimerId);
    }
}

function modal(selectorTrigger, selectorTargetModal, modalTimerId) {

    const modalTrigger = document.querySelectorAll(selectorTrigger),
        modal = document.querySelector(selectorTargetModal);

    modalTrigger.forEach(btn => {
        btn.addEventListener('click', () => openModal(selectorTargetModal, modalTimerId));
        // open(..) оборачиваем в самовызывающуюся callback функцию, которая вызывается после клика
    });

    modal.addEventListener('click', (e) => {
        if (e.target === modal || e.target.getAttribute('data-close') == '') {
            closeModal(selectorTargetModal);
        }
    });

    document.addEventListener('keydown', (e) => {
        if (e.code === 'Escape' && modal.classList.contains('show')) {
            // в Google искать event.code для конкретной клавиши
            closeModal(selectorTargetModal);
        }
    });

    function showModalByScroll() {
        if (window.pageYOffset + document.documentElement.clientHeight >= document.documentElement.scrollHeight) {
            openModal(selectorTargetModal, modalTimerId);
            window.removeEventListener('scroll', showModalByScroll);
        }
    }

    window.addEventListener('scroll', showModalByScroll);
}

export default modal;
export {openModal, closeModal};
