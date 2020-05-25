import React, {useState, useEffect} from 'react';
import BookItem from '../BookItem/BookItem';
import BookList from '../BookList/BookList';
import Filters from '../Filters/Filters';

const Home = ({ stateBooks, fetchBooks }) => {
    const [titleSortOption, setTitleSortOption] = useState("-");
    const [authorSortOption, setAuthorSortOption] = useState("-");
    const [yearSortOption, setYearSortOption] = useState("-");
    const [isbnSortOption, setIsbnSortOption] = useState("-");
    const [books, setBooks] = useState([]);
    const originalBookList = stateBooks.length !== 0 ? stateBooks : null;
    console.log("Home Render");

    useEffect(() => {
        fetchBooks();
    }, []);

    useEffect(() => {
        if (stateBooks.length !== 0) {
            setBooks(stateBooks);
        }
    }, [stateBooks]);

    return (
        <div className="top-container">
            <h1 className="page-header">Service Pros Library</h1>
            <Filters 
                titleSortOption={titleSortOption}
                authorSortOption={authorSortOption}
                yearSortOption={yearSortOption}
                isbnSortOption={isbnSortOption}
                setTitleSortOption={setTitleSortOption}
                setAuthorSortOption={setAuthorSortOption}
                setYearSortOption={setYearSortOption}
                setIsbnSortOption={setIsbnSortOption}
                books={books}
                setBooks={setBooks}
                ogBookList={originalBookList} //To reset all books after search
            />
            <BookList books={books} />
        </div>
    )
}

export default Home;
