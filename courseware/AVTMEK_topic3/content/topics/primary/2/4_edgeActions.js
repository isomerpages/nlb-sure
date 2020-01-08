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

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 4534, function(sym, e) {
         // insert code here
         sym.stop();
         playSound("4");

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${instruction-btn2}", "click", function(sym, e) {
         // insert code for mouse click here
         // Set a toggle to hide or show an element 
         if (sym.$("instruction").is(":visible")) {
         	sym.$("instruction").hide();
         } else {
         	sym.$("instruction").show();
         }
         

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 23750, function(sym, e) {
         // insert code here
         
         sym.getSymbol("story1").stop();
         
         sym.stop();

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${t1}", "click", function(sym, e) {
         // insert code for mouse click here
         playSFX("correct1");
         sym.getSymbol("story1").play();
         sym.play();

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 25617, function(sym, e) {
         // insert code here
         sym.getSymbol("story1").stop();
         sym.stop();

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 27298, function(sym, e) {
         // insert code here
         sym.getSymbol("story1").stop();
         sym.stop();

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${t2}", "click", function(sym, e) {
         // insert code for mouse click here
         playSFX("correct1");
         sym.getSymbol("story1").play();
         sym.play();

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${t3}", "click", function(sym, e) {
         // insert code for mouse click here
         playSFX("correct1");
         sym.getSymbol("story1").play();
         sym.play();

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 30250, function(sym, e) {
         // insert code here
         sym.getSymbol("story2").stop();
         sym.stop();

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${t4}", "click", function(sym, e) {
         // insert code for mouse click here
         playSFX("correct1");
         sym.getSymbol("story2").play();
         sym.play();

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 32000, function(sym, e) {
         // insert code here
         sym.getSymbol("story2").stop();
         sym.stop();

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${t5}", "click", function(sym, e) {
         // insert code for mouse click here
         playSFX("correct1");
         sym.getSymbol("story2").play();
         sym.play();

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 33866, function(sym, e) {
         // insert code here
         sym.getSymbol("story2").stop();
         sym.stop();

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${t6}", "click", function(sym, e) {
         // insert code for mouse click here
         playSFX("correct1");
         sym.getSymbol("story2").play();
         sym.play();

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 36423, function(sym, e) {
         // insert code here
         sym.getSymbol("story3").stop();
         sym.stop();

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 38316, function(sym, e) {
         // insert code here
         sym.getSymbol("story3").stop();
         sym.stop();

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${t8}", "click", function(sym, e) {
         // insert code for mouse click here
         playSFX("correct1");
         sym.getSymbol("story3").play();
         sym.play();

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${t7}", "click", function(sym, e) {
         // insert code for mouse click here
         playSFX("correct1");
         sym.getSymbol("story3").play();
         sym.play();

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 40180, function(sym, e) {
         // insert code here
         sym.getSymbol("story3").stop();
         sym.stop();

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${t9}", "click", function(sym, e) {
         // insert code for mouse click here
         playSFX("correct1");
         sym.getSymbol("story3").play();
         sym.play();

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${wrongtrigger}", "click", function(sym, e) {
         // insert code for mouse click here
         playSFX("wrong1");

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${mainmenu}", "click", function(sym, e) {
         // insert code for mouse click here
         continueToNextScene();

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${t8a}", "click", function(sym, e) {
         // insert code for mouse click here
         playSFX("correct1");
         sym.getSymbol("story3").play();
         sym.play();

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${t8b}", "click", function(sym, e) {
         // insert code for mouse click here
         playSFX("correct1");
         sym.getSymbol("story3").play();
         sym.play();

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${t5a}", "click", function(sym, e) {
         // insert code for mouse click here
         playSFX("correct1");
         sym.getSymbol("story2").play();
         sym.play();

      });
      //Edge binding end

   })("stage");
   //Edge symbol end:'stage'

   //=========================================================
   
   //Edge symbol: 'instruction-btn'
   (function(symbolName) {   
   
   })("instruction-btn");
   //Edge symbol end:'instruction-btn'

   //=========================================================
   
   //Edge symbol: 'instruction'
   (function(symbolName) {   
   
      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 2285, function(sym, e) {
         // insert code here
         sym.stop();

      });
      //Edge binding end

   })("instruction");
   //Edge symbol end:'instruction'

   //=========================================================
   
   //Edge symbol: 'story1'
   (function(symbolName) {   
   
   })("story1");
   //Edge symbol end:'story1'

   //=========================================================
   
   //Edge symbol: 'story2'
   (function(symbolName) {   
   
   })("story2");
   //Edge symbol end:'story2'

   //=========================================================
   
   //Edge symbol: 'story3'
   (function(symbolName) {   
   
   })("story3");
   //Edge symbol end:'story3'

})(window.jQuery || AdobeEdge.$, AdobeEdge, "EDGE-1646797");