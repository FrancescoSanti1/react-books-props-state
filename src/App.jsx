import './App.css';
import { useEffect, useState } from 'react';
import BookCreate from './components/BookCreate';
import BookList from './components/BookList';
import axios from 'axios';

export default function App() {
  const [books, setBooks] = useState([]);

  const fetchBooks = async () => {
    const response = await axios.get("http://localhost:3001/books");
    setBooks(response.data);
  }

  useEffect(() => {
    fetchBooks();
  }, []);

  const createBook = async (title) => {
    const response = await axios.post("http://localhost:3001/books", { title });
    setBooks([...books, response.data]);
  }

  const deleteBook = (id) => {
    setBooks(books.filter((book) => book.id !== id));
  }

  const editBook = (id, newTitle) => {
    setBooks(books.map((book) => {
      if (book.id === id) {
        return { ...book, title: newTitle }
      }
      return book;
    }));
  }

  return (
    <div className='app'>
      <h1>Reading list</h1>
      <BookList books={books} onDelete={deleteBook} onEdit={editBook} />
      <BookCreate onCreate={createBook} />
    </div>
  );
}