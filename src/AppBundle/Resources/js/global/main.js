/**
 * Created by Dawid on 01.01.2017.
 */


$(document).ready(function () {
    //Auto height
    $("#dp1").datepicker();

    var pheight = $(".page-sidebar").height() + 100;
    $(".page-content").css("min-height", pheight + "px");

    //Toggle sub-menu in main menu
    $(".page-sidebar").on("mouseenter", ".nav-item", function () {
        var _li = $(this);
        var _submenu = $(_li).children(".sub-menu");

        if (!$(_li).hasClass("open")) {
            $(_li).addClass("open");
        }
        $(_submenu).removeClass("collapse").addClass("open");

        $(_submenu).attr("aria-expanded", "true");
    });
    $(".page-sidebar").on("mouseleave", ".nav-item", function () {
        var _li = $(this);
        var _submenu = $(_li).children(".sub-menu");

        if ($(_li).hasClass("open")) {
            $(_li).removeClass("open");
        }
        $(_submenu).removeClass("open").addClass("collapse");

        $(_submenu).attr("aria-expanded", "false");
    });
});