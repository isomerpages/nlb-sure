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
      
      
      

      

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 47391, function(sym, e) {
         // insert code here
      });
      //Edge binding end

      

      

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 45313, function(sym, e) {
         // insert code here
         sym.stop();

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${instruction-btn2}", "click", function(sym, e) {
         // insert code for mouse click here
         $("#Stage_instruction").show();
         if(!sym.getSymbol("instruction").getVariable("shown")){
         	sym.getSymbol("instruction").play(0);
         	
         }
         else{
         	sym.getSymbol("instruction").play("close");
         	
         }

      });
      //Edge binding end

      

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 17000, function(sym, e) {
         // insert code here
         sym.setVariable("count",0);
         
         $("#Stage_progress-bar_Text2").text("0/11");
         $("#Stage_tvBtn").show();
         $("#Stage_posterBtn").show();
         $("#Stage_phoneBtn").show();
         $("#Stage_laptopBtn").show();
         $("#Stage_newspaperBtn").show();
         $("#Stage_magazinestandBtn").show();
         $("#Stage_paperBtn").show();
         $("#Stage_flyerBtn").show();
         $("#Stage_poster2Btn").show();
         $("#Stage_promotionBtn").show();
         $("#Stage_cafeBtn").show();
         $("#Stage_twoposterBtn").show();
         $("#Stage_bigsaleBtn").show();
         $("#Stage_toyBtn").show();
         $("#Stage_saleBtn").show();
         
         sym.getSymbol("phone").play(0);
         sym.getSymbol("poster").play(0);
         sym.getSymbol("promotion").play(0);
         sym.getSymbol("cafe-menu").play(0);
         sym.getSymbol("crumpled-flyer").play(0);
         sym.getSymbol("TV").play(0);
         sym.getSymbol("graph-papers").play(0);
         sym.getSymbol("health-poster").play(0);
         sym.getSymbol("magazine-stand").play(0);
         sym.getSymbol("man-laptop").play(0);
         sym.getSymbol("man-newspaper").play(0);
         
         sym.getSymbol("progress-bar").stop(0);
         var tmr = timer;
         $("#Stage_timer_Text").text("00:"+tmr);
         
         var to;
         to = setTimeout(runTimer,1000);
         sym.setVariable("to",to);
         function runTimer(){
         	tmr--;
         
         	var tmrStr=tmr.toString();
         	if(tmr<10){
         		tmrStr = "0"+tmr;
         	}
         	if(tmr==0){
         		sym.play("timeup");
         	}
         	else{
         		to = setTimeout(runTimer,1000);
         		sym.setVariable("to",to);
         	}
         	$("#Stage_timer_Text").text("00:"+tmrStr);
         }

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${cafeBtn}", "click", function(sym, e) {
         // insert code for mouse click here
         playSFX("correct");
         $("#Stage_cafeBtn").hide();
         var count = sym.getVariable("count");
         count++;
         sym.setVariable("count",count);
         $("#Stage_progress-bar_Text2").text(count+"/11");
         
         var to;
         if(count==11){
         	to = sym.getVariable("to");
         	clearTimeout(to);
         	sym.play("complete");
         }
         
         sym.getSymbol("progress-bar").stop(count.toString());
         sym.getSymbol("cafe-menu").play("correct");

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${flyerBtn}", "click", function(sym, e) {
         // insert code for mouse click here
         playSFX("correct");
         $("#Stage_flyerBtn").hide();
         
         var count = sym.getVariable("count");
         count++;
         sym.setVariable("count",count);
         $("#Stage_progress-bar_Text2").text(count+"/11");
         
         var to;
         if(count==11){
         	to = sym.getVariable("to");
         	clearTimeout(to);
         	sym.play("complete");
         }
         
         sym.getSymbol("progress-bar").stop(count.toString());
         
         
         sym.getSymbol("crumpled-flyer").play("correct");

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${paperBtn}", "click", function(sym, e) {
         // insert code for mouse click here
         playSFX("correct");
         $("#Stage_paperBtn").hide();
         
         var count = sym.getVariable("count");
         count++;
         sym.setVariable("count",count);
         $("#Stage_progress-bar_Text2").text(count+"/11");
         
         var to;
         if(count==11){
         	to = sym.getVariable("to");
         	clearTimeout(to);
         	sym.play("complete");
         }
         
         
         sym.getSymbol("progress-bar").stop(count.toString());
         
         sym.getSymbol("graph-papers").play("correct");

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${phoneBtn}", "click", function(sym, e) {
         // insert code for mouse click here
         playSFX("correct");
         $("#Stage_phoneBtn").hide();
         
         var count = sym.getVariable("count");
         count++;
         sym.setVariable("count",count);
         $("#Stage_progress-bar_Text2").text(count+"/11");
         
         var to;
         if(count==11){
         	to = sym.getVariable("to");
         	clearTimeout(to);
         	sym.play("complete");
         }
         
         sym.getSymbol("progress-bar").stop(count.toString());
         
         sym.getSymbol("phone").play("correct");

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${magazinestandBtn}", "click", function(sym, e) {
         // insert code for mouse click here
         playSFX("correct");
         $("#Stage_magazinestandBtn").hide();
         
         var count = sym.getVariable("count");
         count++;
         sym.setVariable("count",count);
         $("#Stage_progress-bar_Text2").text(count+"/11");
         
         var to;
         if(count==11){
         	to = sym.getVariable("to");
         	clearTimeout(to);
         	sym.play("complete");
         }
         
         sym.getSymbol("progress-bar").stop(count.toString());
         
         sym.getSymbol("magazine-stand").play("correct");

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${newspaperBtn}", "click", function(sym, e) {
         // insert code for mouse click here
         playSFX("correct");
         $("#Stage_newspaperBtn").hide();
         
         var count = sym.getVariable("count");
         count++;
         sym.setVariable("count",count);
         $("#Stage_progress-bar_Text2").text(count+"/11");
         
         var to;
         if(count==11){
         	to = sym.getVariable("to");
         	clearTimeout(to);
         	sym.play("complete");
         }
         
         
         sym.getSymbol("progress-bar").stop(count.toString());
         
         sym.getSymbol("man-newspaper").play("correct");

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${laptopBtn}", "click", function(sym, e) {
         // insert code for mouse click here
         playSFX("correct");
         $("#Stage_laptopBtn").hide();
         
         var count = sym.getVariable("count");
         count++;
         sym.setVariable("count",count);
         $("#Stage_progress-bar_Text2").text(count+"/11");
         
         var to;
         if(count==11){
         	to = sym.getVariable("to");
         	clearTimeout(to);
         	sym.play("complete");
         }
         
         sym.getSymbol("progress-bar").stop(count.toString());
         
         sym.getSymbol("man-laptop").play("correct");

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${posterBtn}", "click", function(sym, e) {
         // insert code for mouse click here
         playSFX("correct");
         $("#Stage_posterBtn").hide();
         
         var count = sym.getVariable("count");
         count++;
         sym.setVariable("count",count);
         $("#Stage_progress-bar_Text2").text(count+"/11");
         
         var to;
         if(count==11){
         	to = sym.getVariable("to");
         	clearTimeout(to);
         	sym.play("complete");
         }
         
         sym.getSymbol("progress-bar").stop(count.toString());
         
         sym.getSymbol("health-poster").play("correct");

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${tvBtn}", "click", function(sym, e) {
         // insert code for mouse click here
         playSFX("correct");
         $("#Stage_tvBtn").hide();
         
         var count = sym.getVariable("count");
         count++;
         sym.setVariable("count",count);
         $("#Stage_progress-bar_Text2").text(count+"/11");
         
         var to;
         if(count==11){
         	to = sym.getVariable("to");
         	clearTimeout(to);
         	sym.play("complete");
         }
         
         sym.getSymbol("progress-bar").stop(count.toString());
         
         sym.getSymbol("TV").play("correct");

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${poster2Btn}", "click", function(sym, e) {
         // insert code for mouse click here
         playSFX("correct");
         $("#Stage_poster2Btn").hide();
         
         var count = sym.getVariable("count");
         count++;
         sym.setVariable("count",count);
         $("#Stage_progress-bar_Text2").text(count+"/11");
         
         var to;
         if(count==11){
         	to = sym.getVariable("to");
         	clearTimeout(to);
         	sym.play("complete");
         }
         
         sym.getSymbol("progress-bar").stop(count.toString());
         
         sym.getSymbol("poster").play("correct");

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${promotionBtn}", "click", function(sym, e) {
         // insert code for mouse click here
         playSFX("correct");
         $("#Stage_promotionBtn").hide();
         
         var count = sym.getVariable("count");
         count++;
         sym.setVariable("count",count);
         $("#Stage_progress-bar_Text2").text(count+"/11");
         
         var to;
         if(count==11){
         	to = sym.getVariable("to");
         	clearTimeout(to);
         	sym.play("complete");
         }
         
         sym.getSymbol("progress-bar").stop(count.toString());
         
         sym.getSymbol("promotion").play("correct");

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 49154, function(sym, e) {
         // insert code here
         var count = sym.getVariable("count");
         if(count==11){
         	$("#Stage_well-done2").show();
         	sym.getSymbol("well-done2").play(0);
         
         }
         else if(count>=6){
         	$("#Stage_decent").show();
         	sym.getSymbol("decent").play(0);
         }
         else if(count<6){
         	$("#Stage_oops").show();
         
         	sym.getSymbol("oops").play(0);
         
         }

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 0, function(sym, e) {
         // insert code here
         init(sym);
         playBGSound("music1");

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 2384, function(sym, e) {
         // insert code here
         sym.stop();
         playSound("1c");

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${saleBtn}", "click", function(sym, e) {
         // insert code for mouse click here
         playSFX("correct");
         $("#Stage_saleBtn").hide();
         $("#Stage_saletick").fadeIn();
         var count = sym.getVariable("count");
         count++;
         sym.setVariable("count",count);
         $("#Stage_progress-bar_Text2").text(count+"/11");
         
         var to;
         if(count==11){
         	to = sym.getVariable("to");
         	clearTimeout(to);
         	sym.play("complete");
         }
         
         sym.getSymbol("progress-bar").stop(count.toString());
         
         //sym.getSymbol("TV").play("correct");

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${toyBtn}", "click", function(sym, e) {
         // insert code for mouse click here
         playSFX("correct");
         $("#Stage_toyBtn").hide();
         $("#Stage_toystick").fadeIn();
         var count = sym.getVariable("count");
         count++;
         sym.setVariable("count",count);
         $("#Stage_progress-bar_Text2").text(count+"/11");
         
         var to;
         if(count==11){
         	to = sym.getVariable("to");
         	clearTimeout(to);
         	sym.play("complete");
         }
         
         sym.getSymbol("progress-bar").stop(count.toString());

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${bigsaleBtn}", "click", function(sym, e) {
         // insert code for mouse click here
         playSFX("correct");
         $("#Stage_bigsaleBtn").hide();
         $("#Stage_bigsaletick").fadeIn();
         var count = sym.getVariable("count");
         count++;
         sym.setVariable("count",count);
         $("#Stage_progress-bar_Text2").text(count+"/11");
         
         var to;
         if(count==11){
         	to = sym.getVariable("to");
         	clearTimeout(to);
         	sym.play("complete");
         }
         
         sym.getSymbol("progress-bar").stop(count.toString());

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${twoposterBtn}", "click", function(sym, e) {
         // insert code for mouse click here
         playSFX("correct");
         $("#Stage_twoposterBtn").hide();
         $("#Stage_postertick").fadeIn();
         var count = sym.getVariable("count");
         count++;
         sym.setVariable("count",count);
         $("#Stage_progress-bar_Text2").text(count+"/11");
         
         var to;
         if(count==11){
         	to = sym.getVariable("to");
         	clearTimeout(to);
         	sym.play("complete");
         }
         
         sym.getSymbol("progress-bar").stop(count.toString());

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${wrongtrigger}", "click", function(sym, e) {
         // insert code for mouse click here
         //alert(e.layerX);
         //$("#Stage_mall-inside-game").append("<div class='xmark' style='width:30px;height:30px;position:absolute; top:0px;left:0px; border:5px solid red;'></div>");
         
         playSFX("wrong");

      });
      //Edge binding end

   })("stage");
   //Edge symbol end:'stage'

   //=========================================================
   
   //Edge symbol: 'instruction'
   (function(symbolName) {   
   
      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 7410, function(sym, e) {
         // insert code here
         sym.setVariable("shown",false);

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 53, function(sym, e) {
         // insert code here
         sym.setVariable("shown",true);

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 7500, function(sym, e) {
         // insert code here
         $("#Stage_instruction").hide();

      });
      //Edge binding end

   })("instruction");
   //Edge symbol end:'instruction'

   //=========================================================
   
   //Edge symbol: 'instruction-btn'
   (function(symbolName) {   
   
   })("instruction-btn");
   //Edge symbol end:'instruction-btn'

   //=========================================================
   
   //Edge symbol: 'timer'
   (function(symbolName) {   
   
   })("timer");
   //Edge symbol end:'timer'

   //=========================================================
   
   //Edge symbol: 'progress-bar'
   (function(symbolName) {   
   
   })("progress-bar");
   //Edge symbol end:'progress-bar'

   //=========================================================
   
   //Edge symbol: 'well-done'
   (function(symbolName) {   
   
      Symbol.bindElementAction(compId, symbolName, "${next-btn}", "click", function(sym, e) {
         // insert code for mouse click here
         continueToNextScene();

      });
      //Edge binding end

   })("well-done");
   //Edge symbol end:'well-done'

   //=========================================================
   
   //Edge symbol: 'decent'
   (function(symbolName) {   
   
      Symbol.bindElementAction(compId, symbolName, "${replay-btn}", "click", function(sym, e) {
         // insert code for mouse click here
         $("#Stage_decent").hide();
         sym.getComposition().getStage().play("restart");

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${next-btn}", "click", function(sym, e) {
         // insert code for mouse click here
         continueToNextScene();

      });
      //Edge binding end

   })("decent");
   //Edge symbol end:'decent'

   //=========================================================
   
   //Edge symbol: 'oops'
   (function(symbolName) {   
   
      Symbol.bindElementAction(compId, symbolName, "${replay-btnCopy}", "click", function(sym, e) {
         // insert code for mouse click here
         $("#Stage_oops").hide();
         sym.getComposition().getStage().play("restart");

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${next-btnCopy}", "click", function(sym, e) {
         // insert code for mouse click here
         continueToNextScene();

      });
      //Edge binding end

   })("oops");
   //Edge symbol end:'oops'

   //=========================================================
   
   //Edge symbol: 'cafe-menu'
   (function(symbolName) {   
   
      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 120, function(sym, e) {
         // insert code here
         sym.stop();

      });
      //Edge binding end

   })("cafe-menu");
   //Edge symbol end:'cafe-menu'

   //=========================================================
   
   //Edge symbol: 'health-poster'
   (function(symbolName) {   
   
      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 120, function(sym, e) {
         // insert code here
         sym.stop()

      });
      //Edge binding end

   })("health-poster");
   //Edge symbol end:'health-poster'

   //=========================================================
   
   //Edge symbol: 'crumpled-flyer'
   (function(symbolName) {   
   
      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 120, function(sym, e) {
         // insert code here
         sym.stop();

      });
      //Edge binding end

   })("crumpled-flyer");
   //Edge symbol end:'crumpled-flyer'

   //=========================================================
   
   //Edge symbol: 'promotion'
   (function(symbolName) {   
   
      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 120, function(sym, e) {
         // insert code here
         sym.stop();

      });
      //Edge binding end

   })("promotion");
   //Edge symbol end:'promotion'

   //=========================================================
   
   //Edge symbol: 'magazine-stand'
   (function(symbolName) {   
   
      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 120, function(sym, e) {
         // insert code here
         sym.stop();

      });
      //Edge binding end

   })("magazine-stand");
   //Edge symbol end:'magazine-stand'

   //=========================================================
   
   //Edge symbol: 'man-newspaper'
   (function(symbolName) {   
   
      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 105, function(sym, e) {
         // insert code here
         sym.stop()

      });
      //Edge binding end

   })("man-newspaper");
   //Edge symbol end:'man-newspaper'

   //=========================================================
   
   //Edge symbol: 'man-laptop'
   (function(symbolName) {   
   
      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 113, function(sym, e) {
         // insert code here
         sym.stop()

      });
      //Edge binding end

   })("man-laptop");
   //Edge symbol end:'man-laptop'

   //=========================================================
   
   //Edge symbol: 'phone'
   (function(symbolName) {   
   
      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 2000, function(sym, e) {
         // insert code here
         sym.play(0)

      });
      //Edge binding end

   })("phone");
   //Edge symbol end:'phone'

   //=========================================================
   
   //Edge symbol: 'poster'
   (function(symbolName) {   
   
      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 113, function(sym, e) {
         // insert code here
         sym.stop()

      });
      //Edge binding end

   })("poster");
   //Edge symbol end:'poster'

   //=========================================================
   
   //Edge symbol: 'TV'
   (function(symbolName) {   
   
      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 2500, function(sym, e) {
         // insert code here
         sym.play(0)

      });
      //Edge binding end

   })("TV");
   //Edge symbol end:'TV'

   //=========================================================
   
   //Edge symbol: 'graph-papers'
   (function(symbolName) {   
   
      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 173, function(sym, e) {
         // insert code here
         sym.stop()

      });
      //Edge binding end

   })("graph-papers");
   //Edge symbol end:'graph-papers'

})(window.jQuery || AdobeEdge.$, AdobeEdge, "EDGE-1646797");