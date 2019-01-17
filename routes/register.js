var express = require('express');
var router = express.Router();
var user = require('../models/db')

/* GET home page. */
router.get('/', function(req, res, next) {
    res.render('register');
});

router.post('/',function(req,res) {
    var account = req.body.account
    var password = req.body.password
    var flag = global.flag
    console.log("req",req.body)
    console.log("flag",flag)
    if(account !='' && password != '') {
      user.query(`select * from user where account= ?;`,[account],function(rows) {
        console.log("rows",rows)
        if(rows && rows.length>0) {
          res.render('register',{tip: "您已注册，请直接登陆！"})
        }else{
          user.query(`INSERT INTO user(account,password) VALUES(?,?)`,[account,password],function(result){
            console.log("result",result)
            if(result) {
                res.redirect("/login")
            }
          })
        }
      })
    }else{
      res.render("register",{tip:"请填入相关信息"})
    }
})

module.exports = router;
