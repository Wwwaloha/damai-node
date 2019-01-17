$(function () {

    var dateFirst = $('#date_a');
    var dateLast = $('#date_b');
    //引入日历组件
    dateFirst.cxCalendar();
    dateLast.cxCalendar();
    //获取当前时间：年/月/日
    function getNowDate() {
        var date = new Date();
        var seperator = '-';
        var year = date.getFullYear();
        var month = date.getMonth()+1;
        var strDate = date.getDate();
        if (month>=1 && month<=9) {
            month = "0" + month;
        }
        if (strDate>=0 && strDate<=9) {
            strDate = "0"+ strDate;
        }
        var currentdate = year + seperator + month + seperator + strDate;
        return currentdate;
    }
    var now = getNowDate();

    //将日期设置为单日可选
    dateFirst.cxCalendar({
        startDate: now
    });

    //双联动日期
    var dateFirstApi;
    var dateLastApi;
    dateFirst.cxCalendar(function (api) {
        dateFirstApi = api;
    });
    dateLast.cxCalendar(function (api) {
        dateLastApi = api;
    });

    dateFirst.on('change',function () {
        var firstTime = parseInt(dateFirstApi.getDate('TIME'),10);
        console.log(firstTime);
        var lastTime = parseInt(dateLastApi.getDate('TIME'),10);
        if (lastTime<firstTime) {
            dateLastApi.clearDate();
        }
        dateLastApi.setOptions({
            startDate:firstTime
        });
        dateLastApi.setOptions({
            startDate: firstTime
        });
        dateLastApi.gotoDate(firstTime);
        dateLastApi.show();
    })
});
$(function () {
    var $wrapper = $('.tab-wrapper'),
        $allTabs = $wrapper.find('.tab-content > ul'),
        $tabMenu = $wrapper.find('.tab-menu li');

    $allTabs.not(':first-of-type').hide();

    //给每个选项加上data-tab属性，递增
    $tabMenu.each(function(i) {
        $(this).attr('data-tab', 'tab'+i);
    });

    $allTabs.each(function(i) {
        $(this).attr('data-tab', 'tab'+i);
    });

    $tabMenu.on('click', function() {
        //获取点击选项的data-tab属性值，以及祖先元素tab-wrapper
        var dataTab = $(this).data('tab'),
            $getWrapper = $(this).closest($wrapper);
        console.log(dataTab);
        console.log($getWrapper);
        //去除选项中的active属性赋给点击的选项
        $getWrapper.find($tabMenu).removeClass('active');
        $(this).addClass('active');
        //指定内容隐藏与显示
        $getWrapper.find($allTabs).hide();
        $getWrapper.find($allTabs).filter('[data-tab='+dataTab+']').show();
    });
});
$(function () {
   var $showMoreContent = $('.moreContent>span');
   var $showIcon = $('.moreContent>img')
   var $moreCities = $('.c-c-more');
   $showMoreContent.on('click',function () {
       if ($moreCities.is(':hidden') ){
           $moreCities.show();
           $showMoreContent.text('收起');
           $showIcon.attr('src','images/search/arrow-up.png');
        }else {
           $moreCities.hide();
           $showMoreContent.text('更多');
           $showIcon.attr('src','images/search/arrow-down.png');
       }
   });
});