const express = require("express");
const cors = require("cors");
require("dotenv").config();

const sequelize = require("./config/database");
const notesRouter = require("./routes/notesRouter");

const app = express();

app.use(cors());

app.use(express.json());

app.use(express.urlencoded({ extended: true }));

// Test route
app.get("/", (req, res) => {
  res.json({
    message: "API Notes berjalan",
  });
});

// Notes route
app.use("/notes", notesRouter);

const PORT = process.env.PORT || 3000;

// Sinkron database
sequelize
  .sync()
  .then(() => {
    console.log("Database sinkron");

    app.listen(PORT, () => {
      console.log(`Server berjalan di port ${PORT}`);
    });
  })
  .catch((error) => {
    console.log(error);
  });
