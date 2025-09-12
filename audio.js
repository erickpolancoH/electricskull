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



//parallax.js


  document.addEventListener("DOMContentLoaded", function () {
    const isIOS = /iPad|iPhone|iPod/.test(navigator.userAgent) && !window.MSStream;
    const isAndroid = /Android/.test(navigator.userAgent);

    if (isIOS || isAndroid) {
      // Aplica el fondo parallax para móviles
      const bgWrap = document.createElement("div");
      bgWrap.id = "background_wrap";
      bgWrap.style.position = "absolute";
      bgWrap.style.top = "0";
      bgWrap.style.left = "0";
      bgWrap.style.width = "100%";
      bgWrap.style.height = "100vh";
      bgWrap.style.zIndex = "-1";
      bgWrap.style.backgroundImage = "url('ParalaxPedal0001-0250.jpg')"; // Usa imagen, no .mkv
      bgWrap.style.backgroundSize = "cover";
      bgWrap.style.backgroundRepeat = "no-repeat";
      bgWrap.style.backgroundPosition = "center";

      document.body.appendChild(bgWrap);
    }
  });