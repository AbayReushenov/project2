// ==UserScript==
// @name         Google mine 24-09-20
// @namespace    http://tampermonkey.net/
// @version      0.1
// @description  try to take over the world!
// @author       You
// @match        https://www.google.com/*
// @grant        none
// ==/UserScript==


let googleInput = document.getElementsByName("q")[0];
let btnK = document.getElementsByName("btnK")[0];
let keywords = ["Гобой","Саксофон","Валторна","Фагот","Скрипка","Флейта","Как звучит флейта"];
let keyword = keywords[getRandom(0,keywords.length)];
let i = 0;

function getRandom(min,max){
    return Math.floor(Math.random()*(max-min)+min);
}

if (btnK!=undefined){
    let timerId = setInterval(()=>{
        googleInput.value += keyword[i++];
        if (i==keyword.length){
            clearInterval(timerId);
            document.getElementsByName("btnK")[0].click();
        }
    },500);
}else {
    let links = document.links;
    let flag = true;
    let currentPage = document.querySelector(".YyVfkd").innerText;
    for (e of links){
        if(e.href.includes("xn----7sbab5aqcbiddtdj1e1g.xn--p1ai")) {
            setTimeout(()=> e.click(),2000);
            flag = false;
            break;
        }
    }
    if (currentPage == '10') location.href = "https://www.google.com/";
    if(flag) setTimeout(()=>pnnext.click(),2000);

}