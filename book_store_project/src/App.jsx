import { useState, useEffect } from 'react';
import Book from './Book.jsx';
import Modal from './modal.jsx';
import './index.css';

export default function App() {
  const [books, setBooks] = useState([]);
  const [selectedIndex, setSelectedIndex] = useState(null);
  const [isEditing, setIsEditing] = useState(false);
  const [filterLanguage, setFilterLanguage] = useState('');

  useEffect(() => {
    const stored = localStorage.getItem('books');
    if (stored) setBooks(JSON.parse(stored));
  }, []);

  useEffect(() => {
    localStorage.setItem('books', JSON.stringify(books));
  }, [books]);

  const handleAddBook = (book) => {
    if (isEditing && selectedIndex !== null) {
      const updated = [...books];
      updated[selectedIndex] = { ...book, selected: true };
      setBooks(updated);
      setIsEditing(false);
    } else {
      const newBook = { ...book, selected: false };
      setBooks((prev) => [...prev.map(b => ({ ...b, selected: false })), newBook]);
    }
    setSelectedIndex(null);
  };

  const handleSelect = (index) => {
    setBooks((prev) =>
      prev.map((book, i) => ({
        ...book,
        selected: i === index,
      }))
    );
    setSelectedIndex(index);
  };

  const handleDelete = () => {
    if (selectedIndex !== null) {
      setBooks((prev) => prev.filter((_, i) => i !== selectedIndex));
      setSelectedIndex(null);
    }
  };

  const handleUpdate = () => {
    if (selectedIndex !== null) {
      setIsEditing(true);
    }
  };

  // Get unique languages from current books
  const availableLanguages = [...new Set(books.map(book => book.language))];

  const filteredBooks = filterLanguage
    ? books.filter((book) => book.language === filterLanguage)
    : books;

  return (
    <div className="book_container">
      <Modal
        buttonLabel={isEditing ? 'Edit Book' : 'Add Book'}
        buttonClassName="add_book"
        onAdd={handleAddBook}
        initialData={isEditing ? books[selectedIndex] : null}
      />

      <div style={{ marginTop: '1rem' }}>
        <button onClick={handleUpdate} disabled={selectedIndex === null}>
          Update
        </button>
        <button onClick={handleDelete} disabled={selectedIndex === null}>
          Delete
        </button>
      </div>

      <div style={{ marginTop: '1rem' }}>
        <label htmlFor="languageFilter">Filter by Language:</label>
        <select
          id="languageFilter"
          value={filterLanguage}
          onChange={(e) => setFilterLanguage(e.target.value)}
        >
          <option value="">All</option>
          {availableLanguages.map((lang, i) => (
            <option key={i} value={lang}>
              {lang}
            </option>
          ))}
        </select>
      </div>

      <div className="book_grid">
        {filteredBooks.map((book, index) => (
          <Book
            key={index}
            image={book.url}
            title={book.title}
            author={book.author}
            selected={book.selected}
            onClick={() => handleSelect(index)}
          />
        ))}
      </div>
    </div>
  );
}