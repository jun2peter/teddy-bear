document.addEventListener('DOMContentLoaded', () => {
    const playOverlay = document.getElementById('play-overlay');
    const videos = document.querySelectorAll('#video-section video');
    const nextButtons = document.querySelectorAll('#video-section button');
    const backgroundMusic = document.getElementById('background-music');
    const backgroundMusic1 = document.getElementById('background-music1');

    let currentVideoIndex = 0;

    playOverlay.addEventListener('click', () => {
        playOverlay.style.display = 'none';
        playVideoWithBackgroundMusic();
    });

    videos.forEach((video, index) => {
        video.addEventListener('ended', () => {
            nextButtons[currentVideoIndex].style.display = 'block';
        });
    });

    nextButtons.forEach((button, index) => {
        button.addEventListener('click', () => {
            videos[currentVideoIndex].style.display = 'none';
            nextButtons[currentVideoIndex].style.display = 'none';
            currentVideoIndex++;
            if (currentVideoIndex < videos.length) {
                playVideoWithBackgroundMusic();
            }
        });
    });

    function playVideoWithBackgroundMusic() {
        const video = videos[currentVideoIndex];
        video.style.display = 'block';
        video.play();

        if (currentVideoIndex === 1 || currentVideoIndex === 8 || currentVideoIndex === 9) {
            backgroundMusic.play();
        } else {
            backgroundMusic.pause();
            backgroundMusic.currentTime = 0;
        }
        
        if (currentVideoIndex === 12  || currentVideoIndex === 19 || currentVideoIndex === 20) {
            backgroundMusic1.play();
        } else {
            backgroundMusic1.pause();
            backgroundMusic.currentTime = 0;
        }
    }
});
