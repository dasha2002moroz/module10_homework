const btn = document.querySelector('.j-btn-test');
const iconFirst = document.querySelector('.btn_icon_first');
const iconSecond = document.querySelector('.btn_icon_second');

btn.addEventListener('click', () => {
  if(iconFirst.style.display == 'block'){
    iconFirst.style.display = 'none';
    iconSecond.style.display = 'block';
  }else {
    iconFirst.style.display = 'block';
    iconSecond.style.display = 'none';
  }
});