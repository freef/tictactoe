'use strict'
// lets play tic tac toe
// generate board
let gameBoard = {}
const makeBoard = rowSize => {
  const newBoard = {
    board: [],
    turnCounter: 0,
    winner: undefined,
    id: null,
    api: {
      game: {
        cell: {
          index: null,
          value: ''
        },
        over: false
      }
    }
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
  if (gameBoard.winner !== undefined) { gameBoard.api.game.over = true }
  return gameBoard
}

const convertToApi = (cellPatch) => {
  gameBoard.api.game.cell.index = cellPatch
  gameBoard.turnCounter % 2 ? gameBoard.api.game.cell.value = 'x' : gameBoard.api.game.cell.value = 'o'
  if (gameBoard.winner !== undefined) { gameBoard.api.game.over = true }
}

const takeTurn = (string) => {
  const moveArray = convertIdToCoords(string)
  const cellPatch = parseInt(string, 3)
  if (gameBoard.winner !== undefined) { return `${gameBoard.winner} has already won!` }
  placePiece(moveArray)
  if (gameBoard.turnCounter > 4) { checkWin(moveArray) }
  convertToApi(cellPatch)
  return gameBoard
}

const convertIdToCoords = string => {
  const coords = []
  string.split('').forEach(letter => {
    const num = parseInt(letter, 10)
    coords.push(num)
  }
  )
  return coords
}

const assignID = responseData => {
  gameBoard.id = responseData.game.id
  return gameBoard.id
}

module.exports = {
  gameBoard,
  makeBoard,
  takeTurn,
  convertIdToCoords,
  assignID
}
