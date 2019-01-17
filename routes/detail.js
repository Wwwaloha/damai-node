var express = require('express');
var router = express.Router();
var detail = require('../models/db')

/* GET home page. */
router.get('/', function(req, res, next) {
    if(req.query.account != 'undefined' || !req.query.account) {
      var account = req.query.account
    }else{
      var account = ''
    }
    var name = req.query.name
    var type = req.query.type
    var sql = `select * from ${type} where name= ?;select * from user where account=?` 
    detail.query(sql,[name,account],function(rows) {
      console.log(rows)
      res.render('detail', { 
        detail: rows[0],
        ticketStatus: rows[0][0].ticketStatus,
        userInfo: rows[1],
        account: account
       });
    })
});

module.exports = router;
