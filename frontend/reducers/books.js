import { RECEIVE_BOOKS, RECEIVE_BOOK, REMOVE_BOOK } from "../actions/books"
import merge from "lodash/merge"

const BookReducer = (oldState = {}, action) => {
    Object.freeze(oldState)
    let newState
    switch (action.type) {
        case RECEIVE_BOOKS:
            // debugger
            newState = {}
            let books = Object.values(action.books)
            books.forEach(book => {
                newState[book.extract.id] = book.extract
            })
            return merge({}, oldState, newState)
        case RECEIVE_BOOK:
            return merge({}, oldState, {[action.book.id]: action.book})
        case REMOVE_BOOK:
            // debugger
            newState = merge({}, oldState)
            delete newState[action.bookId]
            return newState
        default:
            return oldState;
    }
}


export default BookReducer