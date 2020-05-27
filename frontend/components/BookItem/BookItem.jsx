import React from 'react';
import { withRouter } from 'react-router-dom';

const BookItem = (props) => {
    const { book } = props;

    function sendToBookDisplay() {
        console.log(props);
        props.history.push({
            pathname: `/books/${book.isbn}`,
            state: {
                title: book.title ,
                author: book.author,
                year: book.year,
                isbn: book.isbn
            }
        });
    }

    return (
        <div 
            className="book-item"
            onClick={sendToBookDisplay}
        >
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

export default withRouter(BookItem);