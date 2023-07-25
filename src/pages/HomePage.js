import { Container } from 'reactstrap';
import TodoListView from '../components/TodoListView';

const ViewAllTodoPage = ({ todoList, handleDelete, handleCreate, handleUpdate }) => {
    return (
        <Container className="mt-5">
            <TodoListView
              todoList={todoList}
              handleDelete={handleDelete}
              handleCreate={handleCreate}
              handleUpdate={handleUpdate}
            />
        </Container>
    )
}

export default ViewAllTodoPage;