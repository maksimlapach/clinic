function menu() {
    const showBtn = document.querySelector(".header__hamburger"),
          closeBtn = document.querySelector(".header__menu-close"),
          menu = document.querySelector(".header__menu"),
          overlay = document.querySelector(".header__menu-overlay");
    
    function showMenu() {
        menu.classList.add("header__menu_active");
        document.body.style.overflow = 'hidden';
    }    

    function hideMenu() {
        menu.classList.remove("header__menu_active");
        document.body.style.overflow = 'visible';
    }

    showBtn.addEventListener('click', () => {
        showMenu();
    });
    closeBtn.addEventListener('click', () => {
        hideMenu();
    })
    document.addEventListener('keydown', (e) => {
        if(e.key == 'Escape') {
            hideMenu();
        }
    });
    menu.addEventListener('click', (e) => {
        if(e.target == overlay) {
            hideMenu();
        }
    });
}

export default menu;