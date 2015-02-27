/*global $*/
/*jslint sloppy:true, browser: true, white: true*/
$("h1.page-title").text("My code runs!");
$(window).on('click', function (e) {
    $('img.logo').css({left: e.pageX});
 });

$(window).on('click', function (e) {
    $('.logo').css({left: e.pageX,
                    top: e.pageY});
    $('.logo').toggleClass('rotated');
});

//function randomMargin() {
//    return Math.random() * 200 - 100;
//}
//setInterval(function () {
//    $('.logo').css({
//        'margin-left': randomMargin(),
//        'margin-top': randomMargin()
//    });
//}, 200);
