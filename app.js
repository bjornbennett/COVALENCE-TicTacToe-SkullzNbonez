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
    ],
    img1 = '<img src="images/bones.svg">',
    img2 = '<img src="images/skull.svg">';

// listen to all squares
cells.forEach(cell => {
  cell.addEventListener('click', clickedCell);
});

// function to check squares
function clickedCell(e) {
    //console.log('clickCount: ' + clickCount);
    
    // if 9th click, clear board, or else carry on
    if( elSelector('.message').length > 0 ){
      resetToStart();
    } else if(clickCount >= 9){
      resetToStart();
    } else {
      
      // if cell is empty, add X or O
      if( e.target.innerHTML.length == 0){
        // increase click count
        clickCount++;

        // check if even or odd click, add X or O
        if(clickCount % 2 == true){
          e.target.innerHTML = img1;
        } else if(clickCount % 2 == false){
          e.target.innerHTML = img2;
        }
        // check if we have a winner
        checkWinningCombo(img1);
        checkWinningCombo(img2);

      }
    }
    if(clickCount >= 3){
      document.querySelector('#board').classList.remove('shudder');
    }
}

// check cells if a winner
function checkWinningCombo(letter){
  for (let i = 0; i < checkBoardClass.length; i++) {
    [k,l,m] = [checkBoardClass[i][0],checkBoardClass[i][1],checkBoardClass[i][2]];
    
    // if winner!
    if( elSelector(k) == letter  && elSelector(l) == letter && elSelector(m) == letter ){
      let msg = 'Arrrrh arrrrrh! <strong>Looky like we \'ava champ!!</strong><br> <span>click the board to start another game</span>';
      document.querySelector('.message').innerHTML = msg;
      document.querySelector(k).classList.add('cream1');
      document.querySelector(l).classList.add('cream2');
      document.querySelector(m).classList.add('cream3');
    }
  }
}

// reset game
function resetToStart(){
  cells.forEach(cell => {
    cell.innerHTML = "";
  });
  clickCount = 0;
  document.querySelector('.message').innerHTML = "";
  cells.forEach(cell => {
    cell.classList.remove('cream1', 'cream2', 'cream3');
  });
  document.querySelector('#board').classList.add('shudder');
  console.log('Game has been reset!');
}

// select element and check innerHTML
function elSelector(e){
  return document.querySelector(e).innerHTML;
}