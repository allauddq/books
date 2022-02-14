var express = require('express');
var router = express.Router();

const books = [
  { id: 1, name: 'To Kill a Mockingbird', author: 'Harper Lee', yearPublished: 2014, isbn: '9780062368683' },
  { id: 2, name: 'Rich Dad, Poor Dad', author: 'Robert T. Kiyosaki', yearPublished: 2016, isbn: '9781365076350' },
];

/* (Create) POST a new book */
router.post('/', function (req, res, next) {
  const newBook = {
    id: books.length + 1,
    name: req.body.name,
    author: req.body.author,
    yearPublished: req.body.yearPublished,
    isbn: req.body.isbn
  }
  books.push(newBook)
  res.status(201).json('Success! Book with new id =' + newBook.id + ' created.')
});

/* (Read All) GET ALL books listing. */
router.get('/', function (req, res, next) {
  res.json(book);
});

/* (Read) GET book by ID */
router.get('/:id', function (req, res, next) {
  const id = Number(req.params.id)
  const book = books.find(book => book.id === id)

  if (!book) {
    return res.status(404).send('Error 404: Book with id = ' + id + ' does not exist.')
  }
  res.json(book)
})

/* (Update) PUT an existing book */
router.put('/:id', function (req, res, next) {
  const id = Number(req.params.bookID)
  const index = books.findIndex(book => book.id === id)
  if (index === -1) {
    return res.status(404).send('Error 404: Book with id = ' + id + ' does not exist.')
  }
  const updatedbook = {
    id: books[index].id,
    name: req.body.name,
    author: req.body.author,
    yearPublished: req.body.yearPublished,
    isbn: req.body.isbn
  }
  books[index] = updatedbook
  res.status(200).json('Success! Book with id = ' + id + ' updated.')
})

/* (Delete) Delete a book */
router.delete('/:id', function (req, res, next) {
  const id = Number(req.params.id)
  const index = books.findIndex(book => book.id === id)
  if (index === -1) {
    return res.status(404).send('Error 404: Book with id = ' + id + '  does not exist.')
  }
  books.splice(index, 1)
  res.status(200).json('Success! Book deleted.')
})
module.exports = router;
