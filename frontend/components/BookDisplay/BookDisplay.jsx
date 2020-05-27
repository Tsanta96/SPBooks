import React, { useState, useEffect } from 'react';
import { withRouter } from 'react-router-dom';
import { fetchBook } from '../../util/books';

const BookDisplay = (props) => {
    const [bookImg, setBookImg] = useState('');
    const { title, author, year, isbn } = props.location.state;
    
    useEffect(() => {
        getBookImage();
    }, [])

    function getBookImage() {
        if (isbn !== null) {
            //Send request to backend to call scraper function from books controller
            fetchBook(isbn)
                .then((res) => setBookImg(res.data))
                .catch((err) => console.log(err));
        } else {
            return null
        }
    }

    function backToHome() {
        props.history.push(`/`);
    }

    return (
        <div className="book-display-container">
            <h1 className="page-header">Service Pros Library</h1>
            <div className="back-btn-image-info">
                <div className="back-to-home-btn" onClick={backToHome}>{"<"} BACK</div>
                <div className="image-and-info">
                    <img className="book-display-image" src={bookImg}></img>
                    <div className="book-display-info">
                        <h1 className="book-title">{title}</h1>
                        <h3 className="book-author">{author}</h3>
                        <p className="book-year">{year}</p>
                        <p className="book-isbn">Isbn: {isbn}</p>
                    </div>
                </div>

            </div>
        </div>
    )
}

export default withRouter(BookDisplay);
