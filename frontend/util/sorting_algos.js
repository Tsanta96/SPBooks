//All sorting algos based on user input

export const titleAscSort = (books) => {
    let newBooks = books.slice();
    return newBooks.sort((a,b) => (a.title > b.title) ? 1 : -1);
}   

export const titleDscSort = (books) => {
    let newBooks = books.slice();
    return newBooks.sort((a, b) => a.title < b.title ? 1 : -1);
}

export const authorAscSort = (books) => {
    let newBooks = books.slice();
    return newBooks.sort((a, b) => (a.author > b.author) ? 1 : -1);
}

export const authorDscSort = (books) => {
    let newBooks = books.slice();
    return newBooks.sort((a, b) => (a.author < b.author) ? 1 : -1);
}

export const yearAscSort = (books) => {
    let newBooks = books.slice();
    return newBooks.sort((a, b) => (a.year > b.year) ? 1 : -1);
}

export const yearDscSort = (books) => {
    let newBooks = books.slice();
    return newBooks.sort((a, b) => (a.year < b.year) ? 1 : -1);
}

export const isbnAscSort = (books) => {
    let newBooks = books.slice();
    return newBooks.sort((a, b) => (a.isbn > b.isbn) ? 1 : -1);
}

export const isbnDscSort = (books) => {
    let newBooks = books.slice();
    return newBooks.sort((a, b) => (a.isbn < b.isbn) ? 1 : -1);
}