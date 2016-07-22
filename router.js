var request = require('superagent');
var env = require('dotenv').config();

console.log("You Are Cool.")


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


//////*****Create New Person****//////
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
  }
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
