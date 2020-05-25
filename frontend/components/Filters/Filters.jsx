import React, { useState } from 'react';
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
            // ogBookList
    } = props

    // let copyBooks = [...books] //Copying books Arr to not alter og order
    let sorted;

    function handleSort(e) {
        // if (books.length !== ogBookList.length) {
        //     setBooks(ogBookList);
        // }
        // setBooks(ogBookList);
        switch(e.target.value) {
            case "titleAsc":
                setTitleSortOption(e.target.value);
                resetOtherState("Title");
                sorted = titleAscSort(books);
                setBooks(sorted);
                break;
            case "titleDsc":
                setTitleSortOption(e.target.value);
                resetOtherState("Title");
                sorted = titleDscSort(books);
                setBooks(sorted);
                break;
            case "AuthorAsc":
                setAuthorSortOption(e.target.value);
                resetOtherState("Author");
                sorted = authorAscSort(books);
                setBooks(sorted);
                break;
            case "AuthorDsc":
                setAuthorSortOption(e.target.value);
                resetOtherState("Author");
                sorted = authorDscSort(books);
                setBooks(sorted);
                break;
            case "YearAsc":
                setYearSortOption(e.target.value);
                resetOtherState("Year");
                sorted = yearAscSort(books);
                setBooks(sorted);
                break;
            case "YearDsc":
                setYearSortOption(e.target.value);
                resetOtherState("Year");
                sorted = yearDscSort(books);
                setBooks(sorted);
                break;
            case "IsbnAsc":
                setIsbnSortOption(e.target.value);
                resetOtherState("Isbn");
                sorted = isbnAscSort(books);
                setBooks(sorted);
                break;
            case "IsbnDsc":
                setIsbnSortOption(e.target.value);
                resetOtherState("Isbn");
                sorted = isbnDscSort(books);
                setBooks(sorted);
                break;
            default: 
                return null;
        }
    }

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

    // function handleSearch(e) {
        // e.preventDefault();
        // let searchResults = [];
        // for (let i = 0; i < books.length; i++) {
        //     if (books[i].title.includes(searchStr)) {
        //         searchResults.push(books[i]);
        //     }
        // }
        // setBooks(searchResults);
        // console.log(`search for ${searchStr}`);
    // }

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
            {/* <div>
                <form onSubmit={handleSearch}>
                    <label>Search: 
                        <input 
                            type="text"
                            placeholder="Search for a famous book"
                            value={searchStr}
                            onChange={(e) => setSearchStr(e.currentTarget.value)}
                        />
                        <input type="submit" value="Search"></input>
                    </label>
                </form>
            </div> */}
        </div>
    )
}

export default Filters;
