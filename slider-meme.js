const slider_meme = document.querySelector("#slider-meme");
let sliderSectionMeme = document.querySelectorAll(".slider__section__meme");
let sliderSectionLastMeme = sliderSectionMeme[sliderSectionMeme.length -1];

const btnRightMeme = document.querySelector("#btn-right-meme");
const btnLeftMeme= document.querySelector("#btn-left-meme");

slider_meme.insertAdjacentElement('afterbegin' ,sliderSectionLastMeme);

//derecha

function moverDerechaMeme(){

    let sliderSectionFirstMeme = document.querySelectorAll(".slider__section__meme")[0];
    slider_meme.style.marginLeft = "-200%";
    slider_meme.style.transition = "all 0.5s";

    setTimeout(function(){

        slider_meme.style.transition = "none";
        slider_meme.insertAdjacentElement('beforeend' ,sliderSectionFirstMeme);
        slider_meme.style.marginLeft = "-100%";
    
    }, 500);

}

btnLeftMeme.addEventListener('click', function(){
    moverDerechaMeme();
});

//izquierda

function moverIzquierdaMeme(){

    let sliderSectionMeme = document.querySelectorAll(".slider__section__meme");
    let sliderSectionLastMeme = sliderSectionMeme[sliderSectionMeme.length -1];
    slider_meme.style.marginLeft = "0%";
    slider_meme.style.transition = "all 0.5s";

    setTimeout(function(){

        slider_meme.style.transition = "none";
        slider_meme.insertAdjacentElement('afterbegin' ,sliderSectionLastMeme);
        slider_meme.style.marginLeft = "-100%";
    
    }, 500);

}

btnRightMeme.addEventListener('click', function(){
    moverIzquierdaMeme();
});
