import { Routes, Route } from 'react-router-dom';
import React from 'react';
import './App.css';
import TodoListView from './components/TodoListView';
import ViewAllTodoList from './components/ViewAllTodoList';
import Header from './components/Header';
import Footer from './components/Footer';

function App() {

  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path='/' element={<TodoListView />} />
        <Route path='View-all' element={<ViewAllTodoList />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
