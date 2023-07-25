import { Container } from 'reactstrap';
import ViewAllTodoList from '../components/ViewAllTodoList';
import SubHeader from '../components/SubHeader';

const ViewAllTodoPage = ({ todoList, handleDelete, handleUpdate }) => {
    return (
        <Container className="mt-5">
            <SubHeader current='View All' />
            <ViewAllTodoList
                todoList={todoList}
                handleDelete={handleDelete}
                handleUpdate={handleUpdate}
            />
        </Container>
    )
}

export default ViewAllTodoPage;