/**
 * Created by Dawid on 01.01.2017.
 */
function pushAjaxHistory(urlPath, title) {
    if (title == undefined) {
        title = document.title;
    }
    document.title = title;
    window.history.pushState({page: 'ajax-' + title}, title, urlPath);
}

function setPageBar(size, callback) {
    console.log("Page animate: "+size);
    function animate(size) {
        $(".page-loader").fadeIn("normal", function () {
            $(".page-loader-progress").stop().animate({
                width: size+"%"
            }, 200, function () {
                if (size == 100) {
                    $(".page-loader").stop().fadeOut("normal", function () {
                        $(".page-loader-progress").css("width", "0%");
                    });
                }
                if (callback != undefined) {
                    callback();
                }
            });
        });
    }

    var page_loader_progress = $(".page-loader-progress");
    animate(size);
}

$(document).ready(function () {
    //History listener
    window.addEventListener("popstate", function(e) {
        location.href = location.pathname;
    });

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

    //Menu ajax
    $(".page-sidebar").on("click", "a", function (event) {
        var link = $(this).attr("href");
        var title = "TCM - " + $(this).text();
        if (link != "javascript:;" && $(this).hasClass("ajax-link"))
        {
            event.preventDefault();
            $("#page-content").stop().fadeTo(100, 0.7);
            pushAjaxHistory(link.replace("/ajax/", "/"), title);
            setPageBar(50);
            $.ajax({
                url: link,
            }).done(function (msg) {
                $("#page-content").html(msg);
                $("#page-content").stop().fadeTo(100, 1);
                setPageBar(100);
            });
        }
    });
});