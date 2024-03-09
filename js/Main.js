function AirplaneDis() {
    document.addEventListener("DOMContentLoaded", () => {
        const plane = document.querySelector(".header__airplane-container");
        setTimeout(() => {
            plane.classList.add("header__airplaneDisappear");
        }, 1900)
    })
}
function ParInit(name) {
    const element = document.querySelector(name);

    document.addEventListener("mousemove", (e) => {
        const mouseX = e.clientX;
        const mouseY = e.clientY;
        const mouseXPercentage = mouseX / window.innerWidth;
        const mouseYPercentage = mouseY / window.innerHeight;
        const rotateX = (0.5 - mouseYPercentage) * 40; // Угол наклона по оси X
        const rotateY = (0.5 - mouseXPercentage) * 40; // Угол наклона по оси Y
        element.style.transform = `perspective(500px) rotateX(${rotateX.toFixed(2)}deg) rotateY(${rotateY.toFixed(2)}deg)`;
    });
   
      
      
}

function BackParalax() {
    window.addEventListener("scroll", () => {
        const scrollHeight = document.documentElement.scrollTop;
        const parallaxBg = document.querySelector(".header__background");
        let scale = 1.2 + scrollHeight/50;
        if (scale < 1) {
          scale = 3 - scale; // Изменяем масштаб в обратную сторону
        }
        parallaxBg.style.transform = `scale(${scale})`;
      });
}


ParInit(".header__logo");
ParInit(".header__title");
BackParalax();
AirplaneDis();
let typed = new Typed('#typed', { // Тут id того блока, в которм будет анимация
    stringsElement: '#typed-strings', // Тут id блока из которого берем строки для анимации
    typeSpeed: 100, // Скорость печати
    startDelay: 500, // Задержка перед стартом анимации
    backSpeed: 50, // Скорость удаления
    loop: true // Указываем, повторять ли анимацию
});