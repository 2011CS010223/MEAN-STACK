//npm install express

var express = require('express');

var app = express();

// set port, listen for requests

const PORT = 8080;

app.listen(PORT, () => {

console.log(`Server is running on port ${PORT}.`);

});

// Default Route – http://localhost:8080

app.get('/', function (req, res) {

res.send('<h1>Hello World</h1>');

})