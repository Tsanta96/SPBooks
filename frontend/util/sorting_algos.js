// titleAscSort
// titleDscSort
// authorAscSort
// authorDscSort
// yearAscSort
// yearDscSort
// IsbnAscSort
// IsbnDscSort

export const titleAscSort = (books) => {
    return books.sort((a,b) => (a.title > b.title) ? 1 : -1);
}   

export const titleDscSort = (books) => {
    return books.sort((a, b) => a.title < b.title ? 1 : -1);
}

export const authorAscSort = (books) => {
    return books.sort((a, b) => (a.author > b.author) ? 1 : -1);
}

export const authorDscSort = (books) => {
    return books.sort((a, b) => (a.author < b.author) ? 1 : -1);
}

export const yearAscSort = (books) => {
    return books.sort((a, b) => (a.year > b.year) ? 1 : -1);
}

export const yearDscSort = (books) => {
    return books.sort((a, b) => (a.year < b.year) ? 1 : -1);
}

export const isbnAscSort = (books) => {
    return books.sort((a, b) => (a.isbn > b.isbn) ? 1 : -1);
}

export const isbnDscSort = (books) => {
    return books.sort((a, b) => (a.isbn < b.isbn) ? 1 : -1);
}