import React from 'react';
import BookItem from '../BookItem/BookItem';

const BookList = ({ books }) => {
    return (
        <ul>
            {books.map((book, idx) => (
                <BookItem key={idx} book={book} />
            ))}
        </ul>
    )
}

export default BookList;
