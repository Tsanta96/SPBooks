import { RECEIVE_ALL_BOOKS } from "../actions/book_actions";

const BooksReducer = (oldState = {}, action) => {
    Object.freeze(oldState);
    switch (action.type) {
        case RECEIVE_ALL_BOOKS:
            return Object.assign({}, action.books);
        default:
            return oldState;
    }
}

export default BooksReducer;