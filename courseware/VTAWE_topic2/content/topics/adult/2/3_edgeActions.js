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

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 2128, function(sym, e) {
         // insert code here
         sym.stop();
         playSound("3");

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 14283, function(sym, e) {
         // insert code here
         if(sym.getVariable("a")&&sym.getVariable("b")&&sym.getVariable("c")&&sym.getVariable("d")&&sym.getVariable("e")){
         	sym.play("finish");
         }
         sym.stop();

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 20195, function(sym, e) {
         // insert code here
         sym.stop("menu");

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 27137, function(sym, e) {
         // insert code here
         sym.stop("menu");

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 35348, function(sym, e) {
         // insert code here
         sym.stop("menu");

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 41172, function(sym, e) {
         // insert code here
         sym.stop("menu");

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 27077, function(sym, e) {
         // insert code here
         sym.stop();

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 20137, function(sym, e) {
         // insert code here
         sym.stop();

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 35292, function(sym, e) {
         // insert code here
         sym.stop();

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 41118, function(sym, e) {
         // insert code here
         sym.stop();

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 45250, function(sym, e) {
         // insert code here
         sym.stop();

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${next-btn}", "click", function(sym, e) {
         // insert code for mouse click here
         continueToNextScene();

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${t1}", "click", function(sym, e) {
         // insert code for mouse click here
         sym.setVariable("a",true);
         sym.play("t1");

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${t2}", "click", function(sym, e) {
         // insert code for mouse click here
         sym.setVariable("b",true);
         sym.play("t2");

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${t3}", "click", function(sym, e) {
         // insert code for mouse click here
         sym.setVariable("c",true);
         sym.play("t3");

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${t4}", "click", function(sym, e) {
         // insert code for mouse click here
         sym.setVariable("d",true);
         sym.play("t4");

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${t5}", "click", function(sym, e) {
         // insert code for mouse click here
         sym.setVariable("e",true);
         sym.play("t5");

      });
      //Edge binding end

   })("stage");
   //Edge symbol end:'stage'

   //=========================================================
   
   //Edge symbol: 'gym-support'
   (function(symbolName) {   
   
      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 5678, function(sym, e) {
         // insert code here
         sym.stop();

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${close-btn}", "click", function(sym, e) {
         // insert code for mouse click here
         sym.play("close");

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 6141, function(sym, e) {
         // insert code here
         
         sym.getComposition().getStage().play("menu");
         
         sym.stop(0);

      });
      //Edge binding end

   })("gym-support");
   //Edge symbol end:'gym-support'

   //=========================================================
   
   //Edge symbol: 'sharenlike'
   (function(symbolName) {   
   
      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 6418, function(sym, e) {
         // insert code here
         sym.stop();

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 6834, function(sym, e) {
         // insert code here
         sym.getComposition().getStage().play("menu");
         sym.stop(0);

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${close-btn}", "click", function(sym, e) {
         // insert code for mouse click here
         sym.play("close");

      });
      //Edge binding end

   })("sharenlike");
   //Edge symbol end:'sharenlike'

   //=========================================================
   
   //Edge symbol: 'hair-interact'
   (function(symbolName) {   
   
      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 7864, function(sym, e) {
         // insert code here
         sym.stop();

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 8232, function(sym, e) {
         // insert code here
         sym.getComposition().getStage().play("menu");
         sym.stop(0);

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${close-btnCopy}", "click", function(sym, e) {
         // insert code for mouse click here
         sym.play("close");

      });
      //Edge binding end

   })("hair-interact");
   //Edge symbol end:'hair-interact'

   //=========================================================
   
   //Edge symbol: 'train-react'
   (function(symbolName) {   
   
      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 5500, function(sym, e) {
         // insert code here
         sym.stop();

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 5868, function(sym, e) {
         // insert code here
         sym.getComposition().getStage().play("menu");
         sym.stop(0);

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${close-btnCopy2}", "click", function(sym, e) {
         // insert code for mouse click here
         sym.play("close");

      });
      //Edge binding end

   })("train-react");
   //Edge symbol end:'train-react'

   //=========================================================
   
   //Edge symbol: 'son-support'
   (function(symbolName) {   
   
      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 3664, function(sym, e) {
         // insert code here
         sym.stop();

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 4032, function(sym, e) {
         // insert code here
         sym.getComposition().getStage().play("menu");
         sym.stop(0);

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${close-btnCopy3}", "click", function(sym, e) {
         // insert code for mouse click here
         sym.play("close");

      });
      //Edge binding end

   })("son-support");
   //Edge symbol end:'son-support'

})(window.jQuery || AdobeEdge.$, AdobeEdge, "EDGE-1646797");