// Теговые шаблоны
// Являются расширенной формой шаблонных литералов и позволяют разбирать их с помощью функции. При вызове функции первый аргумент содержит массив строковых значений между интерполированными значениями. Чтобы уместить их все, используйте оператор spread (...). Библиотека styled-components написана с применением теговых шаблонов.

// Ниже приведён небольшой пример их работы:



function highlight(strings, ...values) {
    const interpolation = strings.reduce((prev, current) => {
      return prev + current + (values.length ? "" + values.shift() + "" : "");
    }, "");
  
    return interpolation;
  }
  
  const condiment = "jam";
  const meal = "toast";
  
  console.log(highlight`I like ${condiment} on ${meal}.`)
  // «мне нравится варенье на тосте»
  //I like jam on toast.

  // console.log(highlight(`I like ${condiment} on ${meal}.`))
  // error

  function comma(strings, ...values) {
    return strings.reduce((prev, next) => {
      let value = values.shift() || [];
      value = value.join(", ");
      return prev + next + value;
    }, "");
  }
  
  const snacks = ['apples', 'bananas', 'cherries'];
  console.log(comma`I like ${snacks} to snack on.`) 
  //I like apples, bananas, cherries to snack on.
