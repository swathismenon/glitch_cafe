window.addEventListener('DOMContentLoaded', () => {
  const scene = document.querySelector('a-scene');
  const music = document.querySelector('#jukeboxTrack');

  if (!scene || !music) {
    console.error('music not found.');
    return;
  }

  let isPlaying = false;

  scene.addEventListener('click', () => {
    if (!isPlaying) {
      music.play().catch(err => {
        console.warn('Autoplay blocked:', err);
      });
    } else {
      music.pause();
    }
    isPlaying = !isPlaying;
  });
});
