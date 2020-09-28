let weekEn  = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"];
let weekRu = ['Понедельник' , 'Вторник' , 'Среда' , 'Четверг' , 'Пятница' , 'Суббота' , 'Воскресенье' ];

let arr  = new Map ([
    ['en', ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"]],
    ['ru', ['Понедельник' , 'Вторник' , 'Среда' , 'Четверг' , 'Пятница' , 'Суббота' , 'Воскресенье' ]]
]);

alert(`метод If:
${weekIf('ru')};
${weekIf('en')};

метод switch:
${weekSwitch('ru')};
${weekSwitch('en')};

метод многомерный массив:
${callArr('ru')};
${callArr('en')};
`)

function weekIf(lang){
    let arr = []
    if (lang === 'ru'){
        arr.push(...weekRu);
    }else{
        arr.push(...weekEn);
    }
    return arr;
}

function weekSwitch(lang){
    let arr = []
    switch(lang) {
        case 'ru':
            arr.push(...weekRu);
            break;
        case 'en':
            arr.push(...weekEn);
            break;
    }
    return arr;
}

function callArr(lang) {
   return arr.get(lang);
}


