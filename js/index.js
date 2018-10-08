$(function() {
    $(document).mousemove(function(e) {
        $("#cube").css({
            transform:
                "rotateX(" +
                -e.pageY / 50 +
                "deg) rotateY(" +
                -e.pageX / 50 +
                "deg)"
        });
        $(this)
            .find(".ksc")
            .each(function(i) {
                $(this).css({
                    backgroundPosition: e.pageX / 8 + "px " + e.pageY / 8 + "px"
                });
            });
        $(this)
            .find(".tile3Solid")
            .each(function(i) {
                $(this).css({
                    background:
                        "linear-gradient(" +
                        -e.pageX / 15 +
                        "deg,#333,#000 90%)"
                });
            });
        $(this)
            .find(".tile7Solid")
            .each(function(i) {
                $(this).css({
                    background:
                        "linear-gradient(" + e.pageX / 30 + "deg,#333,#000 60%)"
                });
            });
        $(this)
            .find(".tile7Blur")
            .each(function(i) {
                $(this).css({
                    background:
                        "linear-gradient(" +
                        e.pageX / 30 +
                        "deg,#000000c9,transparent 30%)"
                });
            });
        $(this)
            .find(".tile3Blur")
            .each(function(i) {
                $(this).css({
                    background:
                        "linear-gradient(" +
                        -e.pageX / 30 +
                        "deg,transparent 30%,#000000c9)"
                });
            });
    });
});
