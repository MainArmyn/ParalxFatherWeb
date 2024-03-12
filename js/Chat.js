function debounceDecorator(func,delay) {
    let timeoutid = null;
    return function(...args) {
        if (timeoutid) {
            clearTimeout(timeoutid);
        }
        timeoutid = setTimeout(() => {
            let result = func(...args);
            timeoutid = null;
            return result;
        },delay)
    }
}



function ChatGpd() {
    // function RandomChoice(ar) {
    //     let max = ar.length-1;
    //     return Math.floor(Math.random() * (max));
    // }

    function BotSendMessage(text="Оставьте номер телефона, почту как с вами можно связаться") {
        let botMessage = `<div class="message" tabindex="-1">
            <div class="message__time">${new Date().toLocaleTimeString("ru-Ru", {
                hour: "2-digit",
                minute: "2-digit",
              })}</div>
            <div class="message__text">${text}</div>
        </div>`;
        messageContainer.innerHTML+=botMessage;
    } 

    let userMessage; 
    const chatBtn = document.querySelector(".chat-widget__side");
    const chat = document.querySelector(".chat-widget");
    const chatInput = document.querySelector(".chat-widget__input");
    const messageContainer = chat.querySelector(".chat-widget__messages");
    const closeBtn = document.querySelector(".chat-widget__close-btn");
    closeBtn.onclick = () => {
        chat.classList.remove("chat-widget_active");
    };
    // const botMessages = ["Перезвоните позже ,а точнее никогда!","Вы простите ,но вы похожи на дурака...","Вы мне напоминаете назойливую муху!!","А вы дома голову не забыли чтоб такое писать!"];
    chatBtn.onclick = function() {
        chat.classList.add("chat-widget_active");
    };
    chatInput.addEventListener("keydown",(e) => {
        if (e.code==="Enter") {
            userMessage = `<div class="message message_client" tabindex="-1">
            <div class="message__time">${new Date().toLocaleTimeString("ru-Ru", {
                hour: "2-digit",
                minute: "2-digit",
              })}</div>
            <div class="message__text">${e.currentTarget.value}</div>
        </div>`;
        messageContainer.innerHTML+=userMessage;
        e.currentTarget.value = '';
        setTimeout(() =>{
            BotSendMessage("Спасибо!Скоро свяжусь с вами!");
        },1000);
        };
    });
}
ChatGpd();