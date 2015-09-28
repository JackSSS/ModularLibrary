var Library = require('./library');
var Shelf = require('./shelves');
var Book = require('./books');

var seattleLibrary = new Library('Seattle Library');

var fiction = new Shelf('Fiction');
var sciFi = new Shelf('Sci-Fi');

seattleLibrary.addShelf(fiction);
seattleLibrary.addShelf(sciFi);

var fictBook1 = new Book('Chandler Jones', 'Salt', 'Fiction');
var fictBook2 = new Book('Felicia Tate', 'Gone Fishing', 'Fiction');
var fictBook3 = new Book('The Duke', 'Hail the Monarch', 'Fiction');
var sciBook1 = new Book('Einstein', 'Relativity', 'Sci-Fi');
var sciBook2 = new Book('Eagle Ranch', 'Unicorn Diet', 'Sci-Fi');
var sciBook3 = new Book('Hauss', 'Ant Planet', 'Sci-Fi');

fiction.addBook(fictBook1);
fiction.addBook(fictBook2);
fiction.addBook(fictBook3);
sciFi.addBook(sciBook1);
sciFi.addBook(sciBook2);
sciFi.addBook(sciBook3);

console.log(seattleLibrary.toString());
