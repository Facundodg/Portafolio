const slider_Spring = document.querySelector("#slider-spring");
let sliderSectionSpring = document.querySelectorAll(".slider__section__spring");
let sliderSectionLastSpring = sliderSectionSpring[sliderSectionSpring.length -1];

const btnRightSpring = document.querySelector("#btn-right-spring");
const btnLeftSpring= document.querySelector("#btn-left-spring");

slider_Spring.insertAdjacentElement('afterbegin' ,sliderSectionLastSpring);

//derecha

function moverDerechaSpring(){

    let sliderSectionFirstSpring = document.querySelectorAll(".slider__section__spring")[0];
    slider_Spring.style.marginLeft = "-200%";
    slider_Spring.style.transition = "all 0.5s";

    setTimeout(function(){

        slider_Spring.style.transition = "none";
        slider_Spring.insertAdjacentElement('beforeend' ,sliderSectionFirstSpring);
        slider_Spring.style.marginLeft = "-100%";
    
    }, 500);

}

btnLeftSpring.addEventListener('click', function(){
    moverDerechaSpring();
});

//izquierda

function moverIzquierdaSpring(){

    let sliderSectionSpring = document.querySelectorAll(".slider__section__spring");
    let sliderSectionLastSpring = sliderSectionSpring[sliderSectionSpring.length -1];
    slider_Spring.style.marginLeft = "0%";
    slider_Spring.style.transition = "all 0.5s";

    setTimeout(function(){

        slider_Spring.style.transition = "none";
        slider_Spring.insertAdjacentElement('afterbegin' ,sliderSectionLastSpring);
        slider_Spring.style.marginLeft = "-100%";
    
    }, 500);

}

btnRightSpring.addEventListener('click', function(){
    moverIzquierdaSpring();
});
