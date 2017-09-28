// All action creators are included in actions/index.js

/*
  selectBook(book): is wired into reducers in BookList and called when
    a click occurs

    - An action creator needs to return an object with a 'type' property and
      sometimes includes a 'payload'
    - In this case, it is using a string for type, but it should ultimately be
      a constant stored in a separate file
*/

export function selectBook(book) {
  return {
    type: 'BOOK_SELECTED',
    payload: book
  };
}
