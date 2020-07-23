/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./js/script.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./js/modules/calc.js":
/*!****************************!*\
  !*** ./js/modules/calc.js ***!
  \****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
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

/* harmony default export */ __webpack_exports__["default"] = (calc);

/***/ }),

/***/ "./js/modules/cards.js":
/*!*****************************!*\
  !*** ./js/modules/cards.js ***!
  \*****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _services_services__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../services/services */ "./js/services/services.js");


function cards() {
    class MenuCard {
        constructor(src, alt, title, descr, price, parensSelrctor, ...classes) {
            this.src = src;
            this.alt = alt;
            this.title = title;
            this.descr = descr;
            this.price = price;
            this.classes = classes;
            this.parent = document.querySelector(parensSelrctor);
            this.transfer = 27;
            this.changeToUAH();
        }

        changeToUAH() {
            this.price = this.price * this.transfer;
        }

        render() {
            const element = document.createElement('div');

            if (this.classes.length === 0) {
                this.element = 'menu__item';
                element.classList.add(this.element);
            } else {
                this.classes.forEach(className => element.classList.add(className));
            }

            element.innerHTML = `
                <img src=${this.src} alt=${this.alt}>
                <h3 class="menu__item-subtitle">${this.title}</h3>
                <div class="menu__item-descr">${this.descr}</div>
                <div class="menu__item-divider"></div>
                <div class="menu__item-price">
                    <div class="menu__item-cost">Цена:</div>
                    <div class="menu__item-total"><span>${this.price}</span> грн/день</div>
                </div>
        `;
            this.parent.append(element);
        }
    }

    // axios.get('http://localhost:3000/menu')
        Object(_services_services__WEBPACK_IMPORTED_MODULE_0__["getResourse"])('http://localhost:3000/menu')
        .then(response => {
            response.data.forEach(({
                img,
                altimg,
                title,
                descr,
                price
            }) => {
                new MenuCard(img, altimg, title, descr, price, '.menu .container').render();
            });
        });
}

/* harmony default export */ __webpack_exports__["default"] = (cards);

/***/ }),

/***/ "./js/modules/forms.js":
/*!*****************************!*\
  !*** ./js/modules/forms.js ***!
  \*****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _modal__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./modal */ "./js/modules/modal.js");
/* harmony import */ var _services_services__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../services/services */ "./js/services/services.js");



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

            Object(_services_services__WEBPACK_IMPORTED_MODULE_1__["postData"])('http://localhost:3000/requests', json)
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

        Object(_modal__WEBPACK_IMPORTED_MODULE_0__["openModal"])('.modal', modalTimerId);

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
            Object(_modal__WEBPACK_IMPORTED_MODULE_0__["closeModal"])('.modal'); // everything well done, close box "modal"
        }, 4000);
    }

}

/* harmony default export */ __webpack_exports__["default"] = (forms);

/***/ }),

/***/ "./js/modules/modal.js":
/*!*****************************!*\
  !*** ./js/modules/modal.js ***!
  \*****************************/
/*! exports provided: default, openModal, closeModal */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "openModal", function() { return openModal; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "closeModal", function() { return closeModal; });
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

/* harmony default export */ __webpack_exports__["default"] = (modal);



/***/ }),

