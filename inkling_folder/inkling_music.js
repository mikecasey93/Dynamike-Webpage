let inkling_img = document.getElementById("inkling_stock");
let inkling_audio = document.getElementById("inkling_player");
let play_on = false;

function playInklingSong() {   
    play_on ? inkling_audio.pause() : inkling_audio.play();
}

inkling_audio.onplaying = function() {
    play_on = true;
};

inkling_audio.onpause = function() {
    play_on = false;
};

inkling_img.addEventListener("click", playInklingSong);