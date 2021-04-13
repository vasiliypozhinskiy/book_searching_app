import React from "react";

type BookSnippetProps = {
    title: string,
    author_name: string,
    first_publish_year: number,
    cover_edition_key: string
}

const BookSnippet = (props: BookSnippetProps) => {
    return <div>
        <img src={`http://covers.openlibrary.org/b/olid/${props.cover_edition_key}-S.jpg`} alt={"img"}/>
        {props.title + " " + props.author_name + " " + props.first_publish_year}
    </div>
}

export default BookSnippet
