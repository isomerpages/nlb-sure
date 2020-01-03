/**
 * ...
 * @author Milbert Cale@Playware Studios
 */

var general = new function(){
    this.monitorScale = function(ui){
        var iframeW = $(ui.parent.document).find("#contentHolderID").width();
        var iframeH = $(ui.parent.document).find("#contentHolderID").height();
        var m1 = utils.multiplier($("#Stage").width(),iframeW);
        var m2 = utils.multiplier($("#Stage").height(),iframeH);
        var scale = Math.min(m1,m2);
        general.currentScale = scale;
        $("#Stage").css({
            position:"absolute",
            "transform":"scale("+scale+")",
            "-webkit-transform": "scale("+scale+")",
            "-ms-transform": "scale("+scale+")",
            "-moz-transform": "scale("+scale+")",
            "-o-transform": "scale("+scale+")",
            "-ms-transform-origin":"0 0",
            "moz-transform-origin":"0 0",
            "o-transform-origin":"0 0",
            "webkit-transform-origin":"0 0",
            "transform-origin":"0 0",
            top:iframeH-$("#Stage").height()*scale,
            left:(iframeW-$("#Stage").width()*scale)/2
        });
    };
    this.currentScale = 1;
};