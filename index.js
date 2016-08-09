var request = require('superagent');
var env = require('dotenv').config();
var $ = require('jquery');

var confirmAdd = require('../views/confirmAdd.hbs')
var newPerson = require('./views/newPerson.hbs')


request
  .get('https://kristingillies.nationbuilder.com/api/v1/people/match?email=kristin@forpurpose.co.nz&access_token=209761d26ceb76a83161a58045cc90ad8c2fdc608e7714381a9c9e055fec249e')
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
  });

//////*****Create New Person (hardcode)****//////
var postNow = function() {
  request
    .post('https://kristingillies.nationbuilder.com/api/v1/people?access_token=209761d26ceb76a83161a58045cc90ad8c2fdc608e7714381a9c9e055fec249e')
    .set('Accept', 'application/json')
    .send({
    "person": {
      "email": "test@test.com",
      "last_name": "Test",
      "first_name": "Lizzie",
      "sex": "M",
      "employer": "Testingtons",
    } // need to create form and send info from form in JSON format
  })
    .end(function(err, res){
      if (err) {
        console.log("I'm sorry, there's been an error: ", err)
      } else {
        console.log("success: ", res)
      }
    })
}

//postNow();

//////***** Make a Form that Creates People *****////////

///grab HTML Data and Tranform into JSON///
//
// var JSONd = JSON.stringify($(".addNewPerson"))
// console.log(JSONd)



//   $( "form" ).submit(function( event ) {
//   console.log( $( this ).serializeArray() );
//   event.preventDefault();

    //.serializeArray().JSON.stringify())

// });


// $(document).ready(function() {
//
//   console.log("listeners ready")
//
//   $("#submitButton").click(function(e) {
//     e.preventDefault()
//      var serialized = $(".addNewPerson").serializeArray
//     //  var JSONd = JSON.stringify(serialized)
//      console.log(serialized)
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
//
// }) //close doc ready
