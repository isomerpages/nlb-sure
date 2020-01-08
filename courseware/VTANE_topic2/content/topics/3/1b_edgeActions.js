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
      
      
      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 9627, function(sym, e) {
         // insert code here
      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 10215, function(sym, e) {
         // insert code here
      });
      //Edge binding end

      

      

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 4050, function(sym, e) {
         // insert code here
         sym.stop();
         playSound("1b");

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 0, function(sym, e) {
         // insert code here
         playBGSound("music1");
         init(sym);

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${startgame-btn}", "click", function(sym, e) {
         // insert code for mouse click here
         nextPart("content/topics/3/1c.html?type=activity");

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

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 50000, function(sym, e) {
         // insert code here
         hideControl();

      });
      //Edge binding end

   })("stage");
   //Edge symbol end:'stage'

   //=========================================================
   
   //Edge symbol: 'alarm'
   (function(symbolName) {   
   
   })("alarm");
   //Edge symbol end:'alarm'

   //=========================================================
   
   //Edge symbol: 'window'
   (function(symbolName) {   
   
   })("window");
   //Edge symbol end:'window'

   //=========================================================
   
   //Edge symbol: 'typing-hands'
   (function(symbolName) {   
   
   })("typing-hands");
   //Edge symbol end:'typing-hands'

   //=========================================================
   
   //Edge symbol: 'clock'
   (function(symbolName) {   
   
   })("clock");
   //Edge symbol end:'clock'

})(window.jQuery || AdobeEdge.$, AdobeEdge, "EDGE-1646797");