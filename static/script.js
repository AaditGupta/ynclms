$(window).scroll(function () {
    if ($(document).scrollTop() > 15 ) {
        //$('nav').addClass('shrink');
        $('.YNCName').css('font-size', '0px');
        $('.CanvassyName').css('font-size', '20pt');
        $('.CanvassyName').css('margin-top', '-20px');
        $('.CanvassyName').css('margin-bottom', '-30px');
        $('#userName').css('font-size', '0px');

        //$('.userSection').css('height', '0px');
        //$('#profilePicLink').css('visibility: hidden');
        $('#profilePic').css('margin-top', '10px');
        $('#profilePic').css('width', '35px');
        $('#navbarContainer').css('margin-bottom', '50px');
        $('#navigationPane').css('padding-top', '100px');
    } else {
        //$('nav').removeClass('shrink');
        $('.YNCName').css('font-size', '12pt');
        $('.CanvassyName').css('font-size', '50pt');
        $('.CanvassyName').css('margin-top', '-5px');
        $('.CanvassyName').css('margin-bottom', '-15px');
        $('#userName').css('font-size', '12px');
        $('#profilePic').css('margin-top', '40px');
        $('#profilePic').css('width', '50px');
        $('#navbarContainer').css('margin-bottom', '200px');
        $('#navigationPane').css('padding-top', '200px');
    }
});
