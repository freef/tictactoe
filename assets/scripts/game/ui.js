'use strict'
const gameLogic = require('./logic.js')

const displayUpdate = () => {
  if (gameLogic.gameBoard.winner === undefined) {
    gameLogic.gameBoard.turnCounter % 2 ? $('#game-display').text(`It's O's turn!`) : $('#game-display').text(`It's X's turn!`)
  } else if (gameLogic.gameBoard.winner !== 'Draw') {
    $('#game-display').text(`${gameLogic.gameBoard.winner.toUpperCase()} won the game!`)
  } else { $('#game-display').text('It\'s a draw! No winner!') }
}
const boardUpdate = () => {
  if (!$(event.target).hasClass('o') && !$(event.target).hasClass('x')) {
    gameLogic.gameBoard.turnCounter % 2 ? $(event.target).addClass('o') : $(event.target).addClass('x')
  } else {
    $('#game-display').text('Invalid move.')
    setTimeout(displayUpdate, 1500)
  }
}

const onGetGamesSuccess = (responseData) => {
  $('#user-message').text(`Game ID: ${gameLogic.gameBoard.id}`)
}

const onGetGamesFailure = () => {
  $('#user-message').text('Something went wrong')
}

const onGetAllGamesSuccess = responseData => {
  $('#game-records').html('')

  responseData.games.forEach(game => {
    const printableBoard = []
    const responseBoard = gameLogic.convertCells(game.cells)
    const printFormat = array => {
      array.forEach(subArray => {
        const row = []
        subArray.forEach(item => {
          if (item === '') { item = '\u2588' }
          row.push(item)
        })
        printableBoard.push(row)
      })
    }
    printFormat(responseBoard)
    const gameRecord = (`
    <div class="aRecord">
    <h4>Game ID: ${game.id}</h4>
    <div class="game-record-board">
    <p>${printableBoard[0]}</p>
    <p>${printableBoard[1]}</p>
    <p>${printableBoard[2]}</p>
    </div>
    <p>over: ${game.over}</p>`)
    $('#game-records').append(gameRecord)
  })
}

const getGameByIdSuccess = responseData => {
  const playBoard = gameLogic.gameBoard
  const oldGame = responseData.game
  const refreshBoard = board => {
    let turnCounter = 0
    for (let i = 0; i < board.length; i++) {
      for (let j = 0; j < board[i].length; j++) {
        const htmlId = i.toString() + j.toString()
        if (board[i][j] === 'x') {
          $(`#${htmlId}`).addClass('o')
          turnCounter++
        } else if (board[i][j] === 'o') {
          $(`#${htmlId}`).addClass('x')
          turnCounter++
        }
      }
    }
    playBoard.turnCounter = turnCounter
  }
  const whoWon = array => {
    let x = 0
    let o = 0
    array.forEach(cell => {
      if (cell === 'x') { x++ } else if (cell === 'o') { o++ }
    })
    if (x > o) {
      playBoard.winner = 'x'
    } else if (playBoard.turnCounter < 8) {
      playBoard.winner = 'o'
    } else {
      playBoard.winner = 'Someone has already'
    }
  }

  playBoard.api.over = oldGame.over
  playBoard.id = oldGame.id
  playBoard.board = gameLogic.convertCells(oldGame.cells)
  $('.cell').removeClass('x')
  $('.cell').removeClass('o')
  refreshBoard(playBoard.board)
  displayUpdate()
  if (playBoard.api.over === true) {
    whoWon(oldGame.cells)
    $('#game-display').text('This game has ended.')
  } else {
    playBoard.winner = undefined
    displayUpdate()
  }
  $('#user-message').text(`Game ID: ${gameLogic.gameBoard.id}`)
}

module.exports = {
  boardUpdate,
  displayUpdate,
  onGetGamesSuccess,
  onGetGamesFailure,
  onGetAllGamesSuccess,
  getGameByIdSuccess
}
