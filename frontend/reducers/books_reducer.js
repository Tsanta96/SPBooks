import { RECEIVE_ALL_BOOKS } from "../actions/book_actions";

const BooksReducer = (oldState = {}, action) => {
    Object.freeze(oldState); //For safety - To maintain the integrity of the original state
    switch (action.type) {
        case RECEIVE_ALL_BOOKS:
            return Object.assign({}, action.books);
        default:
            return oldState;
    }
}

export default BooksReducer;