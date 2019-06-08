import React from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import './App.css';

const App = (props) => {
  return (
    <div className="d-flex align-items-center justify-content-center">
      {props.children}
    </div>
  );
}

export default withRouter(connect(null)(App));
