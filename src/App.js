import React, { useState } from 'react';
import { Routes, Route } from 'react-router-dom';
import { TODOITEMS } from './app/shared/TODOITEMS';
import HomePage from './pages/HomePage';
import ViewAllTodoPage from './pages/ViewAllTodoPage';
import AboutPage from './pages/AboutPage';
import SearchPage from './pages/SearchPage';
import ContactPage from './pages/ContactPage';
import Header from './components/Header';
import Footer from './components/Footer';
import './App.css';


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
        <Route path='TodoListApp/'
          element={
            <HomePage
              todoList={todoList}
              handleDelete={handleDelete}
              handleCreate={handleCreate}
              handleUpdate={handleUpdate}
            />
          }
        />
        <Route path='TodoListApp/View-all'
          element={
            <ViewAllTodoPage
              todoList={todoList}
              handleDelete={handleDelete}
              handleUpdate={handleUpdate}
            />
          }
        />
        <Route path='TodoListApp/Search'
          element={<SearchPage
            todoList={todoList}
            handleDelete={handleDelete}
            handleUpdate={handleUpdate}
        />
          }
        />
        <Route path='TodoListApp/About'
          element={<AboutPage />}
        />
        <Route path='TodoListApp/Contact'
          element={<ContactPage />}
        />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
