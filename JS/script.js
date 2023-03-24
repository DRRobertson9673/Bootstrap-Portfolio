$(window).scroll(function () {
    var scrollTop = $(this).scrollTop();
    var offset = $('#heroContent').offset().top;

    $('#heroContent').css({
        opacity: function () {
            return (offset - scrollTop) / offset
        }
    });
});





// 1 opacity by the time in reaches half way
$(window).scroll(function () {
    var scrollTop = $(this).scrollTop();
    var offset = $('#workGrid').offset().top;
    var vh = $(window).height();

    $('#workGrid').css({
        opacity: function () {
            return 1 - ((offset - (vh/2) - scrollTop) / (offset - (vh/2)))
        }
    });
});

$(window).scroll(function () {
    var scrollTop = $(this).scrollTop();
    var offset = $('#skillsSection').offset().top;
    var vh = $(window).height();

    $('#skillsSection').css({
        opacity: function () {
            return 1 - ((offset - (vh/2) - scrollTop) / (offset - (vh/2)))
        }
    });
});



/*
// 0 opacity by the time in reaches half way
$(window).scroll(function () {
    var scrollTop = $(this).scrollTop();
    var offset = $('#skillsSection').offset().top;
    var vh = $(window).height();

    $('#skillsSection').css({
        opacity: function () {
            return 1 - (1-((offset - (vh/2) - scrollTop) / (offset - (vh/2))))
        }
    });
});*/