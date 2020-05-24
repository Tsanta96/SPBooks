import React, {useState, useEffect} from 'react';
import BookItem from '../BookItem/BookItem';

const Home = ({ stateBooks, fetchBooks }) => {
    const [titleSortOption, setTitleSortOption] = useState("-");
    const [authorSortOption, setAuthorSortOption] = useState("-");
    const [yearSortOption, setYearSortOption] = useState("-");
    const [isbnSortOption, setIsbnSortOption] = useState("-");
    console.log(titleSortOption);
    // const [books, setBooks] = useState('');
    // const originalBookList = stateBooks.length !== 0 ? stateBooks : null;
    // console.log(originalBookList);

    function handleSort(e) {
        switch(e.target.value) {
            case "titleAsc":
                setTitleSortOption(e.target.value);
                resetOtherState("Title");
                console.log("Call TitleASC Func");
                break;
            case "titleDsc":
                setTitleSortOption(e.target.value);
                resetOtherState("Title");
                console.log("Call titleDsc Func");
                break;
            case "AuthorAsc":
                setAuthorSortOption(e.target.value);
                resetOtherState("Author");
                console.log("Call AuthorAsc Func");
                break;
            case "AuthorDsc":
                setAuthorSortOption(e.target.value);
                resetOtherState("Author");
                console.log("Call AuthorDsc Func");
                break;
            case "YearAsc":
                setYearSortOption(e.target.value);
                resetOtherState("Year");
                console.log("Call YearAsc Func");
                break;
            case "YearDsc":
                setYearSortOption(e.target.value);
                resetOtherState("Year");
                console.log("Call YearDsc Func");
                break;
            case "IsbnAsc":
                setIsbnSortOption(e.target.value);
                resetOtherState("Isbn");
                console.log("Call IsbnAsc Func");
                break;
            case "IsbnDsc":
                setIsbnSortOption(e.target.value);
                resetOtherState("Year");
                console.log("Call IsbnDsc Func");
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
                console.log("change" + funcName);
            }
        })
        console.log("testing");
    }

    useEffect(() => {
        fetchBooks();
    }, []);

    // useEffect(() => {
    //     if (stateBooks.length !== 0) {
    //         setBooks(stateBooks);
    //     }
    // }, [stateBooks]);

    return (
        <div>
            <h1>Service Pros Library</h1>
            <div className="filters">
                <h3>Filters:</h3>
                <span>Title: 
                    <select value={titleSortOption} onChange={(e) => handleSort(e)}>
                        <option>-</option>
                        <option value="titleAsc">ASC</option>
                        <option value="titleDsc">DSC</option>
                    </select>
                </span>
                <span>Author:
                    <select value={authorSortOption} onChange={handleSort}>
                        <option>-</option>
                        <option value="AuthorAsc">ASC</option>
                        <option value="AuthorDsc">DSC</option>
                    </select>
                </span>
                <span>Year:
                    <select value={yearSortOption} onChange={handleSort}>
                        <option>-</option>
                        <option value="YearAsc">ASC</option>
                        <option value="YearDsc">DSC</option>
                    </select>
                </span>
                <span>ISBN:
                    <select value={isbnSortOption} onChange={handleSort}>
                        <option>-</option>
                        <option value="IsbnAsc">ASC</option>
                        <option value="IsbnDsc">DSC</option>
                    </select>
                </span>
            </div>
            <div>
                <p>Search:</p>
            </div>
            <ul>
                {stateBooks.map((book, idx) => (
                    <BookItem key={idx} book={book} />
                ))}
            </ul>
        </div>
    )
}

export default Home;
