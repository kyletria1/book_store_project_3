import Book from './Book.jsx';
import Modal from './modal.jsx';
import './index.css';
import books from './data/books.json';

const books_component = [
  {
    image: "https://itbook.store/img/books/9781484287507.png",
    title: "Programming for Absolute Beginners",
    price: "$20.00",
    url: "https://itbook.store/books/9781484287507"
  },
  {
    image: "https://itbook.store/img/books/9781484292464.png",
    title: "Build Your Own Test Framework",
    price: "$17.00",
    url: "https://itbook.store/books/9781484292464"
  }
];

const allBooks = [...books_component, ...books];

export default function App() {
  return (
    <div className="book_container">
      <Modal buttonLabel="Add Book" buttonClassName="add_book" />
      {allBooks.map((book, index) => (
        <Book
          key={index}
          image={book.image}
          title={book.title}
          price={book.price}
          url={book.url}
        />
      ))}
    </div>
  );
}