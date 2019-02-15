'use strict'
const config = require('../config.js')
const store = require('../store.js')
const logic = require('./logic.js')
// GET
// POST
// PATCH
// DELETE
const createNewGame = () => {
  return $.ajax({
    url: config.apiUrl + '/games',
    method: 'POST',
    headers: {
      Authorization: 'Token token=' + store.user.token
    },
    data: {}
  })
}

const updateGame = () => {
  const id = logic.gameBoard.id
  return $.ajax({
    url: config.apiUrl + `/games/${id}`,
    method: 'PATCH',
    headers: {
      Authorization: 'Token token=' + store.user.token
    },
    data: logic.gameBoard.api
  })
}

const getGames = () => {
  return $.ajax({
    url: config.apiUrl + '/games',
    method: 'GET',
    headers: {
      Authorization: 'Token token=' + store.user.token
    }
  })
}

module.exports = {
  createNewGame,
  updateGame,
  getGames
}
