$(document).ready(function() {
    $(".scroll-right").click(function() {
        $(this).siblings(".scrollable-section").animate({
            scrollLeft: "+=200px"
        }, "fast");
    });

    $(".scroll-left").click(function() {
        $(this).siblings(".scrollable-section").animate({
            scrollLeft: "-=200px"
        }, "fast");
    });
});
