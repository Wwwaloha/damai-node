var express = require('express');
var router = express.Router();
var index = require("../models/db");

/* GET home page. */
router.get('/', function(req, res, next) {
  if(req.query.account){
    var user = req.query.account
  }
  console.log(user)
  index.query('select * from `index` where logo=1;select * from `index` where type="concert";select * from `index` where type="opera";select * from `index` where type="match";select * from `index` where type="family";',[],function(rows) {
    res.render('index', {
      special: rows[0],
      concert: rows[1],
      opera: rows[2],
      match: rows[3],
      family: rows[4],
      account: user
    });
  });
});

module.exports = router;
