const express = require('express');
const bodyParser = require('body-parser');
const mysql = require('mysql');

const connection = mysql.createPool({
  host     : 'localhost',
  user     : 'root',
  password : '',
  database : 'devoir'
});

const app = express();

app.get('/users', function (req, res) {
    connection.getConnection(function (err, connection) {

    connection.query('SELECT * FROM users', function (error, results, fields) {
      if (error) throw error;

      res.send(results)
    });
  });
});

app.listen(3000, () => {
 console.log('Go to http://localhost:3000/users so you can see the data.');
});