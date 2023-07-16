import { Routes, Route } from 'react-router-dom';
import React, { useState } from 'react';
import './App.css';
import TodoListView from './components/TodoListView';
import ViewAllTodoList from './components/ViewAllTodoList';
import Header from './components/Header';
import Footer from './components/Footer';
import { TODOITEMS } from './app/shared/TODOITEMS';


function App() {
  const [todoList, setTodoList] = useState(TODOITEMS);

  const handleCreate = (newTask) => {
    setTodoList((prevFilteredItems) => [...prevFilteredItems, newTask]);
  }

  const handleDelete = (id) => {
    setTodoList((prevFilteredItems) =>
      prevFilteredItems.filter((item) => item.id !== id)
    );
  };

  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path='/' element={<TodoListView todoList={todoList} handleDelete={handleDelete} handleCreate={handleCreate} />} />
        <Route path='View-all' element={<ViewAllTodoList todoList={todoList} handleDelete={handleDelete} />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
