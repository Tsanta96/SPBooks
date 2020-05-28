import { connect } from 'react-redux';
import { setBookState } from '../../actions/book_actions';

import BookDisplay from './BookDisplay';

const mapStateToProps = ({book}) => ({
    stateBook: book
})

const mapDispatchToProps = dispatch => ({
    setBookState: (book) => dispatch(setBookState(book))
});

export default connect(mapStateToProps, mapDispatchToProps)(BookDisplay);