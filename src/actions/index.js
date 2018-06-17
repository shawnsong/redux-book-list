export function selectBook(book) {
    console.log("book is selected: ", book);
    return {
        type: 'BOOK_SELECTED',
        payload: book
    }
}