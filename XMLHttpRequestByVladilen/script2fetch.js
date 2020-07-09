'user strict';

const webURL = 'https://jsonplaceholder.typicode.com/users';


function sendGetPost(method, url, body = null) {
    const headers = {
        "Content-Type": 'application/json'
    } ;
    return fetch(url, {
        method: method,
        body: JSON.stringify(body),
        headers: headers
    }).then(response => {
        if (response.ok) {
            return response.json(); 
        } 
        return response.json().then(error => {
                const e = new Error('Что-то пошло не так');
                e.data = error;
                throw e;
        });
        
    });
    }

sendGetPost("GET", webURL).then(data => console.log(data)).catch(err => console.log(err));

// POST
const bodyforma = {
        id: 50,
        name: "Reushenov Abay",
        username: "username",
        email: "684561@melissa.tv",
        address: {
          street: "dddor Plains",
          suite: 879,
          city: "wef we234 rgh",
          zipcode: 7771,
          geo: {
            lat: -13.9509,
            lng: -14.4618
          }
        }
};
//
sendGetPost("POST", webURL, bodyforma).then(data => console.log(data)).catch(err => console.log(err));

