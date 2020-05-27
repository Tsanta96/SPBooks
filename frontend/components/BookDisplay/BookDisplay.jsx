import React, { useEffect } from 'react';
import { withRouter } from 'react-router-dom';
import { fetchBook } from '../../util/books';

const BookDisplay = (props) => {
    const { title, author, year, isbn } = props.location.state;
    
    useEffect(() => {
        getBookImage();
    }, [])

    function getBookImage() {
        if (isbn !== null) {
            // fetchBook(isbn).then(res => console.log(res));
            console.log("In GetBookImage()");
            fetchBook(isbn).then(res => console.log(res))
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
            <h1>{title}</h1>
            <h3>{author}</h3>
            <p>{year}</p>
            Hello from Book Display!
        </div>
    )
}

export default withRouter(BookDisplay);
