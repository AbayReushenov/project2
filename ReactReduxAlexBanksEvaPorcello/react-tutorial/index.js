var target = document.getElementById('target');
var wrapper = document.createElement('div');
var headline = document.createElement('h1');
wrapper.id = "welcome";
headline.innerText = "Hello World";
wrapper.appendChild(headline);
target.appendChild(wrapper);

function Header(text) {
  let h1 = document.createElement('h1');
  h1.innerText = text;
  document.body.appendChild(h1);
}
Header("Header() caused side effects");
//----------------------------
// $.ajax({
//   url: 'https://randomuser.me/api/',
//   dataType: 'json',
//   success: function(data) {
//     console.log(data);
//   }
// });
//--------     
const getFakeMembers = count => new Promise((resolves, rejects) => {
  const api = `https://api.randomuser.me/?nat=US&results=${count}`
  const request = new XMLHttpRequest()
  request.open('GET', api)
  request.onload = () =>
    (request.status === 200) ?
    resolves(JSON.parse(request.response).results) :
    reject(Error(request.statusText))
  request.onerror = (err) => rejects(err)
  request.send()
})

const userLogs = userName => message =>
  console.log(`${userName} -> ${message}`)

const log = userLogs("grandpa23")

log("attempted to load 20 fake members")

getFakeMembers(20).then(
  members => log(`successfully loaded ${members.length} members`), error => log("encountered an error loading members")
)
// grandpa23 -> attempted to load 20 fake members
// grandpa23 -> successfully loaded 20 members


const countdown = (value, fn) => {
  fn(value)
  return (value > 0) ? countdown(value - 1, fn) : value
}
countdown(10, value => console.log(value));
// 10
// 9
// 8
// 7
// 6
// 5
// 4
// 3
// 2
// 1
// 0