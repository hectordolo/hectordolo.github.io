$(document).on("scroll", function() {

    if($(document).scrollTop()>700) {
        $("header").removeClass("large").addClass("small");
        $("#home").removeClass("large").addClass("small");
        $("#about").removeClass("large").addClass("small");
        $("#contact").removeClass("large").addClass("small");
    } else {
        $("header").removeClass("small").addClass("large");
        $("#home").removeClass("small").addClass("large");
        $("#about").removeClass("small").addClass("large");
        $("#contact").removeClass("small").addClass("large");
    }

});

$(document).ready(function() {

    if($(document).scrollTop()>700) {
        $("header").removeClass("large").addClass("small");
        $("#home").removeClass("large").addClass("small");
        $("#about").removeClass("large").addClass("small");
        $("#contact").removeClass("large").addClass("small");
    } else {
        $("header").removeClass("small").addClass("large");
        $("#home").removeClass("small").addClass("large");
        $("#about").removeClass("small").addClass("large");
        $("#contact").removeClass("small").addClass("large");
    }

});