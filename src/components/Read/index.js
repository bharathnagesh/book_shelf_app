import React from 'react';
import BookList from '@components/BookList';

const Read = (props) => {
  return (
    <div className="width-100vw">
      <h2 className="bg-primary text-center py-3">
        Read
      </h2>
      <div className="d-flex flex-wrap justify-content-center">
        <BookList books={props.books} />
      </div>
    </div>
  );
};

export default Read;
