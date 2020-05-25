import React, {useState, useEffect} from 'react';
import BookItem from '../BookItem/BookItem';
import BookList from '../BookList/BookList';
import Filters from '../Filters/Filters';
// import downArrow from '../../../app/assets/images/down-arrow.png';

const Home = ({ stateBooks, fetchBooks }) => {
    const [titleSortOption, setTitleSortOption] = useState("-");
    const [authorSortOption, setAuthorSortOption] = useState("-");
    const [yearSortOption, setYearSortOption] = useState("-");
    const [isbnSortOption, setIsbnSortOption] = useState("-");
    const [books, setBooks] = useState([]);
    const [showFilters, setShowFilters] = useState(false);
    let filterButtonText = "Show Filters";
    let filterImgSource = "https://img.icons8.com/material-rounded/30/000000/chevron-down.png"
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

    let filtersDisplay = null;

    if (showFilters === true) {
        filtersDisplay = <Filters
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
        filterButtonText = "Close Filters";
        filterImgSource = "https://img.icons8.com/material-rounded/30/000000/chevron-up.png";
    } else {
        filtersDisplay = null;
    }

    return (
        <div className="top-container">
            <div className="page-header-and-filters-container">
                <h1 className="page-header">Service Pros Library</h1>
                <div className="filters-container">
                    <div 
                        className="showFilters-button"
                        onClick={showFilters ? () => setShowFilters(false) : () => setShowFilters(true)}
                    >
                        {filterButtonText}
                        <img src={filterImgSource} />
                    </div>
                    {/* <button 
                        onClick={showFilters ? () => setShowFilters(false) : () => setShowFilters(true)}>
                            {filterButtonText}
                    </button> */}
                    {filtersDisplay}
                </div>

            </div>
            <BookList books={books} />
        </div>
    )
}

export default Home;
