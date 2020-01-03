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
         $("#Stage_objectiveTrigger").hide();
         $("#Stage_objectiveH").hide();
         playBGSound("music1");
         init(sym);

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 50, function(sym, e) {
         // insert code here
         $("#Stage_Objective").hide();
         $("#Stage_mainmenu").hide();

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 12445, function(sym, e) {
         // insert code here
         sym.play("loop");

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 8403, function(sym, e) {
         // insert code here
         $("#Stage_objectiveTrigger").show();
         $("#Stage_objectiveH").show();
         
         sym.getSymbol("objectiveH").play(1);

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${objectiveTrigger}", "click", function(sym, e) {
         // insert code for mouse click here
         //$("#Stage_Accuracy").show();
         $("#Stage_Objective").show();
         sym.getSymbol("Objective").play("start");
         
         

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 3450, function(sym, e) {
         // insert code here
         sym.stop();
         playSound("4");

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${mainmenu}", "click", function(sym, e) {
         // insert code for mouse click here
         continueToNextScene();

      });
      //Edge binding end

   })("stage");
   //Edge symbol end:'stage'

   //=========================================================
   
   //Edge symbol: 'Objective'
   (function(symbolName) {   
   
      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 6453, function(sym, e) {
         // insert code here
      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${trigger}", "click", function(sym, e) {
         // insert code for mouse click here
         playSFX("correct1");
         $("#Stage_Objective_well-done2").show();
         sym.getSymbol("well-done2").play(1);
         $("#Stage_objectiveTrigger").hide();
         $("#Stage_objectiveH").hide();
         $("#Stage_mainmenu").show();
         $("#Stage_txt-obj").css({
         	opacity:".2"
         })

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${yoyo-poster}", "click", function(sym, e) {
         // insert code for mouse click here
         playSFX("wrong");

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${close-btn}", "click", function(sym, e) {
         // insert code for mouse click here
         $("#Stage_Objective").hide();

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 1500, function(sym, e) {
         // insert code here
         sym.stop();

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${next_but}", "click", function(sym, e) {
         // insert code for mouse click here
         sym.play();

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 1590, function(sym, e) {
         // insert code here
         sym.play("skip1");

      });
      //Edge binding end

   })("Objective");
   //Edge symbol end:'Objective'

   //=========================================================
   
   //Edge symbol: 'AccuracyH'
   (function(symbolName) {   
   
      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 2500, function(sym, e) {
         // insert code here
         sym.play(1);

      });
      //Edge binding end

   })("AccuracyH");
   //Edge symbol end:'AccuracyH'

   //=========================================================
   
   //Edge symbol: 'well-done'
   (function(symbolName) {   
   
      Symbol.bindElementAction(compId, symbolName, "${close-btn1}", "click", function(sym, e) {
         // insert code for mouse click here
         $("#Stage_Objective_well-done2").hide();

      });
      //Edge binding end

   })("well-done");
   //Edge symbol end:'well-done'

})(window.jQuery || AdobeEdge.$, AdobeEdge, "EDGE-601893278");