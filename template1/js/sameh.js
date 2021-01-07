$(function () {
    // Adjust Header Height

    var myHeader = $(".header"),
        mySlider = $(".slider");

    myHeader.height($(window).height());

    $(window).resize(function () {
        myHeader.height($(window).height());

        // Adjust Slider List Item Center

        mySlider.each(function () {
            $(this).css(
                "paddingTop",
                ($(window).height() - $(".slider li").height()) / 2
            );
        });
    });

    // Links Add Active Class

    $(".links li a").click(function () {
        $(this).parent().addClass("active").siblings().removeClass("active");
    });
    // Adjust Slider List Item Center

    mySlider.each(function () {
        $(this).css(
            "paddingTop",
            ($(window).height() - $(".slider li").height()) / 2
        );
    });

    // Trigger The Box Slider

    mySlider.bxSlider({
        pager: false,
    });

    // Smooth Scroll To Div

    $(".links li a").click(function () {
        $("html,body").animate(
            {
                scrollTop: $("#" + $(this).data("value")).offset().top,
            },
            1000
        );
    });

    // Our Auto Slider Code
    (function autoSlider() {
        $(".slider1 .active").each(function () {
            if (!$(this).is(":last-child")) {
                $(this)
                    .delay(3000)
                    .fadeOut(1000, function () {
                        $(this)
                            .removeClass("active")
                            .next()
                            .addClass("active")
                            .fadeIn();
                        autoSlider();
                    });
            } else {
                $(this)
                    .delay(3000)
                    .fadeOut(1000, function () {
                        $(this).removeClass("active");
                        $(".slider1 div").eq(0).addClass("active").fadeIn();
                        autoSlider();
                    });
            }
        });
    })();

    // Trigger MixitUp

    $("#Container").mixItUp();

    // Adjust Shuffle Links
    $(".shuffle li").click(function () {
        $(this).addClass("selected").siblings().removeClass("selected");
    });

    // Trigger Nice Scroll
    $("body").niceScroll({
        cursorcolor: "#1abc9c",
        cursorwidth: "10px",
        cursorborder: "1px solid #1abc9c",
    });
});
