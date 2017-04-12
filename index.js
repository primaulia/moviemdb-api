var express = require('express')
var app = express()

app.set('view engine', 'ejs')

app.use(express.static('public'))

app.get('/', (req, res) => {
  res.render('home')
})

var port = 4000
app.listen(port, function () {
  console.log('app is running on ' + port)
})
