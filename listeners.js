var request = require('superagent');
var env = require('dotenv').config();
var $ = require('jquery');

var confirmAdd = require('../views/confirmAdd.hbs')
var newPerson = require('./views/newPerson.hbs')

$(document).ready(function() {

  console.log("listeners ready")

  $("#submitButton").click(function(e) {
    e.preventDefault()
     var serialized = $(".addNewPerson").serializeArray
    //  var JSONd = JSON.stringify(serialized)
     console.log(serialized)

    // request
    //   .post('https://kristingillies.nationbuilder.com/api/v1/people?access_token=209761d26ceb76a83161a58045cc90ad8c2fdc608e7714381a9c9e055fec249e')
    //   .set('Accept', 'application/json')
    //   .send(JSONd)
    //   .end(function(res, err){
    //     res.send('done')
    //  })

  })

}) //close doc ready


// $( "form" ).submit(function( event ) {
//   console.log( $( this ).serializeArray() );
//   event.preventDefault();


// });
