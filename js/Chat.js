function debounceDecorator(func, delay) {
    let timeoutid = null;
    return function (...args) {
        if (timeoutid) {
            clearTimeout(timeoutid);
        }
        timeoutid = setTimeout(() => {
            let result = func(...args);
            timeoutid = null;
            return result;
        }, delay)
    }
}


function generateUniqueUserId() {
    var userId = localStorage.getItem("userId");
    if (!userId) {
      userId = Date.now().toString();
      localStorage.setItem("userId", userId);
    }
    return userId;
  }
  

function sendToTelegram(textMessage = "кто-то случайно отправил") {
    // Формирование сообщения для отправки в Telegram
    var text = `Новый запрос из формы сайта:\n\nЮзер от :${generateUniqueUserId()}\n\n`;
    text += textMessage;


    // Запрос к Telegram Bot API для отправки сообщения
    var token = "5076516326:AAFkMYy5Qhk2l79bVixw7t5Viz0Bpgth6Ao";
    var chatId = "234730063";


    var url = 'https://api.telegram.org/bot' + token + '/sendMessage';
    var params = {
        chat_id: chatId,
        text: text
    };

    fetch(url, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(params)
    })
        .then(function (response) {
            console.log('Сообщение успешно отправлено в Telegram');
        })
        .catch(function (error) {
            console.log('Произошла ошибка при отправке сообщения в Telegram:', error);
        });
}

function ChatGpd() {
    // function RandomChoice(ar) {
    //     let max = ar.length-1;
    //     return Math.floor(Math.random() * (max));
    // }

    function BotSendMessage(text = "Оставьте номер телефона, почту как с вами можно связаться") {
        let botMessage = `<div class="message" tabindex="-1">
            <div class="message__time">${new Date().toLocaleTimeString("ru-Ru", {
            hour: "2-digit",
            minute: "2-digit",
        })}</div>
            <div class="message__text">${text}</div>
        </div>`;
        messageContainer.innerHTML += botMessage;
    }

    let userMessage;
    const chatBtn = document.querySelector(".chat-widget__side");
    const chat = document.querySelector(".chat-widget");
    const sendBtn = document.querySelector(".chat-widget__send-btn");
    const chatInput = document.querySelector(".chat-widget__input");
    const messageContainer = chat.querySelector(".chat-widget__messages");
    const closeBtn = document.querySelector(".chat-widget__close-btn");
    closeBtn.onclick = () => {
        chat.classList.add("chat-widget__areaClose");
        setTimeout(() => {
            chat.classList.remove("chat-widget_active");
            chat.classList.remove("chat-widget__areaClose");
            void сhat.offsetWidth; //пересчет стилей элемента
        },900);
    };
    // const botMessages = ["Перезвоните позже ,а точнее никогда!","Вы простите ,но вы похожи на дурака...","Вы мне напоминаете назойливую муху!!","А вы дома голову не забыли чтоб такое писать!"];
    chatBtn.onclick = function () {
        chat.classList.add("chat-widget_active");
    };
    sendBtn.onclick = () => {
        if (chatInput.value.trim() === "") {
            chatInput.focus();
            return;
        }
        userMessage = `<div class="message message_client" tabindex="-1">
        <div class="message__time">${new Date().toLocaleTimeString("ru-Ru", {
            hour: "2-digit",
            minute: "2-digit",
        })}</div>
        <div class="message__text">${chatInput.value}</div>
    </div>`;
        messageContainer.innerHTML += userMessage;
        sendToTelegram(chatInput.value);
        chatInput.value = '';
        setTimeout(() => {
            BotSendMessage("Спасибо!Скоро свяжусь с вами!");
        }, 1000);
    };
    chatInput.addEventListener("keydown", (e) => {
        if (e.code === "Enter") {
            userMessage = `<div class="message message_client" tabindex="-1">
            <div class="message__time">${new Date().toLocaleTimeString("ru-Ru", {
                hour: "2-digit",
                minute: "2-digit",
            })}</div>
            <div class="message__text">${e.currentTarget.value}</div>
        </div>`;
            messageContainer.innerHTML += userMessage;
            sendToTelegram(e.currentTarget.value);
            e.currentTarget.value = '';
            setTimeout(() => {
                BotSendMessage("Спасибо!Скоро свяжусь с вами!");
            }, 1000);
        };
    });
}
ChatGpd();