import React, { Component } from 'react';

// import connect function from react-redux as bridge between React and Redux
import { connect } from 'react-redux';


// need to create a container with access to the Redux state through react-redux
class BookList extends Component {
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

/*
  mapStateToProps()

  Take state (array of books and active book) and return it as
  props inside of BookList
*/

function mapStateToProps(state) {
  return {
    books: state.books
  }
}

/*
  Export container for BookList created with react-redux connect() function.
  The bject returned by mapStateToProps() becomes props for BookList.
  When state updates, the BookList component will update props are re-render.
*/

export default connect(mapStateToProps)(BookList);
