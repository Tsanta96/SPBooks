import React from 'react';
import BookItem from '../BookItem/BookItem';

const BookList = ({ books }) => {
    return (
        <div className="book-list">
            <ul>
                {books.map((book, idx) => (
                    <BookItem key={idx} book={book} />
                ))}
            </ul>
        </div>
    )
}

export default BookList;
