var dash_button = require('node-dash-button'),
    _ = require('underscore');

module.exports = function(RED) {
    function node (config) {
        
        RED.nodes.createNode(this, config);
        var node = this;
        
        var mac = config.mac || '';
        
        console.log(mac);

        var dash = dash_button(mac, null, null, 'all'); 
        var found = function () {
            console.log('Button Pressed: ' + mac);
            node.send({
                payload: mac
            });
        };
        
        dash.on("detected", _.debounce(found, 5000, true));
        
        node.on("close", function () {
           if (typeof(dash) !== "undefined" && dash) {
               dash.emit('close');
           }
        });        
    };
 
    RED.nodes.registerType("ButtonPressed",node);
}
