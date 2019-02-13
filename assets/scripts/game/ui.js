'use strict'
const gameEvents = require('./events.js')
const boardUpdate = () => {
  gameEvents.gameBoard.turnCounter % 2 ? $(event.target).addClass('o') : $(event.target).addClass('x')
}

module.exports = {
  boardUpdate
}
