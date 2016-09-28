var request = require('superagent')
var $ = require('jquery')


var newPerson = require('../views/newPerson.hbs')

$('document').ready(function() {
  //console.log("ready!")

  $(".button").click(function(e) {
    e.preventDefault()
    console.log("listener fired!")
  })
})


// var express = require('express')
// var app = express()
// var hbs = require('hbs')
// var request = require('superagent');
// var env = require('dotenv').config();
// var cheerio = require('cheerio');
//   $ = cheerio.load('../views/newPerson.hbs')
//
// console.log("hi I'm working :)")
//
// // $('document').ready(function() {
//
//   console.log("listeners ready")
//
//   $("#submitButton").click(function(e) {
//     e.preventDefault()
//     console.log("listener fired!")
//     //res.redirect(confirmAdd)
//     // request
//     //   .post('https://kristingillies.nationbuilder.com/api/v1/people?access_token=209761d26ceb76a83161a58045cc90ad8c2fdc608e7714381a9c9e055fec249e')
//     //   .set('Accept', 'application/json')
//     //   .send(JSONd)
//     //   .end(function(res, err){
//     //     res.send('done')
//     //  })
//
//   })
//
//
// // }) //close doc ready
