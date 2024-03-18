let timerImgArea = 0;
let timerTextArea = 0;
function AirplaneDis() {
    document.addEventListener("DOMContentLoaded", () => {
        StarDisappear();
        ButtonControl(false);
        let oldTime = document.querySelector(".message__time");
        oldTime.textContent = new Date().toLocaleTimeString("ru-Ru", {
            hour: "2-digit",
            minute: "2-digit",
        });
        setTimeout(ButtonControl, 5000, true);
        HeaderWork();
    })
}
function HeaderWork() {
    const logo = document.querySelector(".header__logo");
    logo.style.display = "none";
    const title = document.querySelector(".header__title");
    title.style.display = "none";
    setTimeout(() => {
        logo.style.display = "block";
        title.style.display = "block";
        StarAppear();
    }, 2000);
}
function AboutWork() {
    function AboutMove() {
        const goBtn = document.querySelector(".main__about__go-btn");
        if (window.innerWidth <= 850) {
            goBtn.style.display = "none";
        }
        const imgArea = document.querySelector(".main__about__img-container");
        const textArea = document.querySelector(".main__about__text");
        const scrollHeight = document.documentElement.scrollTop;
        if (isElementFullyVisible(imgArea) === false && isElementFullyVisible(textArea) === false) {
            timerImgArea += 30;
            timerTextArea += 30;
            goBtn.style.display = "none";
            imgArea.style.transform = `translateX(-${timerImgArea}px)`;
            textArea.style.transform = `translateX(${timerTextArea}px)`;

        } else {
            textArea.style.transform = "none";
            if (window.innerWidth <= 850) {
                goBtn.style.display = "none";
            } else {
                goBtn.style.display = "block";
            }
            imgArea.style.transform = "none";
            timerImgArea = 0;
            timerTextArea = 0;
        }
    }
    function ParseTransForm(el) {
        var transformValue = el.style.transform;
        var translateXIndex = transformValue.indexOf("translateX");
        var translateXValue = transformValue.substring(translateXIndex);
        var translateXNumber = parseInt(translateXValue.replace(/[^-\d]/g, ""));
        if (transformValue === NaN) {
            return 0
        }
        return translateXNumber;
    }
    function isElementFullyVisible(element) {
        var rect = element.getBoundingClientRect();
        var windowHeight = window.innerHeight || document.documentElement.clientHeight;

        return (rect.top >= 0 && rect.bottom <= windowHeight);
    }

    const toolTip = document.querySelector(".popup-error");
    toolTip.style.display = "none";
    setTimeout(() => {
        toolTip.style.display = "block";
    }, 2000);
    AboutMove();
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
function IsVisible(element) {
    var rect = element.getBoundingClientRect();
    var windowHeight = window.innerHeight || document.documentElement.clientHeight;
    return (rect.top >= 0 && rect.bottom <= windowHeight);
}
function BackParalax() {
    window.addEventListener("scroll", () => {
        StarDisappear();
        const scrollHeight = document.documentElement.scrollTop;
        const parallaxBg = document.querySelector(".header__background");
        let scale = 1.2 + scrollHeight / 50;
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
function NewParalax() {
    window.addEventListener("scroll", () => {
        const title = document.querySelector(".header__title");
        const scrollHeight = document.documentElement.scrollTop;
        const go = document.querySelector(".header__href");
        go.style.zIndex = scrollHeight === 0 ? 5 : 4;
        const logo = document.querySelector(".header__logo");
        logo.style.marginTop = scrollHeight >= window.innerHeight ? 0 + "px" : scrollHeight + "px";
    })
}
function FindAndAdd(classToFind, classToAdd) {
    const el = [...document.querySelectorAll("." + classToFind)];
    el.forEach(item => {
        let { top, bottom } = item.getBoundingClientRect();
        if (top <= window.innerHeight && bottom >= 0) {
            item.classList.add(classToAdd)
        }
    })
}
function FindStart(who, func) {
    const el = document.querySelector(who);
    let { top, bottom } = el.getBoundingClientRect();
    if (top <= window.innerHeight && bottom >= 0) {
        func();
    }
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
    document.querySelector('.header__href').style.display = flag ? "block" : "none";
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
ParInit(".header__href");
ParInit(".word");
NewParalax();
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
    const imgAreaAbout = document.querySelector(".main__about__img-container");
    const textAbout = document.querySelector(".main__about__text");
    if (IsVisible(imgAreaAbout) || IsVisible(textAbout)) {
        imgAreaAbout.classList.add("main__aboutImgAppear");
        textAbout.classList.add("main__aboutTextAppear");
    }
    // FindAndAdd("main__about", "main__about__appear");
    FindStart(".main__homes", HomesWords);
    AboutWork();
}
window.addEventListener("scroll", AddAnimation);
function HomesWords() {
    const spans = document.querySelectorAll('.word span');

    spans.forEach((span, idx) => {
        span.addEventListener('click', (e) => {
            e.target.classList.add('active');
        });
        span.addEventListener('animationend', (e) => {
            e.target.classList.remove('active');
        });

        // Initial animation
        setTimeout(() => {
            span.classList.add('active');
        }, 750 * (idx + 1))
    });
}
function HomesMain() {
    var container = document.querySelector('.main__homes');

    // // Блокировка вертикальной прокрутки при горизонтальной
    // container.addEventListener('wheel', function (event) {
    //     if (event.deltaY === 0) {
    //         // Предотвращаем прокрутку вертикальной оси, если есть горизонтальная прокрутка
    //         container.scrollLeft += event.deltaX;
    //         event.preventDefault();
    //     }
    // });
    container.scrollLeft+=30; 

}
function ObjectsSlider() {//просто убиарем написанный заранее цифры мне лень
    const sliderContainer = document.querySelectorAll(".uk-cover-container");
    sliderContainer.forEach(el => {
        let panel = el.querySelector(".uk-panel");
        panel.style.display = "none";
    })
}
ObjectsSlider();
