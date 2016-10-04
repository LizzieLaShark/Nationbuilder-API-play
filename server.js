var express = require('express')
var app = express()
var hbs = require('hbs')
var request = require('superagent');
require('dotenv').config();
var bodyParser = require('body-parser')

app.set('view engine', 'hbs');
app.set('views', __dirname + '/views');
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())


//////**** Routes ****//////

app.get('/', function (req, res) {
  res.send("homepage!")
})

app.get('/newperson', function (req, res) {
  res.render('newPerson')
})

app.get('/confirmAdd', function(req, res){
  res.render('confirmAdd')
})

app.get('/editEvent', function(req, res){
  res.render('editEvent')
})

////////////////////////////////
////////////Events/////////////
//////////////////////////////


/////**** Create an event ****//////

request
  .post('https://sandbox1455.nationbuilder.com/api/v1/sites/sandbox1455/pages/events?access_token=' + process.env.access_token)
  .set('Accept', 'application/json')
  .send({
    "event": {
      "status": "unlisted",
      "name": "Eventington (test)",
      "intro": "Come see Tycho at the Trash Fence!",
      "time_zone": "Pacific Time (US & Canada)",
      "start_time": "2016-10-08T17:00:00-00:00",
      "end_time": "2015-10-08T19:00:00-00:00",
      "contact": {
        "name": "Earl Grey",
        "contact_phone": "1234567890",
        "show_phone": true,
        "contact_email": "contact@EG.com",
        "email": "contact@EG.org",
        "show_email": false
    }
  }
})
  .end(function(err, res){
    if (err) {
      console.log("I'm sorry, there's been an error creating your event: ", err)
    } else {
      console.log("success: ", res.body, "res status: ", res.status)
    }
  })

/////**** Update event using a form ****//////

app.post('/editedEvent', function (req, res){
  request
    .put('https://kristingillies.nationbuilder.com/api/v1/sites/sandbox1455/pages/events/16?access_token='+ process.env.access_token)
    .send({ event: req.body })
    .set('Content-Type', 'application/json')
    .accept('application/json')
    .end(function(err, data){
      res.send(data.body)
      console.log("this is data.body: ", data.body)
      res.render(data.body)
    })
})


/////////////////////////////////////
//////////**** People ****//////////
///////////////////////////////////


/////**** add new person from form ****//////


app.post('/addperson', function(req, res) {
  request.post('https://kristingillies.nationbuilder.com/api/v1/people?access_token='+ process.env.access_token)
    .send({ person: req.body })
    .set('Content-Type', 'application/json')
    .accept('application/json')
    .end(function(err, data) {
      console.log(data.body)
      res.render('confirmedAdd', data.body)
    })
})

//////*****Create A Person ****//////

var createPerson = function() {
  request
    .post('https://kristingillies.nationbuilder.com/api/v1/people?access_token=' + process.env.access_token)
    .set('Accept', 'application/json')
    .send({
    "person": {
      "email": "test2@test.com",
      "last_name": "Test2",
      "first_name": "Test2",
      "sex": "M",
      "employer": "Test2ingtons",
    }
  })
    .end(function(err, res){
      if (err) {
        console.log("I'm sorry, there's been an error creating a person: ", err)
      } else {
        console.log("success: ", res)
      }
    })
}

//createPerson()

//////*****Update A Person ****//////

var updatePerson = function() {
  request
    .put('https://kristingillies.nationbuilder.com/api/v1/people/1259?access_token=' + process.env.access_token)
    .set('Accept', 'application/json')
    .send({
      "person": {
      "sex": "F"
        }
      })
    .end(function(err, res){
      if (err) {
        console.log("I'm sorry, there's been an error creating a person: ", err)
      } else {
        console.log("success: ", res.body, "res status: ", res.status)
      }
    })
}

//updatePerson()


//////*****Delete A Person ****//////

var deletePerson = function() {
request
  .del('https://kristingillies.nationbuilder.com/api/v1/people/:id?access_token=' + process.env.access_token)
  .set('Accept', 'application/json')
  .end(function(err, res){
    if (err) {
      console.log("I'm sorry, there's been an error creating a person: ", err)
      } else {
        console.log("success, person has been deleted: ", res.body)
      }
  })
}

//deletePerson()


///////////////////////////////////////
//////**** Sites and People ****//////
/////////////////////////////////////


///**** Sample Page ****///

var createSamplePage = function() {

request
  .post('https://kristingillies.nationbuilder.com/api/v1/sites/sandbox1455/pages/basic_pages?access_token=' + process.env.access_token)
  .set('Accept', 'application/json')
  .send ({
      "basic_page": {
        "name": "A page here",
        "content": "<p>some content</p>",
        "status": "published"
      }
    })
  .end(function(err, res){
    if (err) {
      console.log("I'm sorry, there's been an error: ", err)
    } else {
      console.log("success: ", res.body, "status: ", res.status)
    }
  })
}

//createSamplePage()



app.listen(5000, function() {
  console.log("Weeee! Listenin to your crazy code rants on port 5000")
})
