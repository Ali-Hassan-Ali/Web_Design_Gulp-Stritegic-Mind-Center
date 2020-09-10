$('document').ready(function () {

    $('.navbar-nav .nav-link').click(function () {
        $('.navbar-nav .nav-link').removeClass('active');
        $(this).addClass('active');
    });/*end of nab-link active*/

    $('a').click(function () {
        var sectionTo = $(this).attr('href');
        $('html, body').animate({
            scrollTop: $(sectionTo).offset().top
        }, 1000);
    });/*end of Smooth Scroll*/

    $(document).ready(function () {
        $('.skitter-large').skitter({
            numbers: true,
            dots: false
        });
    });/*end of skitter*/

    $(".owl-poster").owlCarousel({
        loop: true,
        dots: false,
        nav: false,
        stagePadding: 20,
        margin: 10,
        responsive: {
            0: {
                items: 1
            },
            600: {
                items: 2
            },
            500: {
                items: 2
            },
            900: {
                items: 3
            },
            1000: {
                items: 4
            }
        }//end section responsive

    });/*end of owl-poster*/

    $(".owl-trainer").owlCarousel({
        loop: true,
        dots: false,
        nav: false,
        margin: 10,
        items: 2
    });/*end of owl-trainer*/

    $('.min-course').click(function () {
        $(this).next().slideToggle(500);
        //$('div').not( $(this).next() ).slide(500);
        $('div .page-dev').not($(this).next());
    });/*end of click function show category meu */

});//end of Document ready function

$(window).on('load', function () {

    $('.ff').fadeOut(5000, function () {
        $(this).remove('.ff');
        $('body').css('overflow', 'auto');
    });
});/*end of Loading */