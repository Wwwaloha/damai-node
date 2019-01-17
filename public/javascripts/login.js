$(".errorTip").hide()
function check() {
    var account =  document.getElementsByName("account")[0].value
    var phonePatt = /^(13[0-9]|14[5|7]|15[0|1|2|3|5|6|7|8|9]|18[0|1|2|3|5|6|7|8|9])\d{8}$/;
    if(!phonePatt.test(account)){
      $(".errorTip").show().html("手机号码有误")
      return false
    }else if(account.length >11){
      $(".errorTip").show().html("手机号码长度不能大于11位")
      return false
    }else if(account.length <11){
      $(".errorTip").show().html("手机号码长度不能小于11位")
      return false
    }else{
      $(".errorTip").hide()
    }
}

function hide() {
  $(".message_tip").css("display","none")
}
