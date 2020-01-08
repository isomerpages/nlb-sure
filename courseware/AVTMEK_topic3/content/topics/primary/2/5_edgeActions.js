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

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 6107, function(sym, e) {
         // insert code here
         sym.stop();
         playSound("5");

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
   
   })("instruction");
   //Edge symbol end:'instruction'

   //=========================================================
   
   //Edge symbol: 'story1'
   (function(symbolName) {   
   
   })("story1");
   //Edge symbol end:'story1'

   //=========================================================
   
   //Edge symbol: 'story2'
   (function(symbolName) {   
   
   })("story2");
   //Edge symbol end:'story2'

   //=========================================================
   
   //Edge symbol: 'story3'
   (function(symbolName) {   
   
   })("story3");
   //Edge symbol end:'story3'

   //=========================================================
   
   //Edge symbol: 'pic1'
   (function(symbolName) {   
   
   })("pic1");
   //Edge symbol end:'pic1'

   //=========================================================
   
   //Edge symbol: 'pic2'
   (function(symbolName) {   
   
   })("pic2");
   //Edge symbol end:'pic2'

})(window.jQuery || AdobeEdge.$, AdobeEdge, "EDGE-1646797");