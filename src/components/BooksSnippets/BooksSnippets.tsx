import React from "react";
import BookSnippet from "./BookSnippet/BookSnippet";
import {useAppSelector} from "../../utils/hooks";
import {book} from "../../reducers/booksReducer";

const BooksSnippets = () => {
    const books = useAppSelector(state => state.booksReducer.books)

    return <div>
        {books.map((book: book) => (
            <BookSnippet title={book.title}
                         author_name={book.author_name}
                         first_publish_year={book.first_publish_year}
                         cover_edition_key={book.cover_edition_key}
            />))}
    </div>
}

export default BooksSnippets
