// any file in project can call this reducer by exporting it
export default function() {
  // list of books is hard coded for now
  return[
    { title: 'JavaScript: The Good Parts', pages: 101},
    { title: 'Harry Potter', pages: 39},
    { title: 'Dark Tower', pages: 85},
    { title: 'Eloquent Ruby', pages: 12}
  ]
}
