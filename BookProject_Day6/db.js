const mongoose = require("mongoose");
mongoose.connect("mongodb://localhost:27017/libraryDB")
    .then(() => {
        console.log("Mongo Db connected");
    }).catch((err) => {
        console.log("Error connecting to database");
        console.log(err);
    })
