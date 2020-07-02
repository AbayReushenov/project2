window.addEventListener("DOMContentLoaded", () => {
    // alert("DOM готов!");
// 1. hide unusefull tabs
// 2. show usefull   tabs
// 3. call eventselector function

    const btns = document.querySelectorAll('.tabheader__item'),
          btnPadre = document.querySelector('.tabheader__items'),
          btnContent = document.querySelectorAll(".tabcontent");
          
    function hide(item) {
        item.forEach((element) => {
            // element.style.display = 'none';
            element.classList.add("hide");
            element.classList.remove("show", 'fade');            
            });
    }

    const show = (i = 0) =>  {
        // btns[i].style.display = 'block';
        // btnContent[i].style.display = 'block';
        btnContent[i].classList.add('show', 'fade');
        btnContent[i].classList.remove('hide');
        btns[i].classList.add('tabheader__item_active');        
        };
      
    //hide(btns);
    hide(btnContent);
    show();     
    btnPadre.addEventListener("click", (event) => {

        const target = event.target;
      
        if (target && target.classList.contains('tabheader__item')) {
        
            btns.forEach((item, i) => {

                if (target == item) {
                    hide(btnContent);
                    show(i);
                }
             });
         }
    });
   
  });