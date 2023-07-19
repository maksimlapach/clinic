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
    const container = document.querySelector(".container");
    console.log(container.clientWidth); 
    
    if(container.clientWidth > 984) {
        tns({
            "container": '.promotions .slider__wrapper',
            "items": 3,
            "speed": 400,
            "gutter": 30,
            "navPosition": "bottom",
            "controlsContainer": ".promotions .slider__controls",
            'navContainer': ".promotions .slider__nav",
            "navAsThumbnails": true
        });
        // tns({
        //     "container": '.doctors .slider__wrapper',
        //     "items": 1,
        //     "speed": 400,
        //     "controlsContainer": ".doctors .slider__controls",
        //     'navContainer': ".doctors .slider__nav",
        //     "navAsThumbnails": true
        // });
        // tns({
        //     "container": '.reviews .slider__wrapper',
        //     "items": 2,
        //     "speed": 400,
        //     "gutter": 30,
        //     "navPosition": "top",
        //     "controlsContainer": ".reviews .slider__controls",
        //     'navContainer': ".reviews .slider__nav",
        //     "navAsThumbnails": true
        // });
        // tns({
        //     "container": '.licenses .slider__wrapper',
        //     "items": 4,
        //     "speed": 400,
        //     "gutter": 30,
        //     "navPosition": "top",
        //     "controlsContainer": ".licenses .slider__controls",
        //     'navContainer': ".licenses .slider__nav",
        //     "navAsThumbnails": true
        // });
        // tns({
        //     "container": '.aboutClinic .slider__wrapper',
        //     "items": 4,
        //     "speed": 400,
        //     "gutter": 30,
        //     "navPosition": "top",
        //     "controlsContainer": ".aboutClinic .slider__controls",
        //     'navContainer': ".aboutClinic .slider__nav",
        //     "navAsThumbnails": true
        // });
    } else if(container.clientWidth == 984) {
        tns({
            "container": '.promotions .slider__wrapper',
            "items": 3,
            "speed": 400,
            "gutter": 42,
            "navPosition": "bottom",
            "controlsContainer": ".promotions .slider__controls",
            'navContainer': ".promotions .slider__nav",
            "navAsThumbnails": true
        });
    } else if(container.clientWidth == 728) {
        tns({
            "container": '.promotions .slider__wrapper',
            "items": 2,
            "speed": 400,
            "gutter": 20,
            "navPosition": "bottom",
            "controlsContainer": ".promotions .slider__controls",
            'navContainer': ".promotions .slider__nav",
            "navAsThumbnails": true
        });
    } else if(container.clientWidth == 540) {
        tns({
            "container": '.promotions .slider__wrapper',
            "items": 2,
            "speed": 400,
            "gutter": 20,
            "navPosition": "bottom",
            "controlsContainer": ".promotions .slider__controls",
            'navContainer': ".promotions .slider__nav",
            "navAsThumbnails": true
        });
    } else if(container.clientWidth < 540) {
        tns({
            "container": '.promotions .slider__wrapper',
            "items": 1,
            "speed": 400,
            "gutter": 20,
            "navPosition": "bottom",
            "controlsContainer": ".promotions .slider__controls",
            'navContainer': ".promotions .slider__nav",
            "navAsThumbnails": true
        });
    } 
    
};

export default sliders;
export { countDots };