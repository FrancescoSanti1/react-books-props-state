import './App.css';
import { useContext, useEffect } from 'react';
import BookCreate from './components/BookCreate';
import BookList from './components/BookList';
import BooksContext from './contexts/books';

export default function App() {

  const { fetchBooks } = useContext(BooksContext);

  useEffect(() => {
    fetchBooks();
  }, []);

  return (
    <div className='app'>
      <h1>Reading list</h1>
      <BookList />
      <BookCreate />
    </div>
  );
}