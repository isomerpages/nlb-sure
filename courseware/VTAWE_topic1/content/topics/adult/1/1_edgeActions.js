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

      Symbol.bindElementAction(compId, symbolName, "${next-btn}", "click", function(sym, e) {
         // insert code for mouse click here
         continueToNextScene();

      });
      //Edge binding end

      

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 2866, function(sym, e) {
         // insert code here
         sym.stop();
         playSound("1");

      });
      //Edge binding end

      Symbol.bindTimelineAction(compId, symbolName, "Default Timeline", "update", function(sym, e) {
         // insert code to be run on every tick of the timeline here.
         // Be careful not to block or do too much work!
         updateTimeline();

      });
      //Edge binding end

      Symbol.bindTimelineAction(compId, symbolName, "Default Timeline", "complete", function(sym, e) {
         // insert code to be run at timeline end here
         completeTimeline();

      });
      //Edge binding end

      Symbol.bindTimelineAction(compId, symbolName, "Default Timeline", "stop", function(sym, e) {
         // insert code here to be run when the timeline stops
         for(var i=0;i<symbols.length;i++){
         	//symbols[i].stop();
         }

      });
      //Edge binding end

      Symbol.bindTimelineAction(compId, symbolName, "Default Timeline", "play", function(sym, e) {
         // insert code to be run at timeline play here
         for(var i=0;i<symbols.length;i++){
         	//symbols[i].play();
         }

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 19250, function(sym, e) {
         // insert code here
         symbols.push(sym.getSymbol("first-email"));

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 22261, function(sym, e) {
         // insert code here
         symbols.splice(symbols.indexOf(sym.getSymbol("first-email")),1);

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 22819, function(sym, e) {
         // insert code here
         symbols.push(sym.getSymbol("asia-internet"));

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 26296, function(sym, e) {
         // insert code here
         symbols.splice(symbols.indexOf(sym.getSymbol("asia-internet")),1)

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 26865, function(sym, e) {
         // insert code here
         symbols.push(sym.getSymbol("WWW"));

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 29865, function(sym, e) {
         // insert code here
         symbols.splice(symbols.indexOf(sym.getSymbol("WWW")),1);

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 30434, function(sym, e) {
         // insert code here
         symbols.push(sym.getSymbol("google-launch"));

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 33663, function(sym, e) {
         // insert code here
         symbols.splice(symbols.indexOf(sym.getSymbol("google-launch")),1);

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 34232, function(sym, e) {
         // insert code here
         symbols.push(sym.getSymbol("facebook-born"));

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 37693, function(sym, e) {
         // insert code here
         symbols.splice(symbols.indexOf(sym.getSymbol("facebook-born")),1);

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 38266, function(sym, e) {
         // insert code here
         symbols.push(sym.getSymbol("first-youtube"));

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 41650, function(sym, e) {
         // insert code here
         symbols.splice(symbols.indexOf(sym.getSymbol("first-youtube")),1);

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 42219, function(sym, e) {
         // insert code here
         symbols.push(sym.getSymbol("first-tweet"));

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 45711, function(sym, e) {
         // insert code here
         symbols.splice(symbols.indexOf(sym.getSymbol("first-tweet")),1);

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 46280, function(sym, e) {
         // insert code here
         symbols.push(sym.getSymbol("instagram"));

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 50280, function(sym, e) {
         // insert code here
         symbols.splice(symbols.indexOf(sym.getSymbol("instagram")),1);

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 50849, function(sym, e) {
         // insert code here
         symbols.push(sym.getSymbol("youtube-billion"));

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 54160, function(sym, e) {
         // insert code here
         symbols.splice(symbols.indexOf(sym.getSymbol("youtube-billion")),1);

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 54837, function(sym, e) {
         // insert code here
         symbols.push(sym.getSymbol("selfie"));

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 59087, function(sym, e) {
         // insert code here
         symbols.splice(symbols.indexOf(sym.getSymbol("selfie")),1);

      });
      //Edge binding end

   })("stage");
   //Edge symbol end:'stage'

   //=========================================================
   
   //Edge symbol: 'first-email'
   (function(symbolName) {   
   
   })("first-email");
   //Edge symbol end:'first-email'

   //=========================================================
   
   //Edge symbol: 'asia-internet'
   (function(symbolName) {   
   
   })("asia-internet");
   //Edge symbol end:'asia-internet'

   //=========================================================
   
   //Edge symbol: 'WWW'
   (function(symbolName) {   
   
   })("WWW");
   //Edge symbol end:'WWW'

   //=========================================================
   
   //Edge symbol: 'google-launch'
   (function(symbolName) {   
   
   })("google-launch");
   //Edge symbol end:'google-launch'

   //=========================================================
   
   //Edge symbol: 'facebook-born'
   (function(symbolName) {   
   
   })("facebook-born");
   //Edge symbol end:'facebook-born'

   //=========================================================
   
   //Edge symbol: 'first-youtube'
   (function(symbolName) {   
   
   })("first-youtube");
   //Edge symbol end:'first-youtube'

   //=========================================================
   
   //Edge symbol: 'first-tweet'
   (function(symbolName) {   
   
   })("first-tweet");
   //Edge symbol end:'first-tweet'

   //=========================================================
   
   //Edge symbol: 'instagram'
   (function(symbolName) {   
   
   })("instagram");
   //Edge symbol end:'instagram'

   //=========================================================
   
   //Edge symbol: 'youtube-billion'
   (function(symbolName) {   
   
   })("youtube-billion");
   //Edge symbol end:'youtube-billion'

   //=========================================================
   
   //Edge symbol: 'selfie'
   (function(symbolName) {   
   
   })("selfie");
   //Edge symbol end:'selfie'

})(window.jQuery || AdobeEdge.$, AdobeEdge, "EDGE-1646797");