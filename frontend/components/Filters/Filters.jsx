import React, { useState, useEffect } from 'react';
import { titleAscSort, 
         titleDscSort,
         authorAscSort,
         authorDscSort,
         yearAscSort,
         yearDscSort,
         isbnAscSort,
         isbnDscSort 
    
} from "../../util/sorting_algos";

const Filters = (props) => {
    const [searchStr, setSearchStr] = useState('');
    
    const { titleSortOption, 
            authorSortOption,
            yearSortOption,
            isbnSortOption,
            setTitleSortOption,
            setAuthorSortOption,
            setYearSortOption,
            setIsbnSortOption,
            books,
            setBooks,
            stateBooks,
            setShowFilters
    } = props

    let sorted;

    //Call desired sort function based on user Input
    function handleSort(e) {
        switch(e.target.value) {
            case "titleAsc":
                setTitleSortOption(e.target.value);
                resetOtherState("Title");
                //passing in stateBooks (books list from redux state) to make sure it is the full list everytime
                sorted = titleAscSort(stateBooks);
                setBooks(sorted);
                break;
            case "titleDsc":
                setTitleSortOption(e.target.value);
                resetOtherState("Title");
                sorted = titleDscSort(stateBooks);
                setBooks(sorted);
                break;
            case "AuthorAsc":
                setAuthorSortOption(e.target.value);
                resetOtherState("Author");
                sorted = authorAscSort(stateBooks);
                setBooks(sorted);
                break;
            case "AuthorDsc":
                setAuthorSortOption(e.target.value);
                resetOtherState("Author");
                sorted = authorDscSort(stateBooks);
                setBooks(sorted);
                break;
            case "YearAsc":
                setYearSortOption(e.target.value);
                resetOtherState("Year");
                sorted = yearAscSort(stateBooks);
                setBooks(sorted);
                break;
            case "YearDsc":
                setYearSortOption(e.target.value);
                resetOtherState("Year");
                sorted = yearDscSort(stateBooks);
                setBooks(sorted);
                break;
            case "IsbnAsc":
                setIsbnSortOption(e.target.value);
                resetOtherState("Isbn");
                sorted = isbnAscSort(stateBooks);
                setBooks(sorted);
                break;
            case "IsbnDsc":
                setIsbnSortOption(e.target.value);
                resetOtherState("Isbn");
                sorted = isbnDscSort(stateBooks);
                setBooks(sorted);
                break;
            default: 
                return null;
        }
    }

    //Reset the select input values when interacting with another input
    function resetOtherState(selectedState) {
        const selectStateUpdateFunctions = {
            "setTitleSortOption" : setTitleSortOption, 
            "setAuthorSortOption" : setAuthorSortOption,
            "setYearSortOption" : setYearSortOption,
            "setIsbnSortOption" : setIsbnSortOption
        }

        Object.keys(selectStateUpdateFunctions).forEach((funcName) => {
            if (!funcName.includes(selectedState)) {
                selectStateUpdateFunctions[funcName]("-");
            }
        })
    }

    function searchBooks(e) {
        e.preventDefault();
        let searchedBooks = [];
        console.log("1 => ", searchedBooks)
        console.log("here => ", stateBooks)
        for (let i = 0; i < stateBooks.length; i++) {
            if (stateBooks[i].title !== null && stateBooks[i].title.toLowerCase().includes(searchStr.toLowerCase()) ||
            stateBooks[i].author !== null && stateBooks[i].author.toLowerCase().includes(searchStr.toLowerCase()) ||
            stateBooks[i].year !== null && stateBooks[i].year.includes(searchStr.toLowerCase()) ||
            stateBooks[i].isbn !== null && stateBooks[i].isbn.includes(searchStr.toLowerCase())) {
                searchedBooks.push(stateBooks[i]);
                console.log(searchedBooks);
            }
        }
        console.log("searchStr => ", searchStr);
        console.log("Searched Books => ", searchedBooks);
        setBooks(searchedBooks);
        setSearchStr('');
        setShowFilters(false);
        setTitleSortOption('-');
        setAuthorSortOption('-');
        setYearSortOption('-');
        setIsbnSortOption('-');
    }

    function handleClear() {
        console.log(stateBooks);
        setBooks(stateBooks);
        setShowFilters(false);
        setTitleSortOption('-');
        setAuthorSortOption('-');
        setYearSortOption('-');
        setIsbnSortOption('-');
    }

    return (
        <div className="filters">
            <div className="filter-categories">
                <div className="filter-label">Title:
                    <select className="filter-select" value={titleSortOption} onChange={(e) => handleSort(e)}>
                        <option>-</option>
                        <option value="titleAsc">ASC</option>
                        <option value="titleDsc">DSC</option>
                    </select>
                </div>
                <div className="filter-label">Author:
                    <select className="filter-select" value={authorSortOption} onChange={handleSort}>
                        <option>-</option>
                        <option value="AuthorAsc">ASC</option>
                        <option value="AuthorDsc">DSC</option>
                    </select>
                </div>
                <div className="filter-label">Year:
                    <select className="filter-select" value={yearSortOption} onChange={handleSort}>
                        <option>-</option>
                        <option value="YearAsc">ASC</option>
                        <option value="YearDsc">DSC</option>
                    </select>
                </div>
                <div className="filter-label">ISBN:
                    <select className="filter-select" value={isbnSortOption} onChange={handleSort}>
                        <option>-</option>
                        <option value="IsbnAsc">ASC</option>
                        <option value="IsbnDsc">DSC</option>
                    </select>
                </div>
            </div>
            <div className="filter-search">
                <form onSubmit={searchBooks}>
                    <input 
                        type="text"
                        className="search-bar"
                        placeholder="Name, Author, Year, Isbn"
                        value={searchStr}
                        onChange={(e) => setSearchStr(e.currentTarget.value)}
                    />
                    <button className="search-button" type="submit">Search</button>
                </form>
            </div>
            <button className="clear-button" onClick={handleClear}>Clear</button>
        </div>
    )
}

export default Filters;
