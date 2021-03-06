'use strict'
const store = require('../store.js')
const gameEvents = require('../game/events.js')

const signUpSuccess = () => {
  $('#user-message').text('Successfully Signed Up!')
  $('form').trigger('reset')
  $('input').trigger('reset')
}
const signUpFailure = () => {
  $('#user-message').text('Failed to add user.')
  $('form').trigger('reset')
  $('input').trigger('reset')
}

const signInSuccess = (responseData) => {
  $('#user-message').text('Successfully Signed In!')
  $('#current-user').text(`${responseData.user.email} profile`)
  $('#current-user').removeClass('d-none')
  $('#play-field').removeClass('d-none')
  $('#sign-out-form').removeClass('d-none')
  $('#change-password-content').removeClass('d-none')
  $('#log-in-content').addClass('d-none')
  store.user = responseData.user
  $('form').trigger('reset')
  $('input').trigger('reset')
  gameEvents.newGame()
}
const signInFailure = () => {
  $('#user-message').text('Failed to sign in')
  $('form').trigger('reset')
  $('input').trigger('reset')
}

const signOutSuccess = () => {
  $('#user-message').text('Successfully Signed Out!')
  $('form').trigger('reset')
  $('#current-user').addClass('d-none')
  $('#play-field').addClass('d-none')
  $('#sign-out-form').addClass('d-none')
  $('#change-password-content').addClass('d-none')
  $('form').trigger('reset')
  $('input').trigger('reset')
  $('#log-in-content').removeClass('d-none')
  if ($('#current-user').text() === 'Return to Game') { goToProfile() }
}
const signOutFailure = (responseData) => {
  $('#user-message').text('Failed to sign out successfully')
  $('form').trigger('reset')
  $('input').trigger('reset')
}

const changePasswordSuccess = () => {
  $('#user-message').text('Successfully changed password!')
  $('form').trigger('reset')
  $('input').trigger('reset')
}
const changePasswordFailure = () => {
  $('#user-message').text('Failed to change password.')
  $('form').trigger('reset')
  $('input').trigger('reset')
}

const goToProfile = () => {
  if ($('#current-user').text() === 'Return to Game') {
    $('#current-user').text(`${store.user.email} profile`)
  } else {
    $('#current-user').text('Return to Game')
  }
  $('#play-field').toggle()
  $('.profile-content').toggle()
}

module.exports = {
  signUpSuccess,
  signUpFailure,
  signInSuccess,
  signInFailure,
  signOutSuccess,
  signOutFailure,
  changePasswordSuccess,
  changePasswordFailure,
  goToProfile
}
