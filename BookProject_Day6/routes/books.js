const express = require("express");
const router = express.Router();
const Book = require("../models/books");

// GET all books
router.get("/", async (req, res) => {
    try {
        const books = await Book.find();
        res.json(books);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
});

// POST a new book
router.post("/", async (req, res) => {
    const { title, author, category, genre, pages, price, quantity } = req.body;
    const book = new Book({
        title,
        author,
        category,
        genre,
        pages,
        price,
        quantity
    });

    try {
        const newBook = await book.save();
        res.status(201).json(newBook);
    } catch (err) {
        res.status(400).json({ message: err.message });
    }
});

module.exports = router;