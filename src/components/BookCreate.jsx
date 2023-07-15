import { useContext, useState } from "react"
import BooksContext from "../contexts/books";

export default function BookCreate() {
    const [title, setTitle] = useState('');
    const { createBook } = useContext(BooksContext);

    const handleChange = (event) => {
        setTitle(event.target.value);
    };

    const handleSubmit = (event) => {
        event.preventDefault();

        createBook(title);

        setTitle('');
    }

    return <div className="book-create">
        <form onSubmit={handleSubmit}>
            <label>Title</label>
            <input className="input" type="text" value={title} onChange={handleChange} />
            <button className="button">Create</button>
        </form>
    </div>
}