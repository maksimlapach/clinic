import { getData } from "../services/services";
import { showModal } from "./modals";
import { hideModal } from "./modals";

function helper() {
    const helperSpeciality = document.querySelectorAll(".helper__item"),
          modal = document.querySelector(".modalHelper"),
          modalClose = document.querySelector(".modalHelper__close"),
          modalBtns = document.querySelectorAll(".modalHelper__btns a"),
          modalWrapper = document.querySelector(".modalHelper__wrapper"),
          modalTitle = document.querySelector(".modalHelper__title");

    class HelperItem {
        constructor(name, speciality, direction, experience, certificates, orientation, src, alt, parent, titleName, titleParent) {
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

        }

        render() {
            this.titleParent.innerHTML = `<span>Можете выбрать профильного врача, специализирующегося на</span> ${this.titleName}`;
            const item = document.createElement('div');
            item.classList.add('modalHelper__item');
            item.innerHTML = `
            <div class="modalHelper__item_name">${this.name}</div>
            <div class="modalHelper__item_speciality">${this.speciality}</div>
            <div class="modalHelper__item_descr">
                <div class="modalHelper__item_experience">Опыт работы более ${this.experience} лет</div>
                <div class="modalHelper__item_certificates">
                    <span>Действующие сертификаты:</span> ${this.certificates}
                </div>
                <div class="modalHelper__item_orientation">
                    <span>Направленость:</span> <br> ${this.orientation}
                </div>
            </div>
            <img src=${this.src} alt=${this.alt}>`;
            this.parent.append(item);
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
                            modalTitle
                        ).render();
                    }
                });
                
            }).catch(() => {
                modalWrapper.innerHTML = `
                <div class="modalHelper__item">
                    <div class="modalHelper__item_name">Анисимов Дмитрий Владимирович</div>
                    <div class="modalHelper__item_speciality">Врач-стоматолог</div>
                    <div class="modalHelper__item_descr">
                        <div class="modalHelper__item_experience">Опыт работы более 5 лет</div>
                        <div class="modalHelper__item_certificates">
                            <span>Действующие сертификаты:</span> стоматология общей практики; стоматология хирургическая
                        </div>
                        <div class="modalHelper__item_orientation">
                            <span>Направленность:</span> <br> имплантация, пародонтология, удаление зубов любой сложности
                        </div>
                    </div>
                    <img src="img/doctors/doctor_2.png" alt="doctor_2">
                </div>

                <div class="modalHelper__item">
                    <div class="modalHelper__item_name">Синельщикова Елена Дмитриевна</div>
                    <div class="modalHelper__item_speciality">Врач-стоматолог</div>
                    <div class="modalHelper__item_descr">
                        <div class="modalHelper__item_experience">Опыт работы более 5 лет</div>
                        <div class="modalHelper__item_certificates">
                            <span>Действующие сертификаты:</span> стоматология общей практики;
                            стоматология хирургическая
                        </div>
                        <div class="modalHelper__item_orientation">
                            <span>Направленность:</span> <br> терапевтическое лечение, эстетическая реставрация, хирургическое удаление зубов , профессиональная гигиена и отбеливание
                        </div>
                    </div>
                    <img src="img/doctors/doctor_6.png" alt="doctor_6">
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