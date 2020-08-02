
// Get a reference to an element
var square = document.querySelector('.square');
var longClick;

square.addEventListener('mousedown', mouseDown);
square.addEventListener('mouseup', mouseUp);

//clear timeout
function mouseUp(){
  clearTimeout(longClick);
}

//set timeout delay 500
function mouseDown(e){
  longClick = window.setTimeout(() => {e.target.classList.toggle('expand')}, 500);
}



/*
// Get a reference to an element
var square = document.querySelector('.square');

// Create a manager to manager the element
var manager = new Hammer.Manager(square);

// Create a recognizer
var Press = new Hammer.Press({
  time: 500
});

// Add the recognizer to the manager
manager.add(Press);

// Subscribe to desired event
manager.on('press', function(e) {
  e.target.classList.toggle('expand');
});
*/










