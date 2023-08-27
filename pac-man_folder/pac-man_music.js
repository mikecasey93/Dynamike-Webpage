let pacman_img = document.getElementById("pac-man_stock");
let pacman_audio = document.getElementById("pac-man_player");
let play_on = false;

function playPacmanSong() {   
    play_on ? pacman_audio.pause() : pacman_audio.play();
}

pacman_audio.onplaying = function() {
    play_on = true;
};

pacman_audio.onpause = function() {
    play_on = false;
};

pacman_img.addEventListener("click", playPacmanSong);