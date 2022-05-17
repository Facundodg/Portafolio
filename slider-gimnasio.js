const slider_gimnasio = document.querySelector("#slider-gimnasio");
let sliderSectionGimnasio = document.querySelectorAll(".slider__section__gimnasio");
let sliderSectionLastGimnasio = sliderSectionGimnasio[sliderSectionGimnasio.length -1];

const btnRightGimnasio = document.querySelector("#btn-right-gimnasio");
const btnLeftGimnasio= document.querySelector("#btn-left-gimnasio");

slider_gimnasio.insertAdjacentElement('afterbegin' ,sliderSectionLastGimnasio);

//derecha

function moverDerechaGimnasio(){

    let sliderSectionFirstGimnasio = document.querySelectorAll(".slider__section__gimnasio")[0];
    slider_gimnasio.style.marginLeft = "-200%";
    slider_gimnasio.style.transition = "all 0.5s";

    setTimeout(function(){

        slider_gimnasio.style.transition = "none";
        slider_gimnasio.insertAdjacentElement('beforeend' ,sliderSectionFirstGimnasio);
        slider_gimnasio.style.marginLeft = "-100%";
    
    }, 500);

}

btnLeftGimnasio.addEventListener('click', function(){
    moverDerechaGimnasio();
});

//izquierda

function moverIzquierdaGimnasio(){

    let sliderSectionGimnasio = document.querySelectorAll(".slider__section__tiramisu");
    let sliderSectionLastGimnasio = sliderSectionGimnasio[sliderSectionGimnasio.length -1];
    slider_gimnasio.style.marginLeft = "0%";
    slider_gimnasio.style.transition = "all 0.5s";

    setTimeout(function(){

        slider_gimnasio.style.transition = "none";
        slider_gimnasio.insertAdjacentElement('afterbegin' ,sliderSectionLastGimnasio);
        slider_gimnasio.style.marginLeft = "-100%";
    
    }, 500);

}

btnRightGimnasio.addEventListener('click', function(){
    moverIzquierdaGimnasio();
});
