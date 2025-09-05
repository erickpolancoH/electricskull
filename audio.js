//para el audio

const audio = document.getElementById('myAudio');
const playBtn = document.getElementById('playBtn');
const pauseBtn = document.getElementById('pauseBtn');
const stopBtn = document.getElementById('stopBtn');

playBtn.addEventListener('click', () => {
  audio.play();
});

pauseBtn.addEventListener('click', () => {
  audio.pause();
});

stopBtn.addEventListener('click', () => {
  audio.pause();
  audio.currentTime = 0;
});




//lazy loading audio 

function loadAudio(src) {
  const audio = new Audio();
  audio.src = src;
  audio.autoplay = true;
  audio.playsInline = true;
  document.body.appendChild(audio);
}


// para el parallax

window.addEventListener('scroll', () => {
  const scrollY = window.scrollY;
  const video = document.querySelector('.video-bg');
  const logo = document.querySelector('.logo-container');

  // Parallax effect: slower movement
  video.style.transform = `translateY(${scrollY * 0.2}px)`;
  logo.style.transform = `translateY(${scrollY * 0.4}px)`;
});
