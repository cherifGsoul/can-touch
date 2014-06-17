(function(can, undefined) {
    return can.Component.extend('Button', {
        tag: 'ui-button',
        template: '<button class="topcoat-button--{{type}}" {{#isdisabled}}disabled{{/isdisabled}}>{{label}}</button>',
        scope: {
            define: {
                isdisabled: {
                    type: "boolean",
                    value: false,
                    set: function(val) {
                        return val ? val : false;
                    }
                },
                type: {
                    type: 'string',
                    set: function(val) {
                        var typeList = ['quiet', 'large', 'cta', 'large--quiet', 'large--cta'];
                        return typeList.indexOf(val) > -1 ? val : ';'
                    }
                },
                label: {
                    type: "string",
                    set: function(val) {
                        return val;
                    }
                }
            }
        },
        events: {}
    });
})(can);