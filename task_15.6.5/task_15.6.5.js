document.addEventListener("DOMContentLoaded", function(){

    const divInput = document.querySelector("#input__text");
    const buttonSend = document.querySelector("#input__send");
    const buttonGeo = document.querySelector("#input__geo");
    const buttonConnect = document.querySelector("#control__connect");
    const buttonDisconnect = document.querySelector("#control__disconnect");
    const chatArea = document.querySelector(".chat");
    const link = "wss://echo.websocket.org/";
    
    let websocket;

    buttonConnect.addEventListener("click", connect);
    buttonDisconnect.addEventListener("click", disconnect);
    buttonSend.addEventListener("click", send);
    buttonGeo.addEventListener("click", sendGeo);

    function connect() {
        if (!websocket) {
            websocket = new WebSocket(link);
            websocket.onopen = function (event) {
                writeToChat("CONNECTED", 0);
                // console.log(websocket.readyState);
                console.log(event);
            };
            websocket.onclose = function () {
                writeToChat("DISCONNECTED", 1);
            };
            websocket.onerror = function (event) {
                writeToChat(`ERROR: ${event.data}`, 1);
            };
            websocket.onmessage = function (event) {
                writeToChat(event.data, 2)
                // console.log(event);
            };
        }
    }

    function disconnect() {
        if (websocket) {
            // console.log(websocket.readyState);
            websocket.close();
            websocket = null;    
        }
    }

    function send() {
        let text = divInput.value;
        if (text != "") {
            writeToChat (text, 3);
            if (websocket) {
                websocket.send(text);    
            } else {
                writeToChat ("Соединение не установлено", 1);
            }
        }
    }

    function sendGeo () {
        if (navigator.geolocation) {
            navigator.geolocation.getCurrentPosition(success, error);
        } else {
            // console.log("Информация о местоположении недоступна");
            writeToChat("Информация о местоположении недоступна", 1);
        }
    }

    function success(position) {
        const lat  = position.coords.latitude;
        const long = position.coords.longitude;
        let osmLink = `<a href="https://www.openstreetmap.org/#map=18/${lat}/${long}">Ссылка на местоположение</a>`
        writeToChat(osmLink, 2);
    }

    function error(positionError) {
        // console.log("Error", positionError.message, positionError.code);
        writeToChat(positionError.message, 1);
    };

    function writeToChat (message, id) {
        let newMessage = document.createElement("p");
        newMessage.classList.add(`id${id}`);
        newMessage.innerHTML = message;
        chatArea.appendChild(newMessage);
    }
    })