const { json, urlencoded } = require("express");
const morgan = require("morgan");
const express = require("express");
const axios = require("axios");
require("./database");
const Post = require("./models/Schema");

//initialized server
const app = express();

//http logger
app.use(morgan("tiny"));

// express middlewares
app.use(json());
app.use(urlencoded({ extended: false }));

app.get("/", (req, res) => {
  axios
    .get("https://jsonplaceholder.typicode.com/todos")
    .then(async (response) => {
      let fetchedData = response.data;
      console.log(fetchedData);
      const newPost = new Post(fetchedData);
      await newPost.save((err) => {
        if (err) throw err;
        console.log("User saved successfully to the database");
      });
      res.status(200).json(response.data);
    })
    .catch((err) => {
      if (err) throw err;
    });
});

//listening port
const port = process.env.PORT || 8081;

app.listen(port, () => console.log(`App is running on port ${port}`));
