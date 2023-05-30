import { tns } from 'tiny-slider/src/tiny-slider';

function countDots(slideSelector, indicatorsSelector, selectorDot) {
    const countSlides = document.querySelectorAll(slideSelector),
          indicators = document.querySelector(indicatorsSelector);     

    for(let i = 0; i < countSlides.length; i++) {
        const dot = document.createElement('li');
        dot.classList.add(selectorDot);
        indicators.append(dot);
    }
}

const sliders = () => {
    tns({
        "container": '.promotions .slider__wrapper',
        "items": 3,
        "swipeAngle": false,
        "speed": 400,
        "gutter": 30,
        "navPosition": "bottom",
        "controlsContainer": ".promotions .slider__controls",
        'navContainer': ".promotions .slider__nav",
        "navAsThumbnails": true
    });
    tns({
        "container": '.doctors .slider__wrapper',
        "items": 1,
        "swipeAngle": false,
        "speed": 400,
        "controlsContainer": ".doctors .slider__controls",
        'navContainer': ".doctors .slider__nav",
        "navAsThumbnails": true
    });
};

export default sliders;
export { countDots };