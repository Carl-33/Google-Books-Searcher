const express = require("express");
const router = express.Router();
// const BookController = require('../controllers/BookController');
const apiRoutes = require("./api")

router.use("/api", apiRoutes)

// router for adding a book, getting all books, deleting a book, and finding on book
// router.get('/', BookController.create);
 router.use(function (req, res) {
     res.sendFile(path.join(__dirname, "../client/public/index.html"));
 });


module.exports = router;
