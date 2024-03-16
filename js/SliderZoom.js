
function PopupComponent(src) {
    let jsx = `<div class="popup-container">
        <div class="mask"></div>
        <img src="${src}" alt="">
    </div>`;
    let body  = document.querySelector("body");
    body.innerHTML+=jsx;
} 