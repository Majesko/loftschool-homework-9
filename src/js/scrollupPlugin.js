var scrollUp = (function() {

    var init = function() {
        console.log('init scrollUp plugin');

        $.scrollUp({
            scrollName: 'scrollUp',
            // topDistance: '300',
            // topSpeed: 300,
            // animation: 'fade',
            // animationInSpeed: 200,
            // animationOutSpeed: 200,
            scrollText: 'Наверх',
            // activeOverlay: false,
        });
    }

    return {
        init: init
    }
}());

scrollUp.init();