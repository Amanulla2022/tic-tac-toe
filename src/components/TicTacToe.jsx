import React, { useState } from "react";
import Board from "./Board";

const TicTacToe = () => {
  const [history, setHistory] = useState([{ squares: Array(9).fill(null) }]);
  const [stepNumber, setStepNumber] = useState(0);
  const [xIsNext, setXIsNext] = useState(true);

  const handleClick = (i) => {
    const historyUpToCurrentStep = history.slice(0, stepNumber + 1);
    const current = historyUpToCurrentStep[historyUpToCurrentStep.length - 1];
    const squares = current.squares.slice();

    if (calculateWinner(squares) || squares[i]) {
      return;
    }

    squares[i] = xIsNext ? "X" : "O";
    setHistory(historyUpToCurrentStep.concat([{ squares }]));
    setStepNumber(historyUpToCurrentStep.length);
    setXIsNext(!xIsNext);
  };

  const current = history[stepNumber];
  const winner = calculateWinner(current.squares);

  const status = winner
    ? "Winner: " + winner
    : current.squares.every((square) => square) // checking if all squares are filled
    ? "Game Tied"
    : "Next player: " + (xIsNext ? "X" : "O");

  function calculateWinner(squares) {
    const lines = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],
      [0, 4, 8],
      [2, 4, 6],
    ];
    for (let i = 0; i < lines.length; i++) {
      const [a, b, c] = lines[i];
      if (
        squares[a] &&
        squares[a] === squares[b] &&
        squares[a] === squares[c]
      ) {
        return squares[a];
      }
    }
    return null;
  }

  return (
    <div className="flex flex-col justify-center items-center gap-8">
      <h1 className="font-bold text-3xl mt-4 underline">Tic Tac Toe</h1>
      <div>
        <Board squares={current.squares} onClick={(i) => handleClick(i)} />
      </div>
      <div className="ml-5">
        <div>{status}</div>
      </div>
    </div>
  );
};

export default TicTacToe;
