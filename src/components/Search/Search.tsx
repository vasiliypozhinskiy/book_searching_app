import React, {useState} from "react";
import {getBooksThunk, setCurrentPage, setQuery} from "../../reducers/booksReducer";
import {useAppDispatch, useAppSelector} from "../../utils/hooks";

const Search = () => {
    const dispatch = useAppDispatch()
    const [searchInput, setSearchInput] = useState("")
    const booksPerLoad = useAppSelector(state => state.booksReducer.booksPerLoad)

    const searchBooks = (query: string) => {
        dispatch(setCurrentPage(1))
        dispatch(setQuery(query))
        dispatch(getBooksThunk(query, 1, booksPerLoad))
    }

    return <div>
        <span>Поиск книг:</span>
        <input onChange={e=>setSearchInput(e.target.value)} value={searchInput}/>
        <button onClick={() => searchBooks(searchInput)}>Искать</button>
    </div>
};

export default Search
