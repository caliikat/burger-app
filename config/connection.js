// this file is used to connect to my database
// setup connection to Node to MySQL in this connection js file
var mysql = require('mysql');



//got this for heroku deployment... fingers crossed 

var connection;
	if(process.env.JAWSDB_URL) { 
		connection = mysql.createConnection(process.env.JAWSDB_URL);
	} else {
 	    connection = mysql.createConnection({
  		    host     : 'localhost',
  		    user     : 'root',
  		    password : 'root',
  		    database : 'burgers_db'
	   });
  }
	connection.connect(function(err) {
  		if (err) {
    		console.error('error connecting: ' + err.stack);
    	return;
  	};

});

module.exports = connection;