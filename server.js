const express = require("express");
const dotenv = require("dotenv");
const cors = require("cors");
const colors = require("colors");
const connectDB = require("./config/db");
const errorHandler = require("./middleware/error");

dotenv.config({ path: "./config/config.env" });

connectDB();

const app = express();
app.use(express.json());

const users = require("./routes/users");

app.use(
  cors({
    origin: "http://localhost:4200",
  })
);

app.use("/api/v1/users", users);
app.use(errorHandler);

const PORT = process.env.PORT || 5000;

const server = app.listen(PORT, () => {
  console.log(
    `Server running in ${process.env.NODE_ENV} mode on port ${PORT}`.yellow.bold
  );
});
