import React, { useState } from 'react';
import { Container } from 'reactstrap';
import { TODOITEMS } from '../app/shared/TODOITEMS';
import Calendar from './Calendar';
//import { Formik, Form, Field, ErrorMessage } from 'formik';
import AddTodoForm from './AddTodoForm';

const TodoListView = () => {
  const [selectedDate, setSelectedDate] = useState('');
  const [filteredItems, setFilteredItems] = useState([]);
  const [showNewTaskForm, setShowNewTaskForm] = useState(false);
  //const [newTaskTitle, setNewTaskTitle] = useState('');
  //const [newTaskDescription, setNewTaskDescription] = useState('');

  const handleDateClick = (date) => {
    setSelectedDate(date);
    const filtered = TODOITEMS.filter(
      (item) => item.date === date.toISOString().split('T')[0]
    );
    setFilteredItems(filtered);
    setShowNewTaskForm(false);
  };

  const handleDelete = (id) => {
    TODOITEMS.splice(
      TODOITEMS.findIndex((item) => item.id === id),
      1
    );
    setFilteredItems((prevFilteredItems) =>
      prevFilteredItems.filter((item) => item.id !== id)
    );
  };

  // const handleAddNewTask = () => {
  //   if (newTaskTitle && newTaskDescription && selectedDate) {
  //     const newTask = {
  //       id: TODOITEMS.length + 1,
  //       title: newTaskTitle,
  //       description: newTaskDescription,
  //       date: selectedDate.toISOString().split('T')[0],
  //     };
  //     TODOITEMS.push(newTask);
  //     setFilteredItems((prevFilteredItems) => [...prevFilteredItems, newTask]);
  //     setNewTaskTitle('');
  //     setNewTaskDescription('');
  //     setShowNewTaskForm(false);
  //   }
  // };

  const handleAddNewTask = (values, { resetForm }) => {
    if (values.newTaskTitle && values.newTaskDescription && selectedDate) {
      const newTask = {
        id: TODOITEMS.length + 1,
        title: values.newTaskTitle,
        description: values.newTaskDescription,
        date: selectedDate.toISOString().split('T')[0],
      };
      TODOITEMS.push(newTask);
      setFilteredItems((prevFilteredItems) => [...prevFilteredItems, newTask]);
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
                    <button
                      className="btn btn-danger"
                      onClick={() => handleDelete(item.id)}
                    >
                      Delete
                    </button>
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
                    {/* <input
                      type="text"
                      value={newTaskTitle}
                      onChange={(e) => setNewTaskTitle(e.target.value)}
                      placeholder="Task Title"
                    />
                    <textarea
                      value={newTaskDescription}
                      onChange={(e) => setNewTaskDescription(e.target.value)}
                      placeholder="Task Description"
                    ></textarea>
                    <button className="btn btn-primary" onClick={handleAddNewTask}>
                      Add Task
                    </button> */}

                    {/* <Formik
                      initialValues={{
                        newTaskTitle: '',
                        newTaskDescription: ''
                      }}
                      onSubmit={handleAddNewTask}
                      validate={validateForm}
                    >
                      <Form>
                        <Field
                          type="text"
                          name="newTaskTitle"
                          placeholder="Task Title"
                          className="form-control"
                          style={{ width: '100%' }}
                        />
                        <ErrorMessage name="newTaskTitle" component="div" />
                        <br />
                        <Field
                          as="textarea"
                          name="newTaskDescription"
                          placeholder="Task Description"
                          className="form-control"
                          style={{ width: '100%' }}
                        />
                        <ErrorMessage name="newTaskDescription" component="div" />
                        <br />
                        <button className="btn btn-primary" type="submit">
                          Add Task
                        </button>
                      </Form>
                    </Formik> */}

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
                      {/* <input
                        type="text"
                        value={newTaskTitle}
                        onChange={(e) => setNewTaskTitle(e.target.value)}
                        placeholder="Task Title"
                      />
                      <textarea
                        value={newTaskDescription}
                        onChange={(e) => setNewTaskDescription(e.target.value)}
                        placeholder="Task Description"
                      ></textarea>
                      <button className="btn btn-primary" onClick={handleAddNewTask}>
                        Add Task
                      </button> */}

                      {/* <Formik
                        initialValues={{
                          newTaskTitle: '',
                          newTaskDescription: ''
                        }}
                        onSubmit={handleAddNewTask}
                        validate={validateForm}
                      >
                        <Form>
                          <Field
                            type="text"
                            name="newTaskTitle"
                            placeholder="Task Title"
                            className="form-control"
                            style={{ width: '100%' }}
                          />
                          <ErrorMessage name="newTaskTitle" component="div" className="text-danger" />
                          <br />
                          <Field
                            as="textarea"
                            name="newTaskDescription"
                            placeholder="Task Description"
                            className="form-control"
                            style={{ width: '100%' }}
                          />
                          <ErrorMessage name="newTaskDescription" component="div" className="text-danger" />
                          <br />
                          <button className="btn btn-primary" type="submit">
                            Add Task
                          </button>
                        </Form>
                      </Formik> */}

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
