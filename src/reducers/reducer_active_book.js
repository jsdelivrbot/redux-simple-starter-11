/*
  State argument is not application state, only the piece of state this reducer is responsible for.

  Reducers are called whenever any action is called by app. The switch statement includes default case to return base state. If 'action.type' is recognized, the reducer returns 'payload'.

  The reducer must return a value. Using ES6 syntax, state is set to 'null' if its initial value is 'undefined' when app first loads.

  NOTE: Reducer must not mutate state, just return a fresh object

  Application triggers action when it first launches, so state is null, which needs to be handled by BookDetail
*/

export default function (state = null, action) {
  switch (action.type) {
    case 'BOOK_SELECTED':
      return action.payload;
  }

  return state;
}
