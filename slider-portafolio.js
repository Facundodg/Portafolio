const slider_portafolio = document.querySelector("#slider-portafolio");
let sliderSectionPortafolio = document.querySelectorAll(".slider__section__portafolio");
let sliderSectionLastPortafolio = sliderSectionPortafolio[sliderSectionPortafolio.length -1];

const btnRightPortafolio = document.querySelector("#btn-right-portafolio");
const btnLeftPortafolio= document.querySelector("#btn-left-portafolio");

slider_portafolio.insertAdjacentElement('afterbegin' ,sliderSectionLastPortafolio);

//derecha

function moverDerechaPortafolio(){

    let sliderSectionFirstPortafolio = document.querySelectorAll(".slider__section__portafolio")[0];
    slider_portafolio.style.marginLeft = "-200%";
    slider_portafolio.style.transition = "all 0.5s";

    setTimeout(function(){

        slider_portafolio.style.transition = "none";
        slider_portafolio.insertAdjacentElement('beforeend' ,sliderSectionFirstPortafolio);
        slider_portafolio.style.marginLeft = "-100%";
    
    }, 500);

}

btnLeftPortafolio.addEventListener('click', function(){
    moverDerechaPortafolio();
});

//izquierda

function moverIzquierdaPortafolio(){

    let sliderSectionPortafolio = document.querySelectorAll(".slider__section__portafolio");
    let sliderSectionLastPortafolio = sliderSectionPortafolio[sliderSectionPortafolio.length -1];
    slider_portafolio.style.marginLeft = "0%";
    slider_portafolio.style.transition = "all 0.5s";

    setTimeout(function(){

        slider_portafolio.style.transition = "none";
        slider_portafolio.insertAdjacentElement('afterbegin' ,sliderSectionLastPortafolio);
        slider_portafolio.style.marginLeft = "-100%";
    
    }, 500);

}

btnRightPortafolio.addEventListener('click', function(){
    moverIzquierdaPortafolio();
});
