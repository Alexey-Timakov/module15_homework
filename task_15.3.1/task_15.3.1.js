document.addEventListener("DOMContentLoaded", function() {

    const button = document.querySelector(".flag_btn");
    const flag_rus = document.querySelector(".flag_rus");
    const flag_fra = document.querySelector(".flag_fra");
    const flag_fin = document.querySelector(".flag_fin");
    const flag_swi = document.querySelector(".flag_swi");
    const flag_jap = document.querySelector(".flag_jap");

    button.addEventListener("click", function(){
        drawFlagRus();
        drawFlagFra();
        drawFlagFin();
        drawFlagSwi();
        drawFlagJap();
    });

    function drawFlagRus() {
        flag_rus.innerHTML = `
        <p>Флаг России:</p>
        <svg width="250" height="150">
            <rect x="0" y="50" width="250" height="50" fill="blue"/>
            <rect x="0" y="100" width="250" height="50" fill="red"/>
            <polygon style="fill:none;stroke:black;stroke-width:2" points="0,0 250,0 250,150 0,150"/>
        </svg>`;
    }

    function drawFlagFra() {
        flag_fra.innerHTML = `
        <p>Флаг Франции:</p>
        <svg width="250" height="150">
            <rect x="0" y="0" width="83" height="150" fill="blue"/>
            <rect x="167" y="0" width="83" height="150" fill="red"/>
            <polygon style="fill:none;stroke:black;stroke-width:2" points="0,0 250,0 250,150 0,150"/>
        </svg>`;
    }

    function drawFlagFin() {
        flag_fin.innerHTML = `
        <p>Флаг Финляндии:</p>
        <svg width="250" height="150">
            <rect x="0" y="54" width="250" height="41" fill="blue"/>
            <rect x="69" y="0" width="41" height="150" fill="blue"/>
            <polygon style="fill:none;stroke:black;stroke-width:2" points="0,0 250,0 250,150 0,150"/>
        </svg>`;
    }

    function drawFlagSwi() {
        flag_fin.innerHTML = `
        <p>Флаг Швейцарии:</p>
        <svg width="250" height="150">
            <polygon fill="red" points="0,0 250,0 250,150 0,150"/>
            <rect x="82" y="60" width="85" height="25" fill="white"/>
            <rect x="112" y="32" width="25" height="85" fill="white"/>
            <polygon style="fill:none;stroke:black;stroke-width:2" points="0,0 250,0 250,150 0,150"/>
        </svg>`;
    }

    function drawFlagJap() {
        flag_jap.innerHTML = `
        <p>Флаг Японии:</p>
        <svg width="250" height="150">
            <polygon fill="white" points="0,0 250,0 250,150 0,150"/>
            <circle cx="125" cy="75" r="40" fill="red"/>
            <polygon style="fill:none;stroke:black;stroke-width:2" points="0,0 250,0 250,150 0,150"/>
        </svg>`;
    }
});