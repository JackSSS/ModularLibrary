function Library(libraryName) {
  this.name = libraryName;
  this.shelves = [];
}

Library.prototype.addShelf = function(shelf) {
  this.shelves.push(shelf);
}

Library.prototype.removeShelf = function(shelf) {
  var i = this.shelves.indexOf(shelf)
  if (i != -1) {
    this.shelves.splice(i, 1);
  }
}

Library.prototype.toString = function() {
  var shelfString = '';
  for (var i = 0; i < this.shelves.length; i++) {
    shelfString += this.shelves[i].toString();
  }
  return this.name + ': ' + shelfString;
}

module.exports = Library;
