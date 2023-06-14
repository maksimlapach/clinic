function showSlideToWindow(sliderWrapper, slideWindow, activeSlide) {
    const slider = document.querySelector(sliderWrapper),
          window = document.querySelector(slideWindow),
          slideActive = document.querySelector(activeSlide);
    window.src = slideActive.src;
    slider.addEventListener('click', (e) => {
        if(e.target.tagName === 'IMG') {
            window.src = e.target.src;
            window.alt = e.target.alt;
        }
    });
}  

export default showSlideToWindow;