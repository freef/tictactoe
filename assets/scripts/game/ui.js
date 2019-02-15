'use strict'
const gameLogic = require('./logic.js')

const boardUpdate = () => {
  gameLogic.gameBoard.turnCounter % 2 ? $(event.target).addClass('o') : $(event.target).addClass('x')
}
const displayUpdate = () => {
  if (gameLogic.gameBoard.winner === undefined) {
    gameLogic.gameBoard.turnCounter % 2 ? $('#game-display').text(`It's O's turn!`) : $('#game-display').text(`It's X's turn!`)
  } else if (gameLogic.gameBoard.winner !== 'Draw') {
    $('#game-display').text(`${gameLogic.gameBoard.winner.toUpperCase()} won the game!`)
  } else { $('#game-display').text('It\'s a draw! No winner!') }
}

const onGetGamesSuccess = (responseData) => {
  $('#user-message').text(`You've played ${responseData.games.length} games`)
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
