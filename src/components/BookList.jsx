import BookShow from "./BookShow"

export default function BookList({ books, onDelete, onEdit }) {
    return <div className="book-list">
        {books.map((book) => {
            return <BookShow onEdit={onEdit} onDelete={onDelete} key={book.id} book={book} />
        })}
    </div>
}