var express = require('express');
var router = express.Router();
var search = require('../models/db')

/* GET users listing. */
router.get('/', function(req, res, next) {
  var type = req.query.type
  console.log("type",type)
  if(type) {
    search.query(`select * from ${type} limit 5 `,[],function(result) {
      res.render("search",{catalog: result})
    })
  }
});

router.post('/loadmore',function(req,res) {
  var sql = req.body.sql
  search.query(sql,[],function(rows) {
    console.log(rows)
    res.json(rows)
  })
})

module.exports = router;