import sliders from "./modules/sliders";
import { countDots } from "./modules/sliders";
import showSlideToWindow from "./modules/showSlideToWindow";

document.addEventListener("DOMContentLoaded", () => {
    countDots('.promotions .slider__slide', '.promotions .slider__nav', 'slider__nav_dot');
    countDots('.reviews .slider__slide', '.reviews .slider__nav', 'slider__nav_dot');
    countDots('.licenses .slider__slide', '.licenses .slider__nav', 'slider__nav_dot');
    countDots('.aboutClinic .slider__slide', '.aboutClinic .slider__nav', 'slider__nav_dot');
    sliders();
    showSlideToWindow('.aboutClinic .slider__wrapper', '.aboutClinic__img', '.aboutClinic .tns-slide-active img');
});