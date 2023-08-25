
const express = require("express")

const app = express()

app.get("/", function(req, res){
    res.status(200).send("Hi there!")
});

app.listen("3000", function(){
    console.log("starting server at port 3000.")
})