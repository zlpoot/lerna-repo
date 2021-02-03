var express = require("express");
var app = express();
app.get("/", function (res, rep) {
  rep.send("Hello, word12!");
});

app.listen(3000);