/***/ "./js/modules/slider.js":
/*!******************************!*\
  !*** ./js/modules/slider.js ***!
  \******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
function slider({container, slide, nextAroow, prevArrow, totalCounter, currentCounter, wrapper, field}) {

    const slider = document.querySelector(container), // added in lesson 63
        slides = document.querySelectorAll(slide),
        prev = document.querySelector(prevArrow),
        next = document.querySelector(nextAroow),
        total = document.querySelector(totalCounter),
        current = document.querySelector(currentCounter),
        slidesWrapper = document.querySelector(wrapper),
        inner2 = document.querySelector(field),
        width = window.getComputedStyle(slidesWrapper).width; // ширина нашего окошка

    let slideIndex = 1;
    let offset = 0; // переменная будет отслеживать на сколько мы отступили от краев нашего большого слайда 'inner2'
    let step = i => +width.replace(/\D/g, '') * (i - 1); // step * N

    const nN = n => n > 9 ? "" + n : "0" + n;

    total.textContent = nN(slides.length);
    current.textContent = nN(slideIndex);

    inner2.style.width = 100 * slides.length + '%'; // 400 %
    inner2.style.display = 'flex'; // переведет все слайды в 1 линию
    inner2.style.transition = '0.5s all'; // постепенный переход

    slidesWrapper.style.overflow = 'hidden'; // убираем видимость рмками wrspper

    slides.forEach(item => {
        item.style.width = width; // каждый слайд получил стнадартный размер
    });

    // lesson 62
    slider.style.position = 'relative';

    const clickDots = document.createElement('ol'),
        dots = [];

    clickDots.classList.add('carousel-indicators');

    slider.append(clickDots); // куда.append.что;

    // создаем контент в данный элемент

    for (let i = 0; i < slides.length; i++) {
        const dot = document.createElement("li");
        dot.setAttribute('data-slide-to', i + 1);
        dot.classList.add('dot');

        if (i == 0) {
            dot.style.opacity = 1;
        }

        clickDots.append(dot);
        dots.push(dot); //массив с точками
    }

    function functionDotOpacity(i) {
        inner2.style.transform = `translateX(-${offset}px)`; // "-"

        current.textContent = nN(i);

        dots.forEach(dot => dot.style.opacity = '.5');
        dots[i - 1].style.opacity = 1;
    }

    next.addEventListener('click', () => { // next => вправо будет "-"
        if (offset == step(slides.length)) {
            offset = 0;
        } else {
            offset += step(2); // + ONE step
        }

        if (slideIndex == slides.length) {
            slideIndex = 1;
        } else {
            slideIndex++;
        }

        functionDotOpacity(slideIndex);
    });

    prev.addEventListener('click', () => {
        if (offset == 0) {
            offset = step(slides.length);
        } else {
            offset -= step(2); // - ONE step
        }

        if (slideIndex == 1) {
            slideIndex = slides.length;
        } else {
            slideIndex--;
        }
        functionDotOpacity(slideIndex);
    });

    // действие на нажатие точки
    dots.forEach(dot => {
        dot.addEventListener('click', (e) => {
            const slideto = e.target.getAttribute('data-slide-to');
            slideIndex = slideto;
            offset = step(slideto);
            functionDotOpacity(slideto);
        });
    });

}

/* harmony default export */ __webpack_exports__["default"] = (slider);

/***/ }),

/***/ "./js/modules/tabs.js":
/*!****************************!*\
  !*** ./js/modules/tabs.js ***!
  \****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
function tabs(tabsSelector, tabsContentSelector, tabsParentSelector, activeClass) {
    //tabs
    let tabs = document.querySelectorAll(tabsSelector), // табы
        tabsContent = document.querySelectorAll(tabsContentSelector), // контент к табам
        tabsParent = document.querySelector(tabsParentSelector); //родитель табов, для делегирования

    function hideTabContent() {

        tabsContent.forEach(item => {
            item.classList.add("hide");
            item.classList.remove("show", 'fade');
        });

        tabs.forEach(item => {
            item.classList.remove(activeClass);
        });
    }

    // функция для показа табов
    function showTabContent(i = 0) {
        // tabsContent[i].style.display = 'block';
        tabsContent[i].classList.add('show', 'fade');
        tabsContent[i].classList.remove('hide');
        tabs[i].classList.add(activeClass);
    }

    hideTabContent();
    showTabContent(); // i = 0 по умолчанию, function showTabContent(i = 0) 

    tabsParent.addEventListener('click', (event) => {
        const target = event.target;
        if (target && target.classList.contains(tabsSelector.slice(1))) {
            tabs.forEach((item, i) => {
                if (target == item) {
                    hideTabContent();
                    showTabContent(i);
                }
            });
        }
    });
}
 
/* harmony default export */ __webpack_exports__["default"] = (tabs);

// ".tabheader__item".slice(1); => "tabheader__item"

/***/ }),

