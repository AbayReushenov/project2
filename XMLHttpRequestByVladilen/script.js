'user strict';

const newURL = 'users.json';
const webURL = 'https://jsonplaceholder.typicode.com/users';
const URL2 = 'https://jsonplaceholder.typicode.com/photos';

function sendGetPost(method, url, body = null) {
    return new Promise((resolve, reject) => {
        const XHR = new XMLHttpRequest();

        XHR.open(method, url);

        XHR.responseType = 'json'; 
        XHR.setRequestHeader("Content-Type", 'application/json');

        XHR.onload = () => {
            if (XHR.status >= 400) {
                reject(XHR.response);
                } else {
                resolve(XHR.response);
                }
        };

        XHR.onerror = () => (reject(XHR.response));

        XHR.send(JSON.stringify(body));
    });
}
// метод sendGetPost возвращает Promise который мы зачейним (?)
sendGetPost("GET", newURL).then(data => console.log(data)).catch(err => console.log(err));
sendGetPost("GET", webURL).then(data => console.log(data)).catch(err => console.log(err));
sendGetPost("GET", URL2).then(data => console.log(data)).catch(err => console.log(err));

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
sendGetPost("POST", newURL, bodyforma).then(data => console.log(data)).catch(err => console.log(err));
sendGetPost("POST", webURL, bodyforma).then(data => console.log(data)).catch(err => console.log(err));
sendGetPost("POST", URL2, bodyforma).then(data => console.log(data)).catch(err => console.log(err));
