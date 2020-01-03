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
      
      
      

      

      

      

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 4932, function(sym, e) {
         // insert code here
         sym.stop();
         playSound("5");

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 21700, function(sym, e) {
         // insert code here
         
         // Show an element 
         sym.$("genre-trailer").data("x",137);
         sym.$("genre-trailer").data("y",142);
         sym.$("genre-trailer").data("partner","a");
         
         sym.$("genre-music").data("x",137);
         sym.$("genre-music").data("y",220);
         sym.$("genre-music").data("partner","b");
         
         sym.$("genre-game").data("x",137);
         sym.$("genre-game").data("y",299);
         sym.$("genre-game").data("partner","c");
         
         sym.$("genre-docu").data("x",137);
         sym.$("genre-docu").data("y",377);
         sym.$("genre-docu").data("partner","d");
         
         sym.$("genre-cartoon").data("x",137);
         sym.$("genre-cartoon").data("y",456);
         sym.$("genre-cartoon").data("partner","e");
         
         sym.$("docu-vid").data("partner","d");
         sym.$("cartoon-vid").data("partner","e");
         sym.$("gameplay-vid").data("partner","c");
         sym.$("trailer-vid").data("partner","a");
         sym.$("music-vid").data("partner","b");
         
         sym.stop();
         var scale;
         var ctr=0;
         var mc;
         var xpos;
         var ypos;
         var dropCorrect;
         $(".dragItems").draggable({
         	start:function(event, ui){
         			  mc=this;
         			  xpos=$(mc).position().left;
         			  ypos = $(mc).position().top;
         			  scale=utils.getScale();
         			  ui.position.left = 0;
         			  ui.position.top = 0; 
         			  dropCorrect=false;
         			  $(mc).css({
         					zIndex:999
         			  })
         	},
         	drag: function(event, ui) {
         		 drag=true; 
         		  var changeLeft = ui.position.left - ui.originalPosition.left; // find change in left
         		  var newLeft = ui.originalPosition.left + changeLeft / (( scale)); // adjust new left by our zoomScale
         
         		  var changeTop = ui.position.top - ui.originalPosition.top; // find change in top
         		  var newTop = ui.originalPosition.top + changeTop / scale // adjust new top by our zoomScale
         
         		  ui.position.left = newLeft-$(mc).data("x");
         		  ui.position.top = newTop-$(mc).data("y");
         	},
         	stop:function(event,ui){
         		 if(!dropCorrect){
         			  playSFX("wrong1");
         			  //$(this).stop().animate({
         				//	left:xpos,
         				//	top:ypos
         			  //})
         		 }
         	},
         	revert:function(){
         		if(!dropCorrect)return true;
         		else return false;
         	}
         });
         
         $(".dropItems").droppable({
         	drop:function(){
         		 if($(this).data("partner")==$(mc).data("partner")){
         			  dropCorrect=true;
         			  playSFX("correct1");
         			  ctr++;
         		 }
         		 if(ctr>=5){
         			sym.play();
         		 }
         	}
         });

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

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 0, function(sym, e) {
         // insert code here
         playBGSound("music1");
         init(sym);

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${next-btn}", "click", function(sym, e) {
         // insert code for mouse click here
         //loadNextPage("content/topics/primary/1/1.html?action=loaded");
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
   
   //Edge symbol: 'instruction'
   (function(symbolName) {   
   
      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 1250, function(sym, e) {
         // insert code here
         sym.stop();

      });
      //Edge binding end

   })("instruction");
   //Edge symbol end:'instruction'

   //=========================================================
   
   //Edge symbol: 'gameplay-vid'
   (function(symbolName) {   
   
      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 500, function(sym, e) {
         // insert code here
         sym.stop();

      });
      //Edge binding end

   })("gameplay-vid");
   //Edge symbol end:'gameplay-vid'

   //=========================================================
   
   //Edge symbol: 'cartoon-vid'
   (function(symbolName) {   
   
      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 500, function(sym, e) {
         // insert code here
         sym.stop();

      });
      //Edge binding end

   })("cartoon-vid");
   //Edge symbol end:'cartoon-vid'

   //=========================================================
   
   //Edge symbol: 'music-vid'
   (function(symbolName) {   
   
      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 500, function(sym, e) {
         // insert code here
         sym.stop();

      });
      //Edge binding end

   })("music-vid");
   //Edge symbol end:'music-vid'

   //=========================================================
   
   //Edge symbol: 'docu-vid'
   (function(symbolName) {   
   
      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 500, function(sym, e) {
         // insert code here
         sym.stop();

      });
      //Edge binding end

   })("docu-vid");
   //Edge symbol end:'docu-vid'

   //=========================================================
   
   //Edge symbol: 'trailer-vid'
   (function(symbolName) {   
   
      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 500, function(sym, e) {
         // insert code here
         sym.stop();

      });
      //Edge binding end

   })("trailer-vid");
   //Edge symbol end:'trailer-vid'

})(window.jQuery || AdobeEdge.$, AdobeEdge, "EDGE-1646797");