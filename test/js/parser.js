window.addEventListener("DOMContentLoaded", () => {
    const body = document.querySelector('body');
    let textNodes = [];
 
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
}); 
// : {…}, 1: {…}, 2: {…}, id: 101}
// 0: {header: "H1", content: "Работа с Jason-server"}
// 1: {header: "H2", content: "1. Терминал"}
// 2: {header: "H1", content: "script59ProverkaOtIvana.js"}
// id: 101
 


// https://jsonplaceholder.typicode.com/
