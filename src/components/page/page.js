define(['can/util/library', 'can/component', 'can/map/define'], function(can) {
    return can.Component.extend({
        tag: 'ui:manager',
        scope: function(attrs, parentScope, el) {
            return new can.Map({
                title: '@'
            });
        }
    });
});