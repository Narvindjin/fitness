let initVideo = () => {
  if (document.querySelector('[data-video]')) {
    const video = document.querySelector('[data-video="video"]');
    const image = document.querySelector('[data-video="image"]');
    const click = new Event('click');
    const ANIMATION_TIME = 300;
    const playButton = document.querySelector('[data-video="play"]');

    playButton.addEventListener('click', () => {
      playButton.setAttribute('disabled', 'true');
      image.classList.add('training__video-wrapper--fading');
      video.classList.add('training__video--shown');
      setTimeout(() => {
        image.classList.add('training__video-wrapper--hidden');
        video.src = video.src + '?autoplay=1';
        video.dispatchEvent(click);
      }, ANIMATION_TIME);
    });
  }
};

export {initVideo};
