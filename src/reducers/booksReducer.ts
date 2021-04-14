import {booksAPI} from "../api/api";
import {AppThunk} from "../store/store";
import {ThunkDispatch} from "redux-thunk";
import {AnyAction} from "redux";

const SET_BOOKS = "SET_BOOKS";
const SET_TOTAL_BOOKS_COUNT = "SET_TOTAL_BOOKS_COUNT";
const SET_QUERY = "SET_QUERY";
const SET_CURRENT_PAGE = "SET_CURRENT_PAGE";
const ADD_BOOKS = "ADD_BOOKS"
const SET_IS_BOOKS_LOADING = "SET_IS_BOOKS_LOADING";

export type book = {
    title: string,
    author_name: string,
    first_publish_year: number,
    ISBN: number,
    cover_edition_key: string
}

type initialStateType = {
    books: Array<book>,
    query: string | null,
    currentPage: number,
    totalBooksCount: number | null,
    booksPerLoad: number,
    isBooksLoading: boolean
}

const initialState: initialStateType = {
    books: [],
    totalBooksCount: null,
    query: null,
    currentPage: 1,
    booksPerLoad: 10,
    isBooksLoading: false
}

const booksReducer = (state = initialState, action: any) => {
    switch (action.type) {
        case SET_BOOKS:
            const booksForSetting = action.books.map((book: any) => ({
                title: book.title,
                author_name: book.author_name,
                first_publish_year: book.first_publish_year,
                ISBN: book.isbn,
                cover_edition_key: book.cover_edition_key
            }))
            return {...state, books: [...booksForSetting]}
        case ADD_BOOKS:
            const booksForAdding = action.books.map((book: any) => ({
                title: book.title,
                author_name: book.author_name,
                first_publish_year: book.first_publish_year,
                ISBN: book.isbn,
                cover_edition_key: book.cover_edition_key
            }))
            return {...state, books: [...state.books, ...booksForAdding]}
        case SET_IS_BOOKS_LOADING:
            return {...state, isBooksLoading: action.isBooksLoading}
        case SET_TOTAL_BOOKS_COUNT:
            return {...state, totalBooksCount: action.totalBooksCount}
        case SET_QUERY:
            return  {...state, query: action.query}
        case SET_CURRENT_PAGE:
            return {...state, currentPage: action.currentPage}
        default:
            return state
    }
}

const setBooks = (books : Array<object>) => ({
    type: SET_BOOKS,
    books
})

const addBooks = (books : Array<object>) => ({
    type: ADD_BOOKS,
    books
})

export const setIsBooksLoading = (isBooksLoading : boolean) => ({
    type: SET_IS_BOOKS_LOADING,
    isBooksLoading
})

export const setTotalBooksCount = (totalBooksCount : number) => ({
    type: SET_TOTAL_BOOKS_COUNT,
    totalBooksCount
})

export const setQuery = (query: string) => ({
    type: SET_QUERY,
    query
})

export const setCurrentPage = (currentPage: number) => ({
    type: SET_CURRENT_PAGE,
    currentPage
})

export const getBooksThunk = (query: string, page: number | undefined, limit: number | undefined):
    AppThunk => {
    return async (dispatch: ThunkDispatch<{}, {}, AnyAction>) => {
        dispatch(setIsBooksLoading(true))
        const data = await booksAPI.getBooks(query, page, limit)
        dispatch(setIsBooksLoading(false))
        dispatch(setBooks(data.docs))
        dispatch(setTotalBooksCount(data.numFound))
    }
}

export const addBooksThunk = (query: string, page: number | undefined, limit: number | undefined):
    AppThunk => {
    return async (dispatch: ThunkDispatch<{}, {}, AnyAction>) => {
        dispatch(setIsBooksLoading(true))
        const data = await booksAPI.getBooks(query, page, limit)
        dispatch(setIsBooksLoading(false))
        dispatch(addBooks(data.docs))
    }
}

export default booksReducer
