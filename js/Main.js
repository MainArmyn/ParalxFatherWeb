let timerImgArea = 0;
let timerTextArea = 0;
let flagTown = false;
let flagHomes = false;
function AirplaneDis() {
    document.addEventListener("DOMContentLoaded", () => {
        StarDisappear();
        ButtonControl(false);
        let oldTime = document.querySelector(".message__time");
        oldTime.textContent = new Date().toLocaleTimeString("ru-Ru", {
            hour: "2-digit",
            minute: "2-digit",
        });
        setTimeout(ButtonControl, 3000, true);
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
    }, 1000);
}
function HomesZoom() {
    function ContBtns(flag) {
        if (flag) {
            btn1.style.display = "none";
            btn2.style.display = "none";
            btn3.style.display = "none";
        } else {
            btn1.style.display = "block";
            btn2.style.display = "block";
            btn3.style.display = "block";
        }
    }
    const btn1 = document.getElementById('btn1');
    const btn2 = document.getElementById('btn2');
    const btn3 = document.getElementById('btn3');
    const backBtns = document.querySelectorAll('#back-btn');
    // Функция для обработки клика на кнопке
    function zoomAndChangeContent(buttonId) {
        // Получение позиции кнопки
        const number = buttonId.slice(3);
        const button = document.getElementById(buttonId);
        const rect = button.getBoundingClientRect();
        const zoomedContent = document.getElementById('zoomed-content'+number);
        const positionX = rect.left + rect.width / 2;
        const positionY = rect.top + rect.height / 2;

        // Плавное приближение изображения
        ContBtns(true);
        document.querySelector(".main__homes__back").style.transformOrigin = `${positionX}px ${positionY}px`;
        document.querySelector(".main__homes__back").style.transform = 'scale(7)';

        // Изменение контента
        setTimeout(() => {
            zoomedContent.classList.remove('hidden');
            ContBtns(false);
            document.querySelector(".main__homes__title").classList.add("hidden");
        },700);
    }

    // Обработчики кликов на кнопках
    btn1.addEventListener('click', () => {
        zoomAndChangeContent('btn1');
    });

    btn2.addEventListener('click', () => {
        zoomAndChangeContent('btn2');
    });

    btn3.addEventListener('click', () => {
        zoomAndChangeContent('btn3');
    });

    // Обработчик клика на кнопке "Вернуться назад"
    [...backBtns].forEach(el => {
        el.addEventListener('click', () => {
            document.querySelector(".main__homes__title").classList.remove('hidden');
            document.querySelector(".main__homes__back").style.transform = 'scale(7)';
            setTimeout(() => {
                document.querySelector(".main__homes__back").style.transform = 'scale(1)';
            },200);
            ContBtns(false);
            [...document.querySelectorAll(".main__home-container")].forEach(el => el.classList.add("hidden"));
        });
    });

}
HomesZoom();
function shiftAndHide(element) {
    // Устанавливаем начальное значение margin-left элемента
    element.style.marginLeft = '0';

    // Задаем интервал, в котором будем изменять значение margin-left
    let interval = setInterval(() => {
        let marginLeft = parseInt(element.style.marginLeft);

        // Постепенно смещаем элемент влево на 10 пикселей
        marginLeft -= 10;
        element.style.marginLeft = marginLeft + 'px';

        // Если достигли нужного смещения, прекращаем анимацию и скрываем элемент
        if (marginLeft <= -900) {
            clearInterval(interval);
            element.style.display = 'none';
        }
    }, 30); // Задержка выполнения в миллисекундах (можно изменить значение для более плавной анимации)
}
function shiftAndHideRight(element) {
    // Устанавливаем начальное значение margin-right элемента
    element.style.marginRight = '0';

    // Задаем интервал, в котором будем изменять значение margin-right
    let interval = setInterval(() => {
        let marginRight = parseInt(element.style.marginRight);

        // Постепенно смещаем элемент вправо на 10 пикселей
        marginRight -= 10;
        element.style.marginRight = marginRight + 'px';

        // Если достигли нужного смещения, прекращаем анимацию и скрываем элемент
        if (marginRight <= -900) {
            clearInterval(interval);
            element.style.display = 'none';
        }
    }, 30); // Задержка выполнения в миллисекундах (можно изменить значение для более плавной анимации)
}

