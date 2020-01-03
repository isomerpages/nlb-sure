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
      
      
      

      

      

      

      

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 3620, function(sym, e) {
         // insert code here
         sym.stop();
         playSound("3");

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 0, function(sym, e) {
         // insert code here
         init(sym);
         playBGSound("music1");

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 27620, function(sym, e) {
         // insert code here
         sym.play("loop");

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${shoeBtn}", "click", function(sym, e) {
         // insert code for mouse click here
         $("#Stage_running-shoes2").css({
         	zIndex:999999
         });
         hideButtons();
         $("#Stage_running-shoes2").show();
         sym.getSymbol("running-shoes2").play(0);

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${sunglassBtn}", "click", function(sym, e) {
         // insert code for mouse click here
         
         $("#Stage_sunglasses2").css({
         	zIndex:999999
         });
         hideButtons();
         $("#Stage_sunglasses2").show();
         sym.getSymbol("sunglasses2").play(0);

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${brushBtn}", "click", function(sym, e) {
         // insert code for mouse click here
         $("#Stage_toothbrush").css({
         	zIndex:999999
         });
         hideButtons();
         $("#Stage_toothbrush").show();
         sym.getSymbol("toothbrush").play(0);

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${lotionBtn}", "click", function(sym, e) {
         // insert code for mouse click here
         $("#Stage_cosmetic2").css({
         	zIndex:999999
         });
         hideButtons();
         $("#Stage_cosmetic2").show();
         sym.getSymbol("cosmetic2").play(0);

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${shampooBtn}", "click", function(sym, e) {
         // insert code for mouse click here
         $("#Stage_shampoo").css({
         	zIndex:999999
         });
         
         hideButtons();
         $("#Stage_shampoo").show();
         sym.getSymbol("shampoo").play(0);

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${saleBtn}", "click", function(sym, e) {
         // insert code for mouse click here
         $("#Stage_big-sale").css({
         	zIndex:999999
         });
         hideButtons();
         $("#Stage_big-sale").show();
         sym.getSymbol("big-sale").play(0);

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 25859, function(sym, e) {
         // insert code here
         if(hiddenBtn){
         	$(".buttons").hide();
         }
         else{
         	$(".buttons").show();
         }

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
   
   //Edge symbol: 'running-shoes'
   (function(symbolName) {   
   
      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 14500, function(sym, e) {
         // insert code here
         showButtons();

      });
      //Edge binding end

   })("running-shoes");
   //Edge symbol end:'running-shoes'

   //=========================================================
   
   //Edge symbol: 'cosmetic'
   (function(symbolName) {   
   
      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 15389, function(sym, e) {
         // insert code here
         showButtons();

      });
      //Edge binding end

   })("cosmetic");
   //Edge symbol end:'cosmetic'

   //=========================================================
   
   //Edge symbol: 'toothbrush'
   (function(symbolName) {   
   
      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 23864, function(sym, e) {
         // insert code here
         showButtons();

      });
      //Edge binding end

   })("toothbrush");
   //Edge symbol end:'toothbrush'

   //=========================================================
   
   //Edge symbol: 'shampoo'
   (function(symbolName) {   
   
      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 18300, function(sym, e) {
         // insert code here
         showButtons();

      });
      //Edge binding end

   })("shampoo");
   //Edge symbol end:'shampoo'

   //=========================================================
   
   //Edge symbol: 'sunglasses'
   (function(symbolName) {   
   
      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 8628, function(sym, e) {
         // insert code here
         showButtons();

      });
      //Edge binding end

   })("sunglasses");
   //Edge symbol end:'sunglasses'

   //=========================================================
   
   //Edge symbol: 'big-sale'
   (function(symbolName) {   
   
      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 10750, function(sym, e) {
         // insert code here
         showButtons();

      });
      //Edge binding end

   })("big-sale");
   //Edge symbol end:'big-sale'

   //=========================================================
   
   //Edge symbol: 'Symbol_1'
   (function(symbolName) {   
   
   })("Symbol_1");
   //Edge symbol end:'Symbol_1'

   //=========================================================
   
   //Edge symbol: 'Symbol_2'
   (function(symbolName) {   
   
   })("Symbol_2");
   //Edge symbol end:'Symbol_2'

   //=========================================================
   
   //Edge symbol: 'Symbol_3'
   (function(symbolName) {   
   
   })("Symbol_3");
   //Edge symbol end:'Symbol_3'

})(window.jQuery || AdobeEdge.$, AdobeEdge, "EDGE-1646797");