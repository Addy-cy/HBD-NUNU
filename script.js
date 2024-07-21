document.addEventListener('DOMContentLoaded', () => {
    //Attempt to play background music automatically
    const music =
    document.getElementById('background-music');
    music.play().catch(() => {
        //if autoplay is blocked, prompt the users to click anywhere on the page to start the music

        document.body.addEventListener('click',() => {
            music.play();
        }, { once: true});
    });
});

    function playMusic() {

        document.getElementById('background-music').play();
    }

    function pauseMusic() {
        document.getElementById('background-music').pause();
    }