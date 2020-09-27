let sites = {
    "xn----7sbab5aqcbiddtdj1e1g.xn--p1ai":["Гобой","Саксофон","Валторна","Фагот","Скрипка","Флейта","Как звучит флейта"],
    "crushdrummers.ru":["Барабанное шоу","Шоу барабанщиков в Москве","Заказать барабанщиков в Москве"]
};

let site = Object.keys(sites)[getRandom(0,Object.keys(sites).length)];

function getRandom(min,max){
    return Math.floor(Math.random()*(max-min)+min);
}

let keywords = sites[site];
let keyword = keywords[getRandom(0,keywords.length)];

console.log(site, keywords, keyword)

// xn----7sbab5aqcbiddtdj1e1g.xn--p1ai [
//     'Гобой',
//     'Саксофон',
//     'Валторна',
//     'Фагот',
//     'Скрипка',
//     'Флейта',
//     'Как звучит флейта'
//   ] Саксофон