let text = {
    "1": 'Пример текста: ',
    "2": 'Пример другого текста',
}
const bodyMarq = document.querySelector('marquee.marq0');
bodyMarq.style.display = "block";
bodyMarq.innerHTML = text['1'] ;
const body = document.querySelectorAll('div.inner')[0];
body.style.display = "block";
const body1 = document.querySelectorAll('div.inner')[1];
body1.style.display = "block";
const body2 = document.querySelectorAll('div.inner')[2];
body2.style.display = "block";


let numbers = [ 1, 10, 15, 20, -5 , 8, 14];

for (let i = 0; i < numbers.length; i++) {
   // console.log(numbers[i]);
       body.innerHTML += `
    <div class="inner"> 
     <marquee class="marq1">${numbers[i]}</marquee>
    </div>`;
 }

numbers.forEach(function(item, i) {
   // console.log(item);
    body1.innerHTML += `
    <div class="inner"> 
     <marquee class="marq1">Key: ${i} Value: ${item}</marquee>
    </div>`;
});

numbers.forEach(function(item, i) {
    if (item >= 0) {
      //  console.log(item);
        body2.innerHTML += `
        <div class="inner"> 
        <marquee class="marq1">Key: ${i} Value: ${item}</marquee>
        </div>`;};

});

const names = ["Ivan", "Maria", "Miron", "Anna", "Voldemar"];

const divFilter = document.createElement('div.filter');

divFilter.innerHTML = names;

document.querySelector('div.massiv').appendChild(divFilter);

const shortNamesc = names.filter(function(imena) {
    return imena.length < 5;
});
const filter1 = document.querySelector('.filter');
//filter1.style.display = "block";
filter1.innerHTML = shortNamesc;

//-------------
// map

let answers = ["Ivan", "MarIa", "MirOn", "AnnA", "VoldemaR"];

const result = answers.map(item => item.toLocaleLowerCase());
filter1.innerHTML = filter1.textContent + '<br>' + answers + '<br>' + result;
//-
answers = answers.map(item => item.toLocaleLowerCase());

console.log(answers);
//-
//  every/some
const massivi = [3, 4, 'iuygdeiuh', false, true, 'iuyhgwdsiubhlswd2ijkhlswjklnsw'];

console.log(massivi.some(item => typeof(item) === 'number'));
// => true

console.log(massivi.every(item => typeof(item) === 'number'));
// false

// let numbers = [ 1, 10, 15, 20, -5 , 8, 14];
console.log(numbers.every(item => typeof(item) === 'number'));
// => true

//----------
// reduce
// соьбирать массивы

const arr = numbers;

const res = arr.reduce((sum, current) => sum + current);

console.log(res);
// 63

const arr2 = ['apple', 'grapefruit', 'blueberry', "strawbwrry"];
const res2 = arr2.reduce((sum2, current2) => `${sum2}, ${current2}`);

console.log(res2);
// => apple, grapefruit, blueberry, strawbwrry


// С начальным значением (1000)
const arr3 = numbers;
const res3 = arr3.reduce((sum, current) => sum + current, 1000);

console.log(res3);
// 1063
// 1000 = начальное значение

// пример 
// с объектом

const onject = {
    pitr: "persona",
    potr: "persona",
    petr: "persona",
    patr: "persona",
    weeritr: "persona",
    itr: "animal",
    hhhpitr: "animal",
    pyyyr: "animal",
    Oppbhpitr: "animal",
};

const newObj = Object.entries(onject)
.filter(item => item[1] === "persona")
.map(item => item[0]);


console.log(newObj);

// 0:     ["pitr", "persona"]
// 1: (2) ["potr", "persona"]
// 2: (2) ["petr", "persona"]
// 3: (2) ["patr", "persona"]
// 4: (2) ["weeritr", "persona"]
// 5: (2) ["itr", "animal"]
// 6: (2) ["hhhpitr", "animal"]
// 7: (2) ["pyyyr", "animal"]
// 8: (2) ["Oppbhpitr", "animal"]

// .filter => 
// 0: (2) ["pitr", "persona"]
// 1: (2) ["potr", "persona"]
// 2: (2) ["petr", "persona"]
// 3: (2) ["patr", "persona"]
// 4: (2) ["weeritr", "persona"]

// .map => получили массив имен
//  ["pitr", "potr", "petr", "patr", "weeritr"]




