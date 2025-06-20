// // import React from 'react';
// // import { createContext} from 'react';
// // import { useState } from 'react';

// // function Contexts() {
// //   return (
// //     <div>
// //       Contexts
// //     </div>
// //   );
// // }

// // export const QuizContext = createContext();
// // export const QuizProvider = ({ children }) => {
// //   const [gameState, setGameState] = useState("menu");

// //   return (
// //     <QuizContext.Provider value={{ gameState, setGameState }}>
// //       {children}
// //     </QuizContext.Provider>
// //   );
// // };

// // export default Contexts;

// import React, { createContext, useState } from 'react';

// export const QuizContext = createContext();

// export const QuizProvider = ({ children }) => {
//   const [gameState, setGameState] = useState("menu");

//   return (
//     <QuizContext.Provider value={{ gameState, setGameState }}>
//       {children}
//     </QuizContext.Provider>
//   );
// };

// export default QuizProvider;
// //