import * as BookUtil from "../util/books/util"

export const RECEIVE_BOOKS = "RECEIVE_BOOKS"
export const RECEIVE_BOOK = "RECEIVE_BOOK";
export const REMOVE_BOOK = "REMOVE_BOOK";

const receiveBooks = (books) => {
    return{
        type: RECEIVE_BOOKS,
        books: books,
    }
}

const receiveBook = book => {
    // // debugger
  return {
    type: RECEIVE_BOOK,
    book: book
  }
}

const removeBook = bookId => {
  return {
    type: REMOVE_BOOK,
    bookId: bookId
  };
};

export const getBooks = () => dispatch => {
    return (
        BookUtil.getBooks().then(books => dispatch(receiveBooks(books)))
    )
}

export const getBook = id => dispatch => {
  return BookUtil.getBook(id).then(book => dispatch(receiveBook(book)));
};

export const postBook = book => dispatch => {
    return(
        BookUtil.postBook(book).then(book => dispatch(receiveBook(book)))
    )
}

export const updateBook = book => dispatch => {
    return(
        BookUtil.updateBook(book).then(book => dispatch(receiveBook(book)))
    )
}

export const deleteBook = bookId => dispatch => {
    return(
        BookUtil.deleteBook(bookId).then(bookId => dispatch(removeBook(bookId)))
    )
}

export const getFavBooks = userId => dispatch => {
    // // debugger
    return(
        BookUtil.getFavBooks(userId).then((books)=>dispatch(receiveBooks(books)))
    )
}