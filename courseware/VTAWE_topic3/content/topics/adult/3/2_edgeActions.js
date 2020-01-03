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

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 3750, function(sym, e) {
         // insert code here
         sym.stop();
         playSound("2");

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 33769, function(sym, e) {
         // insert code here
         sym.stop();

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 52630, function(sym, e) {
         // insert code here
         if(sym.getVariable("a")&&sym.getVariable("b")&&sym.getVariable("c")){
         	
         	// Show an element 
         	sym.$("next-btn").show();
         	
         }
         sym.stop();

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 68000, function(sym, e) {
         // insert code here
         if(sym.getVariable("a")&&sym.getVariable("b")&&sym.getVariable("c")){
         	sym.$("next-btn").show();
         }
         sym.stop();

      });
      //Edge binding end

      

      Symbol.bindElementAction(compId, symbolName, "${btn-source}", "click", function(sym, e) {
         // insert code for mouse click here
         sym.setVariable("a",true);
         if(sym.getVariable("a")&&sym.getVariable("b")&&sym.getVariable("c")){
         
         	// Show an element 
         	//sym.$("next-btn").show();
         
         }
         sym.getSymbol("research-click").stop(0);
         sym.getSymbol("source-click").stop(0);
         sym.getSymbol("understand-click").stop(0);
         
         sym.play("s1");

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${btn-understand}", "click", function(sym, e) {
         // insert code for mouse click here
         sym.setVariable("b",true);
         if(sym.getVariable("a")&&sym.getVariable("b")&&sym.getVariable("c")){
         
         	// Show an element 
         	//sym.$("next-btn").show();
         
         }
         sym.getSymbol("research-click").stop(0);
         sym.getSymbol("source-click").stop(0);
         sym.getSymbol("understand-click").stop(0);
         sym.play("s2");

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${btn-res-eval2}", "click", function(sym, e) {
         // insert code for mouse click here
         sym.setVariable("c",true);
         if(sym.getVariable("a")&&sym.getVariable("b")&&sym.getVariable("c")){
         
         	// Show an element 
         	//sym.$("next-btn").show();
         
         }
         sym.getSymbol("research-click").stop(0);
         sym.getSymbol("source-click").stop(0);
         sym.getSymbol("understand-click").stop(0);
         sym.play("s3");

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${next-btn}", "click", function(sym, e) {
         // insert code for mouse click here
         continueToNextScene();

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 117869, function(sym, e) {
         // insert code here
         if(sym.getVariable("a")&&sym.getVariable("b")&&sym.getVariable("c")){
         	sym.$("next-btn").show();
         }
         sym.stop();

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 31090, function(sym, e) {
         // insert code here
         sym.stop();
         playSound("2a");

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 34250, function(sym, e) {
         // insert code here
         sym.stop();
         playSound("2b");

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 54797, function(sym, e) {
         // insert code here
         sym.stop();
         playSound("2c");

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 68750, function(sym, e) {
         // insert code here
         sym.stop();
         playSound("2d");

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 93151, function(sym, e) {
         // insert code here
         sym.stop();
         playSound("2e");

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 104097, function(sym, e) {
         // insert code here
         sym.stop();
         playSound("2f");

      });
      //Edge binding end

   })("stage");
   //Edge symbol end:'stage'

   //=========================================================
   
   //Edge symbol: 'source-click'
   (function(symbolName) {   
   
      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 0, function(sym, e) {
         // insert code here
      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 18282, function(sym, e) {
         // insert code here
         sym.stop();

      });
      //Edge binding end

   })("source-click");
   //Edge symbol end:'source-click'

   //=========================================================
   
   //Edge symbol: 'understand-click'
   (function(symbolName) {   
   
      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 13500, function(sym, e) {
         // insert code here
         sym.stop();

      });
      //Edge binding end

   })("understand-click");
   //Edge symbol end:'understand-click'

   //=========================================================
   
   //Edge symbol: 'research-click'
   (function(symbolName) {   
   
      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 49278, function(sym, e) {
         // insert code here
         sym.stop();

      });
      //Edge binding end

   })("research-click");
   //Edge symbol end:'research-click'

   //=========================================================
   
   //Edge symbol: 'Symbol_1'
   (function(symbolName) {   
   
   })("Symbol_1");
   //Edge symbol end:'Symbol_1'

})(window.jQuery || AdobeEdge.$, AdobeEdge, "EDGE-1646797");