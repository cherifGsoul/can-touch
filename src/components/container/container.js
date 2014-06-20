define(['can/util/library', 'can/component', 'can/map/define', 'can/list'], function(can) {
    return can.Component.extend({
        tag: 'ui:container',
        scope: function(attrs, parentScope, el) {
            return {
                define: {

                    pages: {
                        value: '@',
                        set: function(newVal) {
                            new can.List({})
                        }
                    }
                }
            }
        }
    })
});