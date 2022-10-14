var express = require('express');
var app = express();
// Default Route
app.get('/', function (req, res) {
   res.send('<h1>Hello World</h1>');
})
// set port, listen for requests
const PORT = process.env.PORT || 8080;

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}.`);
});

// Connect MySQL Database
// npm install mysql - MySQL Database client for nodes
var mysql = require('mysql');

// Create Connection to MySQL
var connection = mysql.createConnection({
  host:'localhost',
  user:'mysql',
  password:'nik223',
  database:'formdatabase'
});


//Post Method - Insert New Student Record: http://localhost:8080/mysql/InsertStudent
app.post("/mysql/Enrollments", function(req, res){
  
    
    Name = req.body.Name;
    College_EmailID = req.body.College_EmailID;
    Personal_EmailID = req.body.Personal_EmailID;
    Whatsapp_Num = req.body.Whatsapp_Num;
    Gender = req.body.Gender;
    CGPAofDegree = req.body.CGPAofDegree;
    Intermediate_Marks = req.body.Intermediate_Marks;
    SSC_Marks = req.body.SSC_Marks;
    Internship_Program = req.body.Internship_Program;
    Timeslot = req.body.Timeslot;


  
    connection.query("Insert into Enrollments (Name,College_EmailID, Personal_EmailID, Whatsapp_Num, Gender, CGPAofDegree, Intermediate_Marks, SSC_Marks, Internship_Program, Timeslot) values ( '" + Name + "'), ( '" + College_EmailID + "'), ( '" + Personal_EmailID + "'), ( '" + Whatsapp_Num + "'), ( '" + Gender + "'), ( '" + CGPAofDegree + "'), ( '" + Intermediate_Marks + "'), ( '" + SSC_Marks + "'), ( '" + Internship_Program + "'), ( '" + Timeslot + "')", 
    
    function (err, data) {
        if (err) return next(new AppError(err, 500));
  
        res.status(200).json({
          status: "success",
          length: data?.length, 
          data: data,
        });
    });
  
  });