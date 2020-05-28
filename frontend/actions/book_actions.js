import * as bookUtils from '../util/books';

export const RECEIVE_ALL_BOOKS = "RECEIVE_ALL_BOOKS";
export const RECEIVE_BOOK = "RECEIVE_BOOK";

const receiveAllBooks = books => ({
    type: RECEIVE_ALL_BOOKS,
    books
})

const receiveBook = book => {
    console.log("hererererere");
    return {
        type: RECEIVE_BOOK,
        book
    }
}

export const fetchBooks = () => dispatch => (
    bookUtils.fetchBooks()
        .then((books) => dispatch(receiveAllBooks(books.data)))
);

export const setBookState = (book) => dispatch => (
    dispatch(receiveBook(book))
);

