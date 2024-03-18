
function PopupComponent(src) {
    let jsx = `
        <div class="mask"></div>
        <img src="${src}" alt="" class="popup">
        <button class="popup__close-btn"></button>`;
    let container = document.createElement("div");
    container.className = "popup-container";
    container.innerHTML = jsx;
    document.body.appendChild(container);
    const closeBtn = document.querySelector(".popup__close-btn");
    const popup = document.querySelector(".popup-container");
    closeBtn.onclick = () => {
        document.body.removeChild(popup);
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