window.addEventListener("DOMContentLoaded", () => {
    const body = document.querySelector('body');
    let textNodes = [];
    
    // function recursy (elementos){
    //     elementos.childNodes.forEach( node => {
    //         console.log(node);
    //         if (elementos.childNodes.lenght > 1) {
    //             recursy(node); 
    //         }
    //     });
    // }

    // recursy(body);

    // 2- этап

    // function recursy (elementos){
    //     elementos.childNodes.forEach( node => {
    //         if (node.nodeName === '#text') {
    //             return; 
    //         } else {
    //             console.log(node);
    //             recursy(node);
    //         }
    //     });
    // }

    // recursy(body);

    // 3 этап



    function recursy (elementos){
        elementos.childNodes.forEach( node => {
            // для загаловков H1, H2 etc.
            if (node.nodeName.match(/^\H\d/)) {
                const obj = {
                    header: node.nodeName,
                    content: node.textContent,
                };
                // textNodes.push(node.textContent);
                textNodes.push(obj);
            } else {
                recursy(node);
            }
        });
    }

    recursy(body);

    fetch('https://jsonplaceholder.typicode.com/posts', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json' 
        },
        body: JSON.stringify(textNodes), 
    }) 
    .then(response => response.json())
    .then(json => console.log(json));
// : {…}, 1: {…}, 2: {…}, id: 101}
// 0: {header: "H1", content: "Работа с Jason-server"}
// 1: {header: "H2", content: "1. Терминал"}
// 2: {header: "H1", content: "script59ProverkaOtIvana.js"}
// id: 101
});  


// https://jsonplaceholder.typicode.com/
//
// fetch('https://jsonplaceholder.typicode.com/todos/1')
// .then(response => response.json())
// .then(json => console.log(json))


//     Routes
// All HTTP methods are supported.

// GET	/posts
// GET	/posts/1
// GET	/posts/1/comments
// GET	/comments?postId=1
// GET	/posts?userId=1
// POST	/posts
// PUT	/posts/1
// PATCH	/posts/1
// DELETE	/posts/1
    // console.log(textNodes); 
    // ["Работа с Jason-server", "1. Терминал", "script59ProverkaOtIvana.js"]





// выделяем а затем
// console.dir($0)
// nodeName: "H3"
// nodeType: 1