import { useState } from 'react';

export default function Book({ image, title, price, url }) {
  const [visible, setVisible] = useState(true);
  const [selected, setSelected] = useState(false);
  if (!visible) return null;

  return (
    <div
      className={`book ${selected ? 'book_selected' : ''}`}
      onClick={() => setSelected(!selected)}>
      <span className="book_remove" onClick={(e) => {e.stopPropagation();setVisible(false);}}>x</span>
      <img src={image} alt={title} className="book_image" />
      <h3 className="book_title">{title}</h3>
      <p className="book_price">{price}</p>
      <a href={url} className="book_url" target="_blank" rel="noopener noreferrer">
        View Book
      </a>
    </div>
  );
}