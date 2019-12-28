import { combineReducers } from "redux";

import ErrorsReducer from "./errors";
import UsersReducer from "./users";
import BooksReducer from "./books";
import FavReducer from "./favorites"

const RootReducer = combineReducers({
    errors: ErrorsReducer,
    session: UsersReducer,
    books: BooksReducer,
    favorites: FavReducer
});

export default RootReducer;
