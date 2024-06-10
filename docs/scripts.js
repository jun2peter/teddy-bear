document.addEventListener('DOMContentLoaded', () => {
    const playOverlay = document.getElementById('play-overlay');
    const videos = [
        document.getElementById('first-video'),
        document.getElementById('second-video'),
        document.getElementById('third-video'),
        document.getElementById('fourth-video'),
        document.getElementById('fifth-video'),
        document.getElementById('sixth-video'),
        document.getElementById('seventh-video'),
        document.getElementById('eighth-video'),
        document.getElementById('ninth-video'),
        document.getElementById('tenth-video')
    ];
    const nextButton = document.getElementById('next-video-button');
    const backgroundMusic = document.getElementById('background-music');

    let currentVideoIndex = 0;

    playOverlay.addEventListener('click', () => {
        playOverlay.style.display = 'none';
        backgroundMusic.play();
        videos[currentVideoIndex].style.display = 'block';
        videos[currentVideoIndex].play();
    });

    videos.forEach((video, index) => {
        video.addEventListener('ended', () => {
            nextButton.style.display = 'block';
        });
    });

    nextButton.addEventListener('click', () => {
        videos[currentVideoIndex].style.display = 'none';
        nextButton.style.display = 'none';
        currentVideoIndex++;
        if (currentVideoIndex < videos.length) {
            videos[currentVideoIndex].style.display = 'block';
            videos[currentVideoIndex].play();
        }
    });
});

