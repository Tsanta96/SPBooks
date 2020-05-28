import React, { useState, useEffect } from 'react';
import { withRouter } from 'react-router-dom';
import { fetchBook } from '../../util/books';

const BookDisplay = (props) => {
    const [bookImg, setBookImg] = useState('');
    const title = props.stateBook.title;
    const author = props.stateBook.author;
    const year = props.stateBook.year;
    const isbn = props.stateBook.isbn;

    useEffect(() => {
        getBookImage();
    }, [])

    function getBookImage() {
        if (isbn !== null) {
            //Send request to backend to call scraper function from books controller
            fetchBook(isbn)
                .then((res) => {
                    console.log(res.data)
                    setBookImg(res.data)
                })
                .catch((err) => console.log(err));
        } else {
            return null
        }
    }

    function backToHome() {
        props.history.push(`/`);
    }

    let dispImage;
    if (isbn === null) {
        dispImage = <div className="no-isbn">N/A</div>
    } else {
        dispImage = <img className="book-display-image" src={bookImg ? bookImg : 'https://image.flaticon.com/icons/svg/55/55217.svg'}></img>
    }

    return (
        <div className="book-display-container">
            <h1 className="page-header">Service Pros Library</h1>
            <div className="back-btn-image-info">
                <div className="back-to-home-btn" onClick={backToHome}>{"<"} BACK</div>
                <div className="image-and-info">
                    {dispImage}
                    <div className="book-display-info">
                        <h1 className="book-title">{title ? title : "Go Back to Home Page"}</h1>
                        <h3 className="book-author">{author}</h3>
                        <p className="book-year">{year}</p>
                        <p className="book-isbn">{isbn ? `Isbn: ${isbn}` : ''}</p>
                    </div>
                </div>

            </div>
        </div>
    )
}

export default withRouter(BookDisplay);
