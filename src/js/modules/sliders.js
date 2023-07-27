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
            "container": '.promotions__slider-wrapper',
            "items": 3,
            "speed": 400,
            "gutter": 30,
            "navPosition": "bottom",
            "controlsContainer": ".promotions__slider-controls",
            'navContainer': ".promotions__slider-nav",
            "navAsThumbnails": true
        });
        
        tns({
            "container": '.reviews__slider-wrapper',
            "items": 2,
            "speed": 400,
            "gutter": 30,
            "navPosition": "top",
            "controlsContainer": ".reviews__slider-controls",
            'navContainer': ".reviews__slider-nav",
            "navAsThumbnails": true
        });
        tns({
            "container": '.licenses__slider-wrapper',
            "items": 4,
            "speed": 400,
            "gutter": 30,
            "navPosition": "top",
            "controlsContainer": ".licenses__slider-controls",
            'navContainer': ".licenses__slider-nav",
            "navAsThumbnails": true
        });
        tns({
            "container": '.aboutClinic__slider-wrapper',
            "items": 4,
            "speed": 400,
            "gutter": 30,
            "navPosition": "top",
            "controlsContainer": ".aboutClinic__slider-controls",
            'navContainer': ".aboutClinic__slider-nav",
            "navAsThumbnails": true
        });
    } else if(container.clientWidth == 984) {
        tns({
            "container": '.promotions__slider-wrapper',
            "items": 3,
            "speed": 400,
            "gutter": 42,
            "navPosition": "bottom",
            "controlsContainer": ".promotions__slider-controls",
            'navContainer': ".promotions__slider-nav",
            "navAsThumbnails": true
        });
        tns({
            "container": '.reviews__slider-wrapper',
            "items": 2,
            "speed": 400,
            "gutter": 20,
            "navPosition": "top",
            "controlsContainer": ".reviews__slider-controls",
            'navContainer': ".reviews__slider-nav",
            "navAsThumbnails": true
        });
        tns({
            "container": '.licenses__slider-wrapper',
            "items": 4,
            "speed": 400,
            "gutter": 20,
            "navPosition": "top",
            "controlsContainer": ".licenses__slider-controls",
            'navContainer': ".licenses__slider-nav",
            "navAsThumbnails": true
        });
        tns({
            "container": '.aboutClinic__slider-wrapper',
            "items": 4,
            "speed": 400,
            "gutter": 20,
            "navPosition": "top",
            "controlsContainer": ".aboutClinic__slider-controls",
            'navContainer': ".aboutClinic__slider-nav",
            "navAsThumbnails": true
        });
    } else if(container.clientWidth == 728) {
        tns({
            "container": '.promotions__slider-wrapper',
            "items": 2,
            "speed": 400,
            "gutter": 20,
            "navPosition": "bottom",
            "controlsContainer": ".promotions__slider-controls",
            'navContainer': ".promotions__slider-nav",
            "navAsThumbnails": true
        });
        tns({
            "container": '.reviews__slider-wrapper',
            "items": 1,
            "speed": 400,
            "gutter": 20,
            "navPosition": "top",
            "controlsContainer": ".reviews__slider-controls",
            'navContainer': ".reviews__slider-nav",
            "navAsThumbnails": true
        });
        tns({
            "container": '.licenses__slider-wrapper',
            "items": 2,
            "speed": 400,
            "gutter": 30,
            "navPosition": "top",
            "controlsContainer": ".licenses__slider-controls",
            'navContainer': ".licenses__slider-nav",
            "navAsThumbnails": true
        });
        tns({
            "container": '.aboutClinic__slider-wrapper',
            "items": 2,
            "speed": 400,
            "gutter": 20,
            "navPosition": "top",
            "controlsContainer": ".aboutClinic__slider-controls",
            'navContainer': ".aboutClinic__slider-nav",
            "navAsThumbnails": true
        });
    } else if(container.clientWidth == 540) {
        tns({
            "container": '.promotions__slider-wrapper',
            "items": 2,
            "speed": 400,
            "gutter": 20,
            "navPosition": "bottom",
            "controlsContainer": ".promotions__slider-controls",
            'navContainer': ".promotions__slider-nav",
            "navAsThumbnails": true
        });
        tns({
            "container": '.reviews__slider-wrapper',
            "items": 1,
            "speed": 400,
            "gutter": 20,
            "navPosition": "top",
            "controlsContainer": ".reviews__slider-controls",
            'navContainer': ".reviews__slider-nav",
            "navAsThumbnails": true
        });
        tns({
            "container": '.licenses__slider-wrapper',
            "items": 2,
            "speed": 400,
            "gutter": 20,
            "navPosition": "top",
            "controlsContainer": ".licenses__slider-controls",
            'navContainer': ".licenses__slider-nav",
            "navAsThumbnails": true
        });
        tns({
            "container": '.aboutClinic__slider-wrapper',
            "items": 2,
            "speed": 400,
            "gutter": 20,
            "navPosition": "top",
            "controlsContainer": ".aboutClinic__slider-controls",
            'navContainer': ".aboutClinic__slider-nav",
            "navAsThumbnails": true
        });
    } else if(container.clientWidth < 540) {
        tns({
            "container": '.promotions__slider-wrapper',
            "items": 1,
            "speed": 400,
            "navPosition": "bottom",
            "controlsContainer": ".promotions__slider-controls",
            'navContainer': ".promotions__slider-nav",
            "navAsThumbnails": true
        });
        tns({
            "container": '.reviews__slider-wrapper',
            "items": 1,
            "speed": 400,
            "navPosition": "top",
            "controlsContainer": ".reviews__slider-controls",
            'navContainer': ".reviews__slider-nav",
            "navAsThumbnails": true
        });
        tns({
            "container": '.licenses__slider-wrapper',
            "items": 1,
            "speed": 400,
            "navPosition": "top",
            "controlsContainer": ".licenses__slider-controls",
            'navContainer': ".licenses__slider-nav",
            "navAsThumbnails": true
        });
        tns({
            "container": '.aboutClinic__slider-wrapper',
            "items": 1,
            "speed": 400,
            "navPosition": "top",
            "controlsContainer": ".aboutClinic__slider-controls",
            'navContainer': ".aboutClinic__slider-nav",
            "navAsThumbnails": true
        });
    } 

    tns({
        "container": '.doctors__slider-wrapper',
        "items": 1,
        "speed": 400,
        "controlsContainer": ".doctors__slider-controls",
        'navContainer': ".doctors__slider-nav",
        "navAsThumbnails": true
    });
    
};

export default sliders;
export { countDots };