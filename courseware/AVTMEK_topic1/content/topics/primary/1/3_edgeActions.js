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
         
         
         // Hide an element 
         sym.$("event1").hide();
         sym.$("event2").hide();
         sym.$("event3").hide();
         sym.$("event4").hide();
         sym.$("event5").hide();

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 4500, function(sym, e) {
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
         }
         

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 23800, function(sym, e) {
         // insert code here
         //sym.stop();

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 26300, function(sym, e) {
         // insert code here
         sym.stop();
         var ctr=60;
         sym.getSymbol("timer").$("Text").text("01:00");
         
         sym.setVariable("a", false);
         sym.setVariable("b", false);
         sym.setVariable("c", false);
         sym.setVariable("d", false);
         sym.setVariable("e", false);
         
         var tmDisplay;
         timer();
         function timer(){
         	ctr--;
         	tmDisplay=ctr;
         	if(ctr<10){
         		tmDisplay="0"+ctr;
         	}
         
         	// Show an element 
         	sym.getSymbol("timer").$("Text").text("00:"+tmDisplay);
         
         	if(ctr>0)to=setTimeout(timer, 1000);
         	else{
         		sym.play("timeup");
         	}
         }

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${t1}", "click", function(sym, e) {
         // insert code for mouse click here
         
         sym.setVariable("a", true);
         if(sym.getVariable("a")&&sym.getVariable("b")&&sym.getVariable("c")&&sym.getVariable("d")&&sym.getVariable("e")){
         		sym.play("goodjob");
         }
         
         // Show an element 
         playSFX("correct");
         
         // Hide an element 
         sym.$("t1").hide();
         
         sym.$("event1").show();
         sym.getSymbol("event1").play(0);

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${t2}", "click", function(sym, e) {
         // insert code for mouse click here
         // Show an element 
         sym.setVariable("b", true);
         if(sym.getVariable("a")&&sym.getVariable("b")&&sym.getVariable("c")&&sym.getVariable("d")&&sym.getVariable("e")){
         		sym.play("goodjob");
         }
         
         sym.$("t2").hide();
         playSFX("correct");
         sym.$("event2").show();
         sym.getSymbol("event2").play(0);

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${t3}", "click", function(sym, e) {
         // insert code for mouse click here
         // Show an element
         sym.setVariable("c", true);
         if(sym.getVariable("a")&&sym.getVariable("b")&&sym.getVariable("c")&&sym.getVariable("d")&&sym.getVariable("e")){
         		sym.play("goodjob");
         }
         sym.$("t3").hide();
         playSFX("correct");
         sym.$("event3").show();
         sym.getSymbol("event3").play(0);

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${t4}", "click", function(sym, e) {
         // insert code for mouse click here
         // Show an element 
         sym.setVariable("d", true);
         if(sym.getVariable("a")&&sym.getVariable("b")&&sym.getVariable("c")&&sym.getVariable("d")&&sym.getVariable("e")){
         		sym.play("goodjob");
         }
         sym.$("t4").hide();
         playSFX("correct");
         sym.$("event4").show();
         sym.getSymbol("event4").play(0);

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${t5}", "click", function(sym, e) {
         // insert code for mouse click here
         // Show an element 
         sym.setVariable("e", true);
         if(sym.getVariable("a")&&sym.getVariable("b")&&sym.getVariable("c")&&sym.getVariable("d")&&sym.getVariable("e")){
         		sym.play("goodjob");
         }
         sym.$("t5").hide();
         playSFX("correct");
         sym.$("event5").show();
         sym.getSymbol("event5").play(0);

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${wrong}", "click", function(sym, e) {
         // insert code for mouse click here
         playSFX("wrong");

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${next-btn}", "click", function(sym, e) {
         // insert code for mouse click here
         //loadNextPage("content/topics/primary/1/1.html?action=loaded");
         continueToNextScene();

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 30114, function(sym, e) {
         // insert code here
         sym.stop()

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${replay-btn}", "click", function(sym, e) {
         // insert code for mouse click here
         sym.play("restart");

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 23941, function(sym, e) {
         // insert code here
         // Hide an element 
         sym.$("event1").hide();
         sym.$("event2").hide();
         sym.$("event3").hide();
         sym.$("event4").hide();
         sym.$("event5").hide();

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 30629, function(sym, e) {
         // insert code here
         clearTimeout(to);

      });
      //Edge binding end

   })("stage");
   //Edge symbol end:'stage'

   //=========================================================
   
   //Edge symbol: 'instruction'
   (function(symbolName) {   
   
      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 2436, function(sym, e) {
         // insert code here
         sym.stop();

      });
      //Edge binding end

   })("instruction");
   //Edge symbol end:'instruction'

   //=========================================================
   
   //Edge symbol: 'timer'
   (function(symbolName) {   
   
   })("timer");
   //Edge symbol end:'timer'

   //=========================================================
   
   //Edge symbol: 'event1'
   (function(symbolName) {   
   
   })("event1");
   //Edge symbol end:'event1'

   //=========================================================
   
   //Edge symbol: 'event2'
   (function(symbolName) {   
   
   })("event2");
   //Edge symbol end:'event2'

   //=========================================================
   
   //Edge symbol: 'event3'
   (function(symbolName) {   
   
   })("event3");
   //Edge symbol end:'event3'

   //=========================================================
   
   //Edge symbol: 'event4'
   (function(symbolName) {   
   
   })("event4");
   //Edge symbol end:'event4'

   //=========================================================
   
   //Edge symbol: 'event5'
   (function(symbolName) {   
   
   })("event5");
   //Edge symbol end:'event5'

})(window.jQuery || AdobeEdge.$, AdobeEdge, "EDGE-1646797");