
//express app 
//this is a MVC app. this server file gets executed by the package.json file

var express = require('express');
var app = express();

//express app 
var routes = require('./controllers/burgers_controller.js');

//Lets you use HTTP verbs such as PUT or DELETE in places where the client doesn't support it (tutor help!)
var methodOverride = require('method-override');
var bodyParser = require('body-parser');

// *********************************************************************************
// html-routes.js - this file offers a set of routes for sending users to the various html pages

// =============================================================
var path = require("path");

  // app.get("/", function(req, res) {
  //   res.sendFile(path.join(__dirname, "../views/"));
  // });

app.use(express.static(process.cwd() + '/public'));
app.use(bodyParser.urlencoded({ extended: false }))
app.use(methodOverride('_method'));

var exphbs = require('express-handlebars');
app.engine('handlebars', exphbs({defaultLayout: 'main'}));
app.set('view engine', 'handlebars');

app.use('/', routes);



app.set('port', (process.env.PORT || 3000));

var server = app.listen(app.get('port'), function () {
    console.log("Listening on port %s...", server.address().port);
});
  