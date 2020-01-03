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
         
         // Hide an element 
         sym.$("next-btn").hide();
         
         playBGSound("music1");
         init(sym);

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${next-btn}", "click", function(sym, e) {
         // insert code for mouse click here
         continueToNextScene();

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 2350, function(sym, e) {
         // insert code here
         sym.stop();
         playSound("3");

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

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 22828, function(sym, e) {
         // insert code here
         sym.stop();
         playSound("3a");

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 27401, function(sym, e) {
         // insert code here
         sym.setVariable("a",true);
         
         if(sym.getVariable("a")&&sym.getVariable("b")&&sym.getVariable("c")){
         	// Show an element 
         	sym.$("next-btn").show();
         }
         sym.stop();

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 29838, function(sym, e) {
         // insert code here
         sym.setVariable("b",true);
         
         if(sym.getVariable("a")&&sym.getVariable("b")&&sym.getVariable("c")){
         	// Show an element 
         	sym.$("next-btn").show();
         }
         sym.stop();

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 33395, function(sym, e) {
         // insert code here
         sym.setVariable("c",true);
         
         if(sym.getVariable("a")&&sym.getVariable("b")&&sym.getVariable("c")){
         	// Show an element 
         	sym.$("next-btn").show();
         }
         sym.stop();

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 25996, function(sym, e) {
         // insert code here
         sym.stop();

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${a}", "click", function(sym, e) {
         // insert code for mouse click here
         sym.play("s1");

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${b}", "click", function(sym, e) {
         // insert code for mouse click here
         sym.play("s2");

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${c}", "click", function(sym, e) {
         // insert code for mouse click here
         sym.play("s3");

      });
      //Edge binding end

   })("stage");
   //Edge symbol end:'stage'

   //=========================================================
   
   //Edge symbol: 'network'
   (function(symbolName) {   
   
   })("network");
   //Edge symbol end:'network'

   //=========================================================
   
   //Edge symbol: 'khalid-post'
   (function(symbolName) {   
   
   })("khalid-post");
   //Edge symbol end:'khalid-post'

   //=========================================================
   
   //Edge symbol: 'positive'
   (function(symbolName) {   
   
   })("positive");
   //Edge symbol end:'positive'

   //=========================================================
   
   //Edge symbol: 'good-bad'
   (function(symbolName) {   
   
   })("good-bad");
   //Edge symbol end:'good-bad'

   //=========================================================
   
   //Edge symbol: 'negative'
   (function(symbolName) {   
   
   })("negative");
   //Edge symbol end:'negative'

})(window.jQuery || AdobeEdge.$, AdobeEdge, "EDGE-1646797");