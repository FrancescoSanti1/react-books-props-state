import { useState } from "react"

export default function BookEdit({ book, onSubmit }) {

    const [title, setTitle] = useState(book.title);

    const handleChange = (event) => {
        setTitle(event.target.value);
    }

    const handleSubmit = (event) => {
        event.preventDefault();

        onSubmit(book.id, title);
    }

    return <form onSubmit={handleSubmit} className="book-edit">
        <label>Title</label>
        <input type="text" className="input" onChange={handleChange} value={title} />
        <button className="button">Save</button>
    </form>
}