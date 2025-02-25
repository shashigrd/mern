const express = require("express");
const app = express();
const cors = require("cors");
const router = require("./router/auth");
require("./db/connect");
const errorMiddleware = require("./middleware/errorMiddleware");

const options = {
  origin: "http://localhost:5173",
  methods: "GET,HEAD,PUT,PATCH,POST,DELETE",
  credentials: true,
};

app.use(cors(options));
app.use(express.json());
app.use("/api/auth", router);
app.use(errorMiddleware);

const middleware = (req, res, next) => {
  console.log("middleware");
  next();
};

app.get("/", (req, res) => {
  res.send("response from server");
});

app.get("/about", middleware, (req, res) => {
  res.send("about us response from server");
});

app.get("/contact", (req, res) => {
  res.send("contact us response from server");
});

app.get("/signin", (req, res) => {
  res.send("sign in response from server");
});

app.get("/signup", (req, res) => {
  res.send("sign up response from server");
});

app.listen(3000, () => {
  console.log("server running 3000");
});
