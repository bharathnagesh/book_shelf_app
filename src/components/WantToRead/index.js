import React from 'react';
import BookList from '@components/BookList';

const WantToRead = (props) => {
  return (
    <div className="width-100vw">
      <h2 className="bg-primary text-center">
        Want To Read
      </h2>
      <BookList books={props.books} />
    </div>
  );
};

export default WantToRead;
