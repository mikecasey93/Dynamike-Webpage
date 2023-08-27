
let ness_img = document.getElementById("ness_stock");
let ness_audio = document.getElementById("ness_player");
let play_on = false;

function playNessSong() {   
    play_on ? ness_audio.pause() : ness_audio.play();
}

ness_audio.onplaying = function() {
    play_on = true;
};

ness_audio.onpause = function() {
    play_on = false;
};

ness_img.addEventListener("click", playNessSong);
