import { RECEIVE_BOOK } from "../actions/book_actions";

//Reducers are supposed to be pure functions that do not mutate passed in state
const BooksReducer = (oldState = {}, action) => {
    Object.freeze(oldState); //For safety - To maintain the integrity of the original state
    switch (action.type) {
        case RECEIVE_BOOK:
            return Object.assign({}, action.book);
        default:
            return oldState;
    }
}

export default BooksReducer;