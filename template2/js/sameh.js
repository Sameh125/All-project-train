$(function () {
    // Trigger Nice Scroll Plugin

    $("body").niceScroll({
        cursorcolor: "#f7600e",
        cursorwidth: "10px",
        cursorborderradius: 0,
        cursorborder: "1px solid #f7600e",
    });

    // Change Header Height

    $(".header").height($(window).height());

    // Scroll To Features

    $(".header .arrow i").click(function () {
        $("html, body").animate(
            {
                scrollTop: $(".features").offset().top,
            },
            1000
        );
    });

    $(".hire").click(function () {
        $("html, body").animate(
            {
                scrollTop: $(".our-team").offset().top,
            },
            3000
        );
    });

    // Show Hidden Items From Work

    $(".show-more").click(function () {
        $(".our-work .hidden").fadeIn(2000);
    });

    // Check Testimonials

    var leftArrow = $(".testim .fa-angle-left"),
        rightArrow = $(".testim .fa-angle-right");

    function checkClients() {
        $(".client:first").hasClass("active")
            ? leftArrow.fadeOut()
            : leftArrow.fadeIn();

        $(".client:last").hasClass("active")
            ? rightArrow.fadeOut()
            : rightArrow.fadeIn();
    }

    checkClients();

    $(".testim i").click(function () {
        if ($(this).hasClass("fa-angle-right")) {
            $(".testim .active").fadeOut(100, function () {
                $(this)
                    .removeClass("active")
                    .next(".client")
                    .addClass("active")
                    .fadeIn();
                checkClients();
            });
        } else {
            $(".testim .active").fadeOut(100, function () {
                $(this)
                    .removeClass("active")
                    .prev(".client")
                    .addClass("active")
                    .fadeIn();
                checkClients();
            });
        }
    });
});
