/*document.addEventListener('DOMContentLoaded', function() {
    setTimeout(function() { onScrollInit($('.waypoint')) }, 100);
});*/

$(document).ready(function() {
    $('body').scrollspy({ target: '#navbar1' })

});


$(window).on('scroll', function(e) {
    $('.navbar').toggleClass('fixed-top', $(window).scrollTop() < 750);
})