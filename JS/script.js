
//Fade in
$(window).scroll(function () {
    var scrollTop = $(this).scrollTop();
    console.log(scrollTop) // use this to determine position at which you want element to be 0%

    $('#skillsSection').css({
        opacity: function () {
            return 1 - (((644 - (scrollTop - 644)) / 644)); // 644 is 100% position
        }
    });
});


//Fade out
$(window).scroll(function () {
    var scrollTop = $(this).scrollTop();
    console.log(scrollTop) // use this to determine position at which you want element to be 0%

    $('#heroContent').css({
        opacity: function () {
            return 1 - (((400 - (400 - scrollTop)) / 400)); // 400 is 0% position - use '*1' to control speed of fade
        }
    });
});




//Fade in
$(window).scroll(function () {
    var scrollTop = $(this).scrollTop();
    console.log(scrollTop) // use this to determine position at which you want element to be 0%

    $('#workGrid').css({
        opacity: function () {
            return 1 - (((300 - (scrollTop - 300)) / 300)); // 644 is 100% position
        }
    });
});





/* using window height

//Fade in
$(window).scroll(function () {
    var scrollTop = $(this).scrollTop();
    var vh = $(window).height();
    console.log(vh)
    console.log(scrollTop) // use this to determine position at which you want element to be 0%

    $('#skillsSection').css({
        opacity: function () {
            return 1 - (((vh - (scrollTop - vh)) / vh)*2); // 644 is 100% position
        }
    });
});

*/