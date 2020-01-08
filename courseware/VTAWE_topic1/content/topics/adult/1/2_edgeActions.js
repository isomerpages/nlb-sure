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
      
      
      

      

      

      

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 0, function(sym, e) {
         // insert code here
         playBGSound("music1");
         init(sym);

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${next-btn}", "click", function(sym, e) {
         // insert code for mouse click here
         continueToNextScene();

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 3000, function(sym, e) {
         // insert code here
         sym.stop();
         playSound("2");

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

   })("stage");
   //Edge symbol end:'stage'

   //=========================================================
   
   //Edge symbol: 'instant-info'
   (function(symbolName) {   
   
   })("instant-info");
   //Edge symbol end:'instant-info'

   //=========================================================
   
   //Edge symbol: 'swift-act'
   (function(symbolName) {   
   
   })("swift-act");
   //Edge symbol end:'swift-act'

   //=========================================================
   
   //Edge symbol: 'hrs'
   (function(symbolName) {   
   
   })("hrs");
   //Edge symbol end:'hrs'

   //=========================================================
   
   //Edge symbol: 'engaging'
   (function(symbolName) {   
   
   })("engaging");
   //Edge symbol end:'engaging'

   //=========================================================
   
   //Edge symbol: 'easy-store'
   (function(symbolName) {   
   
   })("easy-store");
   //Edge symbol end:'easy-store'

   //=========================================================
   
   //Edge symbol: 'social-share'
   (function(symbolName) {   
   
   })("social-share");
   //Edge symbol end:'social-share'

})(window.jQuery || AdobeEdge.$, AdobeEdge, "EDGE-1646797");