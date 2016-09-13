var express = require('express')
var app = express()
var hbs = require('hbs')
var request = require('superagent');
var env = require('dotenv').config();
var $ = require('jquery');


// var confirmAdd = require('../views/confirmAdd.hbs')
var newPerson = require('../views/newPerson.hbs')
//var confirmAdd = require('../views/confirmAdd.hbs')

app.get('/newperson', function (req, res) {
  console.log("U R Kool")
  res.render('newPerson')
})


$('document').ready(function() {

  console.log("listening")

var formData = JSON.stringify($(".addNewPerson").serializeArray());

request
  .post("https://kristingillies.nationbuilder.com/api/v1/people?access_token=209761d26ceb76a83161a58045cc90ad8c2fdc608e7714381a9c9e055fec249e")
  .set('Accept', 'application/json')
  .send (formData)
  .end(function(err, res){
    if (err) {
      console.log("I'm sorry, there's been an error creating a person: ", err)
    } else {
      console.log("success: ", res.body, "res status: ", res.status)
    }
  })

})

// console.log("hi I'm working :)")
//
// $('document').ready(function() {
//
//   console.log("listeners ready")
//
//   $("#submitButton").click(function(e) {
//     e.preventDefault()
//     console.log("listener fired!")
//     res.redirect(confirmAdd)
//     // request
//     //   .post('https://kristingillies.nationbuilder.com/api/v1/people?access_token=209761d26ceb76a83161a58045cc90ad8c2fdc608e7714381a9c9e055fec249e')
//     //   .set('Accept', 'application/json')
//     //   .send(JSONd)
//     //   .end(function(res, err){
//     //     res.send('done')
//     //  })
//
//   })


//}) //close doc ready

module.exports = formData;
