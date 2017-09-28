// include all action creators

// selectBook needs to be called when click occurs
// and wired in to reducers

export function selectBook(book) {
  // selectBook is an action creator. It needs to return an object with a type property and sometimes includes a 'payload'
  // using string for type, should ultimately be a constant stored in a separate file
  return {
    type: 'BOOK_SELECTED',
    payload: book
  };
}
