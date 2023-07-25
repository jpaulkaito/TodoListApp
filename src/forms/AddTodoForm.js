import React, { useState } from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';

const AddTodoForm = ({ handleAddNewTask, validateForm }) => {
  const [isFormVisible, setIsFormVisible] = useState(false);

  const toggleFormVisibility = () => {
    setIsFormVisible(!isFormVisible);
  };

  return (
    <>
      {isFormVisible && (
        <button className="btn btn-primary" onClick={toggleFormVisibility}>
          New Task
        </button>
      )}
      {!isFormVisible && (
        <Formik
          initialValues={{
            newTaskTitle: '',
            newTaskDescription: '',
            newTaskStatus: 'Pending'
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
            <div className="button-group">
              <button className="btn btn-primary" type="submit">
                Add Task
              </button>
              <button className="btn btn-secondary" type="button" onClick={toggleFormVisibility}>
                Cancel
              </button>
            </div>
          </Form>
        </Formik>
      )}
    </>
  );
};

export default AddTodoForm;
