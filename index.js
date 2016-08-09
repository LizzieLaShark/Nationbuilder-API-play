// var request = require('superagent');
// var env = require('dotenv').config();
// var $ = require('jquery');
//
// var confirmAdd = require('../views/confirmAdd.hbs')
// var newPerson = require('./views/newPerson.hbs')
//
//
// request
//   .get('https://kristingillies.nationbuilder.com/api/v1/people/match?email=kristin@forpurpose.co.nz&access_token=209761d26ceb76a83161a58045cc90ad8c2fdc608e7714381a9c9e055fec249e')
//   .set('Accept', 'application/json')
//   .end(function(err, res){
//     if (err) {
//       console.log('Oh no! error', err );
//     } else {
//       //console.log('yay got ' + JSON.stringify(res.body))
//       console.log('Diving Deeper: ' + JSON.stringify(res.body.person.first_name),
//                                       JSON.stringify(res.body.person.last_name),
//                                       JSON.stringify(res.body.person.phone));
//     }
//   });
//
// //////*****Create New Person (hardcode)****//////
// var postNow = function() {
//   request
//     .post('https://kristingillies.nationbuilder.com/api/v1/people?access_token=209761d26ceb76a83161a58045cc90ad8c2fdc608e7714381a9c9e055fec249e')
//     .set('Accept', 'application/json')
//     .send({
//     "person": {
//       "email": "test@test.com",
//       "last_name": "Test",
//       "first_name": "Test2",
//       "sex": "M",
//       "employer": "Test2ingtons",
//     } // need to create form and send info from form in JSON format
//   })
//     .end(function(err, res){
//       if (err) {
//         console.log("I'm sorry, there's been an error: ", err)
//       } else {
//         console.log("success: ", res)
//       }
//     })
// }
//
// postNow();
//
// //////**** Create Three Basic Pages ****//////
//
// var newPage = function {
//
//   request
//   .post(https://kristingillies.nationbuilder.com/api/v1/sites/kristingillies/pages/basic_pages )
//   .set('Accept', 'application/json')
//   .send ({
//     "basic_page": {
//     "name": "Why Join Unite?",
//     "content": "  <H1>Why you should join Unite</h1>
//         <p>
//             <h2>Being part of Unite makes your working life easier</h2>
//
//             Negotiation of your wages and conditions<br>
//             Learn about your rights as a worker<br>
//             Enforcement of your legal and work rights<br>
//             Representation with any work problems<br>
//             Legal Advocacy for personal grievances<br>
//             Regular visits by a paid organiser to your worksite<br>
//             Elected delegates on your worksite to assist you<br>
//             A range of free and discounted benefits<br>
//             You decide your Employment Agreement<br>
//             You vote on major Unite decisions<br>
//             You can become a workplace representative<br>
//             You vote or can stand for leadership positions<br>
//             You can choose to join the Unite Active Members Network and really get involved in helping others<br>
//           </p>
//         </h1>",
//     "status": "published"
//   }})
//   .end(function(err, res){
//     if (err) {
//       console.log("I'm sorry, there's been an error: ", err)
//     } else {
//       console.log("success: ", res)
//     }
//   })
// }
//
// newPage()












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
