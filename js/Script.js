
$(document).ready(function (){

    $('header nav ul li a').on('click',function (){
        $(this).addClass('active').parent().siblings().find('a').removeClass('active');
    });


    $(window).on('scroll',function (){
        var win = $(window).scrollTop();
        console.log(win);

        if (win <= 300) {
            $("header nav ul li a:contains('Home')").addClass('active');
        }
        else {
            $("header nav ul li a:contains('Home')").removeClass('active');
        }
    });
});