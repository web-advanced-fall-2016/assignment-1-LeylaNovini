//modal leyla novini, 2016
//open modal from click on image
let cuties = document.querySelectorAll('.cute .picture');

for(let i=0; i < cuties.length; i++){
  cuties[i].addEventListener("click", openPup, false);
}

function openPup(evnt){
  let pup = this.parentNode.parentNode.querySelector('.modal');
  pup.style.display = "inline-block";
}

//close modal with x in corner of modal
let close = document.querySelectorAll('.cute .close');

for(let i=0; i < close.length; i++) {
  close[i].addEventListener("click", closePup, false);
}

function closePup(evnt){
  let x = this.parentNode.parentNode.parentNode.querySelector('.modal');
  x.style.display = "none";
}

//close modal by clicking outside modal
let modalBack = document.querySelectorAll('.cute .modal');

for(let i=0; i < modalBack.length; i++){
  modalBack[i].addEventListener("click", closeWindow, false);
}

function closeWindow(evnt) {
  let p = this.parentNode.querySelector('.modal');
  p.style.display = "none";
  console.log(evnt.target);
}

//close modal with esc key
document.addEventListener("keydown", closeModal, false);

function closeModal(evnt){
  if(evnt.keyCode == 27){
  let close = document.querySelectorAll('.modal');
  for(let i = 0; i < close.length; i++){
    close[i].style.display = "none";
    }
  }
}

//toggle full screen
//enter key starts full screen
//space key exits full screen
function toggleFullScreen() {
  if ((document.fullScreenElement && document.fullScreenElement !== null) || 
      (!document.mozFullScreen && !document.webkitIsFullScreen)) {              
    if (document.documentElement.requestFullScreen) {
      document.documentElement.requestFullScreen();
    } else if (document.documentElement.mozRequestFullScreen) {
      document.documentElement.mozRequestFullScreen();
    } else if (document.documentElement.webkitRequestFullScreen) {
      document.documentElement.webkitRequestFullScreen(Element.ALLOW_KEYBOARD_INPUT);
    }
  } else {
    if (document.cancelFullScreen) {
      document.cancelFullScreen();
    } else if (document.mozCancelFullScreen) {
      document.mozCancelFullScreen();
    } else if (document.webkitCancelFullScreen) {
      document.webkitCancelFullScreen();
    }
  }
}

document.addEventListener("keydown", function(evnt) {
  if (evnt.keyCode == 13) {
    toggleFullScreen();
  }
   if (evnt.keyCode == 32) {
    if (document.cancelFullScreen) {
      document.cancelFullScreen();
    } else if (document.mozCancelFullScreen) {
      document.mozCancelFullScreen();
    } else if (document.webkitCancelFullScreen) {
      document.webkitCancelFullScreen();
    }
 }
}, false);