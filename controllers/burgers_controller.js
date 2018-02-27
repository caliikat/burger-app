//The Model contains what is often called business logic, 
//or all the data and information manipulated by your system. 
//The View contains the objects that display the data, and the 
//Controller manages the interaction with the user and mediates between the Model and the View.

//this controller manages data into mySQL

//dependencies
//express for express app 
var express = require('express');
//for routes 
var router = express.Router();

var burgers = require("../models/burger.js");

	router.get('/', function(req, res) {
		res.redirect('/burgers');
	});

	router.get('/burgers', function(req, res) {
		burgers.selectAll(function(data){
			res.render('index', {burgers: data});
		});
	});

//router/express npm stuff------------------
// cms route loads cms.html
router.get("/screenshots", function(req, res) {
    res.render("screenshots");
  });
	//------------------

	router.post('/burgers/insertOne', function(req, res) {
		burgers.insertOne(['burger_name'], [req.body.burger], function(){
			res.redirect('/burgers');
		});
	});

	router.put('/burgers/updateOne/:id', function(req, res) {

		burgers.updateOne(req.body.devoured, req.params.id, function(){
			res.redirect('/burgers');
		});
	});

	router.delete('/burgers/delete/:id', function (req, res) {
		burgers.delete(req.params.id, function(){
			res.redirect('/burgers');
		});
	});

module.exports = router;