//The Model contains what is often called business logic, 
//or all the data and information manipulated by your system. 
//The View contains the objects that display the data, and the 
//Controller manages the interaction with the user and mediates between the Model and the View.

//this this model contains the logic that the controller pushes to the database. these variables go into the views

var orm = require('../config/orm.js');

var burgers = {

	selectAll: function(cb) {
		orm.selectAll('burgers', function(res) {
			cb(res);
		});
	},

	insertOne: function(cols, vals, cb) {
		orm.insertOne('burgers', cols, vals, function(res) {
			cb(res);
		});
	},

	updateOne: function(colVals, condition, cb) {
		orm.updateOne('burgers', {devoured: colVals}, 
					  'id = ' + condition, function(res) {
			cb(res);
		});
	},

	delete: function(condition, cb) {
		orm.delete('burgers', 'id = ' + condition, function(res){
			cb(res);
		});
	}
};

module.exports = burgers;