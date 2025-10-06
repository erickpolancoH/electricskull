function ajustarModelViewer() {
  const viewer = document.querySelector('model-viewer');
  const ancho = window.innerWidth;

  if (ancho < 600) {
    viewer.style.width = '100%';
    viewer.style.height = '300px';
  } else if (ancho < 1024) {
    viewer.style.width = '90%';
    viewer.style.height = '500px';
  } else {
    viewer.style.width = '1280px';
    viewer.style.height = '720px';
  }
}

// Ejecutar al cargar y al redimensionar
window.addEventListener('load', ajustarModelViewer);
window.addEventListener('resize', ajustarModelViewer);


//Funcion para Icon fill
