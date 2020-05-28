import React from 'react';
import { withRouter } from 'react-router-dom';

const BookItem = (props) => {
    const { book } = props;

    function sendToBookDisplay() {
        props.setBookState(book);
        props.history.push({
            pathname: `/books/${book.isbn}`,
            state: {
                isbn: book.isbn //pass isbn over nav params so BookDisplay receives it quicker than if it were to pull from redux state
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