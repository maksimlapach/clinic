function showModal(modalSelector) {
    modalSelector.classList.remove('hide');
    modalSelector.classList.add('show');
    document.body.style.overflow = 'hidden';
}

function hideModal(modalSelector) {
    modalSelector.classList.remove('show');
    modalSelector.classList.add('hide');
    document.body.style.overflow = 'visible';
}

function modalEntry(signUpBtnSelector, modalSelector, modalCloseSelector) {
    const signUpBtn = document.querySelectorAll(signUpBtnSelector),
          modal = document.querySelector(modalSelector),
          modalClose = document.querySelector(modalCloseSelector);

    signUpBtn.forEach(item => {
        item.addEventListener('click', () => {
            showModal(modal);
        })
    });

    modalClose.addEventListener('click', () => {
        hideModal(modal);
    });

    modal.addEventListener('click', (e) => {
        if(e.target == modal) {
            hideModal(modal);
        }
    });

    document.addEventListener('keydown', (e) => {
        if(e.key == 'Escape') {
            hideModal(modal);
        }
    });
}

export default modalEntry;