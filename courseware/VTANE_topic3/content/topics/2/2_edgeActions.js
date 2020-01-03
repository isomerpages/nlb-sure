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
         $("#Stage_authorH").hide();
         $("#Stage_accuracyH").hide();
         $("#Stage_accuracyTrigger").hide();
         $("#Stage_authorTrigger").hide();
         $("#Stage_mainmenu").hide();
         playBGSound("music1");
         init(sym);

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 25000, function(sym, e) {
         // insert code here
         sym.play("loop");

      });
      //Edge binding end

      

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 11874, function(sym, e) {
         // insert code here
         
         sym.play("start");

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${authorTrigger}", "click", function(sym, e) {
         // insert code for mouse click here
         $("#Stage_Author").show();
         sym.getSymbol("Author").play("start");

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${accuracyTrigger}", "click", function(sym, e) {
         // insert code for mouse click here
         //$("#Stage_Accuracy").show();
         $("#Stage_Accuracy").show();
         sym.getSymbol("Accuracy").play("start");
         
         

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 22874, function(sym, e) {
         // insert code here
         $("#Stage_authorH").show();
         $("#Stage_accuracyH").show();
         $("#Stage_accuracyTrigger").show();
         $("#Stage_authorTrigger").show();
         sym.getSymbol("authorH").play(1);
         sym.getSymbol("accuracyH").play(1);

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 50, function(sym, e) {
         // insert code here
         //sym.play("test");
         $("#Stage_Accuracy").hide();
         $("#Stage_Author").hide();
         
         

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 2750, function(sym, e) {
         // insert code here
         sym.stop();
         playSound("2");
         
         

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${mainmenu}", "click", function(sym, e) {
         // insert code for mouse click here
         continueToNextScene();

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 21998, function(sym, e) {
         // insert code here
         sym.play("start");

      });
      //Edge binding end

   })("stage");
   //Edge symbol end:'stage'

   //=========================================================
   
   //Edge symbol: 'Author'
   (function(symbolName) {   
   
      

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 0, function(sym, e) {
         // insert code here
         sym.stop();

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 15875, function(sym, e) {
         // insert code here
         sym.stop();
         $("#Stage_Author_txt-auth3").css({
         	cursor:"pointer"
         });
         var sX;
         var sY;
         //$("#Stage_Author_txt-auth3").click(function(){
         //	alert("AS");
         //})
         var niceDrop=false;
         $("#Stage_Author_txt-auth3").draggable({
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
         
         		ui.position.left = newLeft-741;
         		ui.position.top = newTop-397;
         
         	},
         	stop:function(){
         		if(niceDrop){
         			playSFX("correct1");
         			$("#Stage_Author_well-done2Copy").show();
         			sym.getSymbol("well-done2Copy").play();
         			$("#Stage_authorTrigger").hide();
                  $("#Stage_authorH").hide();
                  showMainmenu();
         		}
         		else{
         			playSFX("wrong1");
         		}
         	},
         	revert:function(event,ui){
         		return !event;
         	}
         });
         
         /*
         $("#Stage_Author_wrongdrop").droppable({
         	drop:function(){
         		alert("ouch");
         	}
         });
         $("#Stage_Author_wrongdrop1").droppable({
         	drop:function(){
         		alert("ouch1");
         	}
         });*/
         $("#Stage_Author_droparea").droppable({
         	drop:function(){
         		niceDrop=true;
         
         	}
         });

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${close-btn}", "click", function(sym, e) {
         // insert code for mouse click here
         $("#Stage_Author").hide();

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 28462, function(sym, e) {
         // insert code here
         sym.stop();

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${next_but}", "click", function(sym, e) {
         // insert code for mouse click here
         sym.play();

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 7325, function(sym, e) {
         // insert code here
         sym.stop();

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 13400, function(sym, e) {
         // insert code here
         sym.stop();

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 1180, function(sym, e) {
         // insert code here
         sym.play("skip1");

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 8666, function(sym, e) {
         // insert code here
         sym.play("skip2");

      });
      //Edge binding end

   })("Author");
   //Edge symbol end:'Author'

   //=========================================================
   
   //Edge symbol: 'Accuracy'
   (function(symbolName) {   
   
      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 0, function(sym, e) {
         // insert code here
         generateMisssing();
         sym.stop();

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${close-btn}", "click", function(sym, e) {
         // insert code for mouse click here
         $("#Stage_Accuracy").hide();

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 7648, function(sym, e) {
         // insert code here
         sym.stop();

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${a}", "click", function(sym, e) {
         // insert code for mouse click here
         if($("#Stage_Accuracy_a_tick").css("display")=="none"){
         	$("#Stage_Accuracy_a_tick").show();
         
         	
         }
         else{
         	$("#Stage_Accuracy_a_tick").hide();
         }
         checkAnswer();

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${b}", "click", function(sym, e) {
         // insert code for mouse click here
         if($("#Stage_Accuracy_b_tick").css("display")=="none"){
         	$("#Stage_Accuracy_b_tick").show();
         	
         }
         else{
         	$("#Stage_Accuracy_b_tick").hide();
         }
         checkAnswer();

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${c}", "click", function(sym, e) {
         // insert code for mouse click here
         if($("#Stage_Accuracy_c_tick").css("display")=="none"){
         	$("#Stage_Accuracy_c_tick").show();
         	
         }
         else{
         	$("#Stage_Accuracy_c_tick").hide();
         }
         checkAnswer();

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${d}", "click", function(sym, e) {
         // insert code for mouse click here
         if($("#Stage_Accuracy_d_tick").css("display")=="none"){
         	$("#Stage_Accuracy_d_tick").show();
         	
         }
         else{
         	$("#Stage_Accuracy_d_tick").hide();
         }
         checkAnswer();

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 75, function(sym, e) {
         // insert code here
         for(var i=0;i<missing.length;i++){
         	$("#Stage_Accuracy_"+missing[i]+"_missing").hide();
         }

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${submit-btn}", "click", function(sym, e) {
         // insert code for mouse click here
         verifyAnswer();

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${next_but}", "click", function(sym, e) {
         // insert code for mouse click here
         sym.play();

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 6000, function(sym, e) {
         // insert code here
         sym.stop();

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 1375, function(sym, e) {
         // insert code here
         sym.play("skip1");

      });
      //Edge binding end

   })("Accuracy");
   //Edge symbol end:'Accuracy'

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
   
   //Edge symbol: '_correct'
   (function(symbolName) {   
   
   })("_correct");
   //Edge symbol end:'_correct'

   //=========================================================
   
   //Edge symbol: 'well-done'
   (function(symbolName) {   
   
      

      Symbol.bindElementAction(compId, symbolName, "${close-btn1}", "click", function(sym, e) {
         // insert code for mouse click here
         $("#Stage_Author_well-done2Copy").hide();
         $("#Stage_Accuracy_well-done2").hide();

      });
      //Edge binding end

   })("well-done");
   //Edge symbol end:'well-done'

   //=========================================================
   
   //Edge symbol: 'oops'
   (function(symbolName) {   
   
      Symbol.bindElementAction(compId, symbolName, "${replay-btnCopy}", "click", function(sym, e) {
         // insert code for mouse click here
         $("#Stage_Accuracy_oops").hide();
         reset();

      });
      //Edge binding end

      

   })("oops");
   //Edge symbol end:'oops'

})(window.jQuery || AdobeEdge.$, AdobeEdge, "EDGE-601893278");