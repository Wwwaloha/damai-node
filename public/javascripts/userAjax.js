$(function() {
  var account = location.search.substring(1).split("=")[1]
  $("#save").click(function(){
    var username = document.getElementsByName("username")[0].value
    var sex = $(".sex input:checked").val()
    var birthday = document.getElementsByName("birthday")[0].value
    $.ajax({
      url:"/userInfo/update",
      type: "post",
      dataType: "json",
      data: {
        account: account,
        username: username,
        sex: sex,
        birthday: birthday
      },
      success: function(data) {
        console.log(data.data.msg)
        if(data.data.msg == "success") {
          $(".inform").after('<div class="alert alert-success" role="alert">保存成功</div>')
          $("#save").attr("disabled","disabled")
          return false  
        }else{
          $(".inform").after('<div class="alert alert-danger" role="alert">保存失败</div>')
          return false
        }
      },
      error: function(err){
        console.log(err)
      }
    })
  })
  $("#repair").click(function(){
    $(".alert").remove()
    $("#save").removeAttr("disabled")
  })
})