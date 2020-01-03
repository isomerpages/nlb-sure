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

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 2875, function(sym, e) {
         // insert code here
         sym.stop();
         playSound("5a");

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 16411, function(sym, e) {
         // insert code here
         sym.stop();

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${diceTrigger}", "click", function(sym, e) {
         // insert code for mouse click here
         playSFX("click");
         sym.getSymbol("dice").play("roll");
         sym.play("great");

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 17855, function(sym, e) {
         // insert code here
         sym.stop();
         playSound("5b");

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${diceTriggerNew}", "click", function(sym, e) {
         // insert code for mouse click here
         currentPoster++;
         trial=false;
         
         playSFX("click");
         // Hide an element 
         sym.$("diceTriggerNew").hide();
         sym.$("dragCover").hide();
         
         sym.getSymbol("dice").play("roll");

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 36466, function(sym, e) {
         // insert code here
         sym.$("txt-accu").data("type","accuracy");
         sym.$("txt-auth").data("type","author");
         sym.$("txt-obj").data("type","objective");
         sym.$("txt-cov").data("type","content");
         sym.$("txt-curr").data("type","currency");
         
         var scale;
         var getDropped=false;
         sym.$(".aaccoClass").draggable({
         	start:function(event, ui){
         		getDropped=false;
         		scale = utils.getScale();
         		ui.position.left = 0;
         		ui.position.top = 0; 
         	},
         	drag: function(event, ui) {
         		var changeLeft = ui.position.left - ui.originalPosition.left; // find change in left
         		var newLeft = ui.originalPosition.left + changeLeft / (( scale)); // adjust new left by our zoomScale
         
         		var changeTop = ui.position.top - ui.originalPosition.top; // find change in top
         		var newTop = ui.originalPosition.top + changeTop / scale // adjust new top by our zoomScale
         
         		ui.position.left = newLeft;
         		ui.position.top = newTop;
         
         	},
         	helper: 'clone',
         	stop:function(event, ui){
         		if(!getDropped){
         			playSFX("wrong1");
         			return;
         		}
         		playSFX("correct1");
         
         		currentAns++;
         
         		$(ui.helper).clone(true).addClass("ansClass").appendTo('#Stage');
         
         		if(currentAns>=numSelected){
         			sym.getSymbol("posters").play("next");
         			$(".ansClass").remove();
         			// Show an element 
         
         			sym.$("dragCover").show();
         
         			currentAns=0;
         			numSelected=0;
         
         			if(currentPoster==totalPoster){
         
         				sym.getSymbol("posters").stop(0);
         				// Show an element 
         				sym.$("game-result2").show();
         
         				sym.getSymbol("game-result2").play(0);
         				
         				// Show an element 
         				sym.$("mainmenu").show();
         				
         			}
         			else{
         				sym.$("diceTriggerNew").show();
         			}
         		}
         
         
         	}
         });
         
         $(".droppable").droppable({
         	drop:function(event,ui){
         		if($(ui.draggable).data("type")==$(this).data("type")){
         			getDropped=true;
         			$(this).hide();
         
         			if($(this).data("partner")){
         				sym.getSymbol("posters").$("camp-content1").hide();
         				sym.getSymbol("posters").$("camp-content2").hide();
         			}
         		}
         	}
         });

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${instructionBtn}", "click", function(sym, e) {
         // insert code for mouse click here
         // Set a toggle to hide or show an element 
         if (sym.$("instruction").is(":visible")) {
         	sym.$("instruction").hide();
         } else {
         	sym.$("instruction").show();
         }

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${instruction-btn}", "click", function(sym, e) {
         // insert code for mouse click here
         
      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 36271, function(sym, e) {
         // insert code here
         
         sym.getSymbol("posters").play("start");

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${mainmenu}", "click", function(sym, e) {
         // insert code for mouse click here
         continueToNextScene();

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 34079, function(sym, e) {
         // insert code here
         sym.play("skip1");

      });
      //Edge binding end

   })("stage");
   //Edge symbol end:'stage'

   //=========================================================
   
   //Edge symbol: 'dice'
   (function(symbolName) {   
   
      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 1075, function(sym, e) {
         // insert code here
         sym.stop();

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 3335, function(sym, e) {
         // insert code here
         var rnd = 1 + Math.floor(Math.random()*5);
         
         // Show an element 
         sym.$("dice"+rnd).show();
         numSelected=rnd;
         
         
         if(!trial){
         	sym.getComposition().getStage().getSymbol("posters").play("p"+currentPoster);
         	sym.getComposition().getStage().getSymbol("posters-remaining").$("Text7").text((totalPoster-currentPoster).toString());
         	
         	// Hide an element 
         	sym.getComposition().getStage().$("dragCover").hide();
         }
         
         
         // Show an element 
         //if(!trial)sym.getComposition().getStage().getSymbol("posters-remaining").$("Text7").text(rnd);
         
         sym.stop();

      });
      //Edge binding end

   })("dice");
   //Edge symbol end:'dice'

   //=========================================================
   
   //Edge symbol: 'posters'
   (function(symbolName) {   
   
      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 1655, function(sym, e) {
         // insert code here
         sym.$("camp-accuracy1").data("type","accuracy");
         sym.$("camp-accuracy2").data("type","accuracy");
         sym.$("camp-content2").data("type","content");
         sym.$("camp-content1").data("type","content");
         sym.$("camp-objective").data("type","objective");
         sym.$("camp-author").data("type","author");
         
         sym.$("camp-content1").data("partner",true);
         sym.$("camp-content2").data("partner",true);
         
         sym.stop();

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 1955, function(sym, e) {
         // insert code here
         sym.$("mall-author").data("type","author");
         sym.$("mall-accuracy").data("type","accuracy");
         sym.$("mall-currency").data("type","currency");
         sym.$("mall-objective").data("type","objective");
         sym.$("mall-content").data("type","content");
         
         sym.stop();

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 2250, function(sym, e) {
         // insert code here
         
         sym.$("med-author").data("type","author");
         sym.$("med-objective").data("type","objective");
         sym.$("med-currency").data("type","currency");
         sym.$("med-content").data("type","content");
         sym.$("med-accuracy").data("type","accuracy");
         sym.stop();

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 2500, function(sym, e) {
         // insert code here
         sym.$("restaurant-author").data("type","author");
         sym.$("restaurant-objective").data("type","objective");
         sym.$("restaurant-content").data("type","content");
         sym.$("restaurant-accuracy3").data("type","accuracy");
         sym.$("restaurant-accuracy2").data("type","accuracy");
         sym.$("restaurant-accuracy1").data("type","accuracy");
         
         sym.stop();

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 2750, function(sym, e) {
         // insert code here
         sym.$("travel-accuracy1").data("type","accuracy");
         sym.$("travel-accuracy2").data("type","accuracy");
         sym.$("travel-currency").data("type","currency");
         sym.$("travel-content").data("type","content");
         sym.$("travel-objective").data("type","objective");
         sym.$("travel-author").data("type","author");
         
         sym.stop();

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 375, function(sym, e) {
         // insert code here
         
         sym.stop();

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 850, function(sym, e) {
         // insert code here
         sym.stop();

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 1250, function(sym, e) {
         // insert code here
         sym.stop();

      });
      //Edge binding end

   })("posters");
   //Edge symbol end:'posters'

   //=========================================================
   
   //Edge symbol: 'instruction'
   (function(symbolName) {   
   
      

   })("instruction");
   //Edge symbol end:'instruction'

   //=========================================================
   
   //Edge symbol: 'AACCO-objs'
   (function(symbolName) {   
   
   })("AACCO-objs");
   //Edge symbol end:'AACCO-objs'

   //=========================================================
   
   //Edge symbol: 'posters-remaining'
   (function(symbolName) {   
   
   })("posters-remaining");
   //Edge symbol end:'posters-remaining'

   //=========================================================
   
   //Edge symbol: 'game-result'
   (function(symbolName) {   
   
   })("game-result");
   //Edge symbol end:'game-result'

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

})(window.jQuery || AdobeEdge.$, AdobeEdge, "EDGE-601893278");