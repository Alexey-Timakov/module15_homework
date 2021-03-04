document.addEventListener("DOMContentLoaded", function () {

    const button = document.querySelector(".info__button");
    const dispSize = document.querySelector(".info__display-size");
    const geo = document.querySelector(".info__geolocation");

    button.addEventListener("click", getDispSizeAndGeo);

    function getDispSizeAndGeo() {
        getDispSize();
        

        if (navigator.geolocation) {
            geo.textContent = "Определение вашего местоположения";
            navigator.geolocation.getCurrentPosition(success, error);
        } else {
            geo.textContent = "Информация о местоположении недоступна";
        }
    }

    function getDispSize() {
        dispSize.textContent = `Размеры экрана: ${screen.width}p x ${screen.height}p`
    }

    function success(position) {
        const lat  = position.coords.latitude;
        const long = position.coords.longitude;
      
        geo.textContent = `Широта: ${lat} °, Долгота: ${long} °`;
    }

    function error() {
        geo.textContent = "Информация о местоположении недоступна!";
    };
})