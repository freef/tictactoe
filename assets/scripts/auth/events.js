'use strict'
// lets play tic tac Toe
let gameBoard = {}
const makeBoard = rowSize => {
  const newBoard = {
    cells: [],
    over: false,
    turnCounter: 0,
    winner: undefined,
    player_x: {
      id: undefined,
      email: undefined
    },
    player_o: null
  }
  for (let i = 0; i < rowSize; i++) {
    newBoard.cells.push('')
  }
  gameBoard = newBoard
  return gameBoard
}
console.log(makeBoard(9))

module.exports = {
}
