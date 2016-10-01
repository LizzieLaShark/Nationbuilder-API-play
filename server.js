var express = require('express')
var app = express()
var hbs = require('hbs')
var request = require('superagent');
var env = require('dotenv').config();
//var $ = require('jquery');


var himalaya = require('himalaya');
var html = require('fs').readFileSync('./views/newPerson.hbs');
var json = himalaya.parse(html);

var index = require("./client/index.js")

// var confirmAdd = require('../views/confirmAdd.hbs')
var newPerson = require('./views/newPerson.hbs')

app.set('view engine', 'hbs');
app.set('views', __dirname + '/views');
app.use(express.static('public'));
app.use(express.static('client'));

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


/////////////////////////////////////
//////////**** People ****//////////
///////////////////////////////////


/////**** Find a Person ****//////
var findPerson = function() {
request
  .get('https://kristingillies.nationbuilder.com/api/v1/people/match?email=kristin%40forpurpose.co.nz&access_token=209761d26ceb76a83161a58045cc90ad8c2fdc608e7714381a9c9e055fec249e')
  .set('Accept', 'application/json')
  .end(function(err, res){
    if (err) {
      console.log('Oh no! error', err );
    } else {
      console.log('yay got ' + JSON.stringify(res.body))
      console.log('Diving Deeper: ' + JSON.stringify(res.body.person.first_name),
                                      JSON.stringify(res.body.person.last_name),
                                      JSON.stringify(res.body.person.phone));
    }
  })
}

//findPerson()

//////*****Create A Person ****//////

var createPerson = function() {
  request
    .post('https://kristingillies.nationbuilder.com/api/v1/people?access_token=209761d26ceb76a83161a58045cc90ad8c2fdc608e7714381a9c9e055fec249e')
    .set('Accept', 'application/json')
    .send({
    "person": {
      "email": "test2@test.com",
      "last_name": "Test2",
      "first_name": "Test2",
      "sex": "M",
      "employer": "Test2ingtons",
    } // need to create form and send info from form in JSON format
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
    .put('https://kristingillies.nationbuilder.com/api/v1/people/1259?access_token=209761d26ceb76a83161a58045cc90ad8c2fdc608e7714381a9c9e055fec249e')
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
  .del('https://kristingillies.nationbuilder.com/api/v1/people/:id?access_token=209761d26ceb76a83161a58045cc90ad8c2fdc608e7714381a9c9e055fec249e')
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
}

//createSamplePage()


///**** Basic Sign-Up Page ****///

var createPersonFromForm = function() {

  var formData = JSON.stringify($(".addNewPerson").serializeArray());

  request
    .post("https://kristingillies.nationbuilder.com/api/v1/people?access_token=209761d26ceb76a83161a58045cc90ad8c2fdc608e7714381a9c9e055fec249e")
    .set('Accept', 'application/json')
    .send (index.formData)
    .end(function(err, res){
      if (err) {
        console.log("I'm sorry, there's been an error creating a person: ", err)
      } else {
        console.log("success: ", res.body, "res status: ", res.status)
      }
    })

}

//createPersonFromForm()





//
// $(document).ready(function() {
//
//   console.log("listeners ready")
//
//
//   $("#submitButton").click(function(e) {
//     e.preventDefault()
//
//
//     // request
//     //   .post('https://kristingillies.nationbuilder.com/api/v1/people?access_token=209761d26ceb76a83161a58045cc90ad8c2fdc608e7714381a9c9e055fec249e')
//     //   .set('Accept', 'application/json')
//     //   .send(JSONd)
//     //   .end(function(res, err){
//     //     res.send('done')
//     //  })
//
//   })

// }) //close doc ready




///**** Display Some People on Basic Page ****///





app.listen(5000)
