import {booksAPI} from "../api/api";
import {AppThunk} from "../store/store";
import {ThunkDispatch} from "redux-thunk";
import {AnyAction} from "redux";

const SET_BOOKS = "SET_BOOKS"
const SET_TOTAL_BOOKS_COUNT = "SET_TOTAL_BOOKS_COUNT"

export type book = {
    title: string,
    author_name: string,
    first_publish_year: number,
    ISBN: number,
    cover_edition_key: string
}

type initialStateType = {
    books: Array<book>,
    totalBooksCount: number
}

const initialState: initialStateType = {
    books: [],
    totalBooksCount: 0
}

const booksReducer = (state = initialState, action: any) => {
    switch (action.type) {
        case SET_BOOKS:
            const books = action.books.map((book: any) => ({
                title: book.title,
                author_name: String(book.author_name),
                first_publish_year: book.first_publish_year,
                ISBN: book.isbn,
                cover_edition_key: book.cover_edition_key
            }))
            return {...state, books: [...books]}
        case SET_TOTAL_BOOKS_COUNT:
            return {...state, totalBooksCount: action.totalBooksCount}
        default:
            return state
    }
}

const setBooks = (books: Array<object>) => ({
    type: SET_BOOKS,
    books
})

const setTotalBooksCount = (totalBooksCount: number) => ({
    type: SET_TOTAL_BOOKS_COUNT,
    totalBooksCount
})

export const getBooks = (query: string, page: number | undefined, limit: number | undefined):
    AppThunk => {
    return async (dispatch: ThunkDispatch<{}, {}, AnyAction>) => {
        const data = await booksAPI.getBooks(query, page, limit)
        dispatch(setBooks(data.docs))
        dispatch(setTotalBooksCount(data.numFound))
    }
}

export default booksReducer
