let current = 0;
showSlides();

function showSlides(){
    let slides = document.querySelectorAll("#slides > img");
    for(let i=0; i<slides.length; i++) {
        slides[i].style.display = "none";
    }

    if(current >= slides.length)   
        current = 0;
    slides[current].style.display = "block";
    current++;   
    setTimeout(showSlides, 2100);
}