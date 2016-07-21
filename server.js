var express = require('express')
var app = express()
var dotenv = require('dotenv')
var nationbuilder = require('nationbuilder');
var OAuth2 = nationbuilder.auth.OAuth2;

dotenv.load()
var nationbulder = new OAuth2();

console.log("welcome to the console!")


nationbuilder.setCredentials ({
  access_token: process.env.access_token
});

nationbuilder.options({
    params: {
        slug: 'kristingillies',
    },
    auth: nationbuilder
});



client.get("https://kristingillies.nationbuilder.com/api/v1/people/2", function(err, data){
  if (err) console.log(err)

  console.log("line 11!")

  console.log(data)
})



app.get('/', function (req, res) {
  res.send('Nationbuilder bitchez')
})

app.listen(5000)
