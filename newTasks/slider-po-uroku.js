//**это не обязательно. подключение фонт-оссен**/
document.head.insertAdjacentHTML("afterbegin", '<link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.15.4/css/all.css" integrity="sha384-DyZ88mC6Up2uqS4h/KRgHuoeGwBcD4Ng9SiP4dIRy0EXTlnuz47vAwmeGwVChigm" crossOrigin="anonymous">');


let sliders = document.querySelector(".slider");


//**Создаем иконку загрузки**/
let loadIcon = document.createElement("i");
loadIcon.classList.add("fas", "fa-spinner", "fa-spin");// класс fa-spin содержит анимацию вращения
sliders.insertAdjacentElement("afterbegin", loadIcon);

//создаем иконки переключателей
let leftArrow = document.createElement("i");
leftArrow.classList.add("fas", "fa-chevron-circle-left", "slider-leftArrow");
sliders.insertAdjacentElement("beforeend", leftArrow);

let rightArrow = document.createElement("i");
rightArrow.classList.add("fas", "fa-chevron-circle-right", "slider-rightArrow");
sliders.insertAdjacentElement("beforeend", rightArrow);

//Ждем, когда загрузится страница
window.addEventListener("load", function () {
    //Скрываем иконку загрузки
    hideLoadIcon(loadIcon);
    //Иницифлизация слайдера
    images.init();
    leftArrow.addEventListener("click", function () {
        images.setNextLeftImage();
    });
    rightArrow.addEventListener("click", function () {
        images.setNextRightImage();
    });

});

//скрываем иконку загрузки

function hideLoadIcon(loadIcon) {
    loadIcon.style.display = "none";
}


//объекты слайдера

let images = {
    /*номер текущего изображения*/
    currentIdx: 0,
    /*массив из дивов с изображениями*/
    slides: [],
    /*Получаум все слайды, и показываем первый*/
    init() {
        this.slides = document.querySelectorAll(".slider-item");
        this.showImageWithCurrentIdx();
    },

    /*Берем слайд с текущим текстом и убирам у него класс hidden-slide*/
    showImageWithCurrentIdx() {
        this.slides[this.currentIdx].classList.remove("hidden-slide");
    },
    /*Видимоиу текущему слайду добавляем класс hidden-slide*/
    hideVisibleImage(){
        this.slides[this.currentIdx].classList.add("hidden-slide");
    },
    /*Переключиться на предыдущую картинку*/

    setNextLeftImage() {
        this.hideVisibleImage();
        if (this.currentIdx === 0) {
            this.currentIdx = this.slides.length - 1;
        } else {
            this.currentIdx--;
        }
        this.showImageWithCurrentIdx();
    },
    /*Переключиться на следущую картинку*/

    setNextRightImage() {
        this.hideVisibleImage();
        if (this.currentIdx ===this.slides.length - 1) {
            this.currentIdx = 0;
        } else {
            this.currentIdx++;
        }
        this.showImageWithCurrentIdx();
    },

};

/** Функция берет дата-атрибуты у элемента слайцдера, и если они есть в HTML, применяет их **/
function setSizes (sliders){
    let width = sliders.getAttribute("data-width");
    let height = sliders.getAttribute("data-height");
    if (width !== null&& width!==""){
        sliders.style.width = width;
    }
    if (height !== null&& height!==""){
        sliders.style.height = height;
    }
}
setSizes (sliders);






