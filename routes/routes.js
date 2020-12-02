const express = require("express");
const router = express.Router();
const BookController = require('../controllers/BookController');


// add routes that allign with BookController routes. 
// router for adding a book, getting all books, deleting a book, and finding on book
router.get('/', BookController.create);



module.exports = router;
