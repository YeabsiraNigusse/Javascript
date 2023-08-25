//jshint esversion:6

const express = require("express");

const app = express();

app.get("/", function(req, res){ // using get function from express to answere a request from the browser for rout page
    res.status(200).send('Hello, world!');// sending a response from server using send method and specifing the header
});


// we can add additional rout and responses for our app like contact and about pages request

app.get("/contact", function(req, res){
    res.status(200).send("contacte me at: nigusseyeabsira@gmail.com")
})

app.get("/about", function(req, res){
    res.status(200).send("Hey!, I am Yeab. 3rd Year computer scince student and i like to code.")
})

app.get("/hobbies", function (req, res){
    res.status(200).send("<ul><li>codding</li> <li>codding</li> <li>codding</li> </ul>")
})


app.listen('3000', function(){ // server starting at port 3000
    console.log('server started at 3000 port');
});


