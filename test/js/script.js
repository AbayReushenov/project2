
    //  fetch(' http://localhost:3000/menu')
    // .then(dataDB => dataDB.json())
    // .then(data => console.log(data)); 

window.addEventListener("DOMContentLoaded", () => {
    // Вариант 1
    // getResourse будет отвечать за получение данных для карточек
    const getResourse = async (url) => {
        const result = await fetch(url);
        if (!result.ok) {
            throw new Error(`Couldn't fetch ${url}, status: ${result.status}`);
        }
    
        return await result.json();
    };
    
    function plusCard(data, classDiv) {
        data.forEach(({img, altimg, title, descr, price}) => {
            const bit = document.createElement('div');

            price *= 27;

            bit.classList.add('menu__item');

            bit.innerHTML = `
                <img src=${img} alt=${altimg}>
                <h3 class="menu__item-subtitle">${title}</h3>
                <div class="menu__item-descr">${descr}</div>
                <div class="menu__item-divider"></div>
                <div class="menu__item-price">
                <div class="menu__item-cost">Цена:</div>
                <div class="menu__item-total"><span>${price}</span> грн/день</div>
                </div>
            `;

            document.querySelector(classDiv).append(bit);
        });
    }
    //-----------------------------------------
    getResourse("http://localhost:3000/menu")
    .then(data => plusCard(data, '.menu1'));


    // Вариант 2
    const getResourse2 = async (url) => {
        const result = await fetch(url);
        if (!result.ok) {
            throw new Error(`Couldn't fetch ${url}, status: ${result.status}`);
        }
    
        return await result.json();
    };

    class MenuCard {
        constructor(src, alt, title, descr, price, parensSelrctor, ...classes ) {
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

    getResourse2('http://localhost:3000/menu')
        .then(data => {
            data.forEach(({img, altimg, title, descr, price}) => {
                new MenuCard(img, altimg, title, descr, price, ".menu2").render();
            });
        });

    // Вариант 3
    axios.get('http://localhost:3000/menu')
    .then(response => {
        response.data.forEach(({img, altimg, title, descr, price}) => {
            new MenuCard(img, altimg, title, descr, price, '.menu .container').render();
        });
    });

    // Вариант 4
    axios.get('http://localhost:3000/menu')
    .then(response => plusCard(response.data, '.menu4'));


// Slider, var 2 'Карусель'
  
    const slider = document.querySelector('.offer__slider'), // added in lesson 63
        slides = document.querySelectorAll('.offer__slide'),
        prev = document.querySelector('.offer__slider-prev'),
        next = document.querySelector('.offer__slider-next'),
        total = document.querySelector('#total'),
        current = document.querySelector('#current'),
        slidesWrapper = document.querySelector('.offer__slider-wrapper'),
        inner2 = document.querySelector('.offer______slider-inner2'),
        width = window.getComputedStyle(slidesWrapper).width; // ширина нашего окошка

    let slideIndex = 1;
    let offset = 0; // переменная будет отслеживать на сколько мы отступили от краев нашего большого слайда 'inner2'
    let step = i => +width.replace(/\D/g, '') * (i - 1); // step * N

    const nN = n =>  n > 9 ? "" + n: "0" + n;

    total.textContent = nN(slides.length);
    current.textContent =  nN(slideIndex);

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

        current.textContent =  nN(i);

        dots.forEach(dot => dot.style.opacity = '.5');
        dots[i - 1].style.opacity = 1;
    }

    next.addEventListener('click', () => {  // next => вправо будет "-"
        if (offset == step(slides.length)) { 
            offset = 0;
        } else { 
            offset += step(2); // + ONE step
        }

        if (slideIndex == slides.length) {
            slideIndex = 1;
        }   else {
            slideIndex++;
        }

        functionDotOpacity(slideIndex);
    });

    prev.addEventListener('click', () => { 
        if (offset == 0) {
            offset = step(slides.length);
        } else { 
            offset -= step(2);// - ONE step
        }

        if (slideIndex == 1) {
            slideIndex = slides.length;
        }   else {
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






});