/***/ "./js/modules/timer.js":
/*!*****************************!*\
  !*** ./js/modules/timer.js ***!
  \*****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
function timer(timerId, deadline) {
 
    function getTimeRemining(endtime) {
        const t = Date.parse(endtime) - Date.parse(new Date()) - 3 * 60 * 60 * 1000,
            // скорректируем для учета разницы с UTF на 3 часа
            days = Math.floor(t / (1000 * 60 * 60 * 24)), //целых дней
            hours = Math.floor(t / (1000 * 60 * 60) % 24), // остаток часов от дней
            minutes = Math.floor(t / (1000 * 60) % (60)), // остаток минут от часов
            seconds = Math.floor(t / (1000) % (60)); // остаток секунд от минут

        return {
            'total': t,
            'days': days,
            'hours': hours,
            'minutes': minutes,
            'seconds': seconds
        };
    }

    function getZero(num) {
        if (num >= 0 && num < 10) {
            return `0${num}`;
        } else {
            return num;
        }
    }

    function setClock(selector, endtime) {
        const timer = document.querySelector(selector),
            days = timer.querySelector('#days'),
            hours = timer.querySelector('#hours'),
            minutes = timer.querySelector('#minutes'),
            seconds = timer.querySelector('#seconds'),
            timeInterval = setInterval(updateClock, 1000);

        updateClock(); // инициализация , для решения вопроса с миганием экрана

        function updateClock() {
            const t = getTimeRemining(endtime);

            days.innerHTML = getZero(t.days);
            hours.innerHTML = getZero(t.hours);
            minutes.innerHTML = getZero(t.minutes);
            seconds.innerHTML = getZero(t.seconds);

            if (t.total <= 0) {
                clearInterval(timeInterval);
            }
        }
    }

    setClock(timerId, deadline);
}

/* harmony default export */ __webpack_exports__["default"] = (timer);

/***/ }),

/***/ "./js/script.js":
/*!**********************!*\
  !*** ./js/script.js ***!
  \**********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _modules_tabs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./modules/tabs */ "./js/modules/tabs.js");
/* harmony import */ var _modules_modal__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./modules/modal */ "./js/modules/modal.js");
/* harmony import */ var _modules_timer__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./modules/timer */ "./js/modules/timer.js");
/* harmony import */ var _modules_cards__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./modules/cards */ "./js/modules/cards.js");
/* harmony import */ var _modules_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./modules/forms */ "./js/modules/forms.js");
/* harmony import */ var _modules_slider__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./modules/slider */ "./js/modules/slider.js");
/* harmony import */ var _modules_calc__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./modules/calc */ "./js/modules/calc.js");









window.addEventListener("DOMContentLoaded", () => {
    
    const modalTimerId = setTimeout(() => Object(_modules_modal__WEBPACK_IMPORTED_MODULE_1__["openModal"])('.modal', modalTimerId), 299999);

    Object(_modules_cards__WEBPACK_IMPORTED_MODULE_3__["default"])(); 
    Object(_modules_calc__WEBPACK_IMPORTED_MODULE_6__["default"])();
    Object(_modules_tabs__WEBPACK_IMPORTED_MODULE_0__["default"])(".tabheader__item", ".tabcontent", ".tabheader__items", 'tabheader__item_active');
    Object(_modules_timer__WEBPACK_IMPORTED_MODULE_2__["default"])('.timer','2020-08-31');
    Object(_modules_modal__WEBPACK_IMPORTED_MODULE_1__["default"])('[data-modal]', '.modal', modalTimerId); 
    Object(_modules_forms__WEBPACK_IMPORTED_MODULE_4__["default"])('form', modalTimerId);
    Object(_modules_slider__WEBPACK_IMPORTED_MODULE_5__["default"])({
        container: '.offer__slider',
        slide: '.offer__slide',
        nextAroow: '.offer__slider-next',
        prevArrow: '.offer__slider-prev', 
        totalCounter: '#total', 
        currentCounter: '#current', 
        wrapper: '.offer__slider-wrapper', 
        field: '.offer______slider-inner2'
    });
});

/***/ }),

/***/ "./js/services/services.js":
/*!*********************************!*\
  !*** ./js/services/services.js ***!
  \*********************************/
/*! exports provided: getResourse, postData */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getResourse", function() { return getResourse; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "postData", function() { return postData; });
const postData = async (url, data) => {
    let result = await fetch(url, {
        method: 'POST',
        headers: {
            'Content-type': 'application/json'
        },
        body: data
    });

    return await result.json();
};

const getResourse = (url) =>  axios.get(url);




/***/ })

/******/ });
//# sourceMappingURL=bundle.js.map