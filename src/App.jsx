import './App.css';
import { useState } from 'react';
import BookCreate from './components/BookCreate';

export default function App() {
  const [books, setBooks] = useState([]);

  const createBook = (title) => {
    setBooks([...books, { id: books.length, title }])
  }

  return (
    <div>
      <p>{books.length}</p>
      <BookCreate onCreate={createBook} />
    </div>
  );
}