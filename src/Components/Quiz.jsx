// // 
// import React, { useState, useEffect } from 'react';
// import axios from 'axios';
// import './App.css'; 
// import { QuizContext } from './Helpers/Contexts';
// import MainMenu from './Components/MainMenu';
// import Quiz from './Components/Quiz';
// import EndScreen from './Components/EndScreen';


// const App = () => {
//   const [gameState, setGameState] = useState("menu");
//   const [questions, setQuestions] = useState([]);
//   const [loading, setLoading] = useState(true);

//   useEffect(() => {
//     const fetchQuestions = async () => {
//       try {
//         const response = await axios.get('https://opentdb.com/api.php?amount=10&type=multiple');
//         setQuestions(response.data.results);
//         setLoading(false);
//       } catch (error) {
//         console.error("Error fetching questions:", error);
//       }
//     };
//     fetchQuestions();
//   }, []);

//   return (
//     <QuizContext.Provider value={{ gameState, setGameState, questions, loading }}>
//       <div className="App">
//         <h1>QUIZ APP</h1>
//         {gameState === "menu" && <MainMenu />}
//         {gameState === "quiz" && <Quiz />}
//         {gameState === "endScreen" && <EndScreen />}
//       </div>
//     </QuizContext.Provider>
//   );
// };

// export default App;
// //