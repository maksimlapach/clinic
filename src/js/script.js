import sliders from "./modules/sliders";
import cards from "./modules/cards";
import { countDots } from "./modules/sliders";
import showSlideToWindow from "./modules/showSlideToWindow";
import modals from "./modules/modals";
import helper from "./modules/helper";

document.addEventListener("DOMContentLoaded", () => {
    cards();
    countDots('.promotions .slider__slide', '.promotions .slider__nav', 'slider__nav_dot');
    countDots('.reviews .slider__slide', '.reviews .slider__nav', 'slider__nav_dot');
    countDots('.licenses .slider__slide', '.licenses .slider__nav', 'slider__nav_dot');
    countDots('.aboutClinic .slider__slide', '.aboutClinic .slider__nav', 'slider__nav_dot');
    sliders();
    showSlideToWindow('.aboutClinic .slider__wrapper', '.aboutClinic__img', '.aboutClinic .tns-slide-active img');
    modals('.signUpBtn', ".modalSignUp", ".modalSignUp__close");
    modals('.priceBtn', ".modalPrice", ".modalPrice__close");
    helper();
});