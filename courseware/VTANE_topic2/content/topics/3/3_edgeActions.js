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

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 3876, function(sym, e) {
         // insert code here
         sym.stop();
         playSound("3");

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${instruction-btn}", "click", function(sym, e) {
         // insert code for mouse click here
         // Set a toggle to hide or show an element 
         if (sym.$("instruction").is(":visible")) {
         	sym.$("instruction").hide();
         } else {
         	sym.$("instruction").show();
         	
         	sym.getSymbol("instruction").play(0);
         	
         }
         

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 41039, function(sym, e) {
         // insert code here
         
         // Show an element 
         sym.$("invitation1").show();
         
         sym.getSymbol("invitation1").play(0);

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 64, function(sym, e) {
         // insert code here
         
         // Show an element 
         sym.$("envelope1").data("partner",1);
         // Show an element 
         sym.$("icon-12yrs").data("partner",1);
         
         sym.$("envelope2").data("partner",2);
         
         sym.$("icon-13yrs").data("partner",2);
         
         sym.$("envelope3").data("partner",3);
         
         sym.$("icon-18yrs").data("partner",3);
         
         
         initGame();
         //sym.play("test");
         
         
         

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${invitation1}", "click", function(sym, e) {
         // insert code for mouse click here
         
         sym.getSymbol("invitation1").play("close");

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${invitation3}", "click", function(sym, e) {
         // insert code for mouse click here
         sym.getSymbol("invitation3").play("close");

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${invitation2}", "click", function(sym, e) {
         // insert code for mouse click here
         sym.getSymbol("invitation2").play("close");

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${envelope3}", "click", function(sym, e) {
         // insert code for mouse click here
         if(drag){
         	drag=false;
         	return;
         }
         // Hide an element 
         sym.$("envelope3").hide();
         
         // Show an element 
         sym.$("invitation3").show();
         
         sym.getSymbol("invitation3").play("stop");

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${envelope2}", "click", function(sym, e) {
         // insert code for mouse click here
         if(drag){
         	drag=false;
         	return;
         }// Hide an element 
         sym.$("envelope2").hide();
         
         // Show an element 
         sym.$("invitation2").show();
         
         sym.getSymbol("invitation2").play("stop");
         

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${envelope1}", "click", function(sym, e) {
         // insert code for mouse click here
         if(drag){
         	drag=false;
         	return;
         }
         // Hide an element 
         sym.$("envelope1").hide();
         
         // Show an element 
         sym.$("invitation1").show();
         
         sym.getSymbol("invitation1").play("stop");
         

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${mainmenu}", "click", function(sym, e) {
         // insert code for mouse click here
         continueToNextScene();

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 30921, function(sym, e) {
         // insert code here
         sym.stop();
         playSound("3a");

      });
      //Edge binding end

   })("stage");
   //Edge symbol end:'stage'

   //=========================================================
   
   //Edge symbol: 'invitation3'
   (function(symbolName) {   
   
      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 1000, function(sym, e) {
         // insert code here
         sym.stop();

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 1564, function(sym, e) {
         // insert code here
         
         // Hide an element 
         sym.getSymbolElement().hide();
         
         // Show an element 
         sym.getComposition().getStage().$("envelope3").show();

      });
      //Edge binding end

   })("invitation3");
   //Edge symbol end:'invitation3'

   //=========================================================
   
   //Edge symbol: 'invitation2'
   (function(symbolName) {   
   
      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 1000, function(sym, e) {
         // insert code here
         sym.stop();

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 1564, function(sym, e) {
         // insert code here
         // Hide an element 
         sym.getSymbolElement().hide();
         
         // Show an element 
         sym.getComposition().getStage().$("envelope2").show();

      });
      //Edge binding end

   })("invitation2");
   //Edge symbol end:'invitation2'

   //=========================================================
   
   //Edge symbol: 'instruction'
   (function(symbolName) {   
   
      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 8500, function(sym, e) {
         // insert code here
         // Hide an element 
         sym.getSymbolElement().hide();

      });
      //Edge binding end

   })("instruction");
   //Edge symbol end:'instruction'

   //=========================================================
   
   //Edge symbol: 'drop-effect'
   (function(symbolName) {   
   
   })("drop-effect");
   //Edge symbol end:'drop-effect'

   //=========================================================
   
   //Edge symbol: 'invitation1'
   (function(symbolName) {   
   
      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 1072, function(sym, e) {
         // insert code here
         sym.stop();

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 1564, function(sym, e) {
         // insert code here
         
         // Hide an element 
         sym.getSymbolElement().hide();
         
         // Show an element 
         sym.getComposition().getStage().$("envelope1").show();

      });
      //Edge binding end

   })("invitation1");
   //Edge symbol end:'invitation1'

   //=========================================================
   
   //Edge symbol: 'game-result2'
   (function(symbolName) {   
   
      Symbol.bindElementAction(compId, symbolName, "${close-btn1}", "click", function(sym, e) {
         // insert code for mouse click here
         
         // Hide an element 
         sym.getSymbolElement().hide();
         
         // Show an element 
         sym.getComposition().getStage().$("spin-button").show();
         
         $(".imagesClass").hide();
         if(imgCount>=5){
         	// Show an element 
         	sym.getComposition().getStage().$("mainmenu").show();
         	
         	// Hide an element 
         	sym.getComposition().getStage().$("spin-button").hide();
         	
         }

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 500, function(sym, e) {
         // insert code here
         
         // Show an element 
         if(imgCount>=5)sym.$("subText").html("Click \"Close\" to continue");

      });
      //Edge binding end

   })("game-result2");
   //Edge symbol end:'game-result2'

})(window.jQuery || AdobeEdge.$, AdobeEdge, "EDGE-1646797");