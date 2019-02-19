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
  $('#user-message').text(`You've finished ${responseData.games.length} games`)
  // $('#user-message').removeClass('d-none')
}

const onGetGamesFailure = () => {
  $('#user-message').text('Something went wrong')
}

module.exports = {
  boardUpdate,
  displayUpdate,
  onGetGamesSuccess,
  onGetGamesFailure
}
