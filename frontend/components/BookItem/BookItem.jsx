import React from 'react';

const BookItem = ({book}) => {
    return (
        <div>
            <h1>{book.title}</h1>
            <p>{book.author}</p>
            <p>{book.year}</p>
            <p>{book.isbn}</p>
        </div>
    )
}

export default BookItem;