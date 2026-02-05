const express = require('express');
const { postABook, getAllBooks, getSingleBook, UpdateBook, deleteABook } = require('./book.controller');
const verifyAdminToken = require('../middleware/verifyAdminToken');

const router = express.Router();

// Post a new book (admin only)
router.post("/", verifyAdminToken, postABook);

// Get all books
router.get("/", getAllBooks);

// Get a single book by ID
router.get("/:id", getSingleBook);

// Update a book (admin only)
router.put("/:id", verifyAdminToken, UpdateBook);

// Delete a book (admin only)
router.delete("/:id", verifyAdminToken, deleteABook);

module.exports = router;