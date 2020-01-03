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

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 2004, function(sym, e) {
         // insert code here
         sym.stop();
         playSound("5");

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 20063, function(sym, e) {
         // insert code here
         // Show an element 
         initGame();
         sym.stop();

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 20215, function(sym, e) {
         // insert code here
         sym.stop();
         playSound("5a");

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${next-btn}", "click", function(sym, e) {
         // insert code for mouse click here
         sym.play();

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 23815, function(sym, e) {
         // insert code here
         sym.stop();

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 23854, function(sym, e) {
         // insert code here
         sym.getSymbol("a").play("flip");
         
         sym.getSymbol("b").play("flip");
         
         sym.getSymbol("c").play("flip");
         
         sym.getSymbol("Jun").play("flip");
         
         sym.getSymbol("khalid").play("flip");
         
         sym.getSymbol("Penelope").play("flip");

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${mainmenu}", "click", function(sym, e) {
         // insert code for mouse click here
         continueToNextScene();

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${instruction-btn}", "click", function(sym, e) {
         // insert code for mouse click here
         // Set a toggle to hide or show an element 
         if (sym.$("instruction").is(":visible")) {
         	sym.$("instruction").hide();
         } else {
         	sym.$("instruction").show();
         }
         

      });
      //Edge binding end

   })("stage");
   //Edge symbol end:'stage'

   //=========================================================
   
   //Edge symbol: 'instruction'
   (function(symbolName) {   
   
      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 1131, function(sym, e) {
         // insert code here
         sym.stop();

      });
      //Edge binding end

   })("instruction");
   //Edge symbol end:'instruction'

   //=========================================================
   
   //Edge symbol: 'Jun'
   (function(symbolName) {   
   
      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 1750, function(sym, e) {
         // insert code here
         sym.stop();

      });
      //Edge binding end

   })("Jun");
   //Edge symbol end:'Jun'

   //=========================================================
   
   //Edge symbol: 'Penelope'
   (function(symbolName) {   
   
      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 1123, function(sym, e) {
         // insert code here
         sym.stop();

      });
      //Edge binding end

   })("Penelope");
   //Edge symbol end:'Penelope'

   //=========================================================
   
   //Edge symbol: 'khalid'
   (function(symbolName) {   
   
      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 1657, function(sym, e) {
         // insert code here
         sym.stop();

      });
      //Edge binding end

   })("khalid");
   //Edge symbol end:'khalid'

   //=========================================================
   
   //Edge symbol: 'text-khalid'
   (function(symbolName) {   
   
      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 171, function(sym, e) {
         // insert code here
         sym.stop();

      });
      //Edge binding end

   })("text-khalid");
   //Edge symbol end:'text-khalid'

   //=========================================================
   
   //Edge symbol: 'txt-penelope'
   (function(symbolName) {   
   
      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 210, function(sym, e) {
         // insert code here
         sym.stop();

      });
      //Edge binding end

   })("txt-penelope");
   //Edge symbol end:'txt-penelope'

   //=========================================================
   
   //Edge symbol: 'text-jun'
   (function(symbolName) {   
   
      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 250, function(sym, e) {
         // insert code here
         sym.stop();

      });
      //Edge binding end

   })("text-jun");
   //Edge symbol end:'text-jun'

})(window.jQuery || AdobeEdge.$, AdobeEdge, "EDGE-1646797");