const express = require('express');
const app = express();
const port = 3000;


app.use(express.json());

let books = [];

app.post('/books', (req, res) => {
  console.log("REQ BODY:", req.body); // Add this line for debugging

  const { title, author } = req.body || {};

  if (!title || !author) {
    return res.status(400).json({ error: "Title and author are required" });
  }

  const newBook = {
    id: books.length + 1,
    title,
    author
  };

  books.push(newBook);
  res.status(201).json(newBook);
});

app.put('/books/:id', (req, res) => {
  const { id } = req.params;
  const { title, author } = req.body || {};
  const book = books.find(b => b.id === parseInt(id));

  if (!book) {
    return res.status(404).json({ error: "Book not found" });
  }

  if (title) book.title = title;
  if (author) book.author = author;

  res.json(book);
});

// ✅ DELETE book by ID
app.delete('/books/:id', (req, res) => {
  const { id } = req.params;
  const index = books.findIndex(b => b.id === parseInt(id));

  if (index === -1) {
    return res.status(404).json({ error: "Book not found" });
  }

  const deletedBook = books.splice(index, 1);
  res.json(deletedBook[0]);
});

app.listen(port, () => {
  console.log(`✅ Server running at http://localhost:${port}`);
});