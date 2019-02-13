'use strict'

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
  // let boardIds = '#row0col0, #row0col1, #row0col2, #row1col0, #row1col1, #row1col2, #row2col0, #row2col1, #row2col2'
  gameEvents.gameBoard = gameEvents.makeBoard(3)
  $('#row0col0').on('click', (event) => {
    if (gameEvents.gameBoard.winner === undefined) {
      gameEvents.takeTurn([0, 0])
      gameUi.boardUpdate()
    }
  })
  $('#row0col1').on('click', (event) => {
    if (gameEvents.gameBoard.winner === undefined) {
      gameEvents.takeTurn([0, 1])
      gameUi.boardUpdate()
    }
  })
  $('#row0col2').on('click', (event) => {
    if (gameEvents.gameBoard.winner === undefined) {
      gameEvents.takeTurn([0, 2])
      gameUi.boardUpdate()
    }
  })
  $('#row1col0').on('click', (event) => {
    if (gameEvents.gameBoard.winner === undefined) {
      gameEvents.takeTurn([1, 0])
      gameUi.boardUpdate()
    }
  })
  $('#row1col1').on('click', (event) => {
    if (gameEvents.gameBoard.winner === undefined) {
      gameEvents.takeTurn([1, 1])
      gameUi.boardUpdate()
    }
  })
  $('#row1col2').on('click', (event) => {
    if (gameEvents.gameBoard.winner === undefined) {
      gameEvents.takeTurn([1, 2])
      gameUi.boardUpdate()
    }
  })
  $('#row2col0').on('click', (event) => {
    if (gameEvents.gameBoard.winner === undefined) {
      gameEvents.takeTurn([2, 0])
      gameUi.boardUpdate()
    }
  })
  $('#row2col1').on('click', (event) => {
    if (gameEvents.gameBoard.winner === undefined) {
      gameEvents.takeTurn([2, 1])
      gameUi.boardUpdate()
    }
  })
  $('#row2col2').on('click', (event) => {
    if (gameEvents.gameBoard.winner === undefined) {
      gameEvents.takeTurn([2, 2])
      gameUi.boardUpdate()
    }
  })
  $('#board-reset').on('click', (event) => {
    gameEvents.gameBoard = gameEvents.makeBoard(3)
    $('.cell').removeClass('x')
    $('.cell').removeClass('o')
  })
})
