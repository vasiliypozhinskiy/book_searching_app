import React from "react";
import defaultBookImage from "../../../assets/images/default_book_cover.jpg"
import styles from "./BookSnippet.module.scss"
import {useAppDispatch, useAppSelector} from "../../../utils/hooks";
import {setOpenBookInfoIndex, setIsBookInfoOpen} from "../../../reducers/booksReducer";
import BookInfo from "./BookInfo/BookInfo";

type BookSnippetProps = {
    index: number
    title: string,
    author_name: string,
    first_publish_year: number,
    cover_edition_key: string
}

const BookSnippet = (props: BookSnippetProps) => {
    const isBookInfoOpen = useAppSelector(state => state.booksReducer.isBookInfoOpen)
    const openBookInfoIndex = useAppSelector(state => state.booksReducer.openBookInfoIndex)

    const dispatch = useAppDispatch()
    const toggleIsBookInfoOpenHandler = (e: React.MouseEvent) => {
        if (isBookInfoOpen) {
            dispatch(setIsBookInfoOpen(false))
        } else {
            dispatch(setOpenBookInfoIndex(props.index))
            dispatch(setIsBookInfoOpen(true))
        }
        e.stopPropagation()
    }

    return <div className={styles.BookSnippet} onClick={toggleIsBookInfoOpenHandler}>
        <div>{props.cover_edition_key ?
            <img className={styles.BookSnippet__image}
                 src={`http://covers.openlibrary.org/b/olid/${props.cover_edition_key}-S.jpg`}
                 alt={"book"}
            />
            :
            <img className={styles.BookSnippet__image}
                 src={defaultBookImage} alt={"book"}
            />
        }</div>
        <div className={styles.BookSnippet__info}>
            <h2>{props.title}</h2>
            {props.author_name ? "by " + props.author_name : "Sorry, we don't know author of this book"}
        </div>
        {(isBookInfoOpen && props.index === openBookInfoIndex) ? <BookInfo index={props.index}/> : null}
    </div>
}

export default BookSnippet
