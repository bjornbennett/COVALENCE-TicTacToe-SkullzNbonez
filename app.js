// gather all squares into array
let cells = document.querySelectorAll('.row div'),
    clickCount = 0,
    checkBoardClass = [
      ['.one', '.two', '.three'],
      ['.four', '.five', '.six'],
      ['.seven', '.eight', '.nine'],
      ['.one', '.four', '.seven'],
      ['.two', '.five', '.eight'],
      ['.three', '.six', '.nine'],
      ['.one', '.five', '.nine'],
      ['.three', '.five', '.seven']
    ];

// listen to all squares
cells.forEach(cell => {
  cell.addEventListener('click', clickedCell);
});

// function to check squares
function clickedCell(e) {
  // helpers
    //console.log(e);
    console.log('clickCount: ' + clickCount);
    
    // if 9th click, clear board, or else carry on
    if( elSelector('.message').length > 0 ){
      resetToStart();
      document.querySelector('.message').innerHTML = "";
    } else if(clickCount >= 9){
      resetToStart();
    } else {
      
      // if cell is empty, add X or O
      if( e.target.innerHTML.length == 0){
        // increase click count
        clickCount++;

        // check if even or odd click, add X or O
        if(clickCount % 2 == true){
          e.target.innerHTML = 'X';
        } else if(clickCount % 2 == false){
          e.target.innerHTML = 'O';
        }
        // check if we have a winner
        checkWinningCombo('X');
        checkWinningCombo('O');

      }
    }
}

function checkWinningCombo(letter){
  // cylce through checkBoard array, check if there's a winning match. If a match, then a winner
  for (let i = 0; i < checkBoardClass.length; i++) {
    // find combinations from array
    [k,l,m] = [checkBoardClass[i][0],checkBoardClass[i][1],checkBoardClass[i][2]];
    
    // if a winner!
    if( elSelector(k) == letter  && elSelector(l) == letter && elSelector(m) == letter ){
      document.querySelector('.message').innerHTML = 'We have a winner! Game Over!';
    }
    // // recode this, resets board 
    // if( divSelector(k) == letter  && divSelector(l) == letter && divSelector(m) == letter && document.querySelector('.message').innerHTML.length > 0){
    //   resetToStart();
    // }
  }
}

// reset game
function resetToStart(){
  cells.forEach(cell => {
    cell.innerHTML = "";
  });
  clickCount = 0;
  console.log('Game has been reset!');
}

// select element and check innerHTML
function elSelector(e){
  return document.querySelector(e).innerHTML;
}