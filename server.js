const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const path = require("path");
const PORT = process.env.PORT || 5000;
const app = express();

// Define middleware here
app.use((req, res, next) => {
  console.log(`request_endpoint: ${req.method} ${req.url}`)
  next();
});
// body parser middleware
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
  extended: true
}));
// CORs middleware
app.use(cors());

// Require Route
const api = require('./routes/routes');
//  configuring the app to use route
app.use('/api/v1', api);

app.use(express.urlencoded({ extended: true }));
app.use(express.json());


// Connect to MongoDB
// uncoment out with ready for MONGOOOOO!
// await mongoose.connect('mongodb://localhost/googlebooks', {
//   useNewUrlParser: true,
//   useUnifiedTopology: true,
//   useFindAndModify: false,
//   useCreateIndex: true
// });

// Define API routes here
// Serve up static assets (usually on heroku)
if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/build"));
  app.get("*", (req, res) => {
    res.sendFile(path.join(__dirname, "./client/build/index.html"));
});
}
// Send every other request to the React app
// Define any API routes before this runs


app.get("*", (req, res) => {
  res.status(200).json({
    msg: "Catch All"
  })
})

app.listen(PORT, () => {
  console.log(`🌎 ==> API server now on port ${PORT}!`);
});
