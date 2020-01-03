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
      
      
      

      

      

      

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 29000, function(sym, e) {
         // insert code here
         sym.stop();

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 29307, function(sym, e) {
         // insert code here
         sym.stop();

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 29639, function(sym, e) {
         // insert code here
         sym.stop();

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 29889, function(sym, e) {
         // insert code here
         sym.stop();

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 30135, function(sym, e) {
         // insert code here
         sym.stop();

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 0, function(sym, e) {
         // insert code here
         playBGSound("music1");
         init(sym);

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${mainmenu}", "click", function(sym, e) {
         // insert code for mouse click here
         continueToNextScene();

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${ico-market}", "click", function(sym, e) {
         // insert code for mouse click here
         //loadNextPage("content/topics/primary/1/2.html");

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${ico-mall}", "click", function(sym, e) {
         // insert code for mouse click here
         //sym.play("s2");
         //loadNextPage("content/topics/primary/1/3.html");

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${ico-school}", "click", function(sym, e) {
         // insert code for mouse click here
         //sym.play("s3");
         //loadNextPage("content/topics/primary/1/4.html");

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${ico-home}", "click", function(sym, e) {
         // insert code for mouse click here
         //sym.play("s4");
         //loadNextPage("content/topics/primary/1/5.html");

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 6000, function(sym, e) {
         // insert code here
         sym.stop();
         playSound("1");

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 48, function(sym, e) {
         // insert code here
         checkLoc();

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 23843, function(sym, e) {
         // insert code here
         sym.stop();
         playSound("1a");

      });
      //Edge binding end

   })("stage");
   //Edge symbol end:'stage'

   //=========================================================
   
   //Edge symbol: 'home'
   (function(symbolName) {   
   
   })("home");
   //Edge symbol end:'home'

})(window.jQuery || AdobeEdge.$, AdobeEdge, "EDGE-1646797");