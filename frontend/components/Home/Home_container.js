import { connect } from 'react-redux';
import Home from './Home';
 
import { fetchBooks } from '../../actions/book_actions';

const mapStateToProps = ( {books} ) => ({
    stateBooks: Object.values(books)
})

const mapDispatchToProps = dispatch => ({
    fetchBooks: () => dispatch(fetchBooks())
});

export default connect(mapStateToProps, mapDispatchToProps)(Home)