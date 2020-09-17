function tabs(tabsSelector, tabsContentSelector, tabsParentSelector, activeClass) {
    //tabs
    let tabs = document.querySelectorAll(tabsSelector), // табы
        tabsContent = document.querySelectorAll(tabsContentSelector), // контент к табам
        tabsParent = document.querySelector(tabsParentSelector); //родитель табов, для делегирования

    function hideTabContent() {

        tabsContent.forEach(item => {
            item.classList.add("hide");
            item.classList.remove("show", 'fade');
        });

        tabs.forEach(item => {
            item.classList.remove(activeClass);
        });
    }

    // функция для показа табов
    function showTabContent(i = 0) {
        // tabsContent[i].style.display = 'block';
        tabsContent[i].classList.add('show', 'fade');
        tabsContent[i].classList.remove('hide');
        tabs[i].classList.add(activeClass);
    }

    hideTabContent();
    showTabContent(); // i = 0 по умолчанию, function showTabContent(i = 0) 

    tabsParent.addEventListener('click', (event) => {
        const target = event.target;
        if (target && target.classList.contains(tabsSelector.slice(1))) {
            tabs.forEach((item, i) => {
                if (target == item) {
                    hideTabContent();
                    showTabContent(i);
                }
            });
        }
    });
}
 
export default tabs;

// ".tabheader__item".slice(1); => "tabheader__item"