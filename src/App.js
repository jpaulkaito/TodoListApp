import { Routes, Route } from 'react-router-dom';
import React from 'react';
import './App.css';
import TodoListView from './components/TodoListView';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path='/' element={<TodoListView />} />
      </Routes>
    </div>
  );
}

export default App;
