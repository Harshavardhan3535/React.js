import { useState } from 'react';

export function NewBook() {
  const [title, setTitle] = useState('');

  return (
    <div>
      <h2>Create New Book</h2>
      <input value={title} onChange={(e) => setTitle(e.target.value)} placeholder="Book title" />
    </div>
  );
}