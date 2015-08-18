/**
 * Created by revadir on 8/18/15.
 */
var express = require('express'),
    bodyParser = require('body-parser');

var app = express();

app.listen(8000);
console.log('Server is listening on port 8000');

module.exports = app;

app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());
app.use(express.static(__dirname + '/client'));

app.get('/', function(req, res) {
  res.sendFile(__dirname + '/client/index.html');
});

//app.post('/signin', userController.signin);
