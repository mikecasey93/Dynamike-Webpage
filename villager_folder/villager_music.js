let villager_img = document.getElementById("villager_stock");
let villager_audio = document.getElementById("villager_player");
let play_on = false;

function playVillagerSong() {   
    play_on ? villager_audio.pause() : villager_audio.play();
}

villager_audio.onplaying = function() {
    play_on = true;
};

villager_audio.onpause = function() {
    play_on = false;
};

villager_img.addEventListener("click", playVillagerSong);