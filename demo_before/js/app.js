// get a reference to all da squares in the calendar! //
var squares = document.getElementsByClassName('square');

function addAClass(event){
  event.target.classList.add('reservedDate');
}
// for each square...
for(var i = 0; i < squares.length; i++){
  squares[i].addEventListener('click', addAClass);
  if(i < 30 ) {
    squares[i].textContent = i + 1;
  }
}
