import sliders from "./modules/sliders";
import { countDots } from "./modules/sliders";

document.addEventListener("DOMContentLoaded", () => {
    countDots('.promotions .slider__wrapper div', '.promotions .slider__nav', 'slider__nav_dot');
    sliders();
});