(function(can, undefined) {
    return can.Construct.extend('Swipe', {
        setup: function(el) {
            can.extend(this, can.event);
            this.bind.call(el, 'swipe', swipeHandler);
        }
    });
})(can);