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

export default slider;