import React from 'react';

const BookItem = ( {book} ) => {
    return (
        <div className="book-item">
            <div className="book-item-left-side">
                <h1 className="book-title">{book.title}</h1>
                <p className="book-author">{book.author}</p>
            </div>
            <div className="book-item-right-side">
                <p className="book-year">{book.year}</p>
                <p className="book-isbn">{book.isbn ? "Isbn: " + book.isbn : "Isbn: N/A"}</p>
            </div>
        </div>
    )
}

export default BookItem;