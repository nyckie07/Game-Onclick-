const elemento = document.getElementById('elemento');

elemento.addEventListener('click', () => {
  const randomColor = '#' + Math.floor(Math.random()*16777215).toString(16); 
  const randomX = Math.floor(Math.random() * window.innerWidth); 
  const randomY = Math.floor(Math.random() * window.innerHeight);
  
  elemento.style.backgroundColor = randomColor;
  elemento.style.left = `${randomX}px`;
  elemento.style.top = `${randomY}px`;
});
