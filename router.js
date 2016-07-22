var request = require('superagent');
var env = require('dotenv').config();

console.log("welcome to the console!")

// var accessToken = process.env.access_token

request
  .get('https://kristingillies.nationbuilder.com/api/v1/people/match?email=kristin@forpurpose.co.nz&access_token=209761d26ceb76a83161a58045cc90ad8c2fdc608e7714381a9c9e055fec249e')
 //  .send({ name: 'Manny', species: 'cat' })
  .set('process.env.access_token', 'kristingillies')
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
  });
