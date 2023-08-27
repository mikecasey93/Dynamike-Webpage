var opacity = 0;
var interval = 0;
window.onload = appear;

function appear(){
    setInterval(display, 200);
}

function display(){
    var text = document.getElementById("inkling_title");
    opacity = Number(window.getComputedStyle(text).getPropertyValue("opacity"));
    
    if(opacity < 1){
        opacity = opacity + 0.1;
        text.style.opacity = opacity;
    }
    else{
        clearInterval(interval);
    }
}