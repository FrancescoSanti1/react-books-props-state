import BookShow from "./BookShow";
import useBooksContext from "../hooks/useBooksContext";

export default function BookList() {

    const { books } = useBooksContext();

    return <div className="book-list">
        {books.map((book) => {
            return <BookShow key={book.id} book={book} />
        })}
    </div>
}