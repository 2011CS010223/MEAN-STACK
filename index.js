//npm install express
var express = require('express');
var app = express();
// set port, listen for requests
const PORT = 8080;

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}.`);
});

// Default Route
app.get('/', function (req, res) {
   res.send('<h1>2011CS010223</h1>');
})


// Connect MySQL Database

var mysql = require('mysql');

// Create Connection to MySQL

var connection = mysql.createConnection({

host:'demo-223.cmkxcz3si1yf.us-east-1.rds.amazonaws.com',

user:'root',

password:'mysql123',

database:'mru'

});

app.get("/mysql/StudentDetails", function(req , res){

    connection.query("SELECT *FROM mru.Student", function (err, data) {
    
    if (err) return next(new AppError(err, 500));
    
        res.send(data)
    });
    
    });

