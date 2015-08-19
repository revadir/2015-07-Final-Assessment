/**
 * Created by revadir on 8/18/15.
 */
var express = require('express'),
    morgan = require('morgan'),
    bodyParser = require('body-parser'),
    fs = require('fs'),
    request = require('request');

/* UGLY */
var GIPHY_API_KEY='dc6zaTOxFJmzC';
var GIPHY_SEARCH_END_POINT='http://api.giphy.com/v1/gifs/search?';
/* UGLY */

var app = express();

var port = process.env.PORT || 8000;
app.listen(port);
console.log('Server is listening on port ' + port);

// create a write stream (in append mode)
var accessLogStream = fs.createWriteStream(__dirname + '/access.log', {flags: 'a'})

// setup the logger
app.use(morgan('combined', {stream: accessLogStream}))

module.exports = app;

app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());
app.use(express.static(__dirname + '/client'));

app.get('/', function(req, res) {
  res.sendFile(__dirname + '/client/index.html');
});

app.get('/search', function(req, res) {
  var searchText = req.query['searchText'];

  // go get the images from Giphy...
  request({
    url: GIPHY_SEARCH_END_POINT + 'q=' + searchText + '&limit=10&api_key=' + GIPHY_API_KEY,
    method: 'GET',
  }, function(error, response, body){
    if(error) {
      console.log(error);
      res.send(error);
    } else {
      console.log('sending back', response.body);
      res.status(200).send(response.body);
    }
  });
});
