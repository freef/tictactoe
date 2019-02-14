'use strict'

const events = require('./auth/events.js')
const gameEvents = require('./game/events.js')
const gameUi = require('./game/ui.js')
// // // use require with a reference to bundle the file and use it in this file
// // // const example = require('./example')
// //
// // // use require without a reference to ensure a file is bundled
// // // require('./example')
// //
//
$(() => {
  // reset board on load
  gameEvents.gameBoard = gameEvents.makeBoard(3)
  gameUi.displayUpdate()
  // make a move
  $('.tictac-row').on('click', (event) => {
    if (gameEvents.gameBoard.winner === undefined) {
      gameEvents.takeTurn(gameEvents.convertIdToCoords(event.target.id))
      gameUi.boardUpdate()
      gameUi.displayUpdate()
    }
  })
  // reset board button
  $('#board-reset').on('click', (event) => {
    gameEvents.gameBoard = gameEvents.makeBoard(3)
    $('.cell').removeClass('x')
    $('.cell').removeClass('o')
    gameUi.displayUpdate()
  })
  // user crap
  // be sure to remove all references to "user-crap" prior to submission
  $('#sign-up-form').on('submit', events.onSignUp)
  $('#sign-in-form').on('submit', events.onSignIn)
  $('#change-password-form').on('submit', events.onChangePassword)
  $('#sign-out-form').on('submit', events.onSignOut)
})
