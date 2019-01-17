$(function(){
  var type = location.search.substring(1).split("=")[1]
  var currentId = 5
  var skip = 5
  var max = 20
  $("#loadmore").click(function(){
    $.ajax({
      url: "/search/loadmore",
      type: "post",
      dataType: "json",
      data: {
        sql: `select * from ${type} where id>${currentId} and id<=${max} limit ${skip}`
      },
      success: function(data,status) {
        console.log(data,$(".s-list li:last"))
        console.log("status",status)
        var showHtml = ''
        for(let item of data) {
          showHtml+= `
            <li>
              <a href="#" class="s-cover">
                <img src=${item.imageUrl} />
              </a>
              <div class="s-info">
                <p class="s-title">
                  <a href="#">${item.name}</a>
                </p>
                <p class="s-advert" style=${item.advert == false? "display:none": "display:block"}>${item.advert}</p>
                <p><span class="s-logo s-rili"></span>${item.showTime}</p>
                <p><span class="s-logo s-address"></span>${item.address}</p>
                <p class="s-price"><strong>${item.price}</strong></p>
              </div>  
            </li>`
          if(item.id == max) {
            $("#loadmore").remove()
            $(".loadmore").append('<p style="color: #999;">加载完毕，没有更多商品了！</p>')
          }  
        }
        $(".s-list").append(showHtml)
        currentId+=5
      },
      error: function(err){
        console.log(err)
      }
    })
  })
  
})