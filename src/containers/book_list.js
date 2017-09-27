import React, { Component } from 'react';
// react-redux is the bridge between React and Redux
import ReactRedux from 'react-redux';


// need to create a container for react-redux
export default class BookList extends Component {
  renderList() {
    return this.props.books.map((book) => {
      return (
        <li key={book.title} className="list-group-item">{book.title}</li>
      );
    });
  }

  render() {
    return (
      <ul className="list-group col-sm-4">
        {this.renderList()}
      </ul>
    );
  }
}
