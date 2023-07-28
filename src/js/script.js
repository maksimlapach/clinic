import sliders from "./modules/sliders";
import cards from "./modules/cards";
import { countDots } from "./modules/sliders";
import showSlideToWindow from "./modules/showSlideToWindow";
import modals from "./modules/modals";
import forms from "./modules/forms";
import helper from "./modules/helper";
import { headerMenu } from "./modules/menu";
import { footerMenu } from "./modules/menu";

document.addEventListener("DOMContentLoaded", () => {
    cards();

    countDots('.promotions__slide', '.promotions__slider-nav', 'promotions__nav-dot');
    countDots('.reviews__slide', '.reviews__slider-nav', 'reviews__nav-dot');
    countDots('.licenses__slide', '.licenses__slider-nav', 'licenses__nav-dot');
    countDots('.aboutClinic__slide', '.aboutClinic__slider-nav', 'aboutClinic__nav-dot');
    sliders();

    showSlideToWindow('.aboutClinic__slider-wrapper', '.aboutClinic__img');
    modals('.signUpBtn', ".modalSignUp", ".modalSignUp__close", ".signUpForm");
    modals('.priceBtn', ".modalPrice", ".modalPrice__close", ".signUpForm");
    forms(".signUpForm", ".modalSignUp", ".modalResult", ".modalResult__content");
    helper();
    headerMenu();
    footerMenu();
});