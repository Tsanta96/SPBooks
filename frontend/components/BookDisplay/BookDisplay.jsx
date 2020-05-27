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
            
            //Send request to backend to call scraper function
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
        <div>
            <div onClick={backToHome}>BACK</div>
            <img src={bookImg}></img>
            <h1>{title}</h1>
            <h3>{author}</h3>
            <p>{year}</p>
            Hello from Book Display!
        </div>
    )
}

export default withRouter(BookDisplay);
