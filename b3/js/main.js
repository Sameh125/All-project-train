$(function () {
    // Nice Scroll

    $("html").niceScroll({
        cursorcolor: "#e41b17",
        cursorwidth: "12px",
        cursorborderradius: 0,
        cursorborder: "none",
    });

    $(".carousel").carousel({
        interval: 5000,
    });
    $(
        ".img-responsive, .thumbnail > img, .thumbnail a > img, .carousel-inner > .item > img, .carousel-inner > .item > a > img"
    ).height($(window).height());

    $(window).resize(function () {
        $(
            ".img-responsive, .thumbnail > img, .thumbnail a > img, .carousel-inner > .item > img, .carousel-inner > .item > a > img"
        ).height($(window).height());
    });

    // Show Color Option Div When Click On The Cog
    $(".fa-cog").click(function () {
        $(".color-option").toggle(700);
    });

    // Change Theme Color On Click

    var colorLi = $(".color-option ul li");

    colorLi
        .eq(0)
        .css("backgroundColor", "#e41b17")
        .end()
        .eq(1)
        .css("backgroundColor", "#f7600e")
        .end()
        .eq(2)
        .css("backgroundColor", "rgb(228, 38, 213)")
        .end()
        .eq(3)
        .css("backgroundColor", "rgb(0, 154, 255)")
        .end()
        .eq(4)
        .css("backgroundColor", "rgb(255, 213, 0)");

    colorLi.click(function () {
        $("link[href*='theme']").attr("href", $(this).attr("data-value"));
    });

    // Caching The Scroll Top Element

    var scrollButton = $("#scroll-top");

    $(window).on("scroll", function () {
        $(this).scrollTop() >= 700 ? scrollButton.show() : scrollButton.hide();

        scrollButton.on("click", function () {
            $("html,body").stop().animate({ scrollTop: 0 }, 600);
        });
    });
});

// Loading Screen

$(window).on("load", function () {
    // loading Element
    $(".loading-overlay .sk-cube-grid").fadeOut(3000, function () {
        // Show The Scroll
        $("body").css("overflow", "auto");
        $(this)
            .parent()
            .fadeOut(2000, function () {
                $(this).remove();
            });
    });
});
