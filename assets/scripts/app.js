'use strict'

const events = require('./auth/events.js')
// const gameLogic = require('./game/logic.js')
// const gameUi = require('./game/ui.js')
// const gameApi = require('./game/api.js')
const gameEvents = require('./game/events.js')
// // // use require with a reference to bundle the file and use it in this file
// // // const example = require('./example')
// //
// // // use require without a reference to ensure a file is bundled
// // // require('./example')
// //
//

$(() => {
  // reset board on load
  gameEvents.initializeGame()
  // make a move
  $('.tictac-row').on('click', gameEvents.onMove)
  // reset board button
  $('#board-reset').on('click', gameEvents.newGame)
  // user crap
  // be sure to remove all references to "user-crap" prior to submission
  $('#sign-up-form').on('submit', events.onSignUp)
  $('#sign-in-form').on('submit', events.onSignIn)
  $('#change-password-form').on('submit', events.onChangePassword)
  $('#sign-out-form').on('submit', events.onSignOut)
})
