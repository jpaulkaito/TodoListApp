import React from 'react';
import { Container, Form, FormGroup, Input, Button, ListGroup, ListGroupItem } from 'reactstrap';
import { FontAwesomeIcon } from 'react-fontawesome';
import { faTrash } from '@fortawesome/free-solid-svg-icons';

const App = () => {
  const [todos, setTodos] = React.useState([]);
  const [newTodo, setNewTodo] = React.useState('');

  const addTodo = () => {
    if (newTodo) {
      setTodos([...todos, newTodo]);
      setNewTodo('');
    }
  };

  const deleteTodo = (index) => {
    setTodos(todos.filter((_, i) => i !== index));
  };

  return (
    <Container>
      <h1>Todo List</h1>
      <Form>
        <FormGroup>
          <Input
            type="text"
            value={newTodo}
            onChange={(e) => setNewTodo(e.target.value)}
            placeholder="Enter a new todo"
          />
        </FormGroup>
        <Button color="primary" onClick={addTodo}>
          Add Todo
        </Button>
      </Form>
      <ListGroup>
        {todos.map((todo, index) => (
          <ListGroupItem key={index}>
            {todo}
            <FontAwesomeIcon icon={faTrash} onClick={() => deleteTodo(index)} />
          </ListGroupItem>
        ))}
      </ListGroup>
    </Container>
  );
};

export default App;
