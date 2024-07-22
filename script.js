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

    //modal functionality
    const modal = document.getElementById('image-modal');
    const modaling = document.getElementById('full-image');
    const close = document.querySelector('close');
    const galleryImages = document.querySelectorAll('gallery-img');
    galleryImages.forEach(image => {
        img.addEventListener('click', () => {
            modal.style.display = 'block';
            modaling.src = image.src;
        });
    });
        close.addEventListener('click', () => {
            modal.style.display = 'none';
        });
        //close out the modal when clicking outside of the image

        window.addEventListener('click', (event) => {
            if (event.target === modal) {
                modal.style.display = 'none';
            }
        });
    });


    function playMusic() {

        document.getElementById('background-music').play();
    }

    function pauseMusic() {
        document.getElementById('background-music').pause();
    }