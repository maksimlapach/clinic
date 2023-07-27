import { getData } from "../services/services";
import { showModal } from "./modals";
import { hideModal } from "./modals";
import forms from "./forms";

function helper() {
    const helperSpeciality = document.querySelectorAll(".helper__item"),
          modal = document.querySelector(".modalHelper"),
          modalClose = document.querySelector(".modalHelper__close"),
          modalWrapper = document.querySelector(".modalHelper__wrapper"),
          modalTitle = document.querySelector(".modalHelper__title"),
          modalSubtitle = document.querySelector(".modalHelper__subtitle"),
          modalBtnsWrapper = document.querySelector(".modalHelper__btns"),
          modalBtns = document.querySelectorAll(".modalHelper__btns a");

    class HelperItem {
        constructor(id, name, speciality, direction, experience, certificates, orientation, src, alt, parent, titleName, titleParent, subtitleParent, btnsParent) {
            this.id = id;
            this.name = name;
            this.speciality = speciality;
            this.direction = direction;
            this.experience = experience;
            this.certificates = certificates;
            this.orientation = orientation;
            this.src = src;
            this.alt = alt;
            this.parent = parent;
            this.titleName = titleName;
            this.titleParent = titleParent;
            this.subtitleParent = subtitleParent;
            this.btnsParent = btnsParent;
        }

        renderCardsDoctors() {
            this.titleParent.innerHTML = `<span>Можете выбрать профильного врача, специализирующегося на</span> ${this.titleName}`;
            this.subtitleParent.innerHTML = `Выберите врача который вам подходит и кликните на его фото:`;
            const item = document.createElement('div');
            item.classList.add('modalHelper__item');
            item.classList.add('doctorCard');
            item.id = this.id;
            item.innerHTML = `
            <div class="doctorCard__name">${this.name}</div>
            <div class="doctorCard__speciality">${this.speciality}</div>
            <div class="doctorCard__descr">
                <div class="doctorCard__experience">Опыт работы более ${this.experience} лет</div>
                <div class="doctorCard__certificates">
                    <span>Действующие сертификаты:</span> ${this.certificates}
                </div>
                <div class="doctorCard__orientation">
                    <span>Направленость:</span> <br> ${this.orientation}
                </div>
            </div>
            <img class="doctorCard__img" src=${this.src} alt=${this.alt}>`;
            this.parent.append(item);
        }

        renderInfoDoctor() {
            modalWrapper.innerHTML = '';
            this.titleParent.innerHTML = `Вы выбрали <span>${this.name}</span>. Поздравляем, это отличный специалист, настоящий профессионал своего дела`;
            this.subtitleParent.innerHTML = '';
            const item = document.createElement('div');
            item.classList.add('modalHelper__item');
            item.classList.add('doctorCard');
            item.id = this.id;
            item.innerHTML = `
                <div class="doctorCard__name">${this.name}</div>
                <div class="doctorCard__speciality">${this.speciality}</div>
                <div class="doctorCard__descr">
                    <div class="doctorCard__experience">Опыт работы более ${this.experience} лет</div>
                    <div class="doctorCard__certificates">
                        <span>Действующие сертификаты:</span> ${this.certificates}
                    </div>
                    <div class="doctorCard__orientation">
                        <span>Направленость:</span> <br> ${this.orientation}
                    </div>
                </div>
                <img class="doctorCard__img" src=${this.src} alt=${this.alt}>`;
            this.parent.append(item);

            const signUp = document.createElement('div');
            signUp.classList.add('modalHelper__signUp');
            signUp.innerHTML = `
                <div class="modalHelper__signUp-title">Напишите свой номер телефона, и вам перезвонят в ближайшее время чтобы уточнить время приема у <br>
                <span>${this.name}</span></div>
                <div class="modalHelper__signUp-messengers messengers">
                    <div class="messengersIcons">
                        <img class="messengersIcons__img" src="icons/telegram.svg" alt="telegram">
                        <img class="messengersIcons__img" src="icons/whatsApp.svg" alt="whatsApp">
                    </div>
                    <div>спросить в мессенджере</div>
                </div>
                <div class="modalHelper__signUp-wrapper">
                    <div class="modalHelper__signUp-subtitle">В ходе консультации вы получите 2-3 плана качественного лечения под ваш бюджет</div>
                    <form action="#" class="modalHelper__signUp-form signUpForm">  
                        <input class="signUpForm__name" placeholder="Имя" type="text" name="name" required>
                        <input class="signUpForm__phone" placeholder="Телефон" type="phone" name="phone" required>
                        <button class="signUpForm__btn btn btn_color">Записаться</button>
                    </form>
                </div>
            `;
            this.parent.append(signUp);
        }
    }

    helperSpeciality.forEach(item => {
        item.addEventListener('click', (e) => {
            const specialityName = e.target.closest(".helper__item").dataset.speciality;
            
            getData('http://localhost:3000/doctors').
            then(data => {
                data.forEach(item => {
                    if(item.profile.includes(specialityName)) {
                        new HelperItem(
                            item.id,
                            item.name,
                            item.speciality,
                            item.direction,
                            item.experience,
                            item.certificates,
                            item.orientation,
                            item.src,
                            item.alt,
                            modalWrapper,
                            specialityName,
                            modalTitle,
                            modalSubtitle,
                            modalBtnsWrapper
                        ).renderCardsDoctors();
                    }
                }); 
                return data;   
            })
            .then((data) => {
                const modalItem = document.querySelectorAll(".modalHelper__item");

                modalItem.forEach(item => {
                    item.addEventListener('click', (e) => {
                        const doctorId = e.target.closest(".modalHelper__item").id;
                        data.forEach(item => {
                            if(item.id == doctorId) {
                                new HelperItem(
                                    item.id,
                                    item.name,
                                    item.speciality,
                                    item.direction,
                                    item.experience,
                                    item.certificates,
                                    item.orientation,
                                    item.src,
                                    item.alt,
                                    modalWrapper,
                                    specialityName,
                                    modalTitle,
                                    modalSubtitle,
                                    modalBtnsWrapper
                                ).renderInfoDoctor();
                            }
                        })
                        forms(".modalHelper .signUpForm", ".modalHelper", ".modalResult", ".modalResult__content", ".modalHelper__wrapper");
                    })
                })
            })
            .catch(() => {
                modalWrapper.innerHTML = `
                <div class="modalHelper__item doctorCard">
                    <div class="doctorCard__name">Анисимов Дмитрий Владимирович</div>
                    <div class="doctorCard__speciality">Врач-стоматолог</div>
                    <div class="doctorCard__descr">
                        <div class="doctorCard__experience">Опыт работы более 5 лет</div>
                        <div class="doctorCard__certificates">
                            <span>Действующие сертификаты:</span> стоматология общей практики; стоматология хирургическая
                        </div>
                        <div class="doctorCard__orientation">
                            <span>Направленность:</span> <br> имплантация, пародонтология, удаление зубов любой сложности
                        </div>
                    </div>
                    <img class="doctorCard__img" src="img/doctors/doctor_2.png" alt="doctor_2">
                </div>

                <div class="modalHelper__item doctorCard">
                    <div class="doctorCard__name">Синельщикова Елена Дмитриевна</div>
                    <div class="doctorCard__speciality">Врач-стоматолог</div>
                    <div class="doctorCard__descr">
                        <div class="doctorCard__experience">Опыт работы более 5 лет</div>
                        <div class="doctorCard__certificates">
                            <span>Действующие сертификаты:</span> стоматология общей практики;
                            стоматология хирургическая
                        </div>
                        <div class="doctorCard__orientation">
                            <span>Направленность:</span> <br> терапевтическое лечение, эстетическая реставрация, хирургическое удаление зубов , профессиональная гигиена и отбеливание
                        </div>
                    </div>
                    <img class="doctorCard__img" src="img/doctors/doctor_6.png" alt="doctor_6">
                </div>
                `;
            })
            showModal(modal);
        })
    });

    modalClose.addEventListener('click', () => {
        hideModal(modal);
        modalWrapper.innerHTML = "";
    });

    document.addEventListener('keydown', (e) => {
        if(e.key == 'Escape') {
            hideModal(modal);
            modalWrapper.innerHTML = "";
        }
    });

    modalBtns.forEach(item => {
        item.addEventListener('click', () => {
            hideModal(modal);
            modalWrapper.innerHTML = "";
        })
    })
}

export default helper;