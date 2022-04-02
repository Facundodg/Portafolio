const slider = document.querySelector("#slider");
let sliderSection = document.querySelectorAll(".slider__section");
let sliderSectionLast = sliderSection[sliderSection.length -1];

const btnRight = document.querySelector("#btn-right");
const btnLeft= document.querySelector("#btn-left");

slider.insertAdjacentElement('afterbegin' ,sliderSectionLast);

//derecha

function moverDerecha(){

    let sliderSectionFirst = document.querySelectorAll(".slider__section")[0];
    slider.style.marginLeft = "-200%";
    slider.style.transition = "all 0.5s";

    setTimeout(function(){

        slider.style.transition = "none";
        slider.insertAdjacentElement('beforeend' ,sliderSectionFirst);
        slider.style.marginLeft = "-100%";
    
    }, 500);

}

btnLeft.addEventListener('click', function(){
        moverDerecha();
});

//izquierda

function moverIzquierda(){

    let sliderSection = document.querySelectorAll(".slider__section");
    let sliderSectionLast = sliderSection[sliderSection.length -1];
    slider.style.marginLeft = "0%";
    slider.style.transition = "all 0.5s";

    setTimeout(function(){

        slider.style.transition = "none";
        slider.insertAdjacentElement('afterbegin' ,sliderSectionLast);
        slider.style.marginLeft = "-100%";
    
    }, 500);

}

btnRight.addEventListener('click', function(){
    moverIzquierda();
});
