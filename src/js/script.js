import sliders from "./modules/sliders";
import { countDots } from "./modules/sliders";

document.addEventListener("DOMContentLoaded", () => {
    countDots('.promotions .slider__slide', '.promotions .slider__nav', 'slider__nav_dot');
    countDots('.reviews .slider__slide', '.reviews .slider__nav', 'slider__nav_dot');
    countDots('.licenses .slider__slide', '.licenses .slider__nav', 'slider__nav_dot');
    sliders();
});