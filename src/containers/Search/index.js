import React, { Component, Fragment } from 'react';
import { getBookLibrary } from '@reducers/bookLibrary';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import BookList from '@components/BookList';
import { Link } from 'react-router-dom';

class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  componentDidMount() {
    this.props.getBookLibrary();
  }

  render() {
    if(!!this.props.books) {
      return (
        <Fragment>
          <div className="header d-flex align-items-center px-5">
            <Link to="/" className="backLink">
              Back
            </Link>
          </div>
          <div className="mt-10vh d-flex flex-wrap">
            <BookList books={this.props.books} />
          </div>
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
}, dispatch);

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Home);