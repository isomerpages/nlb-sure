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
      
      
      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 16348, function(sym, e) {
         // insert code here
         sym.stop();

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${startgame-btn}", "click", function(sym, e) {
         // insert code for mouse click here
         sym.play();

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${card1}", "click", function(sym, e) {
         // insert code for mouse click here
         //sym.getSymbol("card1").play(1);
         console.log("1");
         if(pair1!=""&&pair2!="")return;
         if(sym.getSymbol("card1").getPosition()>1)return;
         if(!selected){
         	card1 = sym.getSymbol("card1");
         	pair1 = $("#Stage_card1").data("pair");
         	card1.play(1);
         	selected=true;
         }
         else{
         	card2 = sym.getSymbol("card1");
         	pair2 = $("#Stage_card1").data("pair");
         	card2.play(1);
         	selected=false;
         }

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 0, function(sym, e) {
         // insert code here
         playBGSound("music1");
         init(sym);

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 17, function(sym, e) {
         // insert code here
         initGame(showFeedback);
         
         function showFeedback(){
         	// Show an element 
         	sym.$("game-result2").show();
         	sym.getSymbol("game-result2").play(0);
         }

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${card2}", "click", function(sym, e) {
         // insert code for mouse click here
         console.log("2");
         if(pair1!=""&&pair2!="")return;
         if(sym.getSymbol("card2").getPosition()>1)return;
         if(!selected){
         	
         	card1 = sym.getSymbol("card2");
         	pair1 = $("#Stage_card2").data("pair");
         	card1.play(1);
         	selected=true;
         }
         else{
         	
         	card2 = sym.getSymbol("card2");
         	pair2 = $("#Stage_card2").data("pair");
         	card2.play(1);
         	selected=false;
         }

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${card3}", "click", function(sym, e) {
         // insert code for mouse click here
         console.log("3");
         if(pair1!=""&&pair2!="")return;
         if(sym.getSymbol("card3").getPosition()>1)return;
         if(!selected){
         
         	card1 = sym.getSymbol("card3");
         	pair1 = $("#Stage_card3").data("pair");
         	card1.play(1);
         	selected=true;
         }
         else{
         	
         	card2 = sym.getSymbol("card3");
         	pair2 = $("#Stage_card3").data("pair");
         	card2.play(1);
         	selected=false;
         }

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${card4}", "click", function(sym, e) {
         // insert code for mouse click here
         console.log("4");
         if(pair1!=""&&pair2!="")return;
         if(sym.getSymbol("card4").getPosition()>1)return;
         if(!selected){
         	
         	card1 = sym.getSymbol("card4");
         	pair1 = $("#Stage_card4").data("pair");
         	card1.play(1);
         	selected=true;
         }
         else{
         	
         	card2 = sym.getSymbol("card4");
         	pair2 = $("#Stage_card4").data("pair");
         	card2.play(1);
         	selected=false;
         }

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${card5}", "click", function(sym, e) {
         // insert code for mouse click here
         console.log("5");
         if(pair1!=""&&pair2!="")return;
         if(sym.getSymbol("card5").getPosition()>1)return;
         if(!selected){
         	
         	card1 = sym.getSymbol("card5");
         	pair1 = $("#Stage_card5").data("pair");
         	card1.play(1);
         	selected=true;
         }
         else{
         	
         	card2 = sym.getSymbol("card5");
         	pair2 = $("#Stage_card5").data("pair");
         	card2.play(1);
         	selected=false;
         }

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${card6}", "click", function(sym, e) {
         // insert code for mouse click here
         console.log("6");
         if(pair1!=""&&pair2!="")return;
         if(sym.getSymbol("card6").getPosition()>1)return;
         if(!selected){
         	
         	card1 = sym.getSymbol("card6");
         	pair1 = $("#Stage_card6").data("pair");
         	card1.play(1);
         	selected=true;
         }
         else{
         	
         	card2 = sym.getSymbol("card6");
         	pair2 = $("#Stage_card6").data("pair");
         	card2.play(1);
         	selected=false;
         }

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${card7}", "click", function(sym, e) {
         // insert code for mouse click here
         console.log("7");
         if(pair1!=""&&pair2!="")return;
         if(sym.getSymbol("card7").getPosition()>1)return;
         if(!selected){
         	
         	card1 = sym.getSymbol("card7");
         	pair1 = $("#Stage_card7").data("pair");
         	card1.play(1);
         	selected=true;
         }
         else{
         	
         	card2 = sym.getSymbol("card7");
         	pair2 = $("#Stage_card7").data("pair");
         	card2.play(1);
         	selected=false;
         }

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${card8}", "click", function(sym, e) {
         // insert code for mouse click here
         console.log("8");
         if(pair1!=""&&pair2!="")return;
         if(sym.getSymbol("card8").getPosition()>1)return;
         if(!selected){
         	
         	card1 = sym.getSymbol("card8");
         	pair1 = $("#Stage_card8").data("pair");
         	card1.play(1);
         	selected=true;
         }
         else{
         	
         	card2 = sym.getSymbol("card8");
         	pair2 = $("#Stage_card8").data("pair");
         	card2.play(1);
         	selected=false;
         }

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${card9}", "click", function(sym, e) {
         // insert code for mouse click here
         console.log("9");
         if(pair1!=""&&pair2!="")return;
         if(sym.getSymbol("card9").getPosition()>1)return;
         if(!selected){
         	
         	card1 = sym.getSymbol("card9");
         	pair1 = $("#Stage_card9").data("pair");
         	card1.play(1);
         	selected=true;
         }
         else{
         	
         	card2 = sym.getSymbol("card9");
         	pair2 = $("#Stage_card9").data("pair");
         	card2.play(1);
         	selected=false;
         }

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${card10}", "click", function(sym, e) {
         // insert code for mouse click here
         console.log("10");
         if(pair1!=""&&pair2!="")return;
         if(sym.getSymbol("card10").getPosition()>1)return;
         if(!selected){
         	
         	card1 = sym.getSymbol("card10");
         	pair1 = $("#Stage_card10").data("pair");
         	card1.play(1);
         	selected=true;
         }
         else{
         	
         	card2 = sym.getSymbol("card10");
         	pair2 = $("#Stage_card10").data("pair");
         	card2.play(1);
         	selected=false;
         }

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${card11}", "click", function(sym, e) {
         // insert code for mouse click here
         console.log("11");
         if(pair1!=""&&pair2!="")return;
         if(sym.getSymbol("card11").getPosition()>1)return;
         if(!selected){
         	
         	card1 = sym.getSymbol("card11");
         	pair1 = $("#Stage_card11").data("pair");
         	card1.play(1);
         	selected=true;
         }
         else{
         	
         	card2 = sym.getSymbol("card11");
         	pair2 = $("#Stage_card11").data("pair");
         	card2.play(1);
         	selected=false;
         }

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${card12}", "click", function(sym, e) {
         // insert code for mouse click here
         console.log("12");
         if(pair1!=""&&pair2!="")return;
         if(sym.getSymbol("card12").getPosition()>1)return;
         if(!selected){
         	
         	card1 = sym.getSymbol("card12");
         	pair1 = $("#Stage_card12").data("pair");
         	card1.play(1);
         	selected=true;
         }
         else{
         	
         	card2 = sym.getSymbol("card12");
         	pair2 = $("#Stage_card12").data("pair");
         	card2.play(1);
         	selected=false;
         }

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 16522, function(sym, e) {
         // insert code here
         sym.stop();

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${instruction-btn}", "click", function(sym, e) {
         // insert code for mouse click here
         // Set a toggle to hide or show an element 
         if (sym.$("Group").is(":visible")) {
         	sym.$("Group").hide();
         } else {
         	sym.$("Group").show();
         }
         

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 1500, function(sym, e) {
         // insert code here
         sym.stop();
         playSound("1b");

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
   
   //Edge symbol: 'card1'
   (function(symbolName) {   
   
      

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 314, function(sym, e) {
         // insert code here
         sym.stop(1);

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 158, function(sym, e) {
         // insert code here
         verifyAnswer();
         sym.stop();

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 2000, function(sym, e) {
         // insert code here
         sym.play("end");

      });
      //Edge binding end

   })("card1");
   //Edge symbol end:'card1'

   //=========================================================
   
   //Edge symbol: 'card2'
   (function(symbolName) {   
   
   })("card2");
   //Edge symbol end:'card2'

   //=========================================================
   
   //Edge symbol: 'card3'
   (function(symbolName) {   
   
   })("card3");
   //Edge symbol end:'card3'

   //=========================================================
   
   //Edge symbol: 'card4'
   (function(symbolName) {   
   
   })("card4");
   //Edge symbol end:'card4'

   //=========================================================
   
   //Edge symbol: 'card5'
   (function(symbolName) {   
   
   })("card5");
   //Edge symbol end:'card5'

   //=========================================================
   
   //Edge symbol: 'card6'
   (function(symbolName) {   
   
   })("card6");
   //Edge symbol end:'card6'

   //=========================================================
   
   //Edge symbol: 'card7'
   (function(symbolName) {   
   
   })("card7");
   //Edge symbol end:'card7'

   //=========================================================
   
   //Edge symbol: 'card8'
   (function(symbolName) {   
   
   })("card8");
   //Edge symbol end:'card8'

   //=========================================================
   
   //Edge symbol: 'card9'
   (function(symbolName) {   
   
   })("card9");
   //Edge symbol end:'card9'

   //=========================================================
   
   //Edge symbol: 'card10'
   (function(symbolName) {   
   
   })("card10");
   //Edge symbol end:'card10'

   //=========================================================
   
   //Edge symbol: 'card11'
   (function(symbolName) {   
   
   })("card11");
   //Edge symbol end:'card11'

   //=========================================================
   
   //Edge symbol: 'card12'
   (function(symbolName) {   
   
   })("card12");
   //Edge symbol end:'card12'

   //=========================================================
   
   //Edge symbol: 'game-result2'
   (function(symbolName) {   
   
      Symbol.bindElementAction(compId, symbolName, "${close-btn1}", "click", function(sym, e) {
         // insert code for mouse click here
         // Hide an element 
         sym.getSymbolElement().hide();

      });
      //Edge binding end

   })("game-result2");
   //Edge symbol end:'game-result2'

})(window.jQuery || AdobeEdge.$, AdobeEdge, "EDGE-186649922");