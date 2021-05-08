const express = require("express");
const path = require("path");
const app = express();

app.use(express.static(path.join(__dirname, "public")));
app.get("*", (request, response) => {
  response.sendFile(path.join(__dirname, "public/index.html"));
});

const port = process.env.PORT || 5000;
app.listen(port, () => {
  console.log(`API listening on port ${port}...`);
});