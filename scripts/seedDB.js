const mongoose = require("mongoose");
const db = require("../models");

mongoose.connect(
    process.env.MONGO_URI || "mongodb://localhost/googlebooks"
);
const bookSeed = [
    {
        title: "Pretend Title",
        authors:"pretend authors",
        description:"pretend description",
        image:"https://i.pinimg.com/originals/db/bf/55/dbbf555719e6f1d1f0f5060222f15848.jpg",
        link: "https://www.amazon.com/Legend-Zelda-Twilight-Princess-Vol/dp/1421593475"
        
    }
];
db.Book
  .remove({})
  .then(() => db.Book.collection.insertMany(bookSeed))
  .then(data => {
    console.log(data.result.n + " records inserted!");
    process.exit(0);
  })
  .catch(err => {
    console.error(err);
    process.exit(1);
  });
