const btn = document.querySelector(".j-btn-click");

btn.addEventListener('click', () => {
  const screenWidth = window.screen.width;
  const screenHeight = window.screen.height;
  alert(`Размер экрана ${screenWidth} на ${screenHeight}`);
});