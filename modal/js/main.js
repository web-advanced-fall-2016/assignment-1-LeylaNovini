let pup1 = document.getElementById("pic1");
let pup2 = document.getElementById("pic2");
let pup3 = document.getElementById("pic3");
let pup4 = document.getElementById("pic4");

function pupClicked1(evt) {
	let p = document.getElementById("mode1");
	p.style.display = "inline-block";
}

function pupClicked2(evt) {
	let p = document.getElementById("mode2");
	p.style.display = "inline-block";
}

function pupClicked3(evt) {
	let p = document.getElementById("mode3");
	p.style.display = "inline-block";
}

function pupClicked4(evt) {
	let p = document.getElementById("mode4");
	p.style.display = "inline-block";
}

pup1.addEventListener("click", pupClicked1, false);
pup2.addEventListener("click", pupClicked2, false);
pup3.addEventListener("click", pupClicked3, false);
pup4.addEventListener("click", pupClicked4, false);

let close1 = document.getElementById("cOne");
let close2 = document.getElementById("cTwo");
let close3 = document.getElementById("cThree");
let close4 = document.getElementById("cFour");

function pupClosed1(evt) {
	let p = document.getElementById("mode1");
	p.style.display = "none";
}

function pupClosed2(evt) {
	let p = document.getElementById("mode2");
	p.style.display = "none";
}

function pupClosed3(evt) {
	let p = document.getElementById("mode3");
	p.style.display = "none";
}

function pupClosed4(evt) {
	let p = document.getElementById("mode4");
	p.style.display = "none";
}

close1.addEventListener("click", pupClosed1, false);
close2.addEventListener("click", pupClosed2, false);
close3.addEventListener("click", pupClosed3, false);
close4.addEventListener("click", pupClosed4, false);

let modal1 = document.getElementById("mode1");
let modal2 = document.getElementById("mode2");
let modal3 = document.getElementById("mode3");
let modal4 = document.getElementById("mode4");

window.onclick = function(event) {
	if (event.target == modal1) {
        modal1.style.display = "none";
    }
	if (event.target == modal2) {
        modal2.style.display = "none";
    }
    if (event.target == modal3) {
        modal3.style.display = "none";
    }
    if (event.target == modal4) {
        modal4.style.display = "none";
    }
}

document.onkeydown = function(evt) {
	evt = evt || window.event;
if (evt.keyCode == 27) {
	let p = document.getElementById("mode1");
	p.style.display = "none";
}
if (evt.keyCode == 27) {
	let p = document.getElementById("mode2");
	p.style.display = "none";
}
if (evt.keyCode == 27) {
	let p = document.getElementById("mode3");
	p.style.display = "none";
}
if (evt.keyCode == 27) {
	let p = document.getElementById("mode4");
	p.style.display = "none";
}
};

function toggleFullScreen() {
  if ((document.fullScreenElement && document.fullScreenElement !== null) ||    // alternative standard method
      (!document.mozFullScreen && !document.webkitIsFullScreen)) {               // current working methods
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

document.addEventListener("keydown", function(e) {
  if (e.keyCode == 13) {
    toggleFullScreen();
  }
}, false);

document.addEventListener("keydown", function(e) {
 if (e.keyCode == 32) {
    if (document.cancelFullScreen) {
      document.cancelFullScreen();
    } else if (document.mozCancelFullScreen) {
      document.mozCancelFullScreen();
    } else if (document.webkitCancelFullScreen) {
      document.webkitCancelFullScreen();
    }
 }
}, false);