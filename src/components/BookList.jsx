import { useContext } from "react";
import BookShow from "./BookShow";
import BooksContext from "../contexts/books";

export default function BookList({ books, onDelete, onEdit }) {
    const { count, incrementCount } = useContext(BooksContext);

    return <div className="book-list">
        {count}
        <button onClick={incrementCount}>Clicca</button>
        {books.map((book) => {
            return <BookShow onEdit={onEdit} onDelete={onDelete} key={book.id} book={book} />
        })}
    </div>
}