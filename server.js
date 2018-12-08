const express = require("express");

var app = express();

app.get("/html", (req, res) => {
    res.send("Hello World !");
});

app.get("/json", (req, res) => {
    res.send({
      name: "Venkat G" , 
      likes: [
        "P1", "p2"
      ]
    });
});


app.listen(3000);
