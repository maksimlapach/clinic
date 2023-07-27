import { postData } from "../services/services";
import { hideModal } from "./modals";
import { showModal } from "./modals";
import IMask from "imask";

function forms(formSelector, modalSelector, modalResultSelector, modalResultContentSelector, modalWrapperSelector = '') {
    const forms = document.querySelectorAll(formSelector),
          message = {
            success: "Ваша заявка принята! С вами свяжется консультант!",
            error: "Произошла ошибка, попробуйте еще раз!",
            wrong: "Некорректные данные, попробуйте еще раз!"
          },
          modal = document.querySelector(modalSelector),
          modalResult = document.querySelector(modalResultSelector),
          contentResultModal = document.querySelector(modalResultContentSelector),
          phone = document.querySelectorAll(".signUpForm__phone");
    
    let wrapper;
    if(modalWrapperSelector != '') {
        wrapper = document.querySelector(modalWrapperSelector);
    } else {
        wrapper = '';
    }

    const maskOptions = {
        mask: '+{38}(000)000-00-00'
      };

    const masks = [];  
    phone.forEach(item => {
        const mask = IMask(item, maskOptions);
        masks.push(mask);
    })
    
    forms.forEach(item => {
        bindPostData(item);
    })

    function bindPostData(form) {
        form.addEventListener('submit', (e) => {
            e.preventDefault();
            const formData = new FormData(form);
            let json;
            const obj = Object.fromEntries(formData.entries());
            if(obj.phone.length < 17) {
                showResultModal(message.wrong, modal, modalResult, contentResultModal, wrapper);
                form.reset();
                masks.forEach(item => {
                    item.updateValue();
                });
                throw new Error();
            } else {
                json = JSON.stringify(obj);
            }
            postData('http://localhost:3000/requests', json)
            .then((data) => {
                showResultModal(message.success, modal, modalResult, contentResultModal, wrapper);
            })
            .catch(() => {
                showResultModal(message.error, modal, modalResult, contentResultModal, wrapper)
            })
            .finally(() => {
                form.reset();
                masks.forEach(item => {
                    item.updateValue();
                });
            })
        });
    }

    function showResultModal(message, modal, modalResult, content, wrapper) {
        hideModal(modal);
        content.innerHTML = message;
        showModal(modalResult);

        setTimeout(() => {
            hideModal(modalResult);
        }, 2000);

        if(wrapper != '') {
            wrapper.innerHTML = '';
        }
    }
}

export default forms;