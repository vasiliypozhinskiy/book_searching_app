import React, {useState} from "react";
import {getBooks} from "../../reducers/booksReducer";
import {useAppDispatch} from "../../utils/hooks";

const Search = () => {
    const dispatch = useAppDispatch()
    const [searchInput, setSearchInput] = useState("")

    const searchBooks = (query: string) => {
        dispatch(getBooks(query, undefined, undefined))
    }

    return <div>
        <span>Поиск книг:</span>
        <input onChange={e=>setSearchInput(e.target.value)} value={searchInput}/>
        <button onClick={() => searchBooks(searchInput)}>Искать</button>
    </div>
};

export default Search
