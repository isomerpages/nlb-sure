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
      
      
      

      

      

      

      Symbol.bindElementAction(compId, symbolName, "${spin-button}", "click", function(sym, e) {
         // insert code for mouse click here
         // Show an element 
         
         imgCount++;
         
         sym.$("spin-button").hide();
         
         // Hide an element 
         $(".slotTrigger").show();
         
         sym.$("spinning-slots").show();
         
         sym.getSymbol("spinning-slots").play(0);
         
         
         sym.getSymbol("spin-button").play("click");

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${instruction-btn}", "click", function(sym, e) {
         // insert code for mouse click here
         
         // Set a toggle to hide or show an element 
         if (sym.$("instruction").is(":visible")) {
         	sym.$("instruction").hide();
         } else {
         	sym.$("instruction").show();
         	sym.getSymbol("instruction").play(0);
         }

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${slotTrigger1}", "click", function(sym, e) {
         // insert code for mouse click here
         // Show an element 
         if(sym.getSymbol("Images"+imgCount).$("slot1").data("correct")){
         
         	// Show an element 
         	sym.$("game-resultCorrect").show();
         
         	sym.getSymbol("game-resultCorrect").play(0);
         
         }
         else{
         
         	// Show an element 
         	sym.$("game-resultWrong").show();
         
         	sym.getSymbol("game-resultWrong").play(0);
         
         }
         
         
         // Hide an element 
         $(".slotTrigger").hide();
         

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 0, function(sym, e) {
         // insert code here
         playBGSound("music1");
         init(sym);

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 666, function(sym, e) {
         // insert code here
         sym.stop();
         playSound("1c");

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${slotTrigger2}", "click", function(sym, e) {
         // insert code for mouse click here
         // Show an element 
         if(sym.getSymbol("Images"+imgCount).$("slot2").data("correct")){
         
         	// Show an element 
         	sym.$("game-resultCorrect").show();
         
         	sym.getSymbol("game-resultCorrect").play(0);
         
         }
         else{
         
         	// Show an element 
         	sym.$("game-resultWrong").show();
         
         	sym.getSymbol("game-resultWrong").play(0);
         
         }
         
         // Hide an element 
         $(".slotTrigger").hide();

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${slotTrigger3}", "click", function(sym, e) {
         // insert code for mouse click here
         // Show an element 
         if(sym.getSymbol("Images"+imgCount).$("slot3").data("correct")){
         
         	// Show an element 
         	sym.$("game-resultCorrect").show();
         
         	sym.getSymbol("game-resultCorrect").play(0);
         
         }
         else{
         
         	// Show an element 
         	sym.$("game-resultWrong").show();
         
         	sym.getSymbol("game-resultWrong").play(0);
         
         }
         
         // Hide an element 
         $(".slotTrigger").hide();

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${mainmenu}", "click", function(sym, e) {
         // insert code for mouse click here
         continueToNextScene();

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 11685, function(sym, e) {
         // insert code here
         sym.stop();
         playSound("1c1");

      });
      //Edge binding end

   })("stage");
   //Edge symbol end:'stage'

   //=========================================================
   
   //Edge symbol: 'instruction'
   (function(symbolName) {   
   
      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 13000, function(sym, e) {
         // insert code here
         
         // Hide an element 
         sym.getSymbolElement().hide();

      });
      //Edge binding end

   })("instruction");
   //Edge symbol end:'instruction'

   //=========================================================
   
   //Edge symbol: 'spin-button'
   (function(symbolName) {   
   
      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 4826, function(sym, e) {
         // insert code here
         sym.stop();

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 5616, function(sym, e) {
         // insert code here
         sym.stop("start");
         
         // Hide an element 
         sym.getSymbolElement().hide();

      });
      //Edge binding end

   })("spin-button");
   //Edge symbol end:'spin-button'

   //=========================================================
   
   //Edge symbol: 'spinning-slots'
   (function(symbolName) {   
   
      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 915, function(sym, e) {
         // insert code here
         
         // Show an element 
         sym.getComposition().getStage().$("Images"+imgCount).show();
         sym.getComposition().getStage().getSymbol("Images"+imgCount).play(0);

      });
      //Edge binding end

   })("spinning-slots");
   //Edge symbol end:'spinning-slots'

   //=========================================================
   
   //Edge symbol: 'Slot_BG'
   (function(symbolName) {   
   
   })("Slot_BG");
   //Edge symbol end:'Slot_BG'

   //=========================================================
   
   //Edge symbol: 'Images-set1'
   (function(symbolName) {   
   
      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 344, function(sym, e) {
         // insert code here
         sym.stop();

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 24, function(sym, e) {
         // insert code here
         for(var i=0;i<3;i++){
         	var tmpPath = sym.$("slot"+(i+1)).css("backgroundImage");
         	var tmpCorrect=sym.$("slot"+(i+1)).data("correct");
         	var rnd=parseInt(Math.random()*3);
         	var tmpPath1=sym.$("slot"+(rnd+1)).css("backgroundImage");
         	var tmpCorrect1=sym.$("slot"+(rnd+1)).data("correct");
         
         	sym.$("slot"+(i+1)).css({
         		backgroundImage:tmpPath1
         	});
         	sym.$("slot"+(rnd+1)).css({
         		backgroundImage:tmpPath
         	});
         
         	
         }
         
         for(var i=0;i<3;i++){
         	if(sym.$("slot"+(i+1)).css("backgroundImage").indexOf("images/slot-magz.png")>=0){
         		sym.$("slot"+(i+1)).data("correct",true);
         	}
         	else{
         		sym.$("slot"+(i+1)).data("correct",false);
         	}
         }

      });
      //Edge binding end

   })("Images-set1");
   //Edge symbol end:'Images-set1'

   //=========================================================
   
   //Edge symbol: 'Images-set2'
   (function(symbolName) {   
   
      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 344, function(sym, e) {
         // insert code here
         sym.stop();

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 25, function(sym, e) {
         // insert code here
         for(var i=0;i<3;i++){
         	var tmpPath = sym.$("slot"+(i+1)).css("backgroundImage");
         	var tmpCorrect=sym.$("slot"+(i+1)).data("correct");
         	var rnd=parseInt(Math.random()*3);
         	var tmpPath1=sym.$("slot"+(rnd+1)).css("backgroundImage");
         	var tmpCorrect1=sym.$("slot"+(rnd+1)).data("correct");
         
         	sym.$("slot"+(i+1)).css({
         		backgroundImage:tmpPath1
         	});
         	sym.$("slot"+(rnd+1)).css({
         		backgroundImage:tmpPath
         	});
         
         
         }
         
         for(var i=0;i<3;i++){
         	if(sym.$("slot"+(i+1)).css("backgroundImage").indexOf("images/slot-youtube.png")>=0){
         		sym.$("slot"+(i+1)).data("correct",true);
         	}
         	else{
         		sym.$("slot"+(i+1)).data("correct",false);
         	}
         }

      });
      //Edge binding end

   })("Images-set2");
   //Edge symbol end:'Images-set2'

   //=========================================================
   
   //Edge symbol: 'Images-set3'
   (function(symbolName) {   
   
      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 344, function(sym, e) {
         // insert code here
         sym.stop();

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 25, function(sym, e) {
         // insert code here
         for(var i=0;i<3;i++){
         	var tmpPath = sym.$("slot"+(i+1)).css("backgroundImage");
         	var tmpCorrect=sym.$("slot"+(i+1)).data("correct");
         	var rnd=parseInt(Math.random()*3);
         	var tmpPath1=sym.$("slot"+(rnd+1)).css("backgroundImage");
         	var tmpCorrect1=sym.$("slot"+(rnd+1)).data("correct");
         
         	sym.$("slot"+(i+1)).css({
         		backgroundImage:tmpPath1
         	});
         	sym.$("slot"+(rnd+1)).css({
         		backgroundImage:tmpPath
         	});
         
         
         }
         
         for(var i=0;i<3;i++){
         	if(sym.$("slot"+(i+1)).css("backgroundImage").indexOf("images/slot-comic.png")>=0){
         		sym.$("slot"+(i+1)).data("correct",true);
         	}
         	else{
         		sym.$("slot"+(i+1)).data("correct",false);
         	}
         }

      });
      //Edge binding end

   })("Images-set3");
   //Edge symbol end:'Images-set3'

   //=========================================================
   
   //Edge symbol: 'Images-set4'
   (function(symbolName) {   
   
      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 344, function(sym, e) {
         // insert code here
         sym.stop();

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 25, function(sym, e) {
         // insert code here
         for(var i=0;i<3;i++){
         	var tmpPath = sym.$("slot"+(i+1)).css("backgroundImage");
         	var tmpCorrect=sym.$("slot"+(i+1)).data("correct");
         	var rnd=parseInt(Math.random()*3);
         	var tmpPath1=sym.$("slot"+(rnd+1)).css("backgroundImage");
         	var tmpCorrect1=sym.$("slot"+(rnd+1)).data("correct");
         
         	sym.$("slot"+(i+1)).css({
         		backgroundImage:tmpPath1
         	});
         	sym.$("slot"+(rnd+1)).css({
         		backgroundImage:tmpPath
         	});
         
         
         }
         
         for(var i=0;i<3;i++){
         	if(sym.$("slot"+(i+1)).css("backgroundImage").indexOf("images/slot-docu.png")>=0){
         		sym.$("slot"+(i+1)).data("correct",true);
         	}
         	else{
         		sym.$("slot"+(i+1)).data("correct",false);
         	}
         }

      });
      //Edge binding end

   })("Images-set4");
   //Edge symbol end:'Images-set4'

   //=========================================================
   
   //Edge symbol: 'Images-set5'
   (function(symbolName) {   
   
      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 344, function(sym, e) {
         // insert code here
         sym.stop();

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 25, function(sym, e) {
         // insert code here
         for(var i=0;i<3;i++){
         	var tmpPath = sym.$("slot"+(i+1)).css("backgroundImage");
         	var tmpCorrect=sym.$("slot"+(i+1)).data("correct");
         	var rnd=parseInt(Math.random()*3);
         	var tmpPath1=sym.$("slot"+(rnd+1)).css("backgroundImage");
         	var tmpCorrect1=sym.$("slot"+(rnd+1)).data("correct");
         
         	sym.$("slot"+(i+1)).css({
         		backgroundImage:tmpPath1
         	});
         	sym.$("slot"+(rnd+1)).css({
         		backgroundImage:tmpPath
         	});
         
         
         }
         
         for(var i=0;i<3;i++){
         	if(sym.$("slot"+(i+1)).css("backgroundImage").indexOf("images/slot-webad.png")>=0){
         		sym.$("slot"+(i+1)).data("correct",true);
         	}
         	else{
         		sym.$("slot"+(i+1)).data("correct",false);
         	}
         }

      });
      //Edge binding end

   })("Images-set5");
   //Edge symbol end:'Images-set5'

   //=========================================================
   
   //Edge symbol: 'game-result'
   (function(symbolName) {   
   
      Symbol.bindElementAction(compId, symbolName, "${close-btn1}", "click", function(sym, e) {
         // insert code for mouse click here
         
         // Hide an element 
         sym.getSymbolElement().hide();
         
         // Show an element 
         sym.getComposition().getStage().$("spin-button").show();
         
         $(".imagesClass").hide();
         if(imgCount>=5){
         	// Show an element 
         	sym.getComposition().getStage().$("mainmenu").show();
         	
         	// Hide an element 
         	sym.getComposition().getStage().$("spin-button").hide();
         	
         }

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 231, function(sym, e) {
         if(imgCount>=5)sym.$("subText").html("Click \"Close\" to continue");

      });
      //Edge binding end

   })("game-result");
   //Edge symbol end:'game-result'

   //=========================================================
   
   //Edge symbol: 'game-result2'
   (function(symbolName) {   
   
      Symbol.bindElementAction(compId, symbolName, "${close-btn1}", "click", function(sym, e) {
         // insert code for mouse click here
         
         // Hide an element 
         sym.getSymbolElement().hide();
         
         // Show an element 
         sym.getComposition().getStage().$("spin-button").show();
         
         $(".imagesClass").hide();
         if(imgCount>=5){
         	// Show an element 
         	sym.getComposition().getStage().$("mainmenu").show();
         	
         	// Hide an element 
         	sym.getComposition().getStage().$("spin-button").hide();
         	
         }

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 500, function(sym, e) {
         // insert code here
         
         // Show an element 
         if(imgCount>=5)sym.$("subText").html("Click \"Close\" to continue");

      });
      //Edge binding end

   })("game-result2");
   //Edge symbol end:'game-result2'

})(window.jQuery || AdobeEdge.$, AdobeEdge, "EDGE-1646797");