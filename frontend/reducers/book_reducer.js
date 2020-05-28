import { RECEIVE_BOOK } from "../actions/book_actions";

const BooksReducer = (oldState = {}, action) => {
    Object.freeze(oldState); //For safety - To maintain the integrity of the original state
    switch (action.type) {
        case RECEIVE_BOOK:
            console.log("REC BOOK");
            return Object.assign({}, action.book);
        default:
            return oldState;
    }
}

export default BooksReducer;