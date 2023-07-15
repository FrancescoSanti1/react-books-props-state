import { useContext } from "react";
import BookShow from "./BookShow";
import BooksContext from "../contexts/books";

export default function BookList() {

    const { books } = useContext(BooksContext);

    return <div className="book-list">
        {books.map((book) => {
            return <BookShow key={book.id} book={book} />
        })}
    </div>
}