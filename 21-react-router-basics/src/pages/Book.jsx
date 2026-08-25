import { useParams } from 'react-router-dom';
import { books } from '../booksData';

export function Book() {
  const { id } = useParams();
  const book = books.find(b => b.id === id);

  if (!book) return <p>Book not found</p>;

  return (
    <div>
      <h2>{book.title}</h2>
      <p>Book ID: {id}</p>
    </div>
  );
}