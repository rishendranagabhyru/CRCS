// main one
const express =
    require("express");
const cors =
    require("cors");
const app =
    express();
require("./db");
app.use(cors());
app.use(express.json());
app.use(
    express.static("public")
);
// import route
const bookRoutes =
    require("./routes/books");
// connect route
app.use(
    "/api/books",
    bookRoutes
);
app.get("/", (req, res) => {
    res.send(
        "Library Server Running"
    );
});
const PORT = 5000;
app.listen(PORT, () => {
    console.log(
        `Server running on port ${PORT}`
    );
});

