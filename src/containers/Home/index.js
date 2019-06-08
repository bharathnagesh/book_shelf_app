import React, { Component } from 'react';
import { getBookShelf } from '@reducers/bookShelf';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import CurrentlyReading from '@components/CurrentlyReading';

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
      return (
        <CurrentlyReading books={this.props.books} />
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