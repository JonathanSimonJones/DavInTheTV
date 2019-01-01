$(function () {
    var headerHeight = $("#header").height();
    var bodyHeight = $("#main").height();
    var footerHeight = $("#footer").height();
    var documentTotalHeight = headerHeight + bodyHeight + footerHeight;

    if (documentTotalHeight < $(window).height()) {
        $("#footer").addClass("footer-abs-bottom");
    }

    $("#hide-cookie-notification-button").click(function() {
        $("#cookies-notification").hide();
    });
});