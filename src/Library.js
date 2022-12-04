function createLibrary(library) {
  return {
    name: library,
    shelves: {
      fantasy: [], fiction: [], nonFiction: []}
  }
}

function addBook(library, book) {
  library.shelves[book.genre].push(book)
}

function checkoutBook(library, book, genre) {
   unshelfBook(book, shelf) {
  function unshelfBook(book, shelf) {
  for (var i = 0; i < shelf.length; i++) {
    if (shelf[i].title === book) {
      return shelf.splice(i, 1);
    }
  } 
  }
  `You have now checked out ${book}`;
}

  module.exports = {
  createLibrary,
  addBook,
  checkoutBook
};