// // import React, {useContext} from 'react';
// // import {QuizContext} from '../Helpers/Contexts';

// // function MainMenu() {
// //   const {gameState, setGameState} = useContext(QuizContext);

// //   const handleStartQuiz = () => {
// //     setGameState("quiz");
// //   };
// //   // This function is not used in this component, but it can be used to start the quiz
// //   // when needed. It is included here for completeness. 

// //   return (
// //     <div className="main-menu">
// //       <button onClick={() => setGameState("quiz")}>Start Quiz</button>
// //       Main Menu
// //     </div>
// //   );
// // } 

// // export default MainMenu;
// import React, { useContext } from 'react';
// import { QuizContext } from '../Helpers/Contexts';  

// const MainMenu = () => {
//   const { setGameState } = useContext(QuizContext);

//   const handleStartQuiz = () => {
//     setGameState("quiz");
//   };

//   return (
//     <div className="main-menu">
//       <h2>Welcome to the Quiz App</h2>
//       <button onClick={handleStartQuiz}>Start Quiz</button>
//     </div>
//   );
// };

// export default MainMenu;
// //