import React, {useState} from "react";
import {getBooksThunk, setCurrentPage, setQuery} from "../../reducers/booksReducer";
import {useAppDispatch, useAppSelector} from "../../utils/hooks";
import styles from "./Search.module.scss"

const Search = () => {
    const dispatch = useAppDispatch()
    const [searchInput, setSearchInput] = useState("")
    const [searchInputTimer, setSearchInputTimer] = useState<number | null>(null)
    const booksPerLoad = useAppSelector(state => state.booksReducer.booksPerLoad)

    const searchBooks = (query: string) => {
        dispatch(setCurrentPage(1))
        dispatch(setQuery(query))
        dispatch(getBooksThunk(query, 1, booksPerLoad))
    }

    const searchWithDelay = (query: string) => {
        dispatch(setCurrentPage(1))
        dispatch(getBooksThunk(query, 1, booksPerLoad))
    }

    const searchBooksOnChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        if (searchInputTimer) {
            window.clearTimeout(searchInputTimer)
        }

        const query = e.target.value
        setSearchInput(query)
        dispatch(setQuery(query))
        const timerId = window.setTimeout(() => searchWithDelay(query), 1000)
        setSearchInputTimer(timerId)
    }

    return <div className={styles.Search__container}>
        <span>Поиск книг:</span>
        <input className={styles.Search__input} onChange={searchBooksOnChange} value={searchInput}/>
        <button className={styles.Search__button} onClick={() => searchBooks(searchInput)}>Искать</button>
    </div>
};

export default Search
