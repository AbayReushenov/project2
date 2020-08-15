async function getGithubUser(username) { 
    // ключевое слово async позволяет использовать await в функции, которая возвращает промис
    const response = await fetch(`https://api.github.com/users/${username}`);
    // выполнение приостановлено до момента получения ответа от переданного промиса
    return response.json();
  }
  
  getGithubUser('mbeaudru')
    .then(user => console.log(user)) 
    // ответ пользователя, проходящего авторизацию: синтаксис await невозможно использовать, поскольку код не является асинхронной функцией
    .catch(err => console.log(err)); 
    // в случае ошибки асинхронной функции, мы увидим её


    //  getGithubUser('mbeaudru')
    // {login: "mbeaudru", id: 8942633, node_id: "MDQ6VXNlcjg5NDI2MzM=", avatar_url: "https://avatars1.githubusercontent.com/u/8942633?v=4", gravatar_id: "", …}


    // getGithubUser('AbayReushenov')
   // {login: "AbayReushenov", id: 44551481, node_id: "MDQ6VXNlcjQ0NTUxNDgx", avatar_url: "https://avatars2.githubusercontent.com/u/44551481?v=4", gravatar_id: "", …}