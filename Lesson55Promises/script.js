"use strict";

console.log('1. Запрос данных ...');

const functionPromise = new Promise(function(resolve, reject) {
  setTimeout(() => {
    console.log('2. Подготовка данных ...');
    
    const goods = {
      name: 'Net',
      price: 8888,
    };
    console.log(goods);

    resolve(goods);
  }, 1000);
});

functionPromise.then((data) => {
  const functionPromise2 = new Promise((resolve, reject) => { 
    setTimeout(() => {
      console.log('3. Обработка данных...');
      console.log(data);
      data.new = true;
      data.id = {
        faie: 10,
        oijh: 'IUGH'
      };

    resolve(data);
    }, 1000);
  });
  functionPromise2.then(data2 => {
    console.log("4. Анализ данных");
    console.log(data2);
    });
});

//метод chain
const chainPr = new Promise((resolve, reject) => {
  setTimeout(() => {
    console.log('2.chainPr. Подготовка ...');
    
    const goods2 = {
      name: 'Net2',
      price: 88882,
    };
    console.log(goods2);

    resolve(goods2);
  }, 1000);
});

chainPr.then((data12) => {
  return new Promise((resolve, reject) => { 
    setTimeout(() => {
      console.log('3.chainPro. Обработка ..');
      console.log(data12);
      data12.new = false;
      data12.id = {
        ops: 120,
       jh: 'IE'
      };

    resolve(data12);
    }, 1000);

}).then((data24) => {
  return new Promise((resolve, reject) => {
    console.log("4.chainPro. Анализ");
    console.log(data24);
    resolve(data24);
}).then((x) => {
  console.log("5.chainPro. Анализ");
  x.data = 152;
  console.log(x);
  return x;
}).then(y => {
  console.log(y);
  return y;
}).then(peremennauaObj => {
  console.log(peremennauaObj);
  return peremennauaObj;
}).then(ouij => {
  return new Promise((resolve, reject) => {
    console.log('new Promise');
    console.log(ouij);
    reject();
}).catch(() => {
  console.error("Error");
});
});
});
}).finally(() =>{
  console.log('Finally');
});

const test = time => {
  return new Promise(resolve => {
    setTimeout(() => resolve(), time);
  });
};
// test(1000).then(() => console.log('1000 ms'));
// test(3000).then(() => console.log('3000 ms'));
Promise.all([test(1000), test(3000)]).then(() => {
  console.log("Hello! all") // 3 sec
});

Promise.race([test(1000), test(3000)]).then(() => {
  console.log("Hello! race") // 1 sec
});