import React from 'react';
import BookList from '@components/BookList';

const CurrentlyReading = (props) => {
  return (
    <div className="width-100vw">
      <h2 className="bg-primary text-center py-3">
        Currently Reading
      </h2>
      <div className="d-flex flex-wrap justify-content-center">
        <BookList changeStatus={props.changeStatus} books={props.books} />
      </div>
    </div>
  );
};

export default CurrentlyReading;
