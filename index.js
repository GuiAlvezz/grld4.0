var slideIndex = 0;
showSlides();

function showSlides() {
  var i;
  var slides = document.getElementsByClassName("mySlides");
  
  // Oculta todas as imagens
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";  
  }
  
  // Avança para a próxima imagem
  slideIndex++;
  
  // Retorna para a primeira imagem quando atinge o final
  if (slideIndex > slides.length) {slideIndex = 1}    
  
  // Exibe a imagem atual
  slides[slideIndex-1].style.display = "block";  
  
  // Altera a imagem a cada 2 segundos
  setTimeout(showSlides, 2000); // Muda a imagem a cada 2 segundos
}