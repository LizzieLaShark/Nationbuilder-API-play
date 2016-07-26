var express = require('express')
var app = express()
var hbs = require('hbs')

app.set('view engine', 'hbs');
app.set('views', __dirname + '/views');

console.log("Weeee! Listenin to your crazy code rants on port 5000")

app.get('/', function (req, res) {
  res.send('Nationbuilder bitchez')
})

app.post('/newPerson', function (req, res) {
  res.render('newPerson')
})



app.listen(5000)
