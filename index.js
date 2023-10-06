const express = require('express');
const bodyParser = require('body-parser');

const app = express();
app.use(bodyParser.json());

// Define routes and implement CRUD operations

const port = 3000;
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
let books = [
  { id: 1, title: 'Book 1', author: 'Author 1', publishedDate: '2022-01-01' },
  { id: 2, title: 'Book 2', author: 'Author 2', publishedDate: '2022-02-02' }
];
// GET /books - Retrieve all books
app.get('/books', (req, res) => {
  res.json(books);
});

// POST /books - Create a new book
app.post('/books', (req, res) => {
  const { id, title, author, publishedDate } = req.body;
  const newBook = { id, title, author, publishedDate };
  books.push(newBook);
  res.status(201).json(newBook);
});

// GET /books/:id - Retrieve a specific book by ID
app.get('/books/:id', (req, res) => {
  const bookId = parseInt(req.params.id);
  const book = books.find((book) => book.id === bookId);
  if (book) {
    res.json(book);
  } else {
    res.status(404).json({ message: 'Book not found' });
  }
});

// PUT /books/:id - Update a specific book by ID
app.put('/books/:id', (req, res) => {
  const bookId = parseInt(req.params.id);
  const { title, author, publishedDate } = req.body;
  const bookIndex = books.findIndex((book) => book.id === bookId);
  if (bookIndex !== -1) {
    books[bookIndex] = {
      id: bookId,
      title: title || books[bookIndex].title,
      author: author || books[bookIndex].author,
      publishedDate: publishedDate || books[bookIndex].publishedDate
    };
    res.json(books[bookIndex]);
  } else {
    res.status(404).json({ message: 'Book not found' });
  }
});

// GET /books - Retrieve all books
app.get('/books', (req, res) => {
  res.json(books);
});

// POST /books - Create a new book
app.post('/books', (req, res) => {
  const { id, title, author, publishedDate } = req.body;
  const newBook = { id, title, author, publishedDate };
  books.push(newBook);
  res.status(201).json(newBook);
});

// GET /books/:id - Retrieve a specific book by ID
app.get('/books/:id', (req, res) => {
  const bookId = parseInt(req.params.id);
  const book = books.find((book) => book.id === bookId);
  if (book) {
    res.json(book);
  } else {
    res.status(404).json({ message: 'Book not found' });
  }
});

// PUT /books/:id - Update a specific book by ID
app.put('/books/:id', (req, res) => {
  const bookId = parseInt(req.params.id);
  const { title, author, publishedDate } = req.body;
  const bookIndex = books.findIndex((book) => book.id === bookId);
  if (bookIndex !== -1) {
    books[bookIndex] = {
      id: bookId,
      title: title || books[bookIndex].title,
      author: author || books[bookIndex].author,
      publishedDate: publishedDate || books[bookIndex].publishedDate
    };
    res.json(books[bookIndex]);
  } else {
    res.status(404).json({ message: 'Book not found' });
  }
});

// DELETE /books/:id - Delete a specific book by ID
app.delete('/books/:id', (req, res) => {
  const bookId = parseInt(req.params.id);
  const bookIndex = books.findIndex((book) => book.id === bookId);
  if (bookIndex !== -1) {
    const deletedBook = books.splice(bookIndex, 1);
    res.json(deletedBook[0]);
  } else {
    res.status(404).json({ message: 'Book not found' });
  }
});