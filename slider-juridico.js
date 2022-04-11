const slider_Juridico = document.querySelector("#slider-juridico");
let sliderSectionJuridico = document.querySelectorAll(".slider__section__juridico");
let sliderSectionLastJuridico = sliderSectionJuridico[sliderSectionJuridico.length -1];

const btnRightJuridico = document.querySelector("#btn-right-juridico");
const btnLeftJuridico= document.querySelector("#btn-left-juridico");

slider_Juridico.insertAdjacentElement('afterbegin' ,sliderSectionLastJuridico);

//derecha

function moverDerechaJuridico(){

    let sliderSectionFirstJuridico = document.querySelectorAll(".slider__section__juridico")[0];
    slider_Juridico.style.marginLeft = "-200%";
    slider_Juridico.style.transition = "all 0.5s";

    setTimeout(function(){

        slider_Juridico.style.transition = "none";
        slider_Juridico.insertAdjacentElement('beforeend' ,sliderSectionFirstJuridico);
        slider_Juridico.style.marginLeft = "-100%";
    
    }, 500);

}

btnLeftJuridico.addEventListener('click', function(){
    moverDerechaJuridico();
});

//izquierda

function moverIzquierdaJuridico(){

    let sliderSectionJuridico = document.querySelectorAll(".slider__section__juridico");
    let sliderSectionLastJuridico = sliderSectionJuridico[sliderSectionJuridico.length -1];
    slider_Juridico.style.marginLeft = "0%";
    slider_Juridico.style.transition = "all 0.5s";

    setTimeout(function(){

        slider_Juridico.style.transition = "none";
        slider_Juridico.insertAdjacentElement('afterbegin' ,sliderSectionLastJuridico);
        slider_Juridico.style.marginLeft = "-100%";
    
    }, 500);

}

btnRightJuridico.addEventListener('click', function(){
    moverIzquierdaJuridico();
});
