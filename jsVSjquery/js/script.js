'use strict';

window.addEventListener("DOMContentLoaded", () => {

    const hrefButton = document.querySelectorAll('[href="#"]'),
        rusButtonText = ['Первый', "Второй", "Третий", "Четветрый", "Пятый"],
        engButtonText = ['First', "Second", "Third", 'Fourth', "Fifth"],
        oldHtmlButtonText = [];

    for (let i = 0; i < hrefButton.length; i++) {

        oldHtmlButtonText.push(hrefButton[i].textContent);

        hrefButton[i].textContent = rusButtonText[i];
       
        hrefButton[i].addEventListener('mouseover', () => hrefButton[i].textContent = engButtonText[i]);
    }

    hrefButton.forEach((button, index)  => button.addEventListener('mouseout', function() {
        this.textContent = rusButtonText[index];
    }));

    hrefButton.forEach((button, index)  => button.addEventListener('mousedown', function() {
        this.textContent = oldHtmlButtonText[index];
    }));

});