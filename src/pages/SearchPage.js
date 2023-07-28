import { Container } from 'reactstrap';
import SearchTodoList from '../components/SearchTodoList';

const SearchPage = ({ todoList, handleDelete, handleUpdate }) => {
    return (
        <Container className="mt-5">
            <SearchTodoList
                todoList={todoList}
                handleDelete={handleDelete}
                handleUpdate={handleUpdate}
            />
        </Container>
    );
}

export default SearchPage;