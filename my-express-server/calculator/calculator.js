
const express = require("express")
const bodyParser = require("body-parser") // used to get posted data from html page


const app = express()
app.use(bodyParser.urlencoded({extended: true})); // initializing body parser

app.get("/", function(req, res){ // sending rout request for the browser
    res.status(200).sendFile(__dirname + "/index.html")
});

app.get("/bmicalculator", function(req, res){ // sending rout request for the browser
    res.status(200).sendFile(__dirname + "/bmiCalculator.html")
});

app.post("/", function(req, res){ // reciving post request from the browser
    //res.status(200).send("hi there, thanks for posting!")

    var num1 = Number(req.body.num1)
    var num2 = Number(req.body.num2);

    var result = num1 + num2;

    res.status(200).send("the sum of the two numbers is "+ result)
})

app.post("/bmicalculator", function(req, res){

    var weight = Number(req.body.weight)
    var height = Number(req.body.height)

    var bmi = (weight/(height*height))
    
    res.status(200).send("Your BMI is "+ bmi)
})



app.listen("3000", function(){ // starting the server at port 3000
    console.log("starting server at port 3000.")
})