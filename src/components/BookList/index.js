import React from 'react';
import img from '../../bookImage.png';

const BookList = ({ books, changeStatus }) => {
  return books.map((book) => {
    return (
      <div className="d-flex m-4 flex-column justify-content-center align-items-center" key={book.id}>
        <img alt={book.title} src={img} height={100} width={75} />
        <div>
          {book.title}
        </div>
        <div className="text-muted">
          {book.author}
        </div>
        <select value={book.status} onChange={(e) => { changeStatus(e, book) }} className="selectToOrder">
          <optgroup label="Move to ...">
            <option value="0">Read</option>
            <option value="1">Currently Reading</option>
            <option value="2">Want to Read</option>
            <option value="3">None</option>
          </optgroup>
        </select>
      </div>
    );
  });
}

export default BookList;