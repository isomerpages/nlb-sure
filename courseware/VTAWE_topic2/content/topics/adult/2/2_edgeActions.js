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

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 2128, function(sym, e) {
         // insert code here
         sym.stop();
         playSound("2");

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 11919, function(sym, e) {
         // insert code here
         Obj="interact";
         sym.stop();

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${btn-support}", "click", function(sym, e) {
         // insert code for mouse click here
         var obj = "support";
         
         if(Obj==obj){
         	playSFX("correct1");
         	this.play("ans4");
         	sym.getSymbol("support").play();
         
         }
         else{
         	playSFX("wrong1");
         }

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${btn-inter}", "click", function(sym, e) {
         // insert code for mouse click here
         var obj = "interact";
         
         if(Obj==obj){
         	playSFX("correct1");
         	this.play("ans1");
         	sym.getSymbol("interact").play();
         }
         else{
         	playSFX("wrong1");
         }

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${btn-share}", "click", function(sym, e) {
         // insert code for mouse click here
         var obj = "share";
         if(Obj==obj){
         	playSFX("correct1");
         	this.play("ans3");
         	sym.getSymbol("share").play();
         }
         else{
         	playSFX("wrong1");
         }

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${btn-motiv}", "click", function(sym, e) {
         // insert code for mouse click here
         var obj = "motivate";
         if(Obj==obj){
         	playSFX("correct1");
         	this.play("ans2");
         	sym.getSymbol("motivate").play();
         }
         else{
         	playSFX("wrong1");
         }

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${btn-react}", "click", function(sym, e) {
         // insert code for mouse click here
         var obj = "react";
         if(Obj==obj){
         	playSFX("correct1");
         	this.play("ans5");
         	sym.getSymbol("react").play();
         }
         else{
         	playSFX("wrong1");
         }

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 13000, function(sym, e) {
         // insert code here
         sym.stop();

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${next-btn2}", "click", function(sym, e) {
         // insert code for mouse click here
         sym.play();

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 13648, function(sym, e) {
         // insert code here
         Obj="motivate"
         sym.stop();

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 14750, function(sym, e) {
         // insert code here
         sym.stop();

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 15418, function(sym, e) {
         // insert code here
         Obj="share"
         sym.stop();

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 16440, function(sym, e) {
         // insert code here
         sym.stop();

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 17102, function(sym, e) {
         // insert code here
         Obj="support"
         sym.stop();

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 18176, function(sym, e) {
         // insert code here
         sym.stop();

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 19000, function(sym, e) {
         // insert code here
         Obj="react";
         sym.stop();

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 19750, function(sym, e) {
         // insert code here
         sym.stop();

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 13049, function(sym, e) {
         // insert code here
         sym.getSymbol("interact").play();

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 14792, function(sym, e) {
         // insert code here
         sym.getSymbol("motivate").play();

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 16473, function(sym, e) {
         // insert code here
         sym.getSymbol("share").play();

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 18217, function(sym, e) {
         // insert code here
         sym.getSymbol("support").play();

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 19788, function(sym, e) {
         // insert code here
         sym.getSymbol("react").play();

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${next-btn}", "click", function(sym, e) {
         // insert code for mouse click here
         continueToNextScene();

      });
      //Edge binding end

   })("stage");
   //Edge symbol end:'stage'

   //=========================================================
   
   //Edge symbol: 'interact'
   (function(symbolName) {   
   
      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 648, function(sym, e) {
         // insert code here
         sym.stop();

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 1436, function(sym, e) {
         // insert code here
         sym.stop();

      });
      //Edge binding end

   })("interact");
   //Edge symbol end:'interact'

   //=========================================================
   
   //Edge symbol: 'motivate'
   (function(symbolName) {   
   
      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 648, function(sym, e) {
         // insert code here
         sym.stop();

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 1436, function(sym, e) {
         // insert code here
         sym.stop();

      });
      //Edge binding end

   })("motivate");
   //Edge symbol end:'motivate'

   //=========================================================
   
   //Edge symbol: 'share'
   (function(symbolName) {   
   
      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 648, function(sym, e) {
         // insert code here
         sym.stop();

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 1436, function(sym, e) {
         // insert code here
         sym.stop();

      });
      //Edge binding end

   })("share");
   //Edge symbol end:'share'

   //=========================================================
   
   //Edge symbol: 'support'
   (function(symbolName) {   
   
      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 648, function(sym, e) {
         // insert code here
         sym.stop();

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 1436, function(sym, e) {
         // insert code here
         sym.stop();

      });
      //Edge binding end

   })("support");
   //Edge symbol end:'support'

   //=========================================================
   
   //Edge symbol: 'react'
   (function(symbolName) {   
   
      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 648, function(sym, e) {
         // insert code here
         sym.stop();

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 1436, function(sym, e) {
         // insert code here
         sym.stop();

      });
      //Edge binding end

   })("react");
   //Edge symbol end:'react'

})(window.jQuery || AdobeEdge.$, AdobeEdge, "EDGE-1646797");