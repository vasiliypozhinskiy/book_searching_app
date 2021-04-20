import React from 'react';
import Search from "./components/Search/Search";
import BooksSnippets from "./components/BooksSnippets/BooksSnippets";
import {useAppDispatch} from "./utils/hooks";
import {setIsBookInfoOpen} from "./reducers/booksReducer";
import Background from "./components/common/Background/Background";
import styles from "./App.module.scss"

function App() {
    const dispatch = useAppDispatch()
    const toggleIsBookInfoOpenHandler = () => {
        dispatch(setIsBookInfoOpen(false))
    }

    return (
        <div onClick={toggleIsBookInfoOpenHandler}>
            <Background/>
            <main className={styles.main__container}>
                <Search/>
                <BooksSnippets/>
            </main>
        </div>
    );
}

export default App;
