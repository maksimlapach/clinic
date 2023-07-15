function showModal(modal) {
    modal.classList.remove('hide');
    modal.classList.add('show');
    document.body.style.overflow = 'hidden';
}

function hideModal(modal) {
    modal.classList.remove('show');
    modal.classList.add('hide');
    document.body.style.overflow = 'visible';
}

function modals(showModalBtnSelector, modalSelector, modalCloseSelector, formSelector) {
    const showModalBtn = document.querySelectorAll(showModalBtnSelector),
          modal = document.querySelector(modalSelector),
          modalClose = document.querySelector(modalCloseSelector),
          forms = document.querySelectorAll(formSelector);

    showModalBtn.forEach(item => {
        item.addEventListener('click', () => {
            showModal(modal);
        })
    });

    modalClose.addEventListener('click', () => {
        hideModal(modal);
        forms.forEach(item => {
            item.reset();
        })
    });

    modal.addEventListener('click', (e) => {
        if(e.target == modal) {
            hideModal(modal);
            forms.forEach(item => {
                item.reset();
            })
        }
    });

    document.addEventListener('keydown', (e) => {
        if(e.key == 'Escape') {
            hideModal(modal);
            forms.forEach(item => {
                item.reset();
            })
        }
    });
}

export default modals;
export {showModal};
export {hideModal};