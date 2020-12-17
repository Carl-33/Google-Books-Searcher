const router = require('express').Router();
const bookController = require("../../controllers/BookController.js");

// Matches with "api/books"
router
    .route("/")
    .get(bookController.findAll)
    .post(bookController.create)

// Matches with "api/books/:id"
router
    .route("/:id")
    .get(bookController.gindById)
    .delete(bookController.remove);

module.exports = router;