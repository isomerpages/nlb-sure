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

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 34250, function(sym, e) {
         // insert code here
         sym.play("loop");

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${sadBtn}", "click", function(sym, e) {
         // insert code for mouse click here// Hide an element 
         sym.$("mainmenu").hide();
         hideButtons();
         $("#Stage_sad").show();
         sym.getSymbol("sad").play(1);

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${angryBtn}", "click", function(sym, e) {
         // insert code for mouse click here
         // Hide an element 
         sym.$("mainmenu").hide();
         hideButtons();
         $("#Stage_angry").show();
         
         sym.getSymbol("angry").play(1);
         

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${laughingBtn}", "click", function(sym, e) {
         // insert code for mouse click here
         
         // Hide an element 
         sym.$("mainmenu").hide();
         
         hideButtons();
         $("#Stage_laughing").show();
         sym.getSymbol("laughing").play(1);
         

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${confusedBtn}", "click", function(sym, e) {
         // insert code for mouse click here
         // Hide an element 
         sym.$("mainmenu").hide();
         hideButtons();
         $("#Stage_confused").show();
         sym.getSymbol("confused").play(1);

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${happyBtn}", "click", function(sym, e) {
         // insert code for mouse click here
         // Hide an element 
         sym.$("mainmenu").hide();
         hideButtons();
         $("#Stage_happy").show();
         sym.getSymbol("happy").play(1);

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 30500, function(sym, e) {
         // insert code here
         if(hiddenBtn){
         	$(".buttons").hide();
         }
         else{
         	$(".buttons").show();
         }

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${mainmenu}", "click", function(sym, e) {
         // insert code for mouse click here
         continueToNextScene();

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 3612, function(sym, e) {
         // insert code here
         sym.stop();
         playSound("2");

      });
      //Edge binding end

   })("stage");
   //Edge symbol end:'stage'

   //=========================================================
   
   //Edge symbol: 'confused'
   (function(symbolName) {   
   
      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 15500, function(sym, e) {
         // insert code here
         // Show an element 
         sym.getComposition().getStage().$("mainmenu").show();
         showButtons();

      });
      //Edge binding end

   })("confused");
   //Edge symbol end:'confused'

   //=========================================================
   
   //Edge symbol: 'angry'
   (function(symbolName) {   
   
      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 14681, function(sym, e) {
         // insert code here
         // Show an element 
         sym.getComposition().getStage().$("mainmenu").show();
         showButtons();

      });
      //Edge binding end

   })("angry");
   //Edge symbol end:'angry'

   //=========================================================
   
   //Edge symbol: 'laughing'
   (function(symbolName) {   
   
      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 7974, function(sym, e) {
         // insert code here
         // Show an element 
         sym.getComposition().getStage().$("mainmenu").show();
         showButtons();

      });
      //Edge binding end

   })("laughing");
   //Edge symbol end:'laughing'

   //=========================================================
   
   //Edge symbol: 'happy'
   (function(symbolName) {   
   
      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 8870, function(sym, e) {
         // insert code here
         // Show an element 
         sym.getComposition().getStage().$("mainmenu").show();
         showButtons();

      });
      //Edge binding end

   })("happy");
   //Edge symbol end:'happy'

   //=========================================================
   
   //Edge symbol: 'sad'
   (function(symbolName) {   
   
      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 16500, function(sym, e) {
         // insert code here
         
         // Show an element 
         sym.getComposition().getStage().$("mainmenu").show();
         
         showButtons();

      });
      //Edge binding end

   })("sad");
   //Edge symbol end:'sad'

})(window.jQuery || AdobeEdge.$, AdobeEdge, "EDGE-1646797");