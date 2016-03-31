
// create a function to add the class we want to transition to //
function markDone(event){
  event.preventDefault();
  event.target.classList.add('calendar-check');
}

// get a reference to all da squares in the calendar! //
var squares = document.getElementsByClassName('square');

// for each square... //
for(var i = 0; i < squares.length; i++){
  // ...add a listener calling the function, //
  squares[i].addEventListener('click', markDone);
  // ...as well as saving myself some typing work.... //
  if(i < 31 ){
    squares[i].textContent = i + 1;
  }
}
