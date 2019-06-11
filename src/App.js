import React from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import './App.css';

const App = (props) => {
  return (
    <div className="width-100pc">
      {props.children}
    </div>
  );
}

export default withRouter(connect(null)(App));
