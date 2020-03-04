$(document).ready(function () {
    $('.js-menu-item').click(function (e) {
        e.preventDefault();
        var target = $(this).attr('href');
        var targetPos = Number($(target).offset().top);
        $('html, body').animate({scrollTop:targetPos}, 1000);
    });
    $('.top').click(function(e){
        e.preventDefault();
        $('html, body').animate({scrollTop:0}, 1000);
    });
    $(window).scroll(function(){
        var scrollPos = $(window).scrollTop();
        //menu至對應區域時顯示item
        $('.js-menu-item').each(function(){
            var target = $(this).attr('href');
            var targetPosDef = $(target).offset().top;
            var targetPos = targetPosDef -100;
            var targetHeight = $(target).outerHeight();
            if ( targetPos <= scrollPos && targetPos + targetHeight >= scrollPos ){
                $('.js-menu-item').removeClass('menu-item-active');
                $(this).addClass('menu-item-active');
            } else{
                $(this).removeClass('menu-item-active');
            }
        });
    });
});