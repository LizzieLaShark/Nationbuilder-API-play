var express = require('express')
var app = express()
var hbs = require('hbs')
var request = require('superagent');
var env = require('dotenv').config();
var $ = require('jquery');

// var confirmAdd = require('../views/confirmAdd.hbs')
// var newPerson = require('./views/newPerson.hbs')


app.set('view engine', 'hbs');
app.set('views', __dirname + '/views');

console.log("Weeee! Listenin to your crazy code rants on port 5000")

//////**** Routes ****//////

app.get('/', function (req, res) {
  res.send('Nationbuilder bitchez')
})

app.get('/newperson', function (req, res) {
  console.log("U R Kool")
  res.render('newPerson')
})

app.get('/confirmAdd', function(req, res){
  res.render('confirmAdd')
})

//////****Create an Event****///////

// request
//   .post()


/////**** Find a Person ****//////

request
  .get('https://kristingillies.nationbuilder.com/api/v1/people/match?email=kristin%40forpurpose.co.nz&access_token=209761d26ceb76a83161a58045cc90ad8c2fdc608e7714381a9c9e055fec249e')
  .set('Accept', 'application/json')
  .end(function(err, res){
    if (err) {
      console.log('Oh no! error', err );
    } else {
      //console.log('yay got ' + JSON.stringify(res.body))
      console.log('Diving Deeper: ' + JSON.stringify(res.body.person.first_name),
                                      JSON.stringify(res.body.person.last_name),
                                      JSON.stringify(res.body.person.phone));
    }
  })

//////*****Create A Person ****//////

// var postNow = function() {
//   request
//     .post('https://kristingillies.nationbuilder.com/api/v1/people?access_token=209761d26ceb76a83161a58045cc90ad8c2fdc608e7714381a9c9e055fec249e')
//     .set('Accept', 'application/json')
//     .send({
//     "person": {
//       "email": "test2@test.com",
//       "last_name": "Test2",
//       "first_name": "Test2",
//       "sex": "M",
//       "employer": "Test2ingtons",
//     } // need to create form and send info from form in JSON format
//   })
//     .end(function(err, res){
//       if (err) {
//         console.log("I'm sorry, there's been an error creating a person: ", err)
//       } else {
//         console.log("success: ", res)
//       }
//     })
// }

//postNow();

//////*****Update A Person ****//////




//////*****Delete A Person ****//////

// request
//   .del('https://kristingillies.nationbuilder.com/api/v1/people/:id?access_token=209761d26ceb76a83161a58045cc90ad8c2fdc608e7714381a9c9e055fec249e')
//   .set('Accept', 'application/json')
//   .end(function(err, res){
//     if (err) {
//       console.log("I'm sorry, there's been an error creating a person: ", err)
//       } else {
//         console.log("success, person has been deleted: ", res.body)
//       }
//     })


//////**** Create Three Pages ****//////

request
  .post('https://kristingillies.nationbuilder.com/api/v1/sites/sandbox1455/pages/basic_pages?access_token=209761d26ceb76a83161a58045cc90ad8c2fdc608e7714381a9c9e055fec249e')
  .set('Accept', 'application/json')
  //.set('Content-Type', 'application/json')
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



app.listen(5000)
