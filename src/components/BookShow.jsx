import { useState } from "react"
import BookEdit from "./BookEdit";

export default function BookShow({ book, onDelete, onEdit }) {

    const [edit, setEdit] = useState(false);

    const handleEdit = () => { setEdit(!edit) }
    const handleDelete = () => { onDelete(book.id) }
    const handleSubmit = (id, title) => {
        onEdit(id, title);
        setEdit(false);
    }

    return <div className="book-show">
        <div>{edit ? <BookEdit onSubmit={handleSubmit} book={book} /> : <h3>{book.title}</h3>}</div>
        <div className="actions">
            <button className="edit" onClick={handleEdit}>Edit</button>
            <button className="delete" onClick={handleDelete}>Delete</button>
        </div>
    </div>
}