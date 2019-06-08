import React, { Component, Fragment } from 'react';
import { getBookShelf } from '@reducers/bookShelf';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import CurrentlyReading from '@components/CurrentlyReading';
import WantToRead from '@components/WantToRead';
import Read from '@components/Read';

class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  componentDidMount() {
    this.props.getBookShelf();
  }

  render() {
    if(!!this.props.books) {
      const currentlyReading = [];
      const wantToRead = [];
      const read = [];
      for(let i = 0; i < this.props.books.length; i++){
        if(this.props.books[i].status === 0){
          read.push(this.props.books[i]);
        } else if(this.props.books[i].status === 1) {
          currentlyReading.push(this.props.books[i]);
        } else {
          wantToRead.push(this.props.books[i]);
        }
      }
      return (
        <Fragment>
          <CurrentlyReading books={currentlyReading} />
          <WantToRead books={wantToRead} />
          <Read books={read} />
        </Fragment>
      );
    }
    return(
      <div>
        Loading...
      </div>
    );
  }
}

const mapStateToProps = ({
  bookShelf
}) => ({
  books: bookShelf.bookShelf,
  loaded: bookShelf.loaded,
  loading: bookShelf.loading
});

const mapDispatchToProps = dispatch => bindActionCreators({
  getBookShelf,
}, dispatch);

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Home);