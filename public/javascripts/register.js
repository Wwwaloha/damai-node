
$(".errorTip").hide()
function check() {
  var account =document.getElementsByName("account")[0].value
  var password =document.getElementsByName("password")[0].value
  var confirmPwd =document.getElementsByName("confirmPwd")[0].value
  var rule = document.getElementById("rule")
  console.log("勾选",rule.checked)
  if(!rule.checked) {
    $("#checkTip").show().html("请勾选协议")
  }else{
    $("#checkTip").hide()
  }
  if(account == ''|| password == '' || confirmPwd == '' || !rule.checked) {
    return false
  }
}
function checkPhone(val) {  
    var phonePatt = /^(13[0-9]|14[5|7]|15[0|1|2|3|5|6|7|8|9]|18[0|1|2|3|5|6|7|8|9])\d{8}$/;
    if(val) {
        if(!phonePatt.test(val)){
            $("#phoneError").show().html("手机格式不对！");
        }else{
            $("#phoneError").hide()
        }
    }else{
        $("#phoneError").show().html("必填，请输入手机账号！");
    }
}
function checkPwd(pwd) {
    var passPatt = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])[a-zA-Z0-9]{8,16}$/;
    if(pwd) {
        if(!passPatt.test(pwd)){
            $("#passError").show().html("密码格式不对，请重输！");
        }else{
            $("#passError").hide()
        }
    }else{
        $("#passError").show().html("必填，请输入密码！");
    }
}
function checkconfirm(confirmpwd) {
    var firstPwd = document.getElementsByName("password")[0].value
    if(confirmpwd) {
        if(confirmpwd != firstPwd) {
            $("#confirmPwdError").show().html("两次密码不一致，请重输！");
        }else{
            $("#confirmPwdError").hide()
        }
    }else{
        $("#confirmPwdError").show().html("必填，请再次输入密码！");
    }
}