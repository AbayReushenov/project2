window.addEventListener("DOMContentLoaded", () => {

    const hrefButton = document.querySelectorAll('[href="#"]'),
        rusButtonText = ['Первый', "Второй", "Третий", "Четветрый", "Пятый"],
        engButtonText = ['First', "Second", "Third", 'Fourth', "Fifth"],
        oldHtmlButtonText = [];

    for (let i = 0; i < hrefButton.length; i++) {

        oldHtmlButtonText.push(hrefButton[i].textContent);

        hrefButton[i].textContent = rusButtonText[i];

        hrefButton[i].addEventListener('mouseover', () => hrefButton[i].textContent = engButtonText[i]);
    }

    hrefButton.forEach((button, index) => button.addEventListener('mouseout', function () {
        this.textContent = rusButtonText[index];
    }));

    hrefButton.forEach((button, index) => button.addEventListener('mousedown', function () {
        this.textContent = oldHtmlButtonText[index];
    }));
    // ----------------
    var start = null;
    var element = hrefButton[1];

    function step(timestamp) {
        if (!start) start = timestamp;
        var progress = timestamp - start;

        hrefButton.forEach(button => {
            button.addEventListener('dblclick', function () {
                this.style.transform = 'translateY(' + Math.min(progress / 10, 200) + 'px)';
            });
        });

        if (progress < 2000) {
            window.requestAnimationFrame(step);
        }
    }

    window.requestAnimationFrame(step);
    //-----------------

    const btn = document.querySelector('.btn'),
        elem = document.querySelectorAll('.box');

    elem[0].textContent = 'myAnimationXi()';
    elem[1].textContent = 'myAnimation()';

    let pos = 0;

    function myAnimationXi() {
        let pos = 0;

        const id = setInterval(frame, 20);

        function frame() {
            if (pos == 300) {
                clearInterval(id);
            } else {
                pos++;
                elem[0].style.top = pos + "px";
                elem[0].style.left = pos + 'px';
            }
        }
    }

    function myAnimation() {
        pos++;
        elem[1].style.top = pos + "px";
        elem[1].style.left = pos + 'px';

        if (pos < 300) {
            requestAnimationFrame(myAnimation);
        }
    }

    btn.addEventListener('click', () => {
        requestAnimationFrame(myAnimation);
        myAnimationXi();
    });

    let id = requestAnimationFrame(myAnimation);
    cancelAnimationFrame(id);

    //---
    elem.onclick = function () {
        animate({
            duration: 1000,
            timing: function (timeFraction) {
                return timeFraction;
            },
            draw: function (progress) {
                elem.style.width = progress * 100 + '%';
            }
        });
    };

    function animate({
        duration,
        draw,
        timing
    }) {

        let start = performance.now();

        requestAnimationFrame(function animate(time) {
            let timeFraction = (time - start) / duration;
            if (timeFraction > 1) {timeFraction = 1;}

            let progress = timing(timeFraction);

            draw(progress);

            if (timeFraction < 1) {
                requestAnimationFrame(animate);
            }

        });
    }
    //--
    function makeEaseOut(timing) {
        return function(timeFraction) {
          return 1 - timing(1 - timeFraction);
        };
      }
  
      function bounce(timeFraction) {
        for (let a = 0, b = 1, result; 1; a += b, b /= 2) {
          if (timeFraction >= (7 - 4 * a) / 11) {
            return -Math.pow((11 - 6 * a - 11 * timeFraction) / 4, 2) + Math.pow(b, 2);
          }
        }
      }
  
      let bounceEaseOut = makeEaseOut(bounce);
  
      const brick = document.querySelector('div#brick');
      brick.onclick = function() {
        animate({
          duration: 3000,
          timing: bounceEaseOut,
          draw: function(progress) {
            brick.style.left = progress * 500 + 'px';
          }
        });
      };


    //---
});