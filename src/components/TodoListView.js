import React, { useState, useEffect } from 'react';
import { TODOITEMS } from '../app/shared/TODOITEMS';
import Calendar from './Calendar';
import AddTodoForm from '../forms/AddTodoForm';
import EditTodoForm from '../forms/EditTodoForm';

let nextID = TODOITEMS.length + 1;

const TodoListView = ({ todoList, handleDelete, handleCreate, handleUpdate }) => {
  const [selectedDate, setSelectedDate] = useState(undefined);//little trick from Natalie
  const [showNewTaskForm, setShowNewTaskForm] = useState(false);
//  const [todayDate, setTodayDate] = useState('');

  useEffect(() => {
    const currentDate = new Date();
//    const currentDate2 = new Date();
    currentDate.setDate(currentDate.getDate());
    setSelectedDate(currentDate);
    setShowNewTaskForm(false);
//    currentDate2.setDate(currentDate2.getDate());
//    setTodayDate(currentDate2.toLocaleDateString('default'));
  }, []);

  const filteredItems = todoList.filter(
    (item) => item.date === selectedDate?.toISOString().split('T')[0]//little trick from Natalie
  );

  const handleDateClick = (date) => {
//    setTodayDate('');
    setSelectedDate(date);
    setShowNewTaskForm(false);
  };

  
  const handleAddNewTask = (values, { resetForm }) => {
    if (values.newTaskTitle && values.newTaskDescription && selectedDate) {
      const newTask = {
        id: nextID++,
        title: values.newTaskTitle,
        description: values.newTaskDescription,
        status: 'Pending',
        date: selectedDate.toISOString().split('T')[0],
      };
      console.log(newTask.id);
      handleCreate(newTask);
      resetForm();
      setShowNewTaskForm(false);
    }
  };

  const validateForm = (values) => {
    const errors = {};

    if (!values.newTaskTitle) {
      errors.newTaskTitle = 'Task Title is required';
    }

    if (!values.newTaskDescription) {
      errors.newTaskDescription = 'Task Description is required';
    }

    return errors;
  };


  return (
      <div className="container">
        <div className="row">
          <div className="col-md-6">
            <Calendar onDateClick={handleDateClick} />
          </div>
          <div className="col-md-6">
            {filteredItems.length > 0 ? (
              <div className="card">
                <div className="card-header bg-primary text-white">
                  <h2 className="card-title">
                    {/* To-Do Items for {todayDate ? todayDate : selectedDate.toLocaleDateString('default')} */}
                    To-Do Items for {selectedDate.toLocaleDateString('default')}
                    </h2>
                </div>
                <ul className="list-group list-group-flush">
                  {filteredItems.map((item) => (
                    <div key={item.id} className="list-group-item">
                      <h4>{item.title}</h4>
                      <p>{item.description}</p>
                      <p>
                        <strong>Status: </strong>
                        <span
                          className={item.status === 'Completed' ? 'Completed' : 'Pending'}
                        >
                          {item.status}
                        </span>
                      </p>
                      <div className="button-group">
                        <button
                          className="btn btn-danger"
                          onClick={() => handleDelete(item.id)}
                        >
                          Delete
                        </button>
                        <EditTodoForm todoList={item} handleUpdate={handleUpdate} />
                      </div>
                    </div>
                  ))}
                </ul>
                <div className="card-body">
                  {!showNewTaskForm ? (
                    <button
                      className="btn btn-primary"
                      onClick={() => setShowNewTaskForm(true)}
                    >
                      New Task
                    </button>
                  ) : (
                    <div>
                      <AddTodoForm handleAddNewTask={handleAddNewTask} validateForm={validateForm} />
                    </div>
                  )}
                </div>
              </div>
            ) : (
              <div>
                <p className="text-center">No To-Do items for the selected date.</p>
                {selectedDate && (
                  <div className="card-body">
                    {!showNewTaskForm ? (
                      <button
                        className="btn btn-primary"
                        onClick={() => setShowNewTaskForm(true)}
                      >
                        New Task
                      </button>
                    ) : (
                      <div>
                        <AddTodoForm handleAddNewTask={handleAddNewTask} validateForm={validateForm} />
                      </div>
                    )}
                  </div>
                )}
              </div>
            )}
          </div>
        </div>
      </div>
  );
};

export default TodoListView;
