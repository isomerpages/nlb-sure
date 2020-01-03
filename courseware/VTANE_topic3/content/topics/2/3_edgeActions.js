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
         $("#Stage_coverageH").hide();
         $("#Stage_currencyH").hide();
         $("#Stage_coverageTrigger").hide();
         $("#Stage_currencyTrigger").hide();
         playBGSound("music1");
         init(sym);

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 6000, function(sym, e) {
         // insert code here
         $("#Stage_coverageH").show();
         $("#Stage_currencyH").show();
         $("#Stage_coverageTrigger").show();
         $("#Stage_currencyTrigger").show();
         
         sym.getSymbol("currencyH").play(1);
         sym.getSymbol("coverageH").play(1);

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 9945, function(sym, e) {
         // insert code here
         sym.play("loop");

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 40, function(sym, e) {
         // insert code here
         $("#Stage_Currency").hide();
         $("#Stage_Coverage").hide();
         $("#Stage_mainmenu").hide();

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 3424, function(sym, e) {
         // insert code here
         sym.stop();
         playSound("3");

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${coverageTrigger}", "click", function(sym, e) {
         // insert code for mouse click here
         $("#Stage_Coverage").show();
         
         sym.getSymbol("Coverage").play("start");

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${currencyTrigger}", "click", function(sym, e) {
         // insert code for mouse click here
         $("#Stage_Currency").show();
         
         sym.getSymbol("Currency").play("start");

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
   
   //Edge symbol: 'Currency'
   (function(symbolName) {   
   
      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 7648, function(sym, e) {
         // insert code here
      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${a}", "click", function(sym, e) {
         // insert code for mouse click here
         $(".ticks").hide();
         $("#Stage_Currency_a_tick").fadeIn();
         answer="a";
         $("#Stage_Currency_submit-btn").show();

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${d}", "click", function(sym, e) {
         // insert code for mouse click here
         $(".ticks").hide();
         $("#Stage_Currency_d_tick").fadeIn();
         answer="d";
         $("#Stage_Currency_submit-btn").show();

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${c}", "click", function(sym, e) {
         // insert code for mouse click here
         $(".ticks").hide();
         $("#Stage_Currency_c_tick").fadeIn();
         answer="c";
         $("#Stage_Currency_submit-btn").show();

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${b}", "click", function(sym, e) {
         // insert code for mouse click here
         $(".ticks").hide();
         $("#Stage_Currency_b_tick").fadeIn();
         answer="b";
         $("#Stage_Currency_submit-btn").show();

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${close-btnCopy}", "click", function(sym, e) {
         // insert code for mouse click here
         $("#Stage_Currency").hide();

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${submit-btn}", "click", function(sym, e) {
         // insert code for mouse click here
         if(answer=="a"){
         	$("#Stage_Currency_well-done2Copy").show();
         	sym.getSymbol("well-done2Copy").play(1);
         	playSFX("correct1");
         	$("#Stage_currencyTrigger").hide();
         	$("#Stage_currencyH").hide();
         	if($("#Stage_currencyTrigger").css("display")=="none" && $("#Stage_coverageTrigger").css("display")=="none")$("#Stage_mainmenu").show();
         }
         else{
         	playSFX("wrong1");
         }

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${next_but2}", "click", function(sym, e) {
         // insert code for mouse click here
         sym.play();

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 1935, function(sym, e) {
         // insert code here
         sym.stop();

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 2075, function(sym, e) {
         // insert code here
         sym.play("skip1");

      });
      //Edge binding end

   })("Currency");
   //Edge symbol end:'Currency'

   //=========================================================
   
   //Edge symbol: 'Coverage'
   (function(symbolName) {   
   
      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 16500, function(sym, e) {
         // insert code here
         var niceDrop=false;
         $("#Stage_Coverage_star1, #Stage_Coverage_star").draggable({
         	start:function(event, ui){
         		niceDrop=false;
         		matrixRegex = /matrix\((-?\d*\.?\d+),\s*0,\s*0,\s*(-?\d*\.?\d+),\s*0,\s*0\)/,
         		matches = $("#Stage").css('-webkit-transform').match(matrixRegex);
         		ui.position.left = 0;
         		ui.position.top = 0; 
         	},
         	drag: function(event, ui) {
         		var changeLeft = ui.position.left - ui.originalPosition.left; // find change in left
         		var newLeft = ui.originalPosition.left + changeLeft / (( matches[1])); // adjust new left by our zoomScale
         
         		var changeTop = ui.position.top - ui.originalPosition.top; // find change in top
         		var newTop = ui.originalPosition.top + changeTop / matches[1] // adjust new top by our zoomScale
         
         		ui.position.left = newLeft-829;
         		ui.position.top = newTop-460;
         	},
         	stop:function(){
         		if(niceDrop){
         			playSFX("correct1");
         			$(this).draggable("destroy");
         			$(this).css({
         				cursor:"auto"
         			});
         			if($("#Stage_Coverage_star1").position().left<700&&$("#Stage_Coverage_star").position().left<700){
         				$("#Stage_Coverage_well-done2Copy3").show();
         
         
         				sym.getSymbol("well-done2Copy3").play(1);
         				$("#Stage_coverageTrigger").hide();
         				$("#Stage_coverageH").hide();
         				if($("#Stage_currencyTrigger").css("display")=="none" && $("#Stage_coverageTrigger").css("display")=="none")$("#Stage_mainmenu").show();
         			}
         			//$("#Stage_Author_well-done2Copy").show();
         			//sym.getSymbol("well-done2Copy").play();
         			//$("#Stage_authorTrigger").hide();
                  //$("#Stage_authorH").hide();
                  //showMainmenu();
         		}
         		else{
         			playSFX("wrong1");
         		}
         	},
         	revert:function(event,ui){
         		return !event;
         	}
         });
         if($("#Stage_Coverage_star1").position().left<700){
         	$("#Stage_Coverage_star1").draggable("destroy");
         }
         if($("#Stage_Coverage_star").position().left<700){
         	$("#Stage_Coverage_star").draggable("destroy");
         }
         $("#Stage_Coverage_dropArea").droppable({
         	drop:function(){
         		niceDrop=true;
         
         	}
         });

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${close-btnCopy2}", "click", function(sym, e) {
         // insert code for mouse click here
         $("#Stage_Coverage").hide();

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 1500, function(sym, e) {
         // insert code here
         sym.stop();

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${next_but}", "click", function(sym, e) {
         // insert code for mouse click here
         sym.play();

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 1607, function(sym, e) {
         // insert code here
         sym.play("skip1");

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 5953, function(sym, e) {
         // insert code here
         sym.stop();

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 6069, function(sym, e) {
         // insert code here
         sym.play("skip2");

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 10114, function(sym, e) {
         // insert code here
         sym.stop();

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 10203, function(sym, e) {
         // insert code here
         sym.play("skip3");

      });
      //Edge binding end

   })("Coverage");
   //Edge symbol end:'Coverage'

   //=========================================================
   
   //Edge symbol: 'AccuracyH'
   (function(symbolName) {   
   
      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 2500, function(sym, e) {
         // insert code here
         sym.play(1);

      });
      //Edge binding end

   })("AccuracyH");
   //Edge symbol end:'AccuracyH'

   //=========================================================
   
   //Edge symbol: 'authorH'
   (function(symbolName) {   
   
      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 2500, function(sym, e) {
         // insert code here
         sym.play(1);

      });
      //Edge binding end

   })("authorH");
   //Edge symbol end:'authorH'

   //=========================================================
   
   //Edge symbol: 'well-done'
   (function(symbolName) {   
   
      Symbol.bindElementAction(compId, symbolName, "${close-btn1}", "click", function(sym, e) {
         // insert code for mouse click here
         $("#Stage_Coverage_well-done2Copy3").hide();
         $("#Stage_Currency_well-done2Copy").hide();

      });
      //Edge binding end

   })("well-done");
   //Edge symbol end:'well-done'

})(window.jQuery || AdobeEdge.$, AdobeEdge, "EDGE-601893278");