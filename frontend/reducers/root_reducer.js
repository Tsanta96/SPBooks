import { combineReducers } from 'redux';
import BooksReducer from './books_reducer';

const RootReducer = combineReducers({
    books: BooksReducer
})

export default RootReducer;