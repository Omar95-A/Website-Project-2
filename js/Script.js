
$(document).ready(function (){
    $('header nav ul li a').on('click',function (){
        $('header nav ul li a').removeClass('active');
        $(this).addClass('active');
    });
});