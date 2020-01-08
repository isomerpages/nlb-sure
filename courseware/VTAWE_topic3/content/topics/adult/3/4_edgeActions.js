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

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 3382, function(sym, e) {
         // insert code here
         sym.stop();
         playSound("5a");

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 18500, function(sym, e) {
         // insert code here
         sym.stop();

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 50897, function(sym, e) {
         // insert code here
         if(sym.getVariable("a")&&sym.getVariable("b")&&sym.getVariable("c")){
         	sym.play("end");
         }
         else sym.stop();

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 18700, function(sym, e) {
         // insert code here
         sym.stop();
         playSound("5b");

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 73519, function(sym, e) {
         // insert code here
         if(sym.getVariable("a")&&sym.getVariable("b")&&sym.getVariable("c")){
         	sym.play("end");
         }
         else sym.stop();

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 73836, function(sym, e) {
         // insert code here
         sym.stop();
         playSound("5d");

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 91591, function(sym, e) {
         // insert code here
         if(sym.getVariable("a")&&sym.getVariable("b")&&sym.getVariable("c")){
         	sym.play("end");
         }
         else sym.stop();
         

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${t1}", "click", function(sym, e) {
         // insert code for mouse click here
         sym.play("s1");
         sym.setVariable("a",true);

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${t2}", "click", function(sym, e) {
         // insert code for mouse click here
         // insert code for mouse click here
         sym.play("s2");
         sym.setVariable("b",true);

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${t3}", "click", function(sym, e) {
         // insert code for mouse click here
         // insert code for mouse click here
         sym.play("s3");
         sym.setVariable("c",true);

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${next-btn}", "click", function(sym, e) {
         // insert code for mouse click here
         continueToNextScene();

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 51326, function(sym, e) {
         // insert code here
         // insert code here
         sym.stop();
         playSound("5c");

      });
      //Edge binding end

   })("stage");
   //Edge symbol end:'stage'

})(window.jQuery || AdobeEdge.$, AdobeEdge, "EDGE-1646797");