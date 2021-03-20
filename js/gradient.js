$(".gradient").mousemove(function(event) {
    var w = $(this).width(),
        pct = 360 * (+event.pageX) / w,
        bg = "linear-gradient(" + pct + "deg,#83bce9d7, #c089dbd7)";
    $(".gradient").css("background-image", bg);
});