const slider_Tiramisu = document.querySelector("#slider-tiramisu");
let sliderSectionTiramisu = document.querySelectorAll(".slider__section__tiramisu");
let sliderSectionLastTiramisu = sliderSectionTiramisu[sliderSectionTiramisu.length -1];

const btnRightTiramisu = document.querySelector("#btn-right-tiramisu");
const btnLeftTiramisu= document.querySelector("#btn-left-tiramisu");

slider_Tiramisu.insertAdjacentElement('afterbegin' ,sliderSectionLastTiramisu);

//derecha

function moverDerechaTiramisu(){

    let sliderSectionFirstTiramisu = document.querySelectorAll(".slider__section__tiramisu")[0];
    slider_Tiramisu.style.marginLeft = "-200%";
    slider_Tiramisu.style.transition = "all 0.5s";

    setTimeout(function(){

        slider_Tiramisu.style.transition = "none";
        slider_Tiramisu.insertAdjacentElement('beforeend' ,sliderSectionFirstTiramisu);
        slider_Tiramisu.style.marginLeft = "-100%";
    
    }, 500);

}

btnLeftTiramisu.addEventListener('click', function(){
    moverDerechaTiramisu();
});

//izquierda

function moverIzquierdaTiramisu(){

    let sliderSectionTiramisu = document.querySelectorAll(".slider__section__tiramisu");
    let sliderSectionLastTiramisu = sliderSectionTiramisu[sliderSectionTiramisu.length -1];
    slider_Tiramisu.style.marginLeft = "0%";
    slider_Tiramisu.style.transition = "all 0.5s";

    setTimeout(function(){

        slider_Tiramisu.style.transition = "none";
        slider_Tiramisu.insertAdjacentElement('afterbegin' ,sliderSectionLastTiramisu);
        slider_Tiramisu.style.marginLeft = "-100%";
    
    }, 500);

}

btnRightTiramisu.addEventListener('click', function(){
    moverIzquierdaTiramisu();
});
