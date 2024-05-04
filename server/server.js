const express = require("express");

const mongoose = require("mongoose");

const app = express();
const port = 5000;
const cors = require("cors");


const taskrouth=require("./routes/taskrouth");
const userAuthRouter = require("./routes/userauth"); // Require the userauth.js route file

app.use(cors());
app.use(express.json());
mongoose
  .connect("mongodb+srv://maitisattwik:CGkjqvHGLjYa2qJe@cluster0.ekpzcce.mongodb.net/?retryWrites=true&w=majority", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    console.log("Connected to MongoDB");
  })
  .catch((err) => {
    console.log("Error connecting to MongoDb", err);
  });



app.use("/api/auth", userAuthRouter);
app.use("/",taskrouth)

app.listen(port, () => {
  console.log("Server is running on port 5000");
});