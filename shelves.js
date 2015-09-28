var Shelf = function(shelfName) {
  this.name = shelfName;
  this.books = [];
}

Shelf.prototype.addBook = function(bookTitle) {
  this.books.push(bookTitle);
}

Shelf.prototype.removeBook = function(bookTitle) {
  var i = this.books.indexOf(bookTitle);
  if (i != -1) {
    this.books.splice(i, 1);
  }
}

module.exports = Shelf;
