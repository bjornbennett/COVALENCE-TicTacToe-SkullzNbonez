// ********* SET VARIABLES: gather all squares into array
let cells = document.querySelectorAll('.row div'),
    clickCount = 0;

// ********* MAIN EVENT: listen to all squares for clicks. will check state of game to determine what to do next
cells.forEach(cell => {
  cell.addEventListener('click', clickedCell);
});

// ******* FUNCTION: to check squares
function clickedCell(e) {
    // console.log('clickCount: ' + clickCount);  
    let img1 = '<img src="images/bones.svg" class="skullnbones clicked">',
        img2 = '<img src="images/skull.svg" class="skullnbones clicked">';

    // if message has content, reset the board.
    if( elSelector('.message').length > 0 ){ 
      resetToStart();
    } else if(clickCount >= 9){ // if it's 9th click, clear board, or else carry on
      resetToStart();
    } else {
      if( e.target.classList.contains('clicked') == false){// if cell is empty, add X or O
        clickCount++; // increase click count
        e.target.classList.add('clicked');

        // check if even or odd click, add X or O
        if(clickCount % 2 == true){ // oddNumber % 2 will return true for odd, so it is odd number
          e.target.innerHTML = img1;
        } else if(clickCount % 2 == false){ // evenNumber % 2 will return false for odd, so it is an even number
          e.target.innerHTML = img2;
        }
        // check if we have a winner
        checkWinningCombo(img1);
        checkWinningCombo(img2);
      }
    }
    // remove the shudder class from the board. css3 animation shake on reset. iteration count 1
    if(clickCount >= 3){
      document.querySelector('#board').classList.remove('shudder');
    }
}

// ******** FUNCTION: check cells for a winner
function checkWinningCombo(content){

  let checkBoardClass = [
    ['.one', '.two', '.three'],
    ['.four', '.five', '.six'],
    ['.seven', '.eight', '.nine'],
    ['.one', '.four', '.seven'],
    ['.two', '.five', '.eight'],
    ['.three', '.six', '.nine'],
    ['.one', '.five', '.nine'],
    ['.three', '.five', '.seven']
  ];

  for (let i = 0; i < checkBoardClass.length; i++) {
    [k,l,m] = [checkBoardClass[i][0],checkBoardClass[i][1],checkBoardClass[i][2]];
    
    // if winner!
    if( elSelector(k) == content  && elSelector(l) == content && elSelector(m) == content ){
      let msg = 'Arrrrh arrrrrh! <strong>Looky like we \'ava champ!!</strong><br> <span>click the board to start another game</span>';
      document.querySelector('.message').innerHTML = msg;
      document.querySelector(k).classList.add('cream1');
      document.querySelector(l).classList.add('cream2');
      document.querySelector(m).classList.add('cream3');
      // listen to all squares
      cells.forEach(cell => {
        cell.classList.add('blood');
      });
    }
  }

  // if draw
  if( clickCount == 9 ){
    if( document.querySelector('.row div').classList.contains('cream1') == false ){
      let msg = 'Arrrrh arrrrrh! <strong>DRAW!</strong><br><span>click the board to start another game</span>';
      document.querySelector('.message').innerHTML = msg;
      document.querySelector('.inner-board').classList.add('dodge');
      cells.forEach(cell => {
        cell.classList.add('blood');
      });
    }
  }
}

// ******* FUNCTION: reset / zero-set the game
function resetToStart(){
  cells.forEach(cell => {
    cell.innerHTML = "";
  });
  clickCount = 0;
  document.querySelector('.message').innerHTML = "";
  cells.forEach(cell => {
    cell.classList.remove('cream1', 'cream2', 'cream3', 'blood');
  });
  document.querySelector('#board').classList.add('shudder');
  document.querySelector('.inner-board').classList.remove('dodge');
  console.log('Game has been reset!');
}

// select element and check innerHTML
function elSelector(e){
  return document.querySelector(e).innerHTML;
}