fetch('https://jsonplaceholder.typicode.com/posts/1')
  .then(response => response.json())
  .then(newjson => console.log(newjson))

  //{userId: 1, id: 1, title: "sunt aut facere repellat provident occaecati excepturi optio reprehenderit", body: "quia et suscipit↵suscipit recusandae consequuntur …strum rerum est autem sunt rem eveniet architecto"}

  