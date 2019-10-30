const express = require("express");
const app = express();
const port = process.env.PORT || 8080;

app.use(express.static('public'));
app.get( "/index", function (req, res) {
    console.log("access");
    res.sendFile( __dirname + "/public/" + "index.html" );        
});

app.get( "/index", function (req, res) {
    res.status("404").sendFile( __dirname + "/public/" + "index.html" );        
});

app.listen(port, function() {
  console.clear();
  console.log("app listening on port " + port);
});
