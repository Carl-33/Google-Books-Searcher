const db = require("../models");

module.exports = {
// route for adding a book to database
    create: function (req, res) {
        db.Book.create(req.body)
        .then((dbModel) => res.json(dbModel))
        .catch((err) => res.status(422).json(err));
    },
// route for finding all books in database
    findAll: function(req, res) {
        db.Book.find(req.query)
            .then(dbModel => res.json(dbModel))
            .catch(err => res.status(422).json(err))
    }
// route for finding one book in database by id

// route for deleting a book from database by id


};
