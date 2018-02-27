
//this is the orm version of the app. Sequelized attempt still TBD... 

//an ORM is technique for converting data between incompatible type systems using object-oriented programming languages.

//Implementation-specific details of storage drivers are generally wrapped in an API in the programming language in use, 
//exposing methods to interact with the storage medium in a way which is simpler and more in line with the paradigms of 
//surrounding code.

var connection = require("../config/connection.js");

var orm = {

	//this shows entire table
	selectAll: function(tableInput, cb) {
			var query = 'SELECT * FROM ' + tableInput + ';';
			connection.query(query, function(err, result) {
				if (err) throw err;	
				cb(result);
			});
	},

	//this adds row into database (row into table) 
	insertOne: function(table, cols, vals, cb){
			var query = 'INSERT INTO ' + table 
					+ ' (' + cols.toString() + ') '
					+ 'VALUES (';
			var arr = [];
			for (var i =0; i < vals.length; i++){
				arr.push('?');
			};
			query = query + arr.toString() + ') ';
			
			connection.query(query, vals, function(err, result) {
				if (err) throw err;
				cb(result);
			});
	},
//this updates order into database (row into table) 
	updateOne: function(table, colVals, condition, cb){
			var arr=[];
			for (var key in colVals) {
				if ( colVals.hasOwnProperty(key)) {
					arr.push(key + '=' + colVals[key]);
				}
			}
			
			var query = 'UPDATE ' + table + ' SET ' 
				   + arr.toString() + ' WHERE ' + condition;
			
			connection.query(query, function(err, result) {
				if (err) throw err;
				cb(result);
			});
	},

	//this removes order into database (row into table) 

	delete: function(table, condition, cb) {
		var query = 'DELETE FROM ' + table + ' WHERE '
					+ condition;

		connection.query(query, function(err, result) {
			if (err) throw err;
			cb(result);
		});
	}
};

module.exports = orm;