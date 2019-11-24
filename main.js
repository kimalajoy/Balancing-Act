var closeButton = document.querySelector('.close');

closeButton.addEventListener('click', closeWelcome);

function closeWelcome() {
  this.parentNode.remove();
}

var cow = document.querySelector('.icon.chart');

cow.addEventListener('mouseover', hover);
cow.addEventListener('mouseout', hoverLeave);

var taco = document.querySelector('.icon.wallet');

taco.addEventListener('mouseover', hover);
taco.addEventListener('mouseout', hoverLeave);

function hover(color) {
  this.style.borderLeft = '4px solid #1CA3BA';
}
function hoverLeave(color) {
  this.style.borderLeft = '#fff';
}

var beans = document.querySelector('.icon.profile');

beans.addEventListener('mouseover', hover);
beans.addEventListener('mouseout', hoverLeave);
