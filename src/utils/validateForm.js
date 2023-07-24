export const validateForm = (values) => {
    const errors = {};

    if (!values.newTaskTitle) {
      errors.newTaskTitle = 'Task Title is required';
    }

    if (!values.newTaskDescription) {
      errors.newTaskDescription = 'Task Description is required';
    }

    return errors;
};