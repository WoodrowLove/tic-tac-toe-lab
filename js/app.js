/*-------------------------------- Constants --------------------------------*/

const cells = document.querySelectorAll('.sqr')

const messageElement = document.getElementById('message')

const resetButton = document.getElementById('reset-button')

/*---------------------------- Variables (state) ----------------------------*/

let currentPlayer = 'X'

let isGameOver = false

let board = ['', '', '', '', '', '', '', '', '',]

/*------------------------ Cached Element References ------------------------*/



/*-------------------------------- Functions --------------------------------*/

function checkForWin() {
    const winningCombinations = [
      [0, 1, 2], [3, 4, 5], [6, 7, 8],
      [0, 3, 6], [1, 4, 7], [2, 5, 8], 
      [0, 4, 8], [2, 4, 6] 
    ]


    for (const combo of winningCombinations) {
        const [a, b, c] = combo;
        if (board[a] && board[a] === board[b] && board[a] === board[c]) {
          isGameOver = true
          messageElement.textContent = `Player ${currentPlayer} wins!`
          break
        }
      }
    }


    function checkForTie() {
        if (board.every(cell => cell !== '')) {
          isGameOver = true;
          messageElement.textContent = "It's a tie!"
        }
      }


      function switchPlayers() {
        currentPlayer = (currentPlayer === 'X') ? 'O' : 'X'
        messageElement.textContent = `Player ${currentPlayer}'s turn`
      }



      function renderBoard() {
        cells.forEach((cell, index) => {
            cell.textContent = board[index]
        })
    }
    

/*----------------------------- Event Listeners -----------------------------*/

cells.forEach((cell, index) => {
    cell.addEventListener('click', () => {
        if (!isGameOver && board[index] === ''){
            board[index] = currentPlayer
            renderBoard()
            checkForWin()
            checkForTie()
            switchPlayers()
        }
    })
})


resetButton.addEventListener('click', () => {
    initializeGame()
  })


  renderBoard()

  function initializeGame() {
    board = ['', '', '', '', '', '', '', '', ''];
    currentPlayer = 'X'; 
    isGameOver = false; 
    renderBoard();
    messageElement.textContent = `Player ${currentPlayer}'s turn`;}

  initializeGame()