import React, {useState, useEffect} from 'react';
import BookItem from '../BookItem/BookItem';

const Home = (props) => {
    useEffect(() => {
        props.fetchBooks();
    }, []);

    return (
        <div>
            <h1>Service Pros Library</h1>
            <ul>
                {props.books.map((book, idx) => (
                    <BookItem key={idx} book={book} />
                ))}
            </ul>
        </div>
    )
}

export default Home;
