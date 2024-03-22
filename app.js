//import required modules
const express = require("express");
const path = require("path");
const dotenv = require("dotenv");
dotenv.config();
const config = require("./config/config");

//define routes
const indexRoute = require("./routes/indexRoute");
const cocktailRoute = require("./routes/cocktailRoute");
// const breweryRoute = require("./routes/brewery");

//set up express object and port
const app = express();
const port = process.env.PORT || "8888";

// set up views and view engine
app.set("views", path.join(__dirname, "views"));
app.set("view engine", "ejs");

// set up static path (for use with CSS,client-side JS and image files)
app.use(express.static(path.join(__dirname, "public")));

// bootstrap is installed in node_modules
app.use(
  "/css",
  express.static(path.join(__dirname, "node_modules/bootstrap/dist/css"))
);

// set up for easier data parser
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

//set up page routes
app.use("/", indexRoute);
app.use("/cocktail", cocktailRoute);
// app.use("/brewery", breweryRoute);

//set up server listening
app.listen(port, () => {
  console.log(`Listening on http://localhost:${port}`);
});
