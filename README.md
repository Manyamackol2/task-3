# task-3
Create a REST API to Manage a List of Books Using Node.js and Express for managing a list of books. It supports basic CRUD operations.

Technologies Used:
- Node.js
- Express.js
- Postman (for testing API)

Features added:
- Get all books (GET `/books`)
- Add a new book (POST `/books`)
- Update book by ID (PUT `/books/:id`)
- Delete book by ID (DELETE `/books/:id`)

Files Included:
- `index.js`: Main server file with all API routes
- `package.json`: Project metadata and dependencies
- `package-lock.json`: Locked versions of installed packages
- `README.md`: Project description and usage instructions

How to Run:
1. Clone the repository:
   git clone https://github.com/Manyamackol2/task-3.git
   cd task-3/book-api

2. Install dependencies:
   npm install

3. Start the server:
   node index.js

The server will run at: http://localhost:3000

API Endpoints:

➤ GET /books
Returns all books.

➤ POST /books
Adds a new book.
Sample JSON body:
{
  "title": "Book Title",
  "author": "Book Author"
}

➤ PUT /books/:id
Updates an existing book by ID.
Sample JSON body:
{
  "title": "Updated Title",
  "author": "Updated Author"
}

➤ DELETE /books/:id
Deletes a book by ID.
Notes:
- Data is stored in-memory (not connected to a database).
- Tested using Postman.
