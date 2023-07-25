// FormikForm.js
import React from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';

const AddTodoForm = ({ handleAddNewTask, validateForm }) => {
  return (
    <Formik
      initialValues={{
        newTaskTitle: '',
        newTaskDescription: '',
        newTaskCompleted: false
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
    </Formik>
  );
};

export default AddTodoForm;
