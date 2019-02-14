'use strict'
const gameEvents = require('./events.js')
const boardUpdate = () => {
  gameEvents.gameBoard.turnCounter % 2 ? $(event.target).addClass('o') : $(event.target).addClass('x')
}
const displayUpdate = () => {
  if (gameEvents.gameBoard.winner === undefined) {
    gameEvents.gameBoard.turnCounter % 2 ? $('#game-display').text(`It's O's turn!`) : $('#game-display').text(`It's X's turn!`)
  } else if (gameEvents.gameBoard.winner !== 'Draw') {
    $('#game-display').text(`${gameEvents.gameBoard.winner.toUpperCase()} won the game!`)
  } else { $('#game-display').text('It\'s a draw! No winner!') }
}
module.exports = {
  boardUpdate,
  displayUpdate
}
