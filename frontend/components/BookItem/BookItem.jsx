import React from 'react'

const BookItem = ({book}) => {
    return (
        <div>
            <h1>{book.title}</h1>
            <p>{book.author}</p>
        </div>
    )
}

export default BookItem;