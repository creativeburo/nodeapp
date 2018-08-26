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

/* GET home page. */
router.get('/', function(req, res, next) {

    connection.query('SELECT * FROM td_Cat', function (error, results, fields) {
        if (error) throw error;
        res.send(results[0]);

 /* res.render('index', { title: 'Express' }); */
});

    connection.end();

module.exports = router;
