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
         $(".answers").hide();
         $(".feedbacks").hide();
         
         // Hide an element 
         sym.$("mainmenu").hide();
         playBGSound("music1");
         init(sym);
         

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 4500, function(sym, e) {
         // insert code here
         sym.stop();
         playSound("3na");

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 9042, function(sym, e) {
         // insert code here
         sym.stop();
         playSound("3ga");

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 14014, function(sym, e) {
         // insert code here
         sym.stop();
         playSound("3nb");

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 28250, function(sym, e) {
         // insert code here
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

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 28303, function(sym, e) {
         // insert code here
         sym.play("start");

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 30991, function(sym, e) {
         // insert code here
         found=0;
         
         var tmr=60;
         function startTimer(){
         	tmr--;
         	var txt = tmr;
         	if(tmr<10)txt="0"+tmr;
         
         	// Show an element 
         	sym.getSymbol("timer").$("Text").html("00:"+txt);
         
         	if(tmr<=0){
         			sym.play("timeup");
         	}
         	else{
         		to = setTimeout(startTimer,1000);
         	}
         }
         startTimer();
         sym.stop();

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 28950, function(sym, e) {
         // insert code here
         
         sym.getSymbol("progress-bar").stop(0);
         
         // Show an element 
         sym.getSymbol("progress-bar").$("txt").text("0/5");
         
         // Show an element 
         sym.getSymbol("timer").$("Text").html("01:00");
         
         
         $(".answers").hide();
         $(".feedbacks").hide();

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 15606, function(sym, e) {
         // insert code here
         sym.stop();
         playSound("3gb");

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${t1}", "click", function(sym, e) {
         // insert code for mouse click here
         
         // Hide an element 
         sym.$("t1").hide();
         found++;
         sym.getSymbol("progress-bar").$("txt").text(found+"/5");
         
         sym.getSymbol("progress-bar").stop("a"+found);
         // Show an element 
         sym.$("answer1").show();
         sym.getSymbol("answer1").play(0);
         
         if(found>=5){
         	setTimeout(function(){
         		sym.play("result")
         	},1000);
         }

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${t2}", "click", function(sym, e) {
         // insert code for mouse click here
         // Hide an element 
         sym.$("t2").hide();
         found++;
         sym.getSymbol("progress-bar").$("txt").text(found+"/5");
         
         sym.getSymbol("progress-bar").stop("a"+found);
         // Show an element 
         sym.$("answer2").show();
         sym.getSymbol("answer2").play(0);
         
         if(found>=5){
         	setTimeout(function(){
         		sym.play("result")
         	},1000);
         }

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${t3}", "click", function(sym, e) {
         // insert code for mouse click here
         // Hide an element 
         sym.$("t3").hide();
         found++;
         sym.getSymbol("progress-bar").$("txt").text(found+"/5");
         
         sym.getSymbol("progress-bar").stop("a"+found);
         // Show an element 
         sym.$("answer3").show();
         sym.getSymbol("answer3").play(0);
         
         if(found>=5){
         	setTimeout(function(){
         		sym.play("result")
         	},1000);
         }

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${t4}", "click", function(sym, e) {
         // insert code for mouse click here
         // Hide an element 
         sym.$("t4").hide();
         found++;
         sym.getSymbol("progress-bar").$("txt").text(found+"/5");
         
         sym.getSymbol("progress-bar").stop("a"+found);
         // Show an element 
         sym.$("answer4").show();
         sym.getSymbol("answer4").play(0);
         
         if(found>=5){
         	setTimeout(function(){
         		sym.play("result")
         	},1000);
         }

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${t5}", "click", function(sym, e) {
         // insert code for mouse click here
         // Hide an element 
         sym.$("t5").hide();
         found++;
         
         sym.getSymbol("progress-bar").$("txt").text(found+"/5");
         
         
         
         sym.getSymbol("progress-bar").stop("a"+found);
         
         // Show an element 
         sym.$("answer5").show();
         sym.getSymbol("answer5").play(0);
         
         if(found>=5){
         	setTimeout(function(){
         		sym.play("result")
         	},1000);
         }

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${startgame-btn}", "click", function(sym, e) {
         // insert code for mouse click here
         sym.play("start");

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 36083, function(sym, e) {
         // insert code here
         clearTimeout(to);
         // Show an element 
         
         
         setTimeout(delayResults,2200);
         
         function delayResults(){
         	sym.$("mainmenu").show();
         	sym.play();
         	if(found>=5){
         
         		// Show an element 
         		sym.$("well-done2").show();
         
         		sym.getSymbol("well-done2").play(0);
         
         
         
         	}
         	else{
         
         		// Show an element 
         		sym.$("oops").show();
         
         		sym.getSymbol("oops").play(0);
         
         	}
         }
         sym.stop();

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 36312, function(sym, e) {
         // insert code here
         sym.stop();

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
   
   //Edge symbol: 'picture'
   (function(symbolName) {   
   
   })("picture");
   //Edge symbol end:'picture'

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
   
   //Edge symbol: 'progress-bar'
   (function(symbolName) {   
   
   })("progress-bar");
   //Edge symbol end:'progress-bar'

   //=========================================================
   
   //Edge symbol: 'timer'
   (function(symbolName) {   
   
   })("timer");
   //Edge symbol end:'timer'

   //=========================================================
   
   //Edge symbol: 'box'
   (function(symbolName) {   
   
   })("box");
   //Edge symbol end:'box'

   //=========================================================
   
   //Edge symbol: 'box-group'
   (function(symbolName) {   
   
   })("box-group");
   //Edge symbol end:'box-group'

   //=========================================================
   
   //Edge symbol: 'answer1'
   (function(symbolName) {   
   
   })("answer1");
   //Edge symbol end:'answer1'

   //=========================================================
   
   //Edge symbol: 'answer2'
   (function(symbolName) {   
   
   })("answer2");
   //Edge symbol end:'answer2'

   //=========================================================
   
   //Edge symbol: 'answer3'
   (function(symbolName) {   
   
   })("answer3");
   //Edge symbol end:'answer3'

   //=========================================================
   
   //Edge symbol: 'answer4'
   (function(symbolName) {   
   
   })("answer4");
   //Edge symbol end:'answer4'

   //=========================================================
   
   //Edge symbol: 'answer5'
   (function(symbolName) {   
   
   })("answer5");
   //Edge symbol end:'answer5'

   //=========================================================
   
   //Edge symbol: 'oops'
   (function(symbolName) {   
   
      Symbol.bindElementAction(compId, symbolName, "${next-btnCopy}", "click", function(sym, e) {
         // insert code for mouse click here
         //continueToNextScene();
         
         // Hide an element 
         sym.getSymbolElement().hide();
         
         sym.getComposition().getStage().play();

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${replay-btnCopy}", "click", function(sym, e) {
         // insert code for mouse click here
         
         // Hide an element 
         sym.getComposition().getStage().$("mainmenu").hide();
         
         // Hide an element 
         sym.getSymbolElement().hide();
         
         sym.getComposition().getStage().play("start");

      });
      //Edge binding end

   })("oops");
   //Edge symbol end:'oops'

   //=========================================================
   
   //Edge symbol: 'decent'
   (function(symbolName) {   
   
   })("decent");
   //Edge symbol end:'decent'

   //=========================================================
   
   //Edge symbol: 'well-done'
   (function(symbolName) {   
   
      Symbol.bindElementAction(compId, symbolName, "${next-btn}", "click", function(sym, e) {
         // insert code for mouse click here
         
         // Hide an element 
         sym.getSymbolElement().hide();
         //continueToNextScene();
         
         sym.getComposition().getStage().play();

      });
      //Edge binding end

   })("well-done");
   //Edge symbol end:'well-done'

})(window.jQuery || AdobeEdge.$, AdobeEdge, "EDGE-1646797");