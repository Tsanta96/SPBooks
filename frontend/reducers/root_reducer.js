import { combineReducers } from 'redux';
import BooksReducer from './books_reducer';
import BookReducer from './book_reducer';

const RootReducer = combineReducers({
    books: BooksReducer,
    book: BookReducer
})

export default RootReducer;