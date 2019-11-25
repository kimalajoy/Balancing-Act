var closeButton = document.querySelector('.close');

closeButton.addEventListener('click', closeWelcome);

function closeWelcome() {
  this.parentNode.remove();
}

var icons = document.querySelectorAll('.icon');

// icons[1].addEventListener('click', click);
// icons[2].addEventListener('click', click);
// icons[3].addEventListener('click', click);
for(let i=1;i<icons.length;i++){
  // icons[i].addEventListener('mouseover', hover);
  icons[i].addEventListener('click', click);
  // icons[i].addEventListener('mouseout', hoverLeave);
}


function hover(color) {
  this.classList.add("active");
}
function hoverLeave(color) {
  this.classList.remove("active");
}

function click() {
  document.querySelector('.icon.active').classList.remove('active');
  this.classList.add('active');

  var sectionName = this.getAttribute('section');
  if(sectionName != null){
    return;
  }

  document.querySelector('.section.active').classList.remove('active');
  document.querySelector(`.${sectionName}`).classList.add('active');

  // this.classList.hide('.dashboard-main.section.active');
}

// function hide () {
//   var soda = document.querySelector('.dashboard-main.section.active');
//
//   // addEventListener('click', '.icon.wallet')
//
// }
