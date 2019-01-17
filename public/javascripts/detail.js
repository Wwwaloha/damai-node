$(function(){
    $("#one").hide();
    $(".place-nav").hide();
    $(".order-btn").hide();
    $(".buy-intro").hide();
    $(".pay-way").hide();
    $(window).scroll(function(){
        var scrollTop = $(document).scrollTop();
        if(scrollTop > 732){
            $(".t-line").css("display","none");
            $(".nav").addClass("fixed");
            $(".order-btn").css("left","620px").show().animate({
                left:"830px"
            },1000);
        }else {
            $(".order-btn").css("left","620px").stop(1).hide();
            $(".t-line").css("display","block");
            $(".nav").removeClass("fixed");
        }
    });
    $(".hot").hover(function(){
        for(var i = 0;i < $(".hot").length; i++ ){
            if(i === $(".hot").index(this)){
                $(".hot").eq(i).hide();
                $(".hot-post").eq(i).show();
            }else if($(".hot-post").not(".hot").eq(i).is(':visible')){
                $(".hot-post").hide();
                $(".hot").show();
            }
        }
    });
    $(".sweep").hover(function(){
        $(".sweep").addClass("else-img");
    });
    $(".province-a").click(function(){
        $(".place-nav").toggle();
    });
    $("#pi").click(function(){
        $(".buy-intro").hide();
        $(".pay-way").hide();
        $(".pd-detail").show();
        $("#bi").removeClass("active");
        $("#pw").removeClass("active");
        $(".t-line").not("#pi").remove();
        $("#pi").addClass("active").prepend('<i class="t-line">');
        $(".nav").removeClass("fixed");
    });
    $("#bi").click(function(){
        $(".pd-detail").hide();
        $(".pay-way").hide();
        $(".buy-intro").show();
        $("#pi").removeClass("active");
        $("#pw").removeClass(".active");
        $(".t-line").not("#bi").remove();
        $("#bi").addClass("active").prepend('<i class="t-line">');
        $(".nav").removeClass("fixed");
    });
    $("#pw").click(function(){
        $(".buy-intro").hide();
        $(".pd-detail").hide();
        $(".pay-way").show();
        $("#pi").removeClass("active");
        $("#bi").removeClass("active");
        $(".t-line").not("#pw").remove();
        $("#pw").addClass("active").prepend('<i class="t-line">');
        $(".nav").removeClass("fixed");
    })
    $(".backTop").click(function(){
        $("html,body").animate({scrollTop:"0px"},800);
    })
    $(".tickets").click(function(){
      $(this).toggleClass("select_a")
      if($(this).hasClass("select_a")) {
        $(this).attr("data-select","true")
      }else{
        $(this).attr("data-select","false")
      }
    })
});

// function selectIt(ele) {
//   // $(".tickets").not(this).removeClass("select_a")
//   $(ele).
//   // $(".tickets").not(this).attr("data-select","false")
// }