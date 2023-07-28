function showSlideToWindow(sliderWrapper, slideWindow) {
    const slider = document.querySelector(sliderWrapper),
          window = document.querySelector(slideWindow);
    slider.addEventListener('click', (e) => {
        if(e.target.tagName === 'IMG') {
            window.src = e.target.src;
            window.alt = e.target.alt;
        }
    });
}  

export default showSlideToWindow;