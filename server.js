var express = require('express')
var app = express()

console.log("Weeee! Listenin to your crazy code rants on port 5000")

app.get('/', function (req, res) {
  res.send('Nationbuilder bitchez')
})


app.listen(5000)
