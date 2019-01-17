var express = require('express');
var router = express.Router();
var detail = require('../models/db')

/* GET home page. */
router.get('/', function(req, res, next) {
    var name = req.query.name
    var type = req.query.type
    var sql = `select * from ${type} where name= ?` 
    detail.query(sql,[name],function(rows) {
      console.log(rows)
      res.render('detail', { 
        detail: rows,
        ticketStatus: rows[0].ticketStatus
       });
    })
});

module.exports = router;
