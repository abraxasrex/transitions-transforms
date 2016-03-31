// get a reference to all da squares in the calendar! //
var squares = document.getElementsByClassName('square');

// for each square...
for(var i = 0; i < squares.length; i++){
  if(i < 31 ){
    squares[i].textContent = i + 1;
  }
}
