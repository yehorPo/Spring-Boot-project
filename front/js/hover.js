$(function() {
    // $('.hoverTest').hover(
    //     function() {
    //         $(this).removeClass('textRed');
    //         $(this).addClass('textBlue');
    //     },
    //     function() {
    //         $(this).removeClass('textBlue');
    //         $(this).addClass('textRed');
    //     })
    // $('.hoverLogo').hover(
    //     function() {
    //         $(this).removeClass('img-shadow');
    //     },
    //     function() {
    //         $(this).addClass('img-shadow');
    //     })
    $(".hoverLogin").hover(
        function() {
            $(this).css({
                transition: 'color 0.5s ease-in-out',
                "color": "#f2e9d8"
            });
        },
        function() {
            $(this).css({
                transition: 'color 0.5s ease-in-out',
                "color": "#1c2f40"
            });
        });

})