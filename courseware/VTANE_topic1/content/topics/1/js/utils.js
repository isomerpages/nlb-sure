/**
 * ...
 * @author Milbert Cale@Playware Studios
 */

var matrixRegex=/matrix\((-?\d*\.?\d+),\s*0,\s*0,\s*(-?\d*\.?\d+),\s*0,\s*0\)/; 
var matches;
var utils = new function() {
    this.arrayRandomize = function(_ar) {
        var ar=[];
        for(var i=0;i<_ar.length;i++){
            ar.push(_ar[i]);
        }
        var temp;
        var rndNum;
        for(var i=0;i<ar.length;i++){
            rndNum=parseInt(Math.random()*ar.length);
            temp = ar[i];
            ar[i] = ar[rndNum];
            ar[rndNum] = temp;
        }
        return ar;
    };
    this.multiplier = function(s,e){
        return e/s;
    };
    this.trimDown = function(str){
        while(str.search(" ")>=0)str = str.replace(" ","");
        return str;
    };
    this.lowerCase = function(str){
        return str.toLowerCase();
    };
    this.bypassdevicelimitation=function(system){
        if(system.parent.systeminfo.search("iphone")>=0||system.parent.systeminfo.search("ipad")>=0){
            $("#Stage").css({
                overflow:"hidden"
            });
        }  
    };
    this.getScale=function(stage){
        if(!stage)stage = "#Stage";
        matches = $(stage).css('transform').match(matrixRegex)||$(stage).css('-webkit-transform').match(matrixRegex)||$(stage).css('-moz-transform').match(matrixRegex)||$(stage).css('-ms-transform').match(matrixRegex)||$(stage).css('-o-transform').match(matrixRegex);
        return matches[1];
    };
};