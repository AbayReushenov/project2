url = 'https://jsonplaceholder.typicode.com/posts',
     data = {
            username: "Abay",
            title: 'foo',
            body: 'bar',
            userId: 1
            }

fetch('https://jsonplaceholder.typicode.com/posts', {
    method: 'POST',
    body: JSON.stringify(data),
    headers: {
      "Content-type": "application/json; charset=UTF-8"
    }
  })
  .then(response => response.json())
  .then(objectjson => console.log("Hi", objectjson))
  .catch(error => console.error("code oshibka", error))

// Output
// {username: "Abay", title: "foo", body: "bar", userId: 1, id: 101}
// body: "bar"
// id: 101
// title: "foo"
// userId: 1
// username: "Abay"
// __proto__: Object