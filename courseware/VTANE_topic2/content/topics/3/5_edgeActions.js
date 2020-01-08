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

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 2601, function(sym, e) {
         // insert code here
         sym.stop();
         playSound("5");

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 65, function(sym, e) {
         // insert code here
         
         sym.getSymbol("classmates").$("opt1").data("x",-33);
         sym.getSymbol("classmates").$("opt2").data("x",171);
         sym.getSymbol("classmates").$("opt3").data("x",375);
         sym.getSymbol("classmates").$("opt4").data("x",578);
         sym.getSymbol("classmates").$("opt5").data("x",781);
         
         sym.getSymbol("classmates").$("opt1").data("pattern",-33);
         sym.getSymbol("classmates").$("opt2").data("pattern",171);
         sym.getSymbol("classmates").$("opt3").data("pattern",375);
         sym.getSymbol("classmates").$("opt4").data("pattern",578);
         sym.getSymbol("classmates").$("opt5").data("pattern",781);
         
         initGames();
         //sym.play("test");
         
         
         

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${submit-btn}", "click", function(sym, e) {
         // insert code for mouse click here
         var ctr=0;
         for(var i=0;i<$(".dragIcons").length;i++){
         	if($($(".dragIcons")[i]).data("x")==$($(".dragIcons")[i]).data("pattern"))ctr++;
         
         }
         if(ctr>=5){
         
         	// Show an element 
         	sym.$("game-resultCorrect").show();
         
         	sym.getSymbol("game-resultCorrect").play(0);
         
         	// Show an element 
         	sym.$("Cover").show();
         
         	// Hide an element 
         	sym.$("submit-btn").hide();
         
         	// Hide an element 
         	sym.$("instruction").hide();
         }
         else{
         
         	// Show an element 
         	sym.$("game-resultWrong").show();
         
         	sym.getSymbol("game-resultWrong").play(0);
         
         }

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
         	// Show an element 
         if (sym.$("instruction").is(":visible")) {
         	sym.$("instruction").hide();
         
         	
         
         } else {
         	sym.$("instruction").show();
         }
         
         sym.getSymbol("instruction").play(0);

      });
      //Edge binding end

   })("stage");
   //Edge symbol end:'stage'

   //=========================================================
   
   //Edge symbol: 'railings'
   (function(symbolName) {   
   
   })("railings");
   //Edge symbol end:'railings'

   //=========================================================
   
   //Edge symbol: 'classmates'
   (function(symbolName) {   
   
      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 1454, function(sym, e) {
         // insert code here
         sym.stop();

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 545, function(sym, e) {
         // insert code here
         
         // Show an element 
         

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 6100, function(sym, e) {
         // insert code here
         
         sym.getSymbol("opt1").play(0);
         sym.getSymbol("opt2").play(0);
         sym.getSymbol("opt3").play(0);
         sym.getSymbol("opt4").play(0);
         sym.getSymbol("opt5").play(0);

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 3250, function(sym, e) {
         // insert code here
         sym.play("show");

      });
      //Edge binding end

   })("classmates");
   //Edge symbol end:'classmates'

   //=========================================================
   
   //Edge symbol: 'instruction'
   (function(symbolName) {   
   
      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 8750, function(sym, e) {
         // insert code here
         
         // Hide an element 
         sym.getSymbolElement().hide();

      });
      //Edge binding end

   })("instruction");
   //Edge symbol end:'instruction'

   //=========================================================
   
   //Edge symbol: 's1'
   (function(symbolName) {   
   
   })("s1");
   //Edge symbol end:'s1'

   //=========================================================
   
   //Edge symbol: 'opt1'
   (function(symbolName) {   
   
   })("opt1");
   //Edge symbol end:'opt1'

   //=========================================================
   
   //Edge symbol: 'Symbol_1'
   (function(symbolName) {   
   
   })("Symbol_1");
   //Edge symbol end:'Symbol_1'

   //=========================================================
   
   //Edge symbol: 'Symbol_2'
   (function(symbolName) {   
   
   })("Symbol_2");
   //Edge symbol end:'Symbol_2'

   //=========================================================
   
   //Edge symbol: 'Symbol_3'
   (function(symbolName) {   
   
   })("Symbol_3");
   //Edge symbol end:'Symbol_3'

   //=========================================================
   
   //Edge symbol: 'Symbol_4'
   (function(symbolName) {   
   
   })("Symbol_4");
   //Edge symbol end:'Symbol_4'

   //=========================================================
   
   //Edge symbol: 'game-result'
   (function(symbolName) {   
   
      Symbol.bindElementAction(compId, symbolName, "${close-btn1}", "click", function(sym, e) {
         // insert code for mouse click here
         
         // Hide an element 
         sym.getSymbolElement().hide();

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 231, function(sym, e) {
         if(imgCount>=5)sym.$("subText").html("Click \"Close\" to continue");

      });
      //Edge binding end

   })("game-result");
   //Edge symbol end:'game-result'

   //=========================================================
   
   //Edge symbol: 'game-result2'
   (function(symbolName) {   
   
      Symbol.bindElementAction(compId, symbolName, "${close-btn1}", "click", function(sym, e) {
         // insert code for mouse click here
         
         // Hide an element 
         sym.getSymbolElement().hide();
         
         // Show an element 
         sym.getComposition().getStage().$("mainmenu").show();
         
         
         sym.getComposition().getStage().getSymbol("classmates").play("reveal");

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

})(window.jQuery || AdobeEdge.$, AdobeEdge, "EDGE-601893278");