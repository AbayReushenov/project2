'use strict';
// <!-- 1 блок Вариант1
// заполняется форма  :   <form id="myForm" class="form">
// обязательно наличие:  inTo.preventDefault()
// в JavaScript файле, так как без нее "Событие" исполняется только один раз
// Обрабатывается событие 'sibmit'
const myForm = document.querySelector('#myForm');

myForm.addEventListener("submit", (inTo) => {
        inTo.preventDefault(),
      // блокируем досрочное закрытие сайта
        console.log(`Form has been submitted!`);
        });
// -- - - --- - -- - -  -- - 

document.addEventListener('DOMContentLoaded', () => {
  const movieDB = {
    movies: [
        "Логан",
        "Лига справедливости",
        "Ла-ла лэнд",
        "Одержимость",
        "Скотт Пилигрим против..."
    ]
  };

  const movielist = document.querySelector('.promo__interactive-list'),
      formAdd = document.querySelector('form.add'), 
                // <form class="add">
      addInput = formAdd.querySelector(".adding__input" ), 
                // <input class="adding__input" 
      checkbox = formAdd.querySelector('[type="checkbox"]');    
            // <input type="checkbox">

            // после его наступления запусается callback функция
  formAdd.addEventListener('submit', (event) => {
          // чтобы наша страница не перезагружалась
      event.preventDefault();
        // записываем то что набил user в поле addInput
      let newFilm = addInput.value;
      const favorite = checkbox.checked;
      // атрибут для boolean
      if (newFilm) { 
              //не false, false если пустая строка
              // заносим новый фильм в нашу базу данных .push(newFilm)
            if (newFilm.length > 21) {
                  newFilm  = `${newFilm.substring(0, 21)}...`;
                // 21- я не включать
              }
            if (favorite) {
                  console.log('"Добавляем любимый фильм"');
              }
            movieDB.movies.push(newFilm);
                        // отсортируем  новый список 
            sortArr(movieDB.movies); 
                    
            createMovieList(movieDB.movies, movielist); 
        }    
          //очистим нашу форму addForm.reset();  или другой способ
      event.target.reset();
    });

    const sortArr = (arr) => {
        arr.sort();
      };

    function createMovieList(films, parent) {
        parent.innerHTML = ''; // очистка элемента, запись "ничего"
        
        sortArr(films);

        films.forEach((film, i) => {  
              parent.innerHTML += `
              <li class="promo__interactive-item">${1 + i} ${film}
              <div class="delete"><button>Удалить?</button></div></li>`;
             });
        
             // удаляем фильм при нажатии нам корзинку

        document.querySelectorAll('.delete').forEach((argumentBaton, iArg) => {
          argumentBaton.addEventListener('click', () => {
              argumentBaton.parentElement.remove();
              movieDB.movies.splice(iArg, 1);
              createMovieList(films, parent); // для индексации
            });
          });
      }

createMovieList(movieDB.movies, movielist); 

});

// -- - - -- ------ - - - 
// Событие 'onclick', вписано в html страницу
// <h2 onclick="console.log('work')">Hello, world</h2>
// недостатки:
// * можно повесить только 1 событие на нажатие кнопки
function helloFunction() {
    // console.log(this );
    console.log(`Hi!`);
  }
 
function byfunction() {
    // console.log(this );
    console.log(`Bye!`);
  }

document.querySelector('#h3').onclick = function () {
  console.log(".onclick = js function  #h3");
};

document.querySelector('#h4').onclick = helloFunction;
// без ()  Это важно!
// иначе функция сразу отработает и на onclick не среагирует
//  если важен вызов функции
// использовать ананимную ф. с включенной helloFunction();
document.querySelector('#h5').onclick = function() {
  helloFunction();
};

document.querySelector('#h6').onclick = function() {
  helloFunction();
  byfunction();
};


const h7 = document.querySelector('#h7');

h7.addEventListener("click", (inTo) => {
  inTo.preventDefault(),
  // блокируем досрочное закрытие сайта
  // чтобы наша страница не перезагружалась
  // мы отменяем его по ?Ajahx? технологии
console.log(`#h7`);
  
});

document.querySelector('#h8').addEventListener("click", helloFunction);

// далее 2 события к одному клику на тег:
// this (контекст) сохраняется
document.querySelector('#h9').addEventListener("click", helloFunction);
document.querySelector('#h9').addEventListener("click", byfunction);
document.querySelector('#h9').addEventListener("click", helloFunction);
// Можно удалить ненужные обработки. Удалятся все внесенные:
document.querySelector('#h9').removeEventListener("click", helloFunction);
// и снова добавить
document.querySelector('#h9').addEventListener("click", helloFunction);






//------------------------

// document.querySelector('#h4').onclick = helloFunction;
// document.querySelector('#h4').onclick = byfunction;
// если на событие повесить 2 функции  указанным выше способом
// сработает только последняя функция
// повесить 2 функции иожно через анонимную функцию
// document.querySelector('#h4').onclick =  = function() {
//   helloFunction();
//   byfunction();
// };
// Можно , но осторожно
// function helloFunction() {
//   console.log(this );
//   console.log(`Hi!`);
// }

// function byfunction() {
//   console.log(this );
//   console.log(`Bye!`);
// }
// в консоле будет потерян контекст:
// Window {parent: Window, opener: null, top: Window, length: 0, frames: Window, …}
// script.js:12 Hi!
// script.js:16 Window {parent: Window, opener: null, top: Window, length: 0, frames: Window, …}
// script.js:17 Bye!




