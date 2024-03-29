$("document").ready(function () {

    $(".navbar-nav .nav-link").click(function () {
        $(".navbar-nav .nav-link").removeClass("active"),
            $(this).addClass("active")
    }),

    $("a").click(function () {
        var e = $(this).attr("href");
        $("html, body").animate({scrollTop: $(e).offset().top}, 1e3);
    }),

    $(document).ready(function () {
        $(".skitter-large").skitter({numbers: !0, dots: !1});
    }),/*end of document ready*/

    $(".owl-poster").owlCarousel({
        loop: !0,
        dots: !1,
        nav: !1,
        stagePadding: 20,
        margin: 10,
        responsive: {0: {items: 1}, 600: {items: 2}, 500: {items: 2}, 900: {items: 3}, 1e3: {items: 4}}
    });/*end of owl-poster*/

    $(".owl-trainer").owlCarousel({
        loop: !0,
        dots: !1,
        nav: !1,
        margin: 10,
        items: 2,
        responsive: {
            0: {
                items: 1
            }, 600: {
                items: 2
            }, 500: {
                items: 2
            }, 900: {
                items: 2
            },
        }
    });/*end of qwl-trainer*/

    $(".min-course").click(function () {
        $(this).next().slideToggle(500),
            $("div .page-dev").not($(this).next())
    });

    $("html").niceScroll({interval: 9e3});/*end of nice Scroll*/

    $("#ali").fitText("1.0", {minFontSize: "32px", maxFontSize: "37px"});
    $(".text").funnyText({speed: 500});

});/*end of document ready*/

$(window).on("load", function () {
    $(".ff").fadeOut(5e3, function () {
        $(this).remove(".ff");
        $("body").css("overflow", "auto");
    });
});/*end of loading*/
