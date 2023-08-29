

const express = require('express')
const bodyParser = require('body-parser')
const request = require('request')


const app = express()

app.use(express.static('public'));
app.use(bodyParser.urlencoded({extended:true}))

app.get('/', function(req, res){

    res.status(200).sendFile(__dirname + '/signup.html');
})

app.post('/', function (req, res){

    const firstName = req.body.firstName
    const lastName = req.body.lastName
    const email = req.body.email

    console.log('First Name: '+ firstName)
    console.log('Last Name: '+ lastName)
    console.log('email: '+ email)

   // res.status(200).send('post recived successufully')
})


app.listen('3000', function (req, res){
   
    console.log('server started at port 3000')
})