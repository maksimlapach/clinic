function headerMenu() {
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

function footerMenu() {
    const showBtn = document.querySelector(".footer__hamburger"),
          closeBtn = document.querySelector(".footer__menu-close"),
          menu = document.querySelector(".footer__menu");
    
    showBtn.addEventListener('click', () => {
        menu.classList.add("footer__menu_active");
    })
    closeBtn.addEventListener('click', () => {
        menu.classList.remove("footer__menu_active");
    })
    document.addEventListener('keydown', (e) => {
        if(e.key == 'Escape') {
            menu.classList.remove("footer__menu_active");
        }
    });
}

export {headerMenu};
export {footerMenu};
