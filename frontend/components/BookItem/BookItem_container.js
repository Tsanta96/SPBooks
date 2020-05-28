import { connect } from 'react-redux';
import { setBookState } from '../../actions/book_actions';

import BookItem from './BookItem';

const mapDispatchToProps = dispatch => ({
    setBookState: (book) => dispatch(setBookState(book))
});

export default connect(null, mapDispatchToProps)(BookItem);