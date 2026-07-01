const video = document.getElementById('teseractoVideo');
const togglePlaybackButton = document.getElementById('togglePlayback');
const toggleMuteButton = document.getElementById('toggleMute');
const videoStatus = document.getElementById('videoStatus');

function syncPlaybackUI() {
    const isPaused = video.paused;
    togglePlaybackButton.textContent = isPaused ? 'Reproducir video' : 'Pausar video';
    videoStatus.textContent = isPaused ? 'En pausa' : 'Reproduciendo';
}

function syncMuteUI() {
    toggleMuteButton.textContent = video.muted ? 'Activar sonido' : 'Silenciar';
}

togglePlaybackButton.addEventListener('click', async () => {
    if (video.paused) {
        await video.play();
    } else {
        video.pause();
    }

    syncPlaybackUI();
});

toggleMuteButton.addEventListener('click', () => {
    video.muted = !video.muted;
    syncMuteUI();
});

video.addEventListener('play', syncPlaybackUI);
video.addEventListener('pause', syncPlaybackUI);
video.addEventListener('volumechange', syncMuteUI);

syncPlaybackUI();
syncMuteUI();
