import React, { useState } from 'react';
import './styles.css';


const ROWS = 6;
const COLS = 7;

const initialBoard = Array.from({ length: ROWS }, () => Array(COLS).fill(null));

const Game = () => {
  const [board, setBoard] = useState(initialBoard);
  const [currentPlayer, setCurrentPlayer] = useState('X');
  const [winner, setWinner] = useState(null);

  const handleColumnClick = (col) => {
    if (winner || board[0][col] !== null) return;
  
    const newBoard = [...board];
    let lastFilledRow;
  
    for (let row = ROWS - 1; row >= 0; row--) {
      if (newBoard[row][col] === null) {
        newBoard[row][col] = currentPlayer;
        lastFilledRow = row;
        break;
      }
    }
  
    setBoard(newBoard);
    checkWinner(newBoard, currentPlayer, lastFilledRow, col);
    setCurrentPlayer(currentPlayer === 'X' ? 'O' : 'X');
  };
      
  
  const checkWinner = (board, player, row, col) => {
    const checkHorizontal = () => {
      let count = 0;
      for (let c = 0; c < COLS; c++) {
        if (board[row][c] === player) {
          count++;
          if (count === 4) return true;
        } else {
          count = 0;
        }
      }
      return false;
    };
  
    const checkVertical = () => {
      let count = 0;
      for (let r = 0; r < ROWS; r++) {
        if (board[r][col] === player) {
          count++;
          if (count === 4) return true;
        } else {
          count = 0;
        }
      }
      return false;
    };
  
    const checkDiagonalLeftToRight = () => {
      let count = 0;
      for (let i = -3; i <= 3; i++) {
        const r = row + i;
        const c = col + i;
        if (r >= 0 && r < ROWS && c >= 0 && c < COLS) {
          if (board[r][c] === player) {
            count++;
            if (count === 4) return true;
          } else {
            count = 0;
          }
        }
      }
      return false;
    };
  
    const checkDiagonalRightToLeft = () => {
      let count = 0;
      for (let i = -3; i <= 3; i++) {
        const r = row + i;
        const c = col - i;
        if (r >= 0 && r < ROWS && c >= 0 && c < COLS) {
          if (board[r][c] === player) {
            count++;
            if (count === 4) return true;
          } else {
            count = 0;
          }
        }
      }
      return false;
    };
  
    if (
      checkHorizontal() ||
      checkVertical() ||
      checkDiagonalLeftToRight() ||
      checkDiagonalRightToLeft()
    ) {
      setWinner(player);
    }
  };
  
  const checkDirection = (board, player, row, col, rowDir, colDir) => {
    const countInDirection = (r, c) => {
      if (r < 0 || r >= ROWS || c < 0 || c >= COLS || board[r][c] !== player) {
        return 0;
      }
      return 1 + countInDirection(r + rowDir, c + colDir);
    };

    const count =
      1 + countInDirection(row - rowDir, col - colDir) + countInDirection(row + rowDir, col + colDir);

    return count >= 4;
  };

  const resetGame = () => {
    setBoard((prevBoard) => {
      // Erstelle eine neue Kopie von initialBoard
      const newBoard = Array.from({ length: ROWS }, () => Array(COLS).fill(null));
      return newBoard;
    });
    setCurrentPlayer('X');
    setWinner(null);
    console.log("game reseted")
  };
  
  return (
    <div className="App">
      <h1>Vier Gewinnt</h1>
      <div className="board">
        {Array.from({ length: COLS }).map((_, colIndex) => (
          <div key={colIndex} className="column">
            {board.map((rowCells, rowIndex) => (
              <div
                key={rowIndex}
                className={`cell ${rowCells[colIndex]}`}
                onClick={() => handleColumnClick(colIndex)}
              >
                {rowCells[colIndex] === 'X' && <span className="playerX">X</span>}
                {rowCells[colIndex] === 'O' && <span className="playerO">O</span>}
              </div>
            ))}
          </div>
        ))}
      </div>
      {winner && <div className="winner">Spieler {winner} hat gewonnen!</div>}
      {!winner && board.every((row) => row.every((cell) => cell)) && (
        <div className="draw">Das Spiel endet unentschieden!</div>
      )}
      <button onClick={resetGame} id="resetButton">Neues Spiel</button>
    </div>
  );
};

export default Game;
