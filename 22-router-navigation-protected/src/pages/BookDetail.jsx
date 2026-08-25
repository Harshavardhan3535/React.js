import { useParams } from 'react-router-dom';

export function BookDetail() {
  const { id } = useParams();
  return <h2>Viewing Book ID: {id}</h2>;
}