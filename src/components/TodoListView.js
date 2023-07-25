import React, { useState } from 'react';
import { Container } from 'reactstrap';
import { TODOITEMS } from '../app/shared/TODOITEMS';
import Calendar from './Calendar';
import AddTodoForm from './AddTodoForm';
import EditTodoForm from './EditTodoForm';

let nextID = TODOITEMS.length;

const TodoListView = ({ todoList, handleDelete, handleCreate, handleUpdate }) => {
  const [selectedDate, setSelectedDate] = useState(undefined);//little trick from Natalie
  const [showNewTaskForm, setShowNewTaskForm] = useState(false);
  const filteredItems = todoList.filter(
    (item) => item.date === selectedDate?.toISOString().split('T')[0]//little trick from Natalie
  );


  const handleDateClick = (date) => {
    setSelectedDate(date);
    setShowNewTaskForm(false);
  };

  const handleAddNewTask = (values, { resetForm }) => {
    if (values.newTaskTitle && values.newTaskDescription && selectedDate) {
      const newTask = {
        id: nextID++,
        title: values.newTaskTitle,
        description: values.newTaskDescription,
        completed: false,
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
    <Container>
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
                        {item.completed ? 'Completed' : 'Not Completed'}
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
    </Container>
  );
};

export default TodoListView;
