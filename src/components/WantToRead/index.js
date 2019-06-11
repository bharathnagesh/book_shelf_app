import React from 'react';
import BookList from '@components/BookList';

const WantToRead = (props) => {
  return (
    <div>
      <h2 className="bg-primary text-center py-3">
        Want To Read
      </h2>
      <div className="d-flex flex-wrap justify-content-center">
        { !!props.books.length && (
          <BookList changeStatus={props.changeStatus} books={props.books} />
        ) }
        { !props.books.length && (
          <div>
            No Books
          </div>
        ) }
      </div>
    </div>
  );
};

export default WantToRead;
