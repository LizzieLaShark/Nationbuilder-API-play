var express = require('express')
var app = express()
var request = require('superagent');
var env = require('dotenv').config();
var nationbuilder = require('nationbuilder');
var OAuth2 = nationbuilder.auth.OAuth2;

console.log("welcome to the console!")

var accessToken = process.env.access_token

nationbuilder.options({
    params: {
        slug: 'kristingillies',
    },
    auth: nationbuilder
});

// request.get("https://kristingillies.nationbuilder.com/api/v1/people?access_token=209761d26ceb76a83161a58045cc90ad8c2fdc608e7714381a9c9e055fec249e", function(err, data){
//   if (err) console.log(err)
//
//   console.log(data)
// })
// request
//    .get('https://kristingillies.nationbuilder.com/api/v1/people?access_token=209761d26ceb76a83161a58045cc90ad8c2fdc608e7714381a9c9e055fec249e')
//   //  .send({ name: 'Manny', species: 'cat' })
//    .set('process.env.access_token', 'kristingillies')
//    .set('Accept', 'application/json')
//    .end(function(err, res){
//      if (err) {
//        console.log('Oh no! error', err );
//      } else {
//        console.log('yay got ' + JSON.stringify(res.body));
//      }
//    });

   request
      .get('https://kristingillies.nationbuilder.com/api/v1/people/match?email=kristin@forpurpose.co.nz&access_token=209761d26ceb76a83161a58045cc90ad8c2fdc608e7714381a9c9e055fec249e')
     //  .send({ name: 'Manny', species: 'cat' })
      .set('process.env.access_token', 'kristingillies')
      .set('Accept', 'application/json')
      .end(function(err, res){
        if (err) {
          console.log('Oh no! error', err );
        } else {
          console.log('yay got ' + JSON.stringify(res.body.person.phone));
        }
      });

// \'Accept\' and \'Content-Type\' to \'application/json\'

app.get('/', function (req, res) {
  res.send('Nationbuilder bitchez')
})

app.listen(5000)
