var express = require('express');
var router = express.Router();
var resetInfo = require('../models/db')

/* GET home page. */
router.get('', function(req, res, next) {
  var account = req.query.account
  console.log(account)
  resetInfo.query("select * from user where account=?",[account],function(info){
    res.render("userInfo",{userInfo: info})
  })
});

router.post('/update',function(req,res) {
  var account = req.body.account
  var username = req.body.username
  var sex = req.body.sex
  var birthday = req.body.birthday
  resetInfo.query("select * from user where account=?",[account],function(rows){
    if(rows) {
      resetInfo.query(
        "update user set username=?,sex=?,birthday=? where account= ?;select * from user where account=?",
        [username,sex,birthday,account,account],
        function(result){
          console.log("更新结果",result)
          if(result) {
            res.send({data: {
              msg: "success",
              userInfo: result[1] 
            }})
            return false
          }
      })
    }else{
      res.render("userInfo",{msg: "您未登录，请先登录"})
    }
  })
})
module.exports = router;
