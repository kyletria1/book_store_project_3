export default function Book({ image, title, author, selected, onClick }) {
  return (
    <div
      className={`book_card ${selected ? 'selected' : ''}`}
      onClick={onClick}
    >
      <img src={image} alt={title} className="book_image" />
      <h3 className="book_title">{title}</h3>
      <p className="book_author">{author}</p>
    </div>
  );
}