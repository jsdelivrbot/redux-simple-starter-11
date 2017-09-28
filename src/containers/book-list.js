import React, { Component } from 'react';
// import connect function from react-redux as bridge between React and Redux
import { connect } from 'react-redux';
// import action creator and function to bind action creators to container
import { selectBook } from '../actions/index';
import { bindActionCreators } from 'redux';

/*
  BookList()

  The BookList component becomes a Redux container using the react-redux connect() function as part of the export statement below. This gives the container access to the Redux application state.

  - The onClick handler for each book <li> calls the selectBook action creator
    and passes it the current book object
*/

class BookList extends Component {
  // map function generates an array of <li> elements for the BookList <ul>
  renderList() {
    return this.props.books.map((book) => {
      return (
        <li
          className="list-group-item"
          key={book.title}
          onClick={() => this.props.selectBook(book)}>
          {book.title}
        </li>
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
  mapStateToProps(state)

  Take state object (array of books and active book) and return values as
  props inside of BookList
*/

function mapStateToProps(state) {
  return {
    books: state.books
  };
}

/*
  mapDispatchToProps(dispatch): binds action creator to the container

  - Whenever selectBook is called, result should be passed to all reducers.
  - The dispatch function takes action and sends them to all reducers.
  - Anything returned from this function will end up as props on the
    BookList container
*/

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ selectBook: selectBook }, dispatch);
}

/*
  Export with react-redux connect() function to promote BookList from a component to a container.

  - The object returned by mapStateToProps() becomes props for BookList.
  - When state updates, the BookList component will update props are re-render.
  - The object returned by mapDispatchToProps will update state and be sent to
    all reducers when an action is triggered
*/

export default connect(mapStateToProps, mapDispatchToProps)(BookList);
