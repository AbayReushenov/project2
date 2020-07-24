'use strict';

try {
    document.querySelector('.active').addEventListener('click', (e) => {
        console.log('Click!');
        e.target.classList.add('btn_dark');
    });
} catch (err) {
    console.log('внешний блок catch', err.name);
    console.log('внешний блок catch', err.message);
    console.log('внешний блок catch', err.stack);

}
finally {
    try {
        document.querySelector('.active2').addEventListener('click', (event) => {
            console.log('Click2 !');
            event.target.classList.add('btn_dark');
        });
    }
    catch (err) {
        console.log('внешний блок catch 2', err.name);
        console.log('внешний блок catch 2', err.message);
        console.log('внешний блок catch 2', err.stack);
    }
    finally {
        console.log("Final 2");
    }
    console.log("Final 1");
}