import React from 'react';
import Search from "./components/Search/Search";
import BooksSnippets from "./components/BooksSnippets/BooksSnippets";
import {useAppDispatch} from "./utils/hooks";
import {setIsBookInfoOpen} from "./reducers/booksReducer";

function App() {
    const dispatch = useAppDispatch()
    const toggleIsBookInfoOpenHandler = () => {
        dispatch(setIsBookInfoOpen(false))
    }

    return (
        <div className="App" onClick={toggleIsBookInfoOpenHandler}>
            <Search/>
            <BooksSnippets/>
        </div>
    );
}

export default App;
