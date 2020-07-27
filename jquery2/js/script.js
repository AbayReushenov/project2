'use strict';
import $ from "jquery";
import 'nodelist-foreach-polyfill';
require('es6-promise').polyfill();
// require('es6-promise/auto');

$(document).ready(function() {
//-----------1--------------------------
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
// -----------2-----------

    $('.list-item:first').hover(function() {
        $(this).toggleClass('active');
    });

    $('.list-item:eq(2)').on('click', function() {
        $('.image:even').fadeToggle("slow");
    });

    $('.list-item:eq(4)').on('click', function() {
        $('.image:odd').animate({
            opacity: "toggle",
            height: "toggle" 
        }, 2000);
    });
//-----------3-----------------
    $('[href="#"]:eq(4)').on('click', function() {
        $('.image:odd').animate({
            opacity: "toggle",
            height: "toggle" 
        }, 2000);
    });

    $('[href="#"]:eq(3)').on('click', function() {
        $("div.wrapper").slideToggle(1000, function() {
            $('[href="#"]:eq(3)').html("Oups!");
        });   
    });

    $('[href="#"]:eq(0)').on('click', function() {
        $("div.wrapper").fadeToggle(1000);
    });

    $('[href="#"]:eq(1)').on('click', function() {
        $("div.wrapper").fadeOut('slow', function() {
            $('[href="#"]:eq(1)').html("Ну, как всегда...");
        });   
    }); 
    
    $('[href="#"]:eq(2)').on('click', function() {
        $("div.wrapper").fadeIn(2000, function() {
            $('[href="#"]:eq(2)').html("Okay!");
        });
    });

});