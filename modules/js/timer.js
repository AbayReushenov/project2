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

export default timer;