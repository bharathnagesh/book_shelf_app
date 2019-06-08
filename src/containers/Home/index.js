import React, { Component, Fragment } from 'react';
import { getBookLibrary, changeStatus } from '@reducers/bookLibrary';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import CurrentlyReading from '@components/CurrentlyReading';
import WantToRead from '@components/WantToRead';
import Read from '@components/Read';
import { Link } from 'react-router-dom';

class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  componentDidMount() {
    this.props.getBookLibrary();
  }

  changeStatus = (e, id) => {
    const k = {
      status: +e.target.value
    }
    this.props.changeStatus(JSON.stringify(k), id);
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
        } else if(this.props.books[i].status === 2){
          wantToRead.push(this.props.books[i]);
        }
      }
      return (
        <Fragment>
          <CurrentlyReading changeStatus={this.changeStatus} books={currentlyReading} />
          <WantToRead changeStatus={this.changeStatus} books={wantToRead} />
          <Read changeStatus={this.changeStatus} books={read} />
          <Link to="/search" className="d-flex justify-content-center font-weight-bold btn-secondary floatingBtnDiv">
            +
          </Link>
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
  changeStatus
}, dispatch);

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Home);