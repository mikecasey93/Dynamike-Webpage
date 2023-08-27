let index_img = document.getElementById("index_logo");
let index_audio = document.getElementById("index_player");
let play_on = false;

function playIndexSong() {   
    play_on ? index_audio.pause() : index_audio.play();
}

index_audio.onplaying = function() {
    play_on = true;
};

index_audio.onpause = function() {
    play_on = false;
};

index_img.addEventListener("click", playIndexSong);