const express = require("express");
const path = require("path");
const cors = require("cors");
const PORT = process.env.PORT || 5000;

const app = express();
app.use(cors());
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static(path.join(__dirname, 'client/build')))

app.get("/api/test", (req, res) => {
  res.json({ testData: ["Here is some data", 1234] });
});

app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname + "/client/build/index.html"));
});

app.listen(PORT);

console.log(`Server listening on ${PORT}`);
