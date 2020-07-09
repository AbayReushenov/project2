'user strict';

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

sendGetPost("GET", webURL).then(data => console.log(data)).catch(err => console.log(err));
sendGetPost("GET", URL2).then(data => console.log(data)).catch(err => console.log(err));

// POST
const bodyforma = {
        id: 50,
        name: "Reushenov",
        username: "username",
        email: "684@melissa.tv",
        address: {
          street: "Plains",
          suite: 8,
          city: "wef we234 rgh",
          zipcode: 71,
          geo: {
            lat: -11.95,
            lng: -17.18
          }
        }
};
//

sendGetPost("POST", webURL, bodyforma).then(data => console.log(data)).catch(err => console.log(err));
sendGetPost("POST", URL2, bodyforma).then(data => console.log(data)).catch(err => console.log(err));
