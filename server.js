var express = require('express')
var app = express()
var hbs = require('hbs')

app.set('view engine', 'hbs');
app.set('views', __dirname + '/views');

console.log("Weeee! Listenin to your crazy code rants on port 5000")

app.get('/', function (req, res) {
  res.send('Nationbuilder bitchez')
})

//*note to self this only works as get request*//
app.get('/newperson', function (req, res) {
  console.log("U R Kool")
  res.render('newPerson')
})

app.get('/confirmAdd', function(req, res){
  res.render('confirmAdd')
})


app.listen(5000)
