document.addEventListener("DOMContentLoaded", function () {

    const button = document.querySelector(".info__button");
    const info = document.querySelector(".info__notification");
    const timeZone = document.querySelector(".info__timezone");
    const dateTime = document.querySelector(".info__date-time");

    button.addEventListener("click", getTimeandZone);
        
        function getTimeandZone() {
            if (navigator.geolocation) {
                info.textContent = "Определение вашего местоположения и временной зоны...";
                navigator.geolocation.getCurrentPosition(success, error);
            } else {
                info.textContent = "Информация о местоположении и временной зоне недоступна";
            }
    }

    function success(position) {
        const lat  = position.coords.latitude;
        const long = position.coords.longitude;        
        getRequest(lat,long);
    }

    function getRequest(lat,long) {
        const link = `https://api.ipgeolocation.io/timezone?apiKey=32bcd4a6e4b548968e7afcdb682ac679&lat=${lat}&long=${long}`;
        
        fetch(link)
        .then (function(response) {
            console.log("Response:", response);
            const result = response.json();
            console.log("Result:", result);
            return result;
        })
        .then (function showTime(result) {
            info.textContent = "Информация о местоположении и временной зоне:";
            timeZone.textContent = `Временная зона: ${result.timezone}`;
            dateTime.textContent = `Локальное время и дата: ${result.date_time_txt}`;
        })
        .catch(function() {
            info.textContent = "Информация о местоположении и временной зоне недоступна";
        })
    }

    function error() {
        info.textContent = "Информация о местоположении и временной зоне недоступна";
        timeZone.textContent = "";
        dateTime.textContent = "";
    };
})