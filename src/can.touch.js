(function(can, undefined) {
    var touch = {
        VERSION: '0.0.1-dev',
        Swipe: Swipe,
        hasTouch: function() {
            return 'ontouchstart' in document.documentElement;
        }

    };

    can.touch = touch;
    return can;
})(can);