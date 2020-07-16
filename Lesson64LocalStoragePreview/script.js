'use strict';

// новый ключ
// localStorage.setItem('key4', 8672347823478);
// localStorage.setItem('ke2', 'ljkh iop ');

// localStorage.removeItem("key");

// console.log(localStorage.getItem('key'));

// localStorage.clear();
// console.log(localStorage.getItem('ke2'));
//-------
{/* <div class="wrapper">
<form class="form-signin">
    <h2 class="form-signin-heading">This is form</h2>
    <input type="text" class="form-control">
    <input id="checkbox" type="checkbox">
    <button class="btn btn-block btn-lg btn-primary">Confirm</button>
</form>
<button id="color" class="btn btn-block btn-lg btn-primary">Change color</button>
</div> */}

// ----
const checkbox = document.querySelector('#checkbox'),
      form = document.querySelector('form'),
      change = document.querySelector('#color');

if (localStorage.getItem('ischecked')) {
    checkbox.checked = true;
}

if ( localStorage.getItem('key4') === 'changedByYou' ) {
    form.style.background = 'red';
}

checkbox.addEventListener('change', () => {
    localStorage.setItem('ischecked', true);    
});

change.addEventListener('click', () => {
    if ( localStorage.getItem('key4') === 'changedByYou' ) {
        localStorage.removeItem('key4');
        form.style.background = '#fff';
    } else { 
        localStorage.setItem('key4', 'changedByYou');
        form.style.background = 'red';
    }
});

const persone = {
    name: 'Abay',
    age: 53
};

const typeJSONpersone = JSON.stringify(persone);
localStorage.setItem('abay', typeJSONpersone);

console.log(JSON.parse(localStorage.getItem('abay')));