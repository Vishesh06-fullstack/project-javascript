const SrkSong = document.getElementById("mySong");
const icon = document.querySelector("#icon")
const forward = document.querySelector("#forward");
const song = document.querySelector("#Songs")
const raone = document.querySelector("#raone")
icon.addEventListener("click",function(){
    if(SrkSong.paused){
        SrkSong.play();
        icon.src = "music/pink play button app icon.jpeg";

    }else{
        SrkSong.pause();
        icon.src = "music/pink pause.jpg";
    }
});



forward = [
    "Tumhe Jo Maine Dekha - Main Hoon Na 128 Kbps.mp",
    "Chammak Challo - Ra-One 128 Kbps.mp3",
    "Saiyaara - Ek Tha Tiger 128 Kbps.mp3"


]
function shuffleArray(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
}

// Shuffling the songs array
const shuffledSongs = shuffleArray([...forward]);

// Function to play the songs
function playSongs(forward) {
    let currentSongIndex = 0;

    function playNextSong() {
        if (currentSongIndex < forward.length) {
            const audio = new Audio(forward[currentSongIndex]);
            audio.play();
            audio.onended = () => {
                currentSongIndex++;
                playNextSong();
            };
        } else {
            console.log('All songs have been played!');
        }
    }

    playNextSong();
}

// Start playing the shuffled songs
playSongs(shuffledSongs);

    






// icon.onclick = function(){
//     SrkSong.play();
// }