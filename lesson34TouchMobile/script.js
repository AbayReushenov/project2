// touchstart - срабатывает  в момент касания.
// touchmove - срабатывает при перемещении.
// touchend - срабатывает в момент завершения касания (отжатие).
// touchcancel -  срабатывает в  момент прерывания события (например, создано слишком много точек касания).

// touchenter Запускается, когда точка касания входит в связанный элемент. Это событие не всплывает.
// touchleave Запускается, когда точка касания покидает связанный элемент. Это событие не всплывает.


// Event Name	Description
// touchstart	Triggers when the user makes contact with the touch surface and creates a touch point inside the element the event is bound to.
// touchmove	Triggers when the user moves the touch point across the touch surface.
// touchend	Triggers when the user removes a touch point from the surface. It fires regardless of whether the touch point is removed while inside the bound-to element, or outside, such as if the user's finger slides out of the element first or even off the edge of the screen.
// touchenter	Triggers when the touch point enters the bound-to element. This event does not bubble.
// touchleave	Triggers when the touch point leaves the bound-to element. This event does not bubble.
// touchcancel	Triggers when the touch point no longer registers on the touch surface. This can occur if the user has moved the touch point outside the browser UI or into a plugin, for example, or if an alert modal pops up.


/* Событие DOMContentLoaded происходит когда весь HTML был полностью загружен и пройден парсером, не дожидаясь окончания загрузки таблиц стилей, изображений и фреймов. Значительно отличающееся от него событие load используется для отслеживания только полностью загруженной страницы. Широко распространённой ошибкой является использование load в ситуации когда DOMContentLoaded является более подходящим, будьте внимательны. */
// Пример
// {<script>
//   document.addEventListener("DOMContentLoaded", function(event) {
//     console.log("DOM fully loaded and parsed");
//   });
// </script>
// <script>
//   document.addEventListener("DOMContentLoaded", function(event) {
//     console.log("DOM fully loaded and parsed");
//   });

// for(var i=0; i<1000000000; i++)
// {} // this synchronous script is going to delay parsing of the DOM. So the DOMContentLoaded event is going to launch later.
// </script>}

window.addEventListener("DOMContentLoaded", () => {
    const box = document.querySelector('.box');
    //class="box"
    
    box.addEventListener('touchstart', (e) => {
        e.preventDefault();

        console.log("start");
        console.log(e.touches);
        console.log(e.targetTouches);
        // console.log(e.changedTouches);
    });    
    
        box.addEventListener('touchmove', (e) => {
        e.preventDefault();

        console.log(e.targetTouches[0].pageX);    
    }); 

    // box.addEventListener('touchend', (e) => {
    //         e.preventDefault();

    //         console.log("end");
    //     }); 

    // box.addEventListener('touchcancel', (e) => {
    //         e.preventDefault();

    //         console.log("cancel");
    //     }); 

    // box.addEventListener('touchenter', (e) => {
    //     e.preventDefault();

    //     console.log("enter");    
    //     }); 

    // box.addEventListener('touchleave', (e) => {
    //     e.preventDefault();
        
    //     console.log("leave");
    //     }); 
});

// touches
// targetTouches
// changedTouches

//hammerjs
