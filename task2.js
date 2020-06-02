var mysql      = require('mysql');
var connection = mysql.createConnection({
  host     : 'localhost',
  user     : 'root',
  password : 'varsik',
  database : 'world'
});
 

var processor = function(){
    //Select all customers and return the result object:
    connection.query("SELECT * FROM city ", function (err, result, fields) {
      if (err) throw err;
      console.log(result[0].Name);
      //connection.end();
    });
  }
   
  var xxx = connection.connect(processor);
  console.log('connected');