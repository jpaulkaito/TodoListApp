import { Container } from 'reactstrap';
import SearchTodoList from '../components/SearchTodoList';

const SearchPage = () => {
    return (
        <Container className="mt-5">
            <SearchTodoList
            />
        </Container>
    );
}

export default SearchPage;