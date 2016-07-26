var request = require('superagent');

var newPerson = require('./views/newPerson.hbs')


xhr.get('/newPerson', function(req, res){
  console.log("hi!")
  res.render('newPerson')
})
