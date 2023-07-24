import { useState } from 'react';
import { Button, Modal, ModalHeader, ModalBody } from "reactstrap";
import { Formik, Field, Form, ErrorMessage } from 'formik';
import { FormGroup, Label } from 'reactstrap';
import { validateForm } from '../../src/utils/validateForm';

const EditTodoForm = ({ todoList, handleUpdate}) => {
    const [modalOpen, setModalOpen] = useState(false);
    const handleSubmit = (values) => {
        if (values.newTaskTitle && values.newTaskDescription && values.date) {
            const updateTodo = {
                id: todoList.id,
                title: values.newTaskTitle,
                description: values.newTaskDescription,
                Completed: false,
                date: values.date
            };
            console.log(updateTodo);
            handleUpdate(updateTodo);
            setModalOpen(false);
        }
    }

    return (
        <>
            <button className="btn btn-primary mr-10" onClick={() => setModalOpen(true)}>
                Edit
            </button>
            <Modal isOpen={modalOpen}>
                <ModalHeader toggle={() => setModalOpen(false)}>
                    Edit Todo Item
                </ModalHeader>
                <ModalBody>
                    <Formik
                        initialValues={{
                            date: todoList.date,
                            newTaskTitle: todoList.title,
                            newTaskDescription: todoList.description
                        }}
                        onSubmit={handleSubmit}
                        validate={validateForm}
                    >
                        <Form>
                            <FormGroup>
                                <Label htmlFor='date'>
                                    Date
                                </Label>
                                <Field
                                    name='date'
                                    as='input'
                                    type='date'
                                    className='form-control'
                                >
                                </Field>
                            </FormGroup>
                            <FormGroup>
                                <Label htmlFor='newTaskTitle'>
                                    Task Title
                                </Label>
                                <Field
                                    type="text"
                                    name="newTaskTitle"
                                    placeholder="Task Title"
                                    className="form-control"
                                />
                                <ErrorMessage name='newTaskTitle'>
                                    {(msg) => <p className='text-danger'>{msg}</p>}
                                </ErrorMessage>
                            </FormGroup>
                            <FormGroup>
                                <Label htmlFor='newTaskDescription'>
                                    Comment
                                </Label>
                                <Field
                                    as="textarea"
                                    name="newTaskDescription"
                                    placeholder="Task Description"
                                    className="form-control"
                                    style={{ height: '200px' }}
                                />
                                <ErrorMessage name='newTaskDescription'>
                                    {(msg) => <p className='text-danger'>{msg}</p>}
                                </ErrorMessage>
                            </FormGroup>
                            <Button type='submit' color='primary'>
                                Submit
                            </Button>
                        </Form>
                    </Formik>
                </ModalBody>
            </Modal>
        </>
    );
}

export default EditTodoForm;