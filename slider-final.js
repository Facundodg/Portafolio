const slider_final = document.querySelector("#slider-final");
let sliderSectionFinal = document.querySelectorAll(".slider__section__final");
let sliderSectionLastFinal = sliderSectionFinal[sliderSectionFinal.length -1];

const btnRightFinal = document.querySelector("#btn-right-final");
const btnLeftFinal= document.querySelector("#btn-left-final");

slider_final.insertAdjacentElement('afterbegin' ,sliderSectionLastFinal);

//derecha

function moverDerechaFinal(){

    let sliderSectionFirstFinal = document.querySelectorAll(".slider__section__final")[0];
    slider_final.style.marginLeft = "-200%";
    slider_final.style.transition = "all 0.5s";

    setTimeout(function(){

        slider_final.style.transition = "none";
        slider_final.insertAdjacentElement('beforeend' ,sliderSectionFirstFinal);
        slider_final.style.marginLeft = "-100%";
    
    }, 500);

}

btnLeftFinal.addEventListener('click', function(){
    moverDerechaFinal();
});

//izquierda

function moverIzquierdaFinal(){

    let sliderSectionFinal = document.querySelectorAll(".slider__section__final");
    let sliderSectionLastFinal = sliderSectionFinal[sliderSectionFinal.length -1];
    slider_final.style.marginLeft = "0%";
    slider_final.style.transition = "all 0.5s";

    setTimeout(function(){

        slider_final.style.transition = "none";
        slider_final.insertAdjacentElement('afterbegin' ,sliderSectionLastFinal);
        slider_final.style.marginLeft = "-100%";
    
    }, 500);

}

btnRightFinal.addEventListener('click', function(){
    moverIzquierdaFinal();
});
