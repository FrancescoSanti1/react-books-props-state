import axios from "axios";
import { createContext, useState, useCallback } from "react";

const BooksContext = createContext();

export function Provider({ children }) {
    const [books, setBooks] = useState([]);

    const fetchBooks = useCallback(async () => {
        const response = await axios.get("http://localhost:3001/books");
        setBooks(response.data);
    }, []);

    const createBook = async (title) => {
        const response = await axios.post("http://localhost:3001/books", { title });
        setBooks([...books, response.data]);
    }

    const deleteBook = async (id) => {
        await axios.delete(`http://localhost:3001/books/${id}`);

        setBooks(books.filter((book) => book.id !== id));
    }

    const editBook = async (id, newTitle) => {
        const response = await axios.put(`http://localhost:3001/books/${id}`, { title: newTitle });

        setBooks(books.map((book) => {
            if (book.id === id) {
                return { ...book, ...response.data }
            }
            return book;
        }));
    }

    return <BooksContext.Provider value={{
        books,
        fetchBooks,
        createBook,
        editBook,
        deleteBook
    }}>
        {children}
    </BooksContext.Provider>
}

export default BooksContext;