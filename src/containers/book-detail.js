import React, { Component } from 'react';
import { connect } from 'react-redux';

/*
  BookDetail needs to be bound to activeBook in state,
  so it needs to be a container

  - Application triggers action when it first launches, so state is null, which needs to be handled in render method with `if (!this.props.book)` returning a default message

*/

class BookDetail extends Component {
  render() {
    if (!this.props.book) {
      return <div>Select a book to see it's details.</div>
    }

    return (
      <div>
        <h3>Details for:</h3>
        <div>Title: {this.props.book.title}</div>
        <div>Pages: {this.props.book.pages}</div>
      </div>
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

/*
  Export with react-redux connect() function to make BookDetail a container.
*/

export default connect(mapStateToProps)(BookDetail);
