import { Routes, Route } from 'react-router-dom';
import React, { useState } from 'react';
import './App.css';
import TodoListView from './components/TodoListView';
import ViewAllTodoList from './components/ViewAllTodoList';
// import ViewAllTodoListtest from './components/ViewAllTodoListtest';
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

  const handleUpdate = (updatedTask) => {
    const taskIndex = todoList.findIndex((task) => task.id === updatedTask.id);

    if (taskIndex !== -1) {
      setTodoList((prevTodoList) => {
        const updatedList = [...prevTodoList];
        updatedList[taskIndex] = updatedTask;
        return updatedList;
      });
    }
  };

  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path='/'
          element={
            <TodoListView 
              todoList={todoList}
              handleDelete={handleDelete}
              handleCreate={handleCreate}
              handleUpdate={handleUpdate}
            />
          } 
        />
        <Route path='View-all' 
          element={
            <ViewAllTodoList 
              todoList={todoList} 
              handleDelete={handleDelete} 
              handleUpdate={handleUpdate} 
            />
          } 
        />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
