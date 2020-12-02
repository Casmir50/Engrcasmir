const mongoose = require("mongoose");
const User = require("./models/Schema");


const  optional = { useNewUrlParser: true, useUnifiedTopology: true };
const url = "mongodb://localhost/mydb";
mongoose.connect(url, optional, (err) => {
  if (err) throw err;
  //const user = new User({name:"casmir", age:"22 years"});
  //user.save((err) => {
    //if (err) throw err;
    //console.log("saved")
  //})
  console.log("Connected to the database");
});

module.exports = mongoose;
