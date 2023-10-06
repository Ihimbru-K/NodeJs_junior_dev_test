const express = require('express');
const bodyParser = require('body-parser');
const bcrypt = require('bcrypt');
const { v4: uuidv4 } = require('uuid');
const { authenticateToken } = require('./authMiddleware');
const port = 3000;
require('dotenv').config();

//connecting to mongoDB
const { MongoClient, ObjectId } = require('mongodb');
const dbName = 'booksDb';
const url = 'mongodb://localhost:27017';

const app = express();
app.use(bodyParser.json());

// Array to store user information
const users = [];
// Register a new user
app.post('/register', (req, res) => {
  const { username, password } = req.body;
  const id = uuidv4();
  const hashedPassword = bcrypt.hashSync(password, 10);
  users.push({ id, username, password: hashedPassword });
  res.status(201).json({ message: 'User registered successfully' });
});

// User login
app.post('/login', (req, res) => {
  const { username, password } = req.body;
  const user = users.find((user) => user.username === username);
  if (!user || !bcrypt.compareSync(password, user.password)) {
    return res.status(401).json({ message: 'Invalid username or password' });
  }
  const token = generateToken(user);
  res.json({ token });
});





// Defining routes and implement CRUD operations on books



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




async function connectToMongoDB() {
  try {
    const client = await MongoClient.connect(url, { useUnifiedTopology: true });
    const db = client.db(dbName);

app.post('/books', (req, res) => {
      const { id, title, author, publishedDate } = req.body;
      const newBook = { _id: new ObjectId(), id, title, author, publishedDate };

      const booksCollection = db.collection('books');
      booksCollection.insertOne(newBook)
        .then(() => {
          res.status(201).json(newBook);
        })
        .catch((error) => {
          console.error('Failed to create book:', error);
          res.status(500).json({ message: 'Failed to create book' });
        });
    });

// // POST /books - Create a new book
// app.post('/books',authenticateToken, (req, res) => {
//   const { id, title, author, publishedDate } = req.body;
//   const newBook = { id, title, author, publishedDate };
//   books.push(newBook);
//   res.status(201).json(newBook);
// });

// GET /books/:id - Retrieve a specific book by ID
app.get('/books/:id',authenticateToken, (req, res) => {
  const bookId = parseInt(req.params.id);
  const book = books.find((book) => book.id === bookId);
  if (book) {
    res.json(book);
  } else {
    res.status(404).json({ message: 'Book not found' });
  }
});




// PUT /books/:id - Update a specific book by ID
app.put('/books/:id',authenticateToken, (req, res) => {
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
app.get('/books',authenticateToken, (req, res) => {
  res.json(books);
});

// POST /books - Create a new book
app.post('/books',authenticateToken, (req, res) => {
  const { id, title, author, publishedDate } = req.body;
  const newBook = { id, title, author, publishedDate };
  books.push(newBook);
  res.status(201).json(newBook);
});



// GET /books/:id - Retrieve a specific book by ID
app.get('/books/:id',authenticateToken, (req, res) => {
  const bookId = parseInt(req.params.id);
  const book = books.find((book) => book.id === bookId);
  if (book) {
    res.json(book);
  } else {
    res.status(404).json({ message: 'Book not found' });
  }
});



// PUT /books/:id - Update a specific book by ID
app.put('/books/:id',authenticateToken, (req, res) => {
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
app.delete('/books/:id',authenticateToken, (req, res) => {
  const bookId = parseInt(req.params.id);
  const bookIndex = books.findIndex((book) => book.id === bookId);
  if (bookIndex !== -1) {
    const deletedBook = books.splice(bookIndex, 1);
    res.json(deletedBook[0]);
  } else {
    res.status(404).json({ message: 'Book not found' });
  }
});

const jwt = require('jsonwebtoken');
//const bcrypt = require('bcrypt');

// Secret key for signing JWT tokens
const JWT_SECRET = process.env.JWT_SECRET;

// Function to generate a JWT token
const generateToken = (user) => {
  return jwt.sign({ id: user.id }, JWT_SECRET, { expiresIn: '1h' });
};

// Function to verify a JWT token
const verifyToken = (token) => {
  return jwt.verify(token, JWT_SECRET);
} } catch (error) {
  console.error('Failed to connect to MongoDB:', error);
}
}
//calling connect
connectToMongoDB();