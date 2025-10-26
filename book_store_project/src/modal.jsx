import { useRef } from "react";

function Modal({ buttonLabel, buttonClassName }) {
  const modalRef = useRef();

  function handleSubmit(e) {
    e.preventDefault();
    modalRef.current.close();
  }

  return (
    <>
      <button className={buttonClassName} onClick={() => modalRef.current.showModal()}>
        {buttonLabel}
      </button>
      <dialog ref={modalRef} className="formContainer">
        <h2>Add a new book</h2>
        <form onSubmit={handleSubmit}>
          <div className="formControl">
            <label htmlFor="bookTitle">Book Title:</label>
            <input type="text" name="bookTitle" placeholder="Book Title" />
          </div>
          <div className="formControl">
            <label htmlFor="bookAuthor">Book Author:</label>
            <input type="text" name="bookAuthor" placeholder="Book Author" />
          </div>
          <div className="formControl">
            <label htmlFor="bookPublisher">Book Publisher:</label>
            <input type="text" name="bookPublisher" placeholder="Book Publisher" />
          </div>
          <div className="formControl">
            <label htmlFor="publicationYear">Publication Year:</label>
            <input type="number" name="publicationYear" placeholder="Publication Year"/>
          </div>
          <div className="formControl">
            <label htmlFor="bookLanguage">Book Language:</label>
            <input type="text" name="bookLanguage" placeholder="Book Language" />
          </div>
          <div className="formControl">
            <label htmlFor="bookPages">Pages:</label>
            <input type="number" name="bookPages" placeholder="Pages"/>
          </div>
          <button type="submit" className="buttonPrimary">Save</button>
        </form>
      </dialog>
    </>
  );
}

export default Modal;