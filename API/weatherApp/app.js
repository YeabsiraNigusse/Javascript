

const express = require('express') // setting express as required dependency
const https = require('https') // setting https as required dependency
const bodyParser = require('body-parser') // setting bodyparser as required dependency



const app = express() // initializing express object
app.use(bodyParser.urlencoded({extended:true}))

app.get('/', function(req, res){ // a function helps to respond when the specified localhost request is asked
    
    res.status(200).sendFile(__dirname + "/index.html") //respond with this file

})

app.post('/', function(req, res){
    
    console.log('post recived successfully')
    console.log(req.body.cityName)
    const cityName = req.body.cityName
    const apiKey = "295bd2647e186f66f28ae38bc20cbe67"
    const unit = "metric"
    const url = "https://api.openweathermap.org/data/2.5/weather?q="+cityName+"&appid=295bd2647e186f66f28ae38bc20cbe67&units=metric"
   
    https.get(url, function(response){   // get the response from the given url
      //  console.log(response.statusCode)

        response.on('data', function(data){ // get the data from the response given
            const weatherData = JSON.parse(data) // parse the data into JSON format
            //console.log(weatherData.weather)
            const desc = weatherData.weather[0].description
            const temp = weatherData.main.temp
            const icon = weatherData.weather[0].icon
            const iconUrl = "https://openweathermap.org/img/wn/" + icon + "@2x.png"
            console.log(temp) // get detail information from the object
            

            res.write('<p>the temprature of '+ cityName +' is ' + temp + ' Degree Celcious</p>')
            res.write('<h3>currently the weather of '+ cityName +' is ' + desc + '</h3>')
            res.write('<img src='+iconUrl+'>')
            res.status(200).send()
        })
    })

})


app.listen('3000', function(){
    console.log("server started at port 3000")
})

// basic steps to setup express server

// install express 
// initialize npm as a package using npm init command and finish the process
// start writing code