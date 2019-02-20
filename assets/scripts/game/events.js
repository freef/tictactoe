'use strict'
const gameLogic = require('./logic.js')
const gameUi = require('./ui.js')
const gameApi = require('./api.js')
const getFormFields = require('../../../lib/get-form-fields.js')

const onGetGames = () => {
  gameApi.getGames()
    .then(gameUi.onGetGamesSuccess)
    .catch(gameUi.onGetGamesFailure)
}
const onGetAllGames = () => {
  gameApi.getAllGames()
    .then(gameUi.onGetAllGamesSuccess)
    .catch(gameUi.onGetGamesFailure)
}
const newGame = () => {
  gameApi.createNewGame()
    .then(gameLogic.assignID)
  gameLogic.gameBoard = gameLogic.makeBoard(3)
  $('.cell').removeClass('x')
  $('.cell').removeClass('o')
  $('#game-display').stop(true, true)
  $('#game-display').fadeTo('fast', 1)
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
  } else {
    gameUi.alreadyOver()
  }
}
const onGetGameById = (event) => {
  event.preventDefault()
  const form = event.target
  const formData = getFormFields(form)
  gameApi.getGameById(formData)
    .then(gameUi.getGameByIdSuccess)
    .catch(gameUi.getGameByIdfailure)
}

module.exports = {
  onMove,
  newGame,
  initializeGame,
  onGetGames,
  onGetAllGames,
  onGetGameById
}
