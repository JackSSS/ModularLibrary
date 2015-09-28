var Book = function(author, bookTitle, genre) {
  this.author = author;
  this.bookTitle = bookTitle;
  this.genre = genre;
}

Book.prototype.toString = function() {
  return this.bookTitle;
}

module.exports = Book;
