import React, { Component, Fragment } from 'react';
import { getBookLibrary, searchBooks, changeStatus } from '@reducers/bookLibrary';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import BookList from '@components/BookList';
import { Link } from 'react-router-dom';

class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      searchQuery: ''
    };
  }

  componentDidMount() {
    this.props.getBookLibrary();
  }

  changeStatus = (e, book) => {
    const id = book.id;
    const k = {
      status: e.target.value
    }
    this.props.changeStatus(JSON.stringify(k), id).then(() => {
      this.props.getBookLibrary();
    });
  }

  handleInputChange = (e) => {
    this.setState({
      searchQuery: e.target.value
    }, () => {
      this.props.searchBooks(this.state.searchQuery);
    });
  }

  render() {
    if(!!this.props.books) {
      return (
        <Fragment>
          <div className="header d-flex align-items-center px-5">
            <Link to="/" className="backLink mr-5">
              Back
            </Link>
            <input type="text" className="form-control" value={this.state.searchQuery} onChange={this.handleInputChange} />
          </div>
          {this.props.books.length !== 0 && (
            <div className="mt-10vh d-flex flex-wrap">
              <BookList changeStatus={this.changeStatus} books={this.props.books} />
            </div>
          )}
          {this.props.books.length === 0 && (
            <div className="mt-10vh p-5 d-flex text-center">
              No Results Found
            </div>
          )}
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
  bookLibrary
}) => ({
  books: bookLibrary.bookLibrary,
  loaded: bookLibrary.loaded,
  loading: bookLibrary.loading
});

const mapDispatchToProps = dispatch => bindActionCreators({
  getBookLibrary,
  searchBooks,
  changeStatus
}, dispatch);

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Home);