$(window).scroll(function () {
    if ($(document).scrollTop() > 50) {
        //$('nav').addClass('shrink');
        $('.YNCName').css('font-size', '0px');
        $('.CanvassyName').css('font-size', '20pt');
        $('.CanvassyName').css('margin-top', '-20px');
        $('.CanvassyName').css('margin-bottom', '-30px');
        $('#userName').css('font-size', '0px');
        $('#profilePic').css('margin-top', '10px');
        $('#profilePic').css('width', '35px');
    } else {
        //$('nav').removeClass('shrink');
        $('.YNCName').css('font-size', '15pt');
        $('.CanvassyName').css('font-size', '50pt');
        $('.CanvassyName').css('margin-top', '-5px');
        $('.CanvassyName').css('margin-bottom', '-15px');
        $('.userSection').css('visibility', 'visible');
        $('#profilePic').css('width', '50px');
        $('#userName').css('font-size', '12px');
        $('#profilePic').css('margin-top', '40px');
        $('#profilePic').css('width', '50px');
    }
});