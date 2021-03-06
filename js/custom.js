$(document).ready(function() {
    var query = $("#query");
    query.val("");
    var string = window.location.search;
    string = decodeURIComponent(string);
    string = string.split("=");
    if (string[0] == "?q") {
        $("body").css("cursor", "none");
        $("#cursor").show().animate({
            top: "+=315px",
            left: "+=405px"
        }, {
            duration: 3000,
            easing: "easeOutQuint",
            complete: function() {
                $(this).fadeOut(50).delay(50);
                $(".blink").fadeIn(50).delay(1000).fadeOut(50).delay(1000);
                next();
            }
        });
    } else if (string == '') {
        window.location.assign("http://akansh.com/lmsfu/generate.html");
    } else {
        $("#note").animate({
            top: "+=45px"
        }, {
            duration: 1000,
            complete: function() {
                setTimeout(function() {
                    window.location.assign("http://www.google.com");
                }, 2000);
            }
        });
    }

    function next() {
        query.focus().delay(1000);
        var array = string[1].split("");
        var i = 0;
        var value = "";
        var interval = setInterval(function() {
            if (i < string[1].length) {
                value = query.val();
                query.val(value.concat(array[i++]));
            } else {
                clearTimeout(interval);
                $("#cursor").show().animate({
                    top: "+=57px",
                    left: "+=213px"
                }, {
                    duration: 2000,
                    easing: "easeOutCirc",
                    complete: function() {
                        movecursor();
                    }
                });
            }
        }, 100);
    }

    function movecursor() {
        $("#searchbutton").focus();
        setTimeout(function() {
            window.location.href = ("http://www.google.com/?gfe_rd=cr&ei=Bo6_VJL4BevA8gfn1oCQAg&gws_rd=ssl#q=" + string[1]);
        }, 500);
    }
});