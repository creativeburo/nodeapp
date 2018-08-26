var express = require('express');
var router = express.Router();

var mysql      = require('mysql');
var connection = mysql.createConnection({
    host     : '145.239.244.116',
    user     : 'c2VchrmDBUsr',
    password : 'bRewrad9UsWE',
    database : 'c2MtcktDb'
});

connection.connect();

connection.query('SELECT * FROM td_Cat', function(err, rows, fields) {
    if (err) throw err;
    console.log('The solution is: ', rows);
});

connection.end();


/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

module.exports = router;
