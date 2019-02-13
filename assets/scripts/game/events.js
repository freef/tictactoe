'use strict'
// lets play tic tac toe
// generate board
let gameBoard = {}
const makeBoard = rowSize => {
  const newBoard = {
    board: [],
    turnCounter: 0,
    winner: undefined
  }
  for (let i = 0; i < rowSize; i++) {
    if (newBoard.board[i] === undefined) { newBoard.board[i] = [] }
    for (let j = 0; j < rowSize; j++) {
      newBoard.board[i].push(' ')
    }
  }
  gameBoard = newBoard
  return gameBoard
}

const placePiece = xy => {
  console.log(xy)
  if (gameBoard.board[xy[0]][xy[1]] !== ' ') {
    return 'Not a valid move!'
  } else {
    gameBoard.turnCounter % 2 ? gameBoard.board[xy[0]][xy[1]] = 'O' : gameBoard.board[xy[0]][xy[1]] = 'x'
    gameBoard.turnCounter++
  }
}

const checkWin = (xy) => {
  const player = gameBoard.turnCounter % 2 ? 'x' : 'O'
  const winCheck = Boolean(
    gameBoard.board[xy[0]].every(value => value === player) ||
    gameBoard.board.every(value => value[xy[1]] === player) ||
    (gameBoard.board[0][0] === player && gameBoard.board[1][1] === player && gameBoard.board[2][2] === player) ||
    (gameBoard.board[0][2] === player && gameBoard.board[1][1] === player && gameBoard.board[2][0] === player))
  if (winCheck === true) { gameBoard.winner = player }
  if (gameBoard.turnCounter === 9 && gameBoard.winner === undefined) {
    gameBoard.winner = 'Draw'
  }
  return gameBoard
}

const takeTurn = (moveArray) => {
  console.log(moveArray)
  if (gameBoard.winner !== undefined) { return `${gameBoard.winner} has already won!` }
  placePiece(moveArray)
  if (gameBoard.turnCounter > 4) { checkWin(moveArray) }
  console.log(gameBoard)
  return gameBoard
}

module.exports = {
  gameBoard,
  makeBoard,
  takeTurn
}
