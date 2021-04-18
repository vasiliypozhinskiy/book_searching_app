import React from "react";
import styles from "./BookInfo.module.scss";
import defaultBookImage from "../../../../assets/images/default_book_cover.jpg";
import {useAppSelector} from "../../../../utils/hooks";

type BookInfoProps = {
    index: number
}

const BookInfo = (props: BookInfoProps) => {
    const book = useAppSelector(state => state.booksReducer.books[props.index])

    return <div className={styles.BookInfo__container} onClick={e => e.stopPropagation()}>
        <div>{book.cover_edition_key ?
            <img className={styles.BookInfo__image}
                 src={`http://covers.openlibrary.org/b/olid/${book.cover_edition_key}-L.jpg`}
                 alt={"book"}
            />
            :
            <img className={styles.BookInfo__image}
                 src={defaultBookImage} alt={"book"}
            />
        }</div>
        <div className={styles.BookInfo__info}>
            <h2>{book.title}</h2>
            {book.author_name ? "by " + book.author_name : "Sorry, we don't know author of this book"}
            <div>{book.first_sentence ? book.first_sentence + ".." : null}</div>
            <div className={styles.BookInfo__ISBN}>{book.ISBN ? "ISBN №: " + book.ISBN[0] : null}</div>
            <div className={styles.BookInfo__date}>{book.first_publish_year}</div>
        </div>
    </div>
}

export default BookInfo
