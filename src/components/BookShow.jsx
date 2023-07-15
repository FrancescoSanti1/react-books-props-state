import { useState } from "react"
import BookEdit from "./BookEdit";
import useBooksContext from "../hooks/useBooksContext";

export default function BookShow({ book }) {

    const [edit, setEdit] = useState(false);
    const { deleteBook } = useBooksContext();

    const handleEdit = () => { setEdit(!edit) }
    const handleDelete = () => { deleteBook(book.id) }
    const handleSubmit = () => { setEdit(false); }

    return <div className="book-show">
        <img src={`https://picsum.photos/seed/${book.id}/300/200`} alt="book cover" />
        <div>{edit ? <BookEdit onSubmit={handleSubmit} book={book} /> : <h3>{book.title}</h3>}</div>
        <div className="actions">
            <button className="edit" onClick={handleEdit}>Edit</button>
            <button className="delete" onClick={handleDelete}>Delete</button>
        </div>
    </div>
}