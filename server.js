var express = require('express');
var app = express();

/* serves main page */
app.get("/api/v1/verse", function(req, res) {
    res.send({"verse":"TEST"});
});

app.use(express.static(__dirname + '/src'));
//app.use(express.static(__dirname + '/'));

var port = process.env.PORT || 3333;

app.listen(port, "localhost", function() {
	console.log("Server listening on port "+port);
});
