const express = require("express");
const cors = require("cors");
const app = express();
const port = 5000;
const mongoDB = require("./db")

mongoDB();

app.use(
  cors({
    origin: "http://localhost:3000", // Update this to the actual origin of your frontend
    credentials: true,
  })
);




app.use(express.json())
app.use('/api',require("./Routes/CreateUser"));
app.get("/", function (req, res) {
  res.send("Hello World!");
});
app.use("/api", require("./Routes/DisplayData"));


app.listen(port, function () {
  console.log(`Example app listening on port ${port}!`);
});
