var AllDays = document.querySelectorAll(".day")

$(document).ready(function() {
    //  console.log(vw, heightpage, ScrollH)
    $(".btn").on("click", function(event) {
        var AllDays = document.querySelectorAll(".day")

        $(AllDays).animate({
                scrollTop: nxt.offset().top
            },
            'slow');

    });

    var f = $('#DAY1');
    var nxt = f;

    $("#top").click(function() {
        console.log(nxt)
        if (nxt.prev('.day').length > 0) {
            nxt = nxt.prev('.day');
        }
        $('html,body').animate({
                scrollTop: nxt.offset().top
            },
            'slow');
    });

    $("#bot").click(function() {
        console.log(nxt)

        if (nxt.next('.day').length > 0) {
            nxt = nxt.next('.day');
        }
        $('html,body').animate({
                scrollTop: nxt.offset().top
            },
            'slow');
    });
});