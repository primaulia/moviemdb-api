// for calling external api
var unirest = require('unirest')

// express starts here
var express = require('express')
var app = express()

app.set('view engine', 'ejs')

app.use(express.static('public'))

app.get('/', (req, res) => {
  res.render('home')
})

app.get('/yoda', (req, res) => {
  // 1. get a random famous quotes X
  // 2. get the output from the quotes api X
  // 3. pass the data to yoda api
  // 4. print the results out

  // These code snippets use an open-source library. http://unirest.io/nodejs
  unirest.post('https://andruxnet-random-famous-quotes.p.mashape.com/?cat=famous')
  .header('X-Mashape-Key', 'y2WFWXi1A1mshLXvjdIjez35utEGp1FW9JgjsnMjbWIdC6nINL')
  .header('Content-Type', 'application/x-www-form-urlencoded')
  .header('Accept', 'application/json')
  .end(function (output) {
    var jsonOutput = JSON.parse(output.body)
    var quote = jsonOutput.quote
    unirest.get('https://yoda.p.mashape.com/yoda?sentence=' + quote)
    .header('X-Mashape-Key', 'y2WFWXi1A1mshLXvjdIjez35utEGp1FW9JgjsnMjbWIdC6nINL')
    .header('Accept', 'text/plain')
    .end(function (output) {
      console.log(quote)
      res.render('yoda', {
        quote: quote,
        yoda: output.body
      })
    })
  })

  // These code snippets use an open-source library.
})

var port = process.env.PORT || 4000
app.listen(port, function () {
  console.log('app is running on ' + port)
})
