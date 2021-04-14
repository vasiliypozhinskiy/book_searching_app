import React from "react";
import defaultBookImage from "../../../assets/images/default_book_cover.jpg"
import styles from "./BookSnippet.module.scss"

type BookSnippetProps = {
    title: string,
    author_name: string,
    first_publish_year: number,
    cover_edition_key: string
}

const BookSnippet = (props: BookSnippetProps) => {
    return <div className={styles.BookSnippet}>
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
            {props.author_name ? props.author_name : "Sorry, we don't know author of this book"}
        </div>
    </div>
}

export default BookSnippet
