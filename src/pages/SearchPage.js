import { Container } from 'reactstrap';
import SearchTodoList from '../components/SearchTodoList';
import SubHeader from '../components/SubHeader';


const SearchPage = ({ todoList, handleDelete, handleUpdate }) => {
    return (
        <Container className="mt-5">
            <SubHeader current='Search' />
            <SearchTodoList
                todoList={todoList}
                handleDelete={handleDelete}
                handleUpdate={handleUpdate}
            />
        </Container>
    );
}

export default SearchPage;