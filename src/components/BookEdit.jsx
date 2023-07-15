import { useContext, useState } from "react"
import BooksContext from "../contexts/books";

export default function BookEdit({ book, onSubmit }) {

    const [title, setTitle] = useState(book.title);
    const { editBook } = useContext(BooksContext);

    const handleChange = (event) => {
        setTitle(event.target.value);
    }

    const handleSubmit = (event) => {
        event.preventDefault();

        onSubmit();
        editBook(book.id, title);
    }

    return <form onSubmit={handleSubmit} className="book-edit">
        <label>Title</label>
        <input type="text" className="input" onChange={handleChange} value={title} />
        <button className="button">Save</button>
    </form>
}