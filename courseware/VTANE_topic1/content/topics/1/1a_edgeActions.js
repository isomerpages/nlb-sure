/***********************
* Adobe Edge Animate Composition Actions
*
* Edit this file with caution, being careful to preserve 
* function signatures and comments starting with 'Edge' to maintain the 
* ability to interact with these actions from within Adobe Edge Animate
*
***********************/
(function($, Edge, compId){
var Composition = Edge.Composition, Symbol = Edge.Symbol; // aliases for commonly used Edge classes

   //Edge symbol: 'stage'
   (function(symbolName) {
      
      
      

      

      

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 41500, function(sym, e) {
         // insert code here
      });
      //Edge binding end

      Symbol.bindTimelineAction(compId, symbolName, "Default Timeline", "update", function(sym, e) {
         // insert code to be run on every tick of the timeline here.
         // Be careful not to block or do too much work!
         updateTimeline();

      });
      //Edge binding end

      Symbol.bindTimelineAction(compId, symbolName, "Default Timeline", "complete", function(sym, e) {
         // insert code to be run at timeline end here
         completeTimeline();

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 0, function(sym, e) {
         // insert code here
         playBGSound("music1");
         init(sym);
         

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${next-btn}", "click", function(sym, e) {
         // insert code for mouse click here
         nextPart("content/topics/1/1b.html?type=video");

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 5000, function(sym, e) {
         // insert code here
         sym.stop();
         playSound("1a");

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 23008, function(sym, e) {
         // insert code here
         //sym.stop();
         playSound("1ab");

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 55587, function(sym, e) {
         // insert code here
         stopBGSound();

      });
      //Edge binding end

      

      

      

      

   })("stage");
   //Edge symbol end:'stage'

   //=========================================================
   
   //Edge symbol: 'graph1'
   (function(symbolName) {   
   
   })("graph1");
   //Edge symbol end:'graph1'

   //=========================================================
   
   //Edge symbol: 'graph2'
   (function(symbolName) {   
   
   })("graph2");
   //Edge symbol end:'graph2'

   //=========================================================
   
   //Edge symbol: 'graph3'
   (function(symbolName) {   
   
   })("graph3");
   //Edge symbol end:'graph3'

   //=========================================================
   
   //Edge symbol: 'graph4'
   (function(symbolName) {   
   
   })("graph4");
   //Edge symbol end:'graph4'

   //=========================================================
   
   //Edge symbol: 'graph5'
   (function(symbolName) {   
   
   })("graph5");
   //Edge symbol end:'graph5'

})(window.jQuery || AdobeEdge.$, AdobeEdge, "EDGE-1646797");