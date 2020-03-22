window.addEventListener('load', function() {
    document.querySelector('body').classList.add("loaded")
});

$(document).ready(function() {

    // owner
    $("#toggle").click(function() {
        var elem = $("#toggle").text();
        if (elem == "Read More") {
            //Stuff to do when btn is in the read more state
            $("#toggle").text("Read Less");
            $("#text").slideDown();
        } else {
            //Stuff to do when btn is in the read less state
            $("#toggle").text("Read More");
            $("#text").slideUp();
        }
    });
    //  end owner



    $(window).scroll(function() {
        if ($(".navbar").offset().top > 50) {
            $(".fixed-top").addClass("top-nav-collapse");
        } else {
            $(".fixed-top").removeClass("top-nav-collapse");
        }
        $(function() {
            $('a.page-scroll').bind('click', function(event) {
                e.preventDefault();

                var $anchor = $(this);
                $('html, body').animate({
                    scrollTop: $($anchor.attr('href')).offset().top + 10
                }, 1000, 'easeInOutExpo');

            });
        });
    });

    // scrollup btn
    $(window).scroll(function() {

        if ($(window).scrollTop() >= 500) {
            $('.scrollup-btn').fadeIn(500);
        } else {
            $('.scrollup-btn').fadeOut(500);
        }
    });
    $('.scrollup-btn').click(function(e) {
        e.preventDefault();
        $('html, body').animate({
            scrollTop: 0
        }, 1000);
    });





});