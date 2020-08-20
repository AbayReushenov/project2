const zaprosNaServer = async url => {
    const otvetOtServera = await fetch(url);
    if (!otvetOtServera.ok) {
      throw new Error(`Sorry you have  code of error on url: ${url}, status : ${otvetOtServera.status}`)
    }
    const pereformatVJson = await otvetOtServera.json()
  return pereformatVJson
}

zaprosNaServer('https://jsonplaceholder.typicode.com/posts/1')
  .then(nashiDannyVJson => console.log("WoW", nashiDannyVJson))
  .catch(error => console.error("code oshibka", error))

  // WoW {userId: 1, id: 1, title: "sunt aut facere repellat provident occaecati excepturi optio reprehenderit", body: "quia et suscipit↵suscipit recusandae consequuntur …strum rerum est autem sunt rem eveniet architecto"}

zaprosNaServer('https://jsonplaceholder.typicode.com/todos/100000')
  .then(nashiDannyVJson => console.log("WoW", nashiDannyVJson))
  .catch(error => console.error(error))

// zaprosNaServer.js:2 GET https://jsonplaceholder.typicode.com/todos/100000 404
// zaprosNaServer @ zaprosNaServer.js:2
// (anonymous) @ zaprosNaServer.js:16
// zaprosNaServer.js:18 Error: Sorry you have  code of error on url: https://jsonplaceholder.typicode.com/todos/100000, status : 404
//     at zaprosNaServer (zaprosNaServer.js:4)

