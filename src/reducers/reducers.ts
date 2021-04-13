import {combineReducers} from "redux";
import booksReducer from "./booksReducer";
import {getBooks} from "../api/api"

export const reducers = combineReducers({
    booksReducer,
})
