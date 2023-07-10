import { React, useState } from 'react';
// import logo from './logo.svg';
// import { Counter } from './features/counter/Counter';
import './App.css';
/*======================================================*/

// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <Counter />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <span>
//           <span>Learn </span>
//           <a
//             className="App-link"
//             href="https://reactjs.org/"
//             target="_blank"
//             rel="noopener noreferrer"
//           >
//             React
//           </a>
//           <span>, </span>
//           <a
//             className="App-link"
//             href="https://redux.js.org/"
//             target="_blank"
//             rel="noopener noreferrer"
//           >
//             Redux
//           </a>
//           <span>, </span>
//           <a
//             className="App-link"
//             href="https://redux-toolkit.js.org/"
//             target="_blank"
//             rel="noopener noreferrer"
//           >
//             Redux Toolkit
//           </a>
//           ,<span> and </span>
//           <a
//             className="App-link"
//             href="https://react-redux.js.org/"
//             target="_blank"
//             rel="noopener noreferrer"
//           >
//             React Redux
//           </a>
//         </span>
//       </header>
//     </div>
//   );
// }

//import AddText from './features/AddText';
// function App() {
//   return (
//     <div className="App">
//       <AddText />
//     </div>
//   )
// }


// import TodoList from './components/TodoList';

// const App = () => {
//     return (
//         <div>
//             <TodoList />
//         </div>
//     );
// };

import { TODOITEMS } from './app/shared/TODOITEMS';
//import TodoList from './components/TodoList';
import Calendar from './components/Calendar';

function App() {
  const [selectedDate, setSelectedDate] = useState('');

  const handleDateClick = date => {
    setSelectedDate(date);
  };



  return (
    <div className="App">
      <Calendar onDateClick={handleDateClick} />
    </div>
  );
}

export default App;