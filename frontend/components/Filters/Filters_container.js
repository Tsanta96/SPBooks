import { connect } from 'react-redux';
import Filters from './Filters';

const mapStateToProps = ({books}) => {
    let booksArr = Object.values(books);
    return {
        stateBooks: booksArr
    }
}

export default connect(mapStateToProps)(Filters);