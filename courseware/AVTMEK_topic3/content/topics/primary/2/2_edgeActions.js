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
      
      
      

      

      

      

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 5134, function(sym, e) {
         // insert code here
         sym.stop();
         playSound("2");

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 0, function(sym, e) {
         // insert code here
         playBGSound("music1");
         init(sym);

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 27150, function(sym, e) {
         // insert code here
         sym.stop();

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 38207, function(sym, e) {
         // insert code here
         sym.stop();

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 38473, function(sym, e) {
         // insert code here
         sym.stop();

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 38857, function(sym, e) {
         // insert code here
         sym.stop();

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 39234, function(sym, e) {
         // insert code here
         sym.stop();

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 43728, function(sym, e) {
         // insert code here
         sym.stop();

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${a1}", "click", function(sym, e) {
         // insert code for mouse click here
         sym.play("fa");

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${a2}", "click", function(sym, e) {
         // insert code for mouse click here
         sym.play("fb");

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${a3}", "click", function(sym, e) {
         // insert code for mouse click here
         sym.play("fc");

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${op1}", "click", function(sym, e) {
         // insert code for mouse click here
         sym.play("s1");

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 41846, function(sym, e) {
         // insert code here
         sym.stop();

      });
      //Edge binding end

      

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 38537, function(sym, e) {
         // insert code here
         sym.play("answer1");

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 38921, function(sym, e) {
         // insert code here
         sym.play("answer1");

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 39298, function(sym, e) {
         // insert code here
         sym.play("answer1");

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${treetrigger}", "click", function(sym, e) {
         // insert code for mouse click here
         
         // Show an element 
         sym.$("treetrigger").hide();
         
         // Show an element 
         sym.$("tree").fadeIn();
         sym.setVariable("c",true);
         if(sym.getVariable("a")&&sym.getVariable("b")&&sym.getVariable("c")){
         	// Show an element 
         	sym.$("next_but").show();
         }

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${fencetrigger}", "click", function(sym, e) {
         // insert code for mouse click here
         
         // Hide an element 
         sym.$("fencetrigger").hide();
         
         // Show an element 
         sym.$("fence").fadeIn();
         sym.setVariable("b",true);
         if(sym.getVariable("a")&&sym.getVariable("b")&&sym.getVariable("c")){
         	// Show an element 
         	sym.$("next_but").show();
         }

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${balltrigger}", "click", function(sym, e) {
         // insert code for mouse click here
         
         // Hide an element 
         sym.$("balltrigger").hide();
         
         // Show an element 
         
         // Show an element 
         sym.$("ball").fadeIn();
         
         sym.setVariable("a",true);
         if(sym.getVariable("a")&&sym.getVariable("b")&&sym.getVariable("c")){
         	// Show an element 
         	sym.$("next_but").show();
         }

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${next_but}", "click", function(sym, e) {
         // insert code for mouse click here
         sym.play();

      });
      //Edge binding end

      

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 44447, function(sym, e) {
         // insert code here
         sym.stop();

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${op2}", "click", function(sym, e) {
         // insert code for mouse click here
         sym.play("s2");

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 52094, function(sym, e) {
         // insert code here
         sym.stop();

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 53931, function(sym, e) {
         // insert code here
         sym.stop();

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 54711, function(sym, e) {
         // insert code here
         sym.stop();

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 55095, function(sym, e) {
         // insert code here
         sym.stop();

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 55472, function(sym, e) {
         // insert code here
         sym.stop();

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 54775, function(sym, e) {
         // insert code here
         sym.play("answer2");

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 55159, function(sym, e) {
         // insert code here
         sym.play("answer2");

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 55536, function(sym, e) {
         // insert code here
         sym.play("answer2");

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${b1}", "click", function(sym, e) {
         // insert code for mouse click here
         sym.play("ma");

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${b2}", "click", function(sym, e) {
         // insert code for mouse click here
         sym.play("mb");

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${b3}", "click", function(sym, e) {
         // insert code for mouse click here
         sym.play("mc");

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 58268, function(sym, e) {
         // insert code here
         sym.stop();

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 60970, function(sym, e) {
         // insert code here
         sym.stop();

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${posttrigger}", "click", function(sym, e) {
         // insert code for mouse click here
         // Show an element 
         
         // Hide an element 
         sym.$("posttrigger").hide();
         
         
         // Show an element 
         sym.$("park-sign").fadeIn();
         sym.setVariable("f",true);
         if(sym.getVariable("d")&&sym.getVariable("e")&&sym.getVariable("f")){
         	// Show an element 
         	sym.$("next_but").show();
         }

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${picnictrigger}", "click", function(sym, e) {
         // insert code for mouse click here
         
         // Hide an element 
         sym.$("picnictrigger").hide();
         
         // Show an element 
         sym.$("picnic").fadeIn();
         
         sym.setVariable("e",true);
         if(sym.getVariable("d")&&sym.getVariable("e")&&sym.getVariable("f")){
         	// Show an element 
         	sym.$("next_but").show();
         }

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${carparktrigger}", "click", function(sym, e) {
         // insert code for mouse click here
         
         
         // Hide an element 
         sym.$("carparktrigger").hide();
         
         // Show an element 
         sym.$("parking").fadeIn();
         
         sym.setVariable("d",true);
         //if(sym.getVariable("d")&&sym.getVariable("e")&&sym.getVariable("f")){
         	// Show an element 
         	sym.$("next_but").show();
         //}

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 61500, function(sym, e) {
         // insert code here
         sym.stop();

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${op3}", "click", function(sym, e) {
         // insert code for mouse click here
         sym.play("s3");

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 69450, function(sym, e) {
         // insert code here
         sym.stop();

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 69850, function(sym, e) {
         // insert code here
         sym.stop();

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 70240, function(sym, e) {
         // insert code here
         sym.stop();

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 70624, function(sym, e) {
         // insert code here
         sym.stop();

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 71001, function(sym, e) {
         // insert code here
         sym.stop();

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 70304, function(sym, e) {
         // insert code here
         sym.play("answer3");

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 70688, function(sym, e) {
         // insert code here
         sym.play("answer3");

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 71065, function(sym, e) {
         // insert code here
         sym.play("answer3");

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 73501, function(sym, e) {
         // insert code here
         sym.stop();

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 76577, function(sym, e) {
         // insert code here
         sym.stop();

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${darkcloudtrigger}", "click", function(sym, e) {
         // insert code for mouse click here
         
         // Hide an element 
         sym.$("darkcloudtrigger").hide();
         
         // Show an element 
         sym.$("sky").fadeIn();
         sym.setVariable("g",true);
         if(sym.getVariable("g")&&sym.getVariable("h")&&sym.getVariable("i")){
         	sym.$("next_but").show();
         }

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${dogtrigger}", "click", function(sym, e) {
         // insert code for mouse click here
         
         // Hide an element 
         sym.$("dogtrigger").hide();
         
         
         // Show an element 
         sym.$("dogs").fadeIn();
         
         sym.setVariable("h",true);
         if(sym.getVariable("g")&&sym.getVariable("h")&&sym.getVariable("i")){
         	sym.$("next_but").show();
         }

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${skylinetrigger}", "click", function(sym, e) {
         // insert code for mouse click here
         
         // Hide an element 
         sym.$("skylinetrigger").hide();
         
         // Show an element 
         sym.$("skyline").fadeIn();
         
         sym.setVariable("i",true);
         if(sym.getVariable("g")&&sym.getVariable("h")&&sym.getVariable("i")){
         	sym.$("next_but").show();
         }

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${mainmenu}", "click", function(sym, e) {
         // insert code for mouse click here
         continueToNextScene();

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${c1}", "click", function(sym, e) {
         // insert code for mouse click here
         sym.play("bc");

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${c2}", "click", function(sym, e) {
         // insert code for mouse click here
         sym.play("bb");

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${c3}", "click", function(sym, e) {
         // insert code for mouse click here
         sym.play("ba");

      });
      //Edge binding end

      

      

      

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 27571, function(sym, e) {
         // insert code here
         sym.stop();
         playSound("2a");

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 44797, function(sym, e) {
         // insert code here
      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 62000, function(sym, e) {
         // insert code here
         sym.stop();
         playSound("2c");

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
   
   //Edge symbol: 'tree'
   (function(symbolName) {   
   
   })("tree");
   //Edge symbol end:'tree'

   //=========================================================
   
   //Edge symbol: 'ball'
   (function(symbolName) {   
   
   })("ball");
   //Edge symbol end:'ball'

   //=========================================================
   
   //Edge symbol: 'fence'
   (function(symbolName) {   
   
   })("fence");
   //Edge symbol end:'fence'

   //=========================================================
   
   //Edge symbol: 'picnic'
   (function(symbolName) {   
   
   })("picnic");
   //Edge symbol end:'picnic'

   //=========================================================
   
   //Edge symbol: 'park-sign'
   (function(symbolName) {   
   
   })("park-sign");
   //Edge symbol end:'park-sign'

   //=========================================================
   
   //Edge symbol: 'parking'
   (function(symbolName) {   
   
   })("parking");
   //Edge symbol end:'parking'

   //=========================================================
   
   //Edge symbol: 'dogs'
   (function(symbolName) {   
   
   })("dogs");
   //Edge symbol end:'dogs'

   //=========================================================
   
   //Edge symbol: 'skyline'
   (function(symbolName) {   
   
   })("skyline");
   //Edge symbol end:'skyline'

   //=========================================================
   
   //Edge symbol: 'sky'
   (function(symbolName) {   
   
   })("sky");
   //Edge symbol end:'sky'

})(window.jQuery || AdobeEdge.$, AdobeEdge, "EDGE-1646797");