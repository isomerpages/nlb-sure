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

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 3897, function(sym, e) {
         // insert code here
         sym.stop();
         playSound("4");

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 17718, function(sym, e) {
         // insert code here
         startGame();
         sym.stop();

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

      Symbol.bindElementAction(compId, symbolName, "${whytrigger}", "click", function(sym, e) {
         // insert code for mouse click here
         
         // Hide an element 
         $(".arms").hide();
         
         // Show an element 
         sym.$("arm1").show();
         sym.getSymbol("arm1").play(0);
         mc=sym.getSymbol("why");
         
         if(ans==1){
         	bool=true;
         }
         else{
         	bool=false;
         }

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${wheretrigger}", "click", function(sym, e) {
         // insert code for mouse click here
         
         // Hide an element 
         $(".arms").hide();
         
         // Show an element 
         sym.$("arm1").show();
         sym.getSymbol("arm1").play(0);
         
         mc=sym.getSymbol("where");
         
         
         if(ans==2){
         	bool=true;
         }
         else{
         	bool=false;
         }

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${whentrigger}", "click", function(sym, e) {
         // insert code for mouse click here
         
         // Hide an element 
         $(".arms").hide();
         
         // Show an element 
         sym.$("arm2").show();
         sym.getSymbol("arm2").play(0);
         mc=sym.getSymbol("when");
         
         
         if(ans==3){
         	bool=true;
         }
         else{
         	bool=false;
         }

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${whattrigger}", "click", function(sym, e) {
         // insert code for mouse click here
         
         // Hide an element 
         $(".arms").hide();
         
         // Show an element 
         sym.$("arm2").show();
         sym.getSymbol("arm2").play(0);
         mc=sym.getSymbol("what");
         
         
         if(ans==4){
         	bool=true;
         }
         else{
         	bool=false;
         }

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${howtrigger}", "click", function(sym, e) {
         // insert code for mouse click here
         
         // Hide an element 
         $(".arms").hide();
         
         // Show an element 
         sym.$("arm3").show();
         sym.getSymbol("arm3").play(0);
         mc=sym.getSymbol("how");
         
         
         if(ans==5){
         	bool=true;
         }
         else{
         	bool=false;
         }

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${whotrigger}", "click", function(sym, e) {
         // insert code for mouse click here
         
         // Hide an element 
         $(".arms").hide();
         
         // Show an element 
         sym.$("arm3").show();
         sym.getSymbol("arm3").play(0);
         mc=sym.getSymbol("who");
         
         
         if(ans==6){
         	bool=true;
         }
         else{
         	bool=false;
         }

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${next-btn}", "click", function(sym, e) {
         // insert code for mouse click here
         continueToNextScene();

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
   
      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 3000, function(sym, e) {
         // insert code here
         sym.stop();

      });
      //Edge binding end

   })("instruction");
   //Edge symbol end:'instruction'

   //=========================================================
   
   //Edge symbol: 'questions'
   (function(symbolName) {   
   
      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 1071, function(sym, e) {
         // insert code here
         sym.stop();

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 1500, function(sym, e) {
         // insert code here
         sym.stop();

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 2350, function(sym, e) {
         // insert code here
         sym.stop();

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 2693, function(sym, e) {
         // insert code here
         sym.stop();

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 3527, function(sym, e) {
         // insert code here
         sym.stop();

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 3827, function(sym, e) {
         // insert code here
         sym.stop();

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 4774, function(sym, e) {
         // insert code here
         sym.stop();

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 5203, function(sym, e) {
         // insert code here
         sym.stop();

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 6156, function(sym, e) {
         // insert code here
         sym.stop();

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 6455, function(sym, e) {
         // insert code here
         sym.stop();

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 7481, function(sym, e) {
         // insert code here
         sym.stop();

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 7696, function(sym, e) {
         // insert code here
         sym.stop();

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 575, function(sym, e) {
         // insert code here
         ans=6;

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 1904, function(sym, e) {
         // insert code here
         ans=4;

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 3168, function(sym, e) {
         // insert code here
         ans=1;

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 4383, function(sym, e) {
         // insert code here
         ans=3;

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 5622, function(sym, e) {
         // insert code here
         ans=2;

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 6890, function(sym, e) {
         // insert code here
         ans=5;

      });
      //Edge binding end

   })("questions");
   //Edge symbol end:'questions'

   //=========================================================
   
   //Edge symbol: 'how'
   (function(symbolName) {   
   
      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 588, function(sym, e) {
         // insert code here
         sym.stop();

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 1780, function(sym, e) {
         // insert code here
         sym.stop();

      });
      //Edge binding end

   })("how");
   //Edge symbol end:'how'

   //=========================================================
   
   //Edge symbol: 'what'
   (function(symbolName) {   
   
      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 573, function(sym, e) {
         // insert code here
         sym.stop();

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 1898, function(sym, e) {
         // insert code here
         sym.stop();

      });
      //Edge binding end

   })("what");
   //Edge symbol end:'what'

   //=========================================================
   
   //Edge symbol: 'when'
   (function(symbolName) {   
   
      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 593, function(sym, e) {
         // insert code here
         sym.stop();

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 1891, function(sym, e) {
         // insert code here
         sym.stop();

      });
      //Edge binding end

   })("when");
   //Edge symbol end:'when'

   //=========================================================
   
   //Edge symbol: 'where'
   (function(symbolName) {   
   
      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 545, function(sym, e) {
         // insert code here
         sym.stop();

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 1879, function(sym, e) {
         // insert code here
         sym.stop();

      });
      //Edge binding end

   })("where");
   //Edge symbol end:'where'

   //=========================================================
   
   //Edge symbol: 'who'
   (function(symbolName) {   
   
      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 552, function(sym, e) {
         // insert code here
         sym.stop();

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 1906, function(sym, e) {
         // insert code here
         sym.stop();

      });
      //Edge binding end

   })("who");
   //Edge symbol end:'who'

   //=========================================================
   
   //Edge symbol: 'why'
   (function(symbolName) {   
   
      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 555, function(sym, e) {
         // insert code here
         sym.stop();

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 1910, function(sym, e) {
         // insert code here
         sym.stop();

      });
      //Edge binding end

   })("why");
   //Edge symbol end:'why'

   //=========================================================
   
   //Edge symbol: 'arm-w-rubber'
   (function(symbolName) {   
   
      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 514, function(sym, e) {
         // insert code here
         mc.play("hit");
         if(bool){
         	playSFX("correct1");
         }
         else{
         	playSFX("wrong1");
         }

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 843, function(sym, e) {
         // insert code here
         if(bool){
         	// Show an element 
         	sym.getComposition().getStage().$("game-resultCorrect").show();
         	sym.getComposition().getStage().getSymbol("game-resultCorrect").play(0);
         }

      });
      //Edge binding end

   })("arm-w-rubber");
   //Edge symbol end:'arm-w-rubber'

   //=========================================================
   
   //Edge symbol: 'answer'
   (function(symbolName) {   
   
   })("answer");
   //Edge symbol end:'answer'

   //=========================================================
   
   //Edge symbol: 'game-result'
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
         startGame();

      });
      //Edge binding end

      

   })("game-result2");
   //Edge symbol end:'game-result2'

})(window.jQuery || AdobeEdge.$, AdobeEdge, "EDGE-1646797");