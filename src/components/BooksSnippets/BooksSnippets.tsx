import React, {useRef} from "react";
import BookSnippet from "./BookSnippet/BookSnippet";
import {useAppDispatch, useAppSelector} from "../../utils/hooks";
import {addBooksThunk, book, setCurrentPage} from "../../reducers/booksReducer";
import styles from "./BooksSnippets.module.scss"
import Preloader from "../common/Preloader/Preloader";

const BooksSnippets = () => {
    const books = useAppSelector(state => state.booksReducer.books)
    const totalBooksCount = useAppSelector(state => state.booksReducer.totalBooksCount)
    const query = useAppSelector(state => state.booksReducer.query)
    const currentPage = useAppSelector(state => state.booksReducer.currentPage)
    const booksPerLoad = useAppSelector(state => state.booksReducer.booksPerLoad)
    const isBooksLoading = useAppSelector(state => state.booksReducer.isBooksLoading)
    const isBookInfoOpen = useAppSelector(state => state.booksReducer.isBookInfoOpen)

    const dispatch = useAppDispatch()

    const scrollRef = useRef<HTMLDivElement>(null)

    const addBooksOnScroll = () => {
        if (isBookInfoOpen) {
            return false
        }

        if ((!isBooksLoading) && (query) &&
            (scrollRef.current!.scrollHeight - scrollRef.current!.clientHeight - 1 <= scrollRef.current!.scrollTop)) {
            dispatch(addBooksThunk(query, currentPage + 1, booksPerLoad))
            dispatch(setCurrentPage(currentPage + 1))
        }
    }


    return <div>
        {query && (totalBooksCount ? `total results: ${totalBooksCount}` : "No results")}
        <div className={styles.BooksSnippets__container} onScroll={addBooksOnScroll} ref={scrollRef}>
            {books.map((book: book, index: number) => (
            <BookSnippet key={index}
                         index={index}
                         title={book.title}
                         author_name={book.author_name}
                         first_publish_year={book.first_publish_year}
                         cover_edition_key={book.cover_edition_key}
            />))}
            {isBooksLoading ? <Preloader/> : ""}
        </div>
    </div>
}

export default BooksSnippets
