import React, { useState } from 'react';
import rockImage from './assets/rock.png'
import paperImage from './assets/paper.png';
import scissorsImage from './assets/scissors.png';
import ronaldoImage from './assets/ronaldo.png';
import colImage from './assets/colpro.png';

const App = () => {
  // State to store the computer's move and the result of the game
  const [computerMove, setComputerMove] = useState('');
  const [result, setResult] = useState('');

  // const choices = ['rock', 'paper', 'scissors'];

  const computerPlay = () => {
    const randomNumber = Math.random();
    let move = '';
    if (randomNumber >= 0 && randomNumber < 1 / 3) {
      move = 'rock';
    } else if (randomNumber >= 1 / 3 && randomNumber < 2 / 3) {
      move = 'paper';
    } else { // Simplified the last condition
      move = 'scissors';
    }
    setComputerMove(move); // Update state
    return move; // Return the move for immediate use
  };

  const playGame = (playerChoice) => {
    const currentComputerMove = computerPlay(); // Get computer's move and update state
    let gameResult = '';

    if (playerChoice === currentComputerMove) {
      gameResult = 'You tie';
    } else if (
      (playerChoice === 'rock' && currentComputerMove === 'scissors') ||
      (playerChoice === 'paper' && currentComputerMove === 'rock') ||
      (playerChoice === 'scissors' && currentComputerMove === 'paper')
    ) {
      gameResult = 'You win.';
    } else {
      gameResult = 'You lose.';
    }

    setResult(gameResult); // Update state
    // alert(`You picked ${playerChoice}, Computer picked ${currentComputerMove}. ${gameResult}`);
  };

  return (
    <div className="width mx-auto bg-amber-100 h-screen flex flex-col items-center justify-center, p-4  rounded-lg shadow-lg  border border-gray-300 ">
      <p className="text-4xl font-bold mb-4 text-center   ">Rock Paper Scissors</p>
      <span className="text-lg mb-4 text-center"> Design By Darian & Shaun Okonjor</span><br/>
      <span className="text-lg mb-4 text-center"> Powered By Collins</span>
      <div className="flex space-x-4 mb-4 justify-center items-center size-40">
      <button onClick={() => playGame('rock')}>
        <img src={rockImage} alt="Rock" style={{ width: '50px', height: '50px' }} />
      </button>
      <button onClick={() => playGame('paper')}>
        <img src={paperImage} alt="Paper" style={{ width: '50px', height: '50px' }} />
      </button>
      <button onClick={() => playGame('scissors')}>
        <img src={scissorsImage} alt="Scissors" style={{ width: '50px', height: '50px' }} />
      </button>
       </div>
      {/* Optionally display the results in the UI instead of just an alert */}
      {computerMove && (
        <div>
          <p className="text-3xl font-bold mb-4 text-center "><img src={ronaldoImage} alt="Rock" style={{ width: '100px', height: '100px', justifyContent: 'center' }} /> Ronaldo Pick: {computerMove}</p>
          <p className="text-3xl font-bold mb-4 text-center "><img src={colImage} alt="Scissors" style={{ width: '100px', height: '100px' }} />Collins: <span>{result}</span></p>
        </div>
      )}
    </div>
  );
};

export default App;