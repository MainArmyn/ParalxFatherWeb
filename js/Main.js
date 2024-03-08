function AirplaneDis() {
    document.addEventListener("DOMContentLoaded",() => {
        const plane = document.querySelector(".header__airplane-container");
        setTimeout(() => {
            plane.classList.add("header__airplaneDisappear");
        },4000)
    })
}
AirplaneDis();
let typed = new Typed('#typed', { // Тут id того блока, в которм будет анимация
    stringsElement: '#typed-strings', // Тут id блока из которого берем строки для анимации
    typeSpeed: 100, // Скорость печати
    startDelay: 500, // Задержка перед стартом анимации
    backSpeed: 50, // Скорость удаления
    loop: true // Указываем, повторять ли анимацию
});