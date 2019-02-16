'use strict'
const gameLogic = require('./logic.js')
const gameUi = require('./ui.js')
const gameApi = require('./api.js')

const onGetGames = () => {
  gameApi.getGames()
    .then(gameUi.onGetGamesSuccess)
    .catch(gameUi.onGetGamesFailure)
}
const newGame = () => {
  gameApi.createNewGame()
    .then(gameLogic.assignID)
  gameLogic.gameBoard = gameLogic.makeBoard(3)
  $('.cell').removeClass('x')
  $('.cell').removeClass('o')
  gameUi.displayUpdate()
  onGetGames()
}

const initializeGame = event => {
  gameLogic.gameBoard = gameLogic.makeBoard(3)
  $('.cell').removeClass('x')
  $('.cell').removeClass('o')
  gameUi.displayUpdate()
}
const onMove = event => {
  if (gameLogic.gameBoard.winner === undefined) {
    gameLogic.takeTurn(event.target.id)
    gameUi.displayUpdate()
    gameUi.boardUpdate()
    gameApi.updateGame()
  }
}

module.exports = {
  onMove,
  newGame,
  initializeGame,
  onGetGames
}
