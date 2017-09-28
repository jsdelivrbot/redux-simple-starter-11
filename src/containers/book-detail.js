import React, { Component } from 'react';
import { connect } from 'react-redux';

/*
  BookDetail needs to be bound to activeBook in state,
  so it needs to be a container
*/

class BookDetail extends Component {
  render() {
    return (
      <div>Book Detail</div>
    );
  }
}

/*
  mapStateToProps(state)
  - bind to activeBook from state and show book details in container
*/

function mapStateToProps(state) {
  return {
    book: state.activeBook
  };
}

export default connect(mapStateToProps)(BookDetail);
