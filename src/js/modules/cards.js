import { getData } from "../services/services";

function cards() {
    class ServiceItem {
        constructor(src, alt, title, descr, listItems, parent) {
            this.src = src;
            this.alt = alt;
            this.title = title;
            this.descr = descr;
            this.listItems = listItems;
            this.parent = document.querySelector(parent);
        }

        render() {
            const list = document.createElement('ul');
            list.classList.add("service__item_list");
            this.listItems.forEach(item => {
                list.append(`<li>${item}</li>`);
            });

            const content = document.createElement('div');
            content.classList.add("service__item");

            content.innerHTML = 
            `<img class="service__item-img" src=${this.src} alt=${this.alt}>
            <div class="service__item-title">
                ${this.title}
            </div>
            <div class="service__item-descr">
                ${this.descr}
            </div>
            <ul class="service__item-list">` +
                list.textContent
            + `</ul>
            <div class="service__item-messengers messengers">
                <div class="messengersIcons">
                    <img src="icons/telegram.svg" alt="telegram">
                    <img src="icons/whatsApp.svg" alt="whatsApp">
                </div>
                <div class="messengersText">спросить в мессенджере</div>
            </div>`;
            this.parent.append(content);
        }
    }

    getData('http://localhost:3000/services').
    then(data => {
        data.forEach(item => {
            new ServiceItem(
                item.src,
                item.alt,
                item.title,
                item.descr,
                item.listItems,
                '.service .service__wrapper'
            ).render();
        })
    }).catch(() => {
        const parent = document.querySelector('.service .service__wrapper');
        parent.innerHTML = `<div class="service__item">
        <img class="service__item-img" src="img/service/surgery.png" alt="surgery">
        <div class="service__item-title">
            Хирургия
        </div>
        <div class="service__item-descr">
            Удаление зуба является одной из самых распространенных операций в стоматологической практике.
        </div>
        <ul class="service__item-list">
            <li>Удаление зубов любой сложности</li>
        </ul>
        <div class="service__item-messengers messengers">
            <div class="messengersIcons">
                <img class="messengersIcons__img" src="icons/telegram.svg" alt="telegram">
                <img class="messengersIcons__img" src="icons/whatsApp.svg" alt="whatsApp">
            </div>
            <div class="messengersText">спросить в мессенджере</div>
        </div>
    </div>


    <div class="service__item">
        <img class="service__item-img" src="img/service/therapy.png" alt="therapy">
        <div class="service__item-title">
            Терапия
        </div>
        <div class="service__item-descr">
            Лечение напрямую зависит от стадии заболевания. Мы подбираем наиболее эффективные методы диагностики и терапии.
        </div>
        <ul class="service__item-list">
            <li>Кариозных и некариозных поражений</li>
            <li>Пульпитов и периодонтитов</li>
            <li>Художественная реставрация зубов</li>
        </ul>
        <div class="service__item-messengers messengers">
            <div class="messengersIcons">
                <img src="icons/telegram.svg" alt="telegram">
                <img src="icons/whatsApp.svg" alt="whatsApp">
            </div>
            <div class="messengersText">спросить в мессенджере</div>
        </div>
    </div>

    <div class="service__item">
        <img class="service__item-img" src="img/service/orthopedics.png" alt="orthopedics">
        <div class="service__item-title">
            Ортопедия
        </div>
        <div class="service__item-descr">
            Помогает решить проблемы, связанные с аномалиями, приобретенными дефектами, повреждениями и деформациями органов жевательно-речевого аппарата.
        </div>
        <ul class="service__item-list">
            <li>Коронки и мосты керамические</li>
            <li>Коронки и мосты циркониевые</li>
            <li>Съёмное протезирование (протезы, бюгеля, мягкие протезы)</li>
            <li>Установка виниров</li>
        </ul>
        <div class="service__item-messengers messengers">
            <div class="messengersIcons">
                <img src="icons/telegram.svg" alt="telegram">
                <img src="icons/whatsApp.svg" alt="whatsApp">
            </div>
            <div class="messengersText">спросить в мессенджере</div>
        </div>
    </div>

    <div class="service__item">
        <img class="service__item-img" src="img/service/implantation.png" alt="implantation">
        <div class="service__item-title">
            Имплантация
        </div>
        <div class="service__item-descr">
            Это операция по установке в челюстную ткань специального стоматологического штифта, который будет играть роль корня.
        </div>
        <ul class="service__item-list">
            <li>Установка имплантов OSSTEM implant</li>
            <li>Наращивание кости (все виды аугментации) OSSTEM implant</li>
            <li>Имплантация зубов по системе All ON4-All ON6</li>
        </ul>
        <div class="service__item-messengers messengers">
            <div class="messengersIcons">
                <img src="icons/telegram.svg" alt="telegram">
                <img src="icons/whatsApp.svg" alt="whatsApp">
            </div>
            <div class="messengersText">спросить в мессенджере</div>
        </div>
    </div>


    <div class="service__item">
        <img class="service__item-img" src="img/service/orthodontics.png" alt="orthodontics">
        <div class="service__item-title">
            Ортодонтия
        </div>
        <div class="service__item-descr">
            Поможет сделать вашу улыбку красивой и исправит прикус. Исправляет аномалии челюстей, положения челюстей в черепе, формы, величины, соотношения зубных дуг.
        </div>
        <ul class="service__item-list">
            <li>Установка брекет систем</li>
            <li>Цифровое ортодонтическое лечение прозрачными каппами</li>
            <li>Полная диагностика и лечение взрослых и детей</li>
        </ul>
        <div class="service__item-messengers messengers">
            <div class="messengersIcons">
                <img src="icons/telegram.svg" alt="telegram">
                <img src="icons/whatsApp.svg" alt="whatsApp">
            </div>
            <div class="messengersText">спросить в мессенджере</div>
        </div>
    </div>


    <div class="service__item">
        <img class="service__item-img" src="img/service/whitening.png" alt="whitening">
        <div class="service__item-title">
            Отбеливание зубов
        </div>
        <div class="service__item-descr">
            Стоматологическая процедура изменения оттенка зубной эмали. Отбеливание зубов относится к области косметической стоматологии.
        </div>
        <ul class="service__item-list">
            <li>Система Opalescence Boost</li>
        </ul>
        <div class="service__item-messengers messengers">
            <div class="messengersIcons">
                <img src="icons/telegram.svg" alt="telegram">
                <img src="icons/whatsApp.svg" alt="whatsApp">
            </div>
            <div class="messengersText">спросить в мессенджере</div>
        </div>
    </div>`;
    })
}

export default cards;