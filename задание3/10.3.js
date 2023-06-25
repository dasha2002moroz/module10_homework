const wsUri = "wss://echo.websocket.org/";

const input = document.querySelector(".input");
const btnMessage = document.querySelector(".j-btn-message");
const btnGeolocation = document.querySelector(".j-btn-geolocation");
const divDialogue = document.querySelector(".j-div-dialogue");

let websocket = new WebSocket(wsUri);
websocket.onmessage = function (evt) {
    showMessage(evt.data, 'in');
};

function showMessage(message, type) {
    let elem = document.createElement('p');
    elem.classList.add('message');
    elem.textContent = message;
    if (type === 'in') {
        elem.classList.add('message-in');
    } else if (type === 'link') {
        link = document.createElement('a');
        link.href = message;
        link.textContent = 'Ссылка на карту';
        elem.textContent = '';
        elem.appendChild(link);
    }
    divDialogue.appendChild(elem);
    input.value = '';
}

btnMessage.addEventListener('click', () => {
    const message = chatInput.value;
    showMessage(message);
    websocket.send(message);
});

const error = () => {
    msg = 'Невозможно получить ваше местоположение';
    showMessage(msg);
}

const success = (position) => {
    console.log('position', position);
    const latitude = position.coords.latitude;
    const longitude = position.coords.longitude;
    showMessage(`https://www.openstreetmap.org/#map=18/${latitude}/${longitude}`, 'link')
}

btnGeolocation.addEventListener('click', () => {
    if (!navigator.geolocation) {
        msg = 'Geolocation не поддерживается вашим браузером';
        showMessage(msg);
    } else {
        navigator.geolocation.getCurrentPosition(success, error);
    }
});