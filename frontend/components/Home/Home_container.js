import { connect } from 'react-redux';
import Home from './Home';
 
import { fetchBooks } from '../../actions/book_actions';

const mapStateToProps = ( {books} ) => {
    let booksArr = Object.values(books);
    return {
        stateBooks: booksArr
    }
}

const mapDispatchToProps = dispatch => ({
    fetchBooks: () => dispatch(fetchBooks())
});

export default connect(mapStateToProps, mapDispatchToProps)(Home)