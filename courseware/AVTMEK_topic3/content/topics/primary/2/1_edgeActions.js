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
      
      
      

      

      

      

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 10140, function(sym, e) {
         // insert code here
         sym.stop();
         playSound("1");

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 28329, function(sym, e) {
         // insert code here
         sym.stop();

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 0, function(sym, e) {
         // insert code here
         playBGSound("music1");
         init(sym);

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${t1}", "click", function(sym, e) {
         // insert code for mouse click here
         answer="a";
         sym.getSymbol("Intro-choices").play("a1");

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${t2}", "click", function(sym, e) {
         // insert code for mouse click here
         answer="b";
         sym.getSymbol("Intro-choices").play("a2");

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${t3}", "click", function(sym, e) {
         // insert code for mouse click here
         
         // Show an element 
         answer="c";
         sym.getSymbol("Intro-choices").play("a3");
         

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 45814, function(sym, e) {
         // insert code here
         sym.stop();

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 50228, function(sym, e) {
         // insert code here
         sym.stop();

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${t4}", "click", function(sym, e) {
         // insert code for mouse click here
         answer="a";
         sym.getSymbol("Main-choices").play("a1");

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${t5}", "click", function(sym, e) {
         // insert code for mouse click here
         answer="b";
         sym.getSymbol("Main-choices").play("a2");

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${t6}", "click", function(sym, e) {
         // insert code for mouse click here
         answer="c";
         sym.getSymbol("Main-choices").play("a3");

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${t7}", "click", function(sym, e) {
         // insert code for mouse click here
         answer="a";
         
         sym.getSymbol("end-choices").play("a1");

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${t8}", "click", function(sym, e) {
         // insert code for mouse click here
         answer="b";
         
         sym.getSymbol("end-choices").play("a2");

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${t9}", "click", function(sym, e) {
         // insert code for mouse click here
         answer="c";
         
         sym.getSymbol("end-choices").play("a3");

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 54485, function(sym, e) {
         // insert code here
         sym.stop();

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${play-btn}", "click", function(sym, e) {
         // insert code for mouse click here
         sym.play("start");

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 55033, function(sym, e) {
         // insert code here
         sym.stop();
         // Show an element 
         sym.$("b"+banswer).show();
         sym.getSymbol("b"+banswer).play();

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
   
   //Edge symbol: 'chairs'
   (function(symbolName) {   
   
   })("chairs");
   //Edge symbol end:'chairs'

   //=========================================================
   
   //Edge symbol: 'Intro-choices'
   (function(symbolName) {   
   
      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 816, function(sym, e) {
         // insert code here
         sym.stop();

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 1113, function(sym, e) {
         // insert code here
         
         sym.getComposition().getStage().play("beginning");
         
         sym.stop();

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 1413, function(sym, e) {
         sym.getComposition().getStage().play("beginning");
         sym.stop();

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 1715, function(sym, e) {
         // insert code here
         sym.getComposition().getStage().play("beginning");
         sym.stop();

      });
      //Edge binding end

   })("Intro-choices");
   //Edge symbol end:'Intro-choices'

   //=========================================================
   
   //Edge symbol: 'intro-answer'
   (function(symbolName) {   
   
      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 71, function(sym, e) {
         // insert code here
         $(".class-a1").hide();
         // Show an element 
         banswer=answer;
         sym.$(answer).show();

      });
      //Edge binding end

   })("intro-answer");
   //Edge symbol end:'intro-answer'

   //=========================================================
   
   //Edge symbol: 'Main-choices'
   (function(symbolName) {   
   
      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 816, function(sym, e) {
         // insert code here
         sym.stop();

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 1113, function(sym, e) {
         // insert code here
         
         sym.getComposition().getStage().play("middle");
         
         sym.stop();

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 1413, function(sym, e) {
         // insert code here
         sym.getComposition().getStage().play("middle");
         sym.stop();

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 1715, function(sym, e) {
         // insert code here
         sym.getComposition().getStage().play("middle");
         sym.stop();

      });
      //Edge binding end

   })("Main-choices");
   //Edge symbol end:'Main-choices'

   //=========================================================
   
   //Edge symbol: 'main-answer'
   (function(symbolName) {   
   
      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 71, function(sym, e) {
         // insert code here
         $(".class-a2").hide();
         // Show an element 
         manswer=answer;
         sym.$(answer).show();

      });
      //Edge binding end

   })("main-answer");
   //Edge symbol end:'main-answer'

   //=========================================================
   
   //Edge symbol: 'end-choices'
   (function(symbolName) {   
   
      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 816, function(sym, e) {
         // insert code here
         sym.stop();

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 1113, function(sym, e) {
         // insert code here
         
         sym.getComposition().getStage().play("end");
         
         sym.stop();

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 1413, function(sym, e) {
         // insert code here
         sym.getComposition().getStage().play("end");
         sym.stop();

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 1715, function(sym, e) {
         // insert code here
         sym.getComposition().getStage().play("end");
         sym.stop();

      });
      //Edge binding end

   })("end-choices");
   //Edge symbol end:'end-choices'

   //=========================================================
   
   //Edge symbol: 'end-answer'
   (function(symbolName) {   
   
      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 71, function(sym, e) {
         // insert code here
         $(".class-a3").hide();
         // Show an element
         eanswer=answer;
         sym.$(answer).show();

      });
      //Edge binding end

   })("end-answer");
   //Edge symbol end:'end-answer'

   //=========================================================
   
   //Edge symbol: 'beginning-final'
   (function(symbolName) {   
   
      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 54, function(sym, e) {
         sym.$(banswer).show();

      });
      //Edge binding end

   })("beginning-final");
   //Edge symbol end:'beginning-final'

   //=========================================================
   
   //Edge symbol: 'Middle-final'
   (function(symbolName) {   
   
      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 67, function(sym, e) {
         // insert code here
         sym.$(manswer).show();

      });
      //Edge binding end

   })("Middle-final");
   //Edge symbol end:'Middle-final'

   //=========================================================
   
   //Edge symbol: 'end-final'
   (function(symbolName) {   
   
      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 61, function(sym, e) {
         // insert code here
         sym.$(eanswer).show();

      });
      //Edge binding end

   })("end-final");
   //Edge symbol end:'end-final'

   //=========================================================
   
   //Edge symbol: 'opening1'
   (function(symbolName) {   
   
      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 3247, function(sym, e) {
         // insert code here
         
         // Show an element 
         sym.getComposition().getStage().$("m"+manswer).show();
         sym.getComposition().getStage().getSymbol("m"+manswer).play();

      });
      //Edge binding end

   })("opening1");
   //Edge symbol end:'opening1'

   //=========================================================
   
   //Edge symbol: 'opening2'
   (function(symbolName) {   
   
      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 995, function(sym, e) {
         // insert code here
         // insert code here
         
         // Show an element 
         sym.getComposition().getStage().$("m"+manswer).show();
         sym.getComposition().getStage().getSymbol("m"+manswer).play();

      });
      //Edge binding end

   })("opening2");
   //Edge symbol end:'opening2'

   //=========================================================
   
   //Edge symbol: 'opening3'
   (function(symbolName) {   
   
      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 2655, function(sym, e) {
         // insert code here
         
         // Show an element 
         sym.getComposition().getStage().$("m"+manswer).show();
         sym.getComposition().getStage().getSymbol("m"+manswer).play();

      });
      //Edge binding end

   })("opening3");
   //Edge symbol end:'opening3'

   //=========================================================
   
   //Edge symbol: 'Middle1'
   (function(symbolName) {   
   
      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 1199, function(sym, e) {
         // insert code here
         
         // Show an element 
         sym.getComposition().getStage().$("e"+eanswer).show();
         sym.getComposition().getStage().getSymbol("e"+eanswer).play();

      });
      //Edge binding end

   })("Middle1");
   //Edge symbol end:'Middle1'

   //=========================================================
   
   //Edge symbol: 'middle2'
   (function(symbolName) {   
   
      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 1975, function(sym, e) {
         // insert code here
         
         // Show an element 
         sym.getComposition().getStage().$("e"+eanswer).show();
         sym.getComposition().getStage().getSymbol("e"+eanswer).play();

      });
      //Edge binding end

   })("middle2");
   //Edge symbol end:'middle2'

   //=========================================================
   
   //Edge symbol: 'middle3'
   (function(symbolName) {   
   
      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 2850, function(sym, e) {
         // insert code here
         
         // Show an element 
         sym.getComposition().getStage().$("e"+eanswer).show();
         sym.getComposition().getStage().getSymbol("e"+eanswer).play();

      });
      //Edge binding end

   })("middle3");
   //Edge symbol end:'middle3'

   //=========================================================
   
   //Edge symbol: 'end1'
   (function(symbolName) {   
   
      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 3453, function(sym, e) {
         // insert code here
         
         sym.getComposition().getStage().play("end1");

      });
      //Edge binding end

   })("end1");
   //Edge symbol end:'end1'

   //=========================================================
   
   //Edge symbol: 'end2'
   (function(symbolName) {   
   
      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 1820, function(sym, e) {
         // insert code here
         sym.getComposition().getStage().play("end1");

      });
      //Edge binding end

   })("end2");
   //Edge symbol end:'end2'

   //=========================================================
   
   //Edge symbol: 'end3'
   (function(symbolName) {   
   
      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 2162, function(sym, e) {
         // insert code here
         sym.getComposition().getStage().play("end1");

      });
      //Edge binding end

   })("end3");
   //Edge symbol end:'end3'

})(window.jQuery || AdobeEdge.$, AdobeEdge, "EDGE-1646797");