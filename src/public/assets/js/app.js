const streamMusic = document.getElementById('streamMusic');
var playmusic = false
function openmusic() {
    console.log(playmusic)

    if (playmusic) {
        streamMusic.pause();
        playmusic = false;
    }
    else {
        streamMusic.play();
        playmusic = true;
    }
    $("#PlayMusic, #PauseMusic").toggle();
}