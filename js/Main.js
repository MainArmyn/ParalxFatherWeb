function AirplaneDis() {
    document.addEventListener("DOMContentLoaded", () => {
        StarDisappear();
        ButtonControl(false);
        setTimeout(ButtonControl,5000,true);
        HeaderWork();
    })
}
function HeaderWork() {
    const logo = document.querySelector(".header__logo");
    logo.style.display = "none";
    const title  = document.querySelector(".header__title");
    title.style.display = "none";
    setTimeout(() => {
        logo.style.display = "block";
        title.style.display = "block";
    },2000);
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
        StarDisappear();
        const scrollHeight = document.documentElement.scrollTop;
        const parallaxBg = document.querySelector(".header__background");
        let scale = 1.2 + scrollHeight/50;
        if (scale === 1.2) {
            StarAppear();
        }
        if (scale < 0.87) {
          scale = 3 - scale; // Изменяем масштаб в обратную сторону
          StarAppear();
        }
        parallaxBg.style.transform = `scale(${scale})`;
      });
}
function FindAndAdd(classToFind,classToAdd) {
    const el = [...document.querySelectorAll("."+ classToFind)];
    el.forEach(item => {
        let {top,bottom} = item.getBoundingClientRect();
            if (top <= window.innerHeight && bottom >= 0) {
                 item.classList.add(classToAdd)
    }
    })
}
function StarDisappear() {
    [...document.querySelectorAll(".star")].forEach(el => {
        el.style.display = "none";
    });
}
function StarAppear() {
    [...document.querySelectorAll(".star")].forEach(el => {
        el.style.display = "block";
    });
}
function ButtonControl(flag) {
    document.querySelector('.header__href').style.display = flag ? "block":"none";
}
// function OneStartAppear() {
//     [...document.querySelectorAll(".start")].forEach(item => {
//         if (item.style.display === "none") {
//             item.style.display = "block";
//             return
//         }
//     })
// }


ParInit(".header__logo");
ParInit(".header__title");
BackParalax();
AirplaneDis();
let typed = new Typed('#typed', { // Тут id того блока, в которм будет анимация
    stringsElement: '#typed-strings', // Тут id блока из которого берем строки для анимации
    typeSpeed: 100, // Скорость печати
    startDelay: 2000, // Задержка перед стартом анимации
    backSpeed: 50, // Скорость удаления
    loop: true // Указываем, повторять ли анимацию
});

// const sparkleButton = document.getElementById('sparkle-button');

// sparkleButton.addEventListener('mousedown', function () {
//   sparkleButton.classList.add('active');
// });

// sparkleButton.addEventListener('mouseup', function () {
//   sparkleButton.classList.remove('active');
// });
function AddAnimation() {
    FindAndAdd("main__about","main__about__appear");
}
window.addEventListener("scroll",AddAnimation);
