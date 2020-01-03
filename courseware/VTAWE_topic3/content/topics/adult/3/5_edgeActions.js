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

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 2425, function(sym, e) {
         // insert code here
         sym.stop();
         playSound("6");

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

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 20881, function(sym, e) {
         // insert code here
         sym.play("sk1");

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 25500, function(sym, e) {
         // insert code here
         runTime();
         
         function runTime(){
         	tmr--;
         	if(tmr<0)tmr=0;
         	var tmrstr=tmr;
         	if(tmr<10)tmrstr="0"+tmr;
         	// Change the text in an element
         	sym.getSymbol("timer").$("Text").html("00:"+tmrstr);
         
         	if(tmr<=0){
         		sym.play("tu1");
         	}
         	else to = setTimeout(runTime,1000);
         
         }
         sym.stop();

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${a1}", "click", function(sym, e) {
         // insert code for mouse click here
         
         // Show an element 
         
         // Hide an element 
         
         // Hide an element 
         sym.$("a1").hide();
         ctr++;
         playSFX("correct1");
         sym.$("picture1-right-select-1").show();
         sym.getSymbol("picture1-right-select-1").play(0);
         
         if(ctr>=3){
         	clearTimeout(to);
         	// Show an element 
         	setTimeout(function(){
         		sym.$("game-resultCorrectCopy").show();
         		sym.getSymbol("game-resultCorrectCopy").play();
         	},2000);
         }

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 26427, function(sym, e) {
         // insert code here
         setTimeout(function(){
         	sym.play();
         },1000);
         sym.stop();

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${a2}", "click", function(sym, e) {
         // insert code for mouse click here
         
         // Show an element 
         ctr++;
         
         // Hide an element 
         sym.$("a2").hide();
         
         playSFX("correct1");
         sym.$("picture1-right-select-2").show();
         sym.getSymbol("picture1-right-select-2").play(0);
         
         if(ctr>=3){
         	clearTimeout(to);
         	// Show an element 
         	setTimeout(function(){
         		sym.$("game-resultCorrectCopy").show();
         		sym.getSymbol("game-resultCorrectCopy").play();
         	},2000);
         }

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${a3}", "click", function(sym, e) {
         // insert code for mouse click here
         ctr++;
         
         // Hide an element 
         sym.$("a3").hide();
         
         // Show an element 
         playSFX("correct1");
         sym.$("picture1-right-select-3").show();
         sym.getSymbol("picture1-right-select-3").play(0);
         
         if(ctr>=3){
         	clearTimeout(to);
         	// Show an element 
         	setTimeout(function(){
         		sym.$("game-resultCorrectCopy").show();
         		sym.getSymbol("game-resultCorrectCopy").play();
         	},2000);
         }

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${a}", "click", function(sym, e) {
         // insert code for mouse click here
         tmr-=3;
         playSFX("wrong1");

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 22356, function(sym, e) {
         // insert code here
         tmr=60;
         ctr=0;
         // Show an element 
         sym.getSymbol("timer").$("Text").text("00:"+tmr);

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 25553, function(sym, e) {
         // insert code here
         sym.play("s2");

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 27406, function(sym, e) {
         // insert code here
         tmr=60;
         ctr=0;
         // Show an element 
         sym.getSymbol("timer").$("Text").text("00:"+tmr);

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 30044, function(sym, e) {
         // insert code here
         runTime();
         
         function runTime(){
         	tmr--;
         	if(tmr<0)tmr=0;
         	var tmrstr=tmr;
         	if(tmr<10)tmrstr="0"+tmr;
         	// Change the text in an element
         	sym.getSymbol("timer").$("Text").html("00:"+tmrstr);
         
         	if(tmr<=0){
         		sym.play("tu2");
         	}
         	else to = setTimeout(runTime,1000);
         
         }
         sym.stop();

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 31750, function(sym, e) {
         // insert code here
         setTimeout(function(){
         	sym.play();
         },1000);
         sym.stop();

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${b1}", "click", function(sym, e) {
         // insert code for mouse click here
         ctr++;
         
         // Hide an element 
         sym.$("b1").hide();
         
         playSFX("correct1");
         sym.$("picture2-right-select-1").show();
         sym.getSymbol("picture2-right-select-1").play(0);
         
         if(ctr>=3){
         	clearTimeout(to);
         	// Show an element 
         	setTimeout(function(){
         		sym.$("game-resultCorrectCopy").show();
         		sym.getSymbol("game-resultCorrectCopy").play();
         	},2000);
         }

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${b2}", "click", function(sym, e) {
         // insert code for mouse click here
         ctr++;
         // Hide an element 
         sym.$("b2").hide();
         playSFX("correct1");
         sym.$("picture2-right-select-2").show();
         sym.getSymbol("picture2-right-select-2").play(0);
         
         if(ctr>=3){
         	clearTimeout(to);
         	// Show an element 
         	setTimeout(function(){
         		sym.$("game-resultCorrectCopy").show();
         		sym.getSymbol("game-resultCorrectCopy").play();
         	},2000);
         }

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${b3}", "click", function(sym, e) {
         // insert code for mouse click here
         ctr++;
         // Hide an element 
         sym.$("b3").hide();
         playSFX("correct1");
         sym.$("picture2-right-select-3").show();
         sym.getSymbol("picture2-right-select-3").play(0);
         
         if(ctr>=3){
         	clearTimeout(to);
         	// Show an element 
         	setTimeout(function(){
         		sym.$("game-resultCorrectCopy").show();
         		sym.getSymbol("game-resultCorrectCopy").play();
         	},2000);
         }

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 30099, function(sym, e) {
         // insert code here
         sym.play("s3");

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 35083, function(sym, e) {
         // insert code here
         runTime();
         
         function runTime(){
         	tmr--;
         	if(tmr<0)tmr=0;
         	var tmrstr=tmr;
         	if(tmr<10)tmrstr="0"+tmr;
         	// Change the text in an element
         	sym.getSymbol("timer").$("Text").html("00:"+tmrstr);
         
         	if(tmr<=0){
         		sym.play("tu3");
         	}
         	else to = setTimeout(runTime,1000);
         
         }
         sym.stop();

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 32441, function(sym, e) {
         // insert code here
         tmr=60;
         ctr=0;
         // Show an element 
         sym.getSymbol("timer").$("Text").text("00:"+tmr);

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 35145, function(sym, e) {
         // insert code here
         sym.play("end");

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 67524, function(sym, e) {
         // insert code here
         tmr=45;
         ctr=0;
         // Show an element 
         sym.getSymbol("timer").$("Text").text("00:"+tmr);

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${c1}", "click", function(sym, e) {
         // insert code for mouse click here
         ctr++;
         // Hide an element 
         sym.$("c1").hide();
         playSFX("correct1");
         sym.$("picture3-right-select-1").show();
         sym.getSymbol("picture3-right-select-1").play(0);
         
         if(ctr>=3){
         	clearTimeout(to);
         	// Show an element 
         	setTimeout(function(){
         		sym.$("game-resultCorrectCopy").show();
         		sym.getSymbol("game-resultCorrectCopy").play();
         	},2000);
         }

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${c2}", "click", function(sym, e) {
         // insert code for mouse click here
         ctr++;
         // Hide an element 
         sym.$("c2").hide();
         playSFX("correct1");
         sym.$("picture3-right-select-2").show();
         sym.getSymbol("picture3-right-select-2").play(0);
         
         if(ctr>=3){
         	clearTimeout(to);
         	// Show an element 
         	setTimeout(function(){
         		sym.$("game-resultCorrectCopy").show();
         		sym.getSymbol("game-resultCorrectCopy").play();
         	},2000);
         }

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${c3}", "click", function(sym, e) {
         // insert code for mouse click here
         ctr++;
         // Hide an element 
         sym.$("c3").hide();
         playSFX("correct1");
         sym.$("picture3-right-select-3").show();
         sym.getSymbol("picture3-right-select-3").play(0);
         
         if(ctr>=3){
         	clearTimeout(to);
         	// Show an element 
         	setTimeout(function(){
         		sym.$("game-resultCorrectCopy").show();
         		sym.getSymbol("game-resultCorrectCopy").play();
         	},2000);
         	
         }

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
   
   //Edge symbol: 'timer'
   (function(symbolName) {   
   
   })("timer");
   //Edge symbol end:'timer'

   //=========================================================
   
   //Edge symbol: 'wrong-select'
   (function(symbolName) {   
   
   })("wrong-select");
   //Edge symbol end:'wrong-select'

   //=========================================================
   
   //Edge symbol: 'picture1-right-selects'
   (function(symbolName) {   
   
   })("picture1-right-selects");
   //Edge symbol end:'picture1-right-selects'

   //=========================================================
   
   //Edge symbol: 'picture1-right-select-2'
   (function(symbolName) {   
   
   })("picture1-right-select-2");
   //Edge symbol end:'picture1-right-select-2'

   //=========================================================
   
   //Edge symbol: 'picture1-right-select-3'
   (function(symbolName) {   
   
   })("picture1-right-select-3");
   //Edge symbol end:'picture1-right-select-3'

   //=========================================================
   
   //Edge symbol: 'picture2-right-select-1'
   (function(symbolName) {   
   
   })("picture2-right-select-1");
   //Edge symbol end:'picture2-right-select-1'

   //=========================================================
   
   //Edge symbol: 'picture2-right-select-2'
   (function(symbolName) {   
   
   })("picture2-right-select-2");
   //Edge symbol end:'picture2-right-select-2'

   //=========================================================
   
   //Edge symbol: 'picture2-right-select-3'
   (function(symbolName) {   
   
   })("picture2-right-select-3");
   //Edge symbol end:'picture2-right-select-3'

   //=========================================================
   
   //Edge symbol: 'picture3-right-select-1'
   (function(symbolName) {   
   
   })("picture3-right-select-1");
   //Edge symbol end:'picture3-right-select-1'

   //=========================================================
   
   //Edge symbol: 'picture3-right-select-2'
   (function(symbolName) {   
   
   })("picture3-right-select-2");
   //Edge symbol end:'picture3-right-select-2'

   //=========================================================
   
   //Edge symbol: 'picture3-right-select-3'
   (function(symbolName) {   
   
   })("picture3-right-select-3");
   //Edge symbol end:'picture3-right-select-3'

   //=========================================================
   
   //Edge symbol: 'game-result2'
   (function(symbolName) {   
   
      Symbol.bindElementAction(compId, symbolName, "${close-btn1}", "click", function(sym, e) {
         // insert code for mouse click here
         
         // Hide an element 
         sym.getSymbolElement().hide();
         
         sym.getComposition().getStage().play();
         

      });
      //Edge binding end

   })("game-result2");
   //Edge symbol end:'game-result2'

})(window.jQuery || AdobeEdge.$, AdobeEdge, "EDGE-1646797");