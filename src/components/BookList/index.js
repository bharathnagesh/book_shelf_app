import React from 'react';

const BookList = ({books}) => {
  return books.map((book) => {
    return (
      <div className="text-center" key={book.id}>
        {book.title}
      </div>
    );
  });
}

export default BookList;