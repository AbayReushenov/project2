const xFetcherPromise = new Promise( // создаём промис, используя ключевое слово new и записываем его в переменную
    function(resolve, reject) { // конструктор промиса использует аргумент функции с другими аргументами — resolve и reject
      $.get("X") // посылаем AJAX-запрос
        .done(function(X) { // как только запрос завершён
          resolve(X); // промис использует resolve с переменной X в качестве аргумента
        })
        .fail(function(error) { // если запрос отклонён
          reject(error); // промис использует reject с error в качестве аргумента
        });
    }
  )

  xFetcherPromise
  .then(function(X) {
    console.log(X);
  })
  .catch(function(err) {
    console.log(err)
  })