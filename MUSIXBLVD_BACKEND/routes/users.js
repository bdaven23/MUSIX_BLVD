var express = require('express');
var router = express.Router();
var mysql = require('mysql');

var connection = mysql.createConnection({
  host:'musi41488242943',
  user:'musi41488242943',
  password:'Jdfx8N2ubpWL*',
  database:'wp_5n1qn50gj7_users',
})


router.post('/', function(req, res, next) {
  var user_login = req.body.user_login;
  var user_pass = req.body.user_pass;

  connection.query(
    "SELECT * FROM user WHERE user_login = ? AND user_pass = ?",
    [user_login, user_pass], function (err, row, field) {
      if (err) {
        console.log(err);
        res.send({ 'success ': false, 'message':'Could not connect to db'});
      }
      if (row.lenth > 0) {
        res.send({ 'success ': true, 'user':row[0].user_login});
      }else{
        res.send({ 'success ': false, 'message':'User not found'});
      }
  });
});

module.exports = router;
