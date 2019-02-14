'use strict'
const store = require('../store.js')

const signUpSuccess = () => {
  $('#user-message').text('Successfully Signed Up!')
}
const signUpFailure = () => {
  $('#user-message').text('Failed to add user.')
}

const signInSuccess = (responseData) => {
  $('#user-message').text('Successfully Signed In!')
  $('#current-user').text(`signed in as ${responseData.user.email}`)
  store.user = responseData.user
}
const signInFailure = () => {
  $('#user-message').text('Failure: ')
  $('form').trigger('reset')
}

const signOutSuccess = () => {
  $('#user-message').text('Successfully Signed Out!')
  $('form').trigger('reset')
//  store.user = null
}
const signOutFailure = (responseData) => {
  console.log(responseData.responseText)
  store.response = responseData.responseText
  $('#user-message').text('Failure: ')
  $('form').trigger('reset')
}

const changePasswordSuccess = () => {
  $('#user-message').text('Successfully changed password!')
}
const changePasswordFailure = () => {
  $('#user-message').text('Failed to change password.')
}

module.exports = {
  signUpSuccess,
  signUpFailure,
  signInSuccess,
  signInFailure,
  signOutSuccess,
  signOutFailure,
  changePasswordSuccess,
  changePasswordFailure
}
