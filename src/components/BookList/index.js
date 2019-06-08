import React from 'react';
import img from '../../bookImage.png';

const BookList = ({books}) => {
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
      </div>
    );
  });
}

export default BookList;