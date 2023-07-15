import './App.css';
import { useState } from 'react';
import BookCreate from './components/BookCreate';
import BookList from './components/BookList';

export default function App() {
  const [books, setBooks] = useState([]);

  const createBook = (title) => {
    setBooks([...books, { id: books.length, title }])
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