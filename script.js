document.body.addEventListener('keypress', (event) => {
    playSound(event.code.toLowerCase());
});

document.querySelector('.composer button').addEventListener('click', (event) => {
    let song = document.querySelector('#input').value;

    if (song !== ""){
        let songArray = song.split('');
        playComposition(songArray)

    }
});


function playSound(sound) {
    let audioElement = document.querySelector (`#s_${sound}`);
    let keyEelement = document.querySelector(`div[data-key="${sound}"]`);

    if (audioElement) {
        audioElement.currentTime = 0;
        audioElement.play();
    }

    if (keyEelement) {
        keyEelement.classList.add('active');

        setTimeout(() => {
            keyEelement.classList.remove('active');
        },300)
    }

}

function playComposition (songArray){
    let wait = 0;


     for (let songItem of songArray){
        setTimeout(() => {
            playSound(`key${songItem}`);
        }, wait);

        wait+= 250;
  
     }
}