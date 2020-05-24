import * as bookUtils from '../util/books';

export const RECEIVE_ALL_BOOKS = "RECEIVE_ALL_BOOKS";

const receiveAllBooks = books => ({
    type: RECEIVE_ALL_BOOKS,
    books
})

export const fetchBooks = () => dispatch => (
    bookUtils.fetchBooks()
        .then((books) => dispatch(receiveAllBooks(books.data)))
);