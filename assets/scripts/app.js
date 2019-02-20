'use strict'
const events = require('./auth/events.js')
const gameEvents = require('./game/events.js')

$(() => {
  gameEvents.initializeGame()
  $('.cell').on('click', gameEvents.onMove)
  $('#board-reset').on('click', gameEvents.newGame)
  $('#sign-up-form').on('submit', events.onSignUp)
  $('#sign-in-form').on('submit', events.onSignIn)
  $('#change-password-form').on('submit', events.onChangePassword)
  $('#sign-out-form').on('submit', events.onSignOut)
  $('#current-user').on('click', events.onProfile)
  $('#current-user').on('click', gameEvents.onGetAllGames)
  $('#load-game').on('submit', gameEvents.onGetGameById)
  $('#load-game').on('submit', events.onProfile)
})
