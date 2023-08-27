let olimar_img = document.getElementById("olimar_stock");
let olimar_audio = document.getElementById("olimar_player");
let play_on = false;

function playOlimarSong() {   
    play_on ? olimar_audio.pause() : olimar_audio.play();
}

olimar_audio.onplaying = function() {
    play_on = true;
};

olimar_audio.onpause = function() {
    play_on = false;
};

olimar_img.addEventListener("click", playOlimarSong);