function fadeOut(element) {
    var opacity = 1;
    var timer = setInterval(function () {
        if (opacity <= 0.1) {
            clearInterval(timer);
            element.style.display = "none";
        }
        element.style.opacity = opacity;
        opacity -= opacity * 0.1;
    }, 50);
}
function HomesTown() {
    function fadeOut(element) {
        var opacity = 1;
        var timer = setInterval(function () {
            if (opacity <= 0.1) {
                clearInterval(timer);
                element.style.display = "none";
            }
            element.style.opacity = opacity;
            opacity -= opacity * 0.1;
        }, 40);
    }
    function isElementHalfVisible(element) {
        var elementTop = element.getBoundingClientRect().top;
        var elementBottom = element.getBoundingClientRect().bottom;
        var windowHeight = window.innerHeight || document.documentElement.clientHeight;
      
        var isVisible = elementTop < windowHeight && elementBottom >= 0;
        var isHalfVisible = (elementTop >= 0 && elementTop <= windowHeight / 2) ||
                            (elementBottom >= 0 && elementBottom <= windowHeight / 2);
      
        return isVisible && isHalfVisible;
      }
    if (flagHomes === true) {
        return;
    }
    const area = document.querySelector(".main__homes");
    const img = document.querySelector(".main__homes__town");
    if (isElementHalfVisible(area) === true) {
        flagHomes = true;
        setTimeout(() => {
            fadeOut(img);
        },800);
    }
}
function AboutWork() {
    function AboutMove() {
        const goBtn = document.querySelector(".main__about__go-btn");
        const imgArea = [...document.querySelectorAll(".main__about__town-move")][0];
        const textArea = [...document.querySelectorAll(".main__about__town-move")][1];
        const therd = [...document.querySelectorAll(".main__about__town-move")][2];
        const fourht = [...document.querySelectorAll(".main__about__town-move")][3];
        const area = document.querySelector(".main__about");
        const aboutBack = document.querySelector(".main__about__town-back");
        const scrollHeight = document.documentElement.scrollTop;
        if (isElementFullyVisible(area) === true) {
            if (flagTown === false) {
                setTimeout(() => {
                    shiftAndHide(imgArea);
                    shiftAndHideRight(textArea);
                    // shiftAndHide(therd);
                    // shiftAndHideRight(fourht);
                    fadeOut(therd);
                    fadeOut(fourht);
                }, 850);

                setTimeout(() => {
                    fadeOut(aboutBack);
                }, 1200);
                flagTown = true;
                return;
            }
            return;

        } else {
            timerImgArea = 0;
            timerTextArea = 0;
        }
    }
    // function Town() {
    //     let left = [...document.querySelectorAll(".main__about__town-move")][0];
    //     let right = [...document.querySelectorAll(".main__about__town-move")][1];
    //     if (isElementFullyVisible(left) && isElementFullyVisible(right)) {
    //         left
    //     }
    // }
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
            item.classList.add(classToAdd);
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
function BurgerControl() {
    const burger = document.querySelector(".header__bruger");
    const menu = document.querySelector(".header__burger__menu");
    const close = document.querySelector(".header__burger__menu__close-btn");
    burger.onclick = () => {
        menu.classList.remove("hidden");
    };
    close.onclick = () => {
        menu.classList.add("hidden");
    };
}
BurgerControl();
function PhoneGo() {
    const phone = document.querySelector(".main__botique__phone");
    phone.onclick = () => {
        document.location = "https://thebotique.ru";
    };
}
// function OneStartAppear() {
//     [...document.querySelectorAll(".start")].forEach(item => {
//         if (item.style.display === "none") {
//             item.style.display = "block";
//             return
//         }
//     })
// }

// PhoneGo();
ParInit(".header__logo");
ParInit(".header__title");
ParInit(".header__href");
// ParInit(".main__botique__phone");
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
// function BotiqueTyping() {
//     let typed1 = new Typed('#mainBotAbout', { // Тут id того блока, в которм будет анимация
//         stringsElement: '#hidden', // Тут id блока из которого берем строки для анимации
//         typeSpeed: 20, // Скорость печати
//         startDelay: 400, // Задержка перед стартом анимации
//         backSpeed: 10, // Скорость удаления
//         loop: true // Указываем, повторять ли анимацию
//     });

// }
function AddAnimation() {
    const imgAreaAbout = document.querySelector(".main__about__img-container");
    const textAbout = document.querySelector(".main__about__text");
    if (IsVisible(imgAreaAbout) || IsVisible(textAbout)) {
        imgAreaAbout.classList.add("main__aboutImgAppear");
        textAbout.classList.add("main__aboutTextAppear");
    }
    HomesTown();
    FindAndAdd("main__botique", "main__botiqueAppear");
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
    container.scrollLeft += 30;

}
function ObjectsSlider() {//просто убиарем написанный заранее цифры мне лень
    const sliderContainer = document.querySelectorAll(".uk-cover-container");
    sliderContainer.forEach(el => {
        let panel = el.querySelector(".uk-panel");
        panel.style.display = "none";
    })
}
ObjectsSlider();
