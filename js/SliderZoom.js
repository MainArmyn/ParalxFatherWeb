
function PopupComponent(src) {
    let jsx = `<div class="popup-container">
        <div class="mask"></div>
        <img src="${src}" alt="" class="popup">
        <button class="popup__close-btn"></button>
    </div>`;
    let body  = document.querySelector("body");
    body.innerHTML+=jsx;
    const closeBtn = document.querySelector(".popup__close-btn");
    const popup = document.querySelector(".popup-container");
    closeBtn.onclick = () => {
        body.removeChild(popup);
        InitSlider();
        ChatGpd();
    };
} 

function InitSlider() {
    const images = document.querySelectorAll(".uk-cover-container img");
    images.forEach(el => {
        el.onclick = (e) => {
            let src = e.currentTarget.getAttribute("src");
            PopupComponent(src);
        };
    })
}
InitSlider();