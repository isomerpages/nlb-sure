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

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 4500, function(sym, e) {
         // insert code here
         sym.stop();
         playSound("4a");

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 20851, function(sym, e) {
         // insert code here
         
         
         // Hide an element 
         
         
         sym.stop();

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${search-btn}", "click", function(sym, e) {
         // insert code for mouse click here
         if(correctAnswer==currentAnswer){
         	sym.play("find");
         }
         else{
         	// Show an element 
         	tries+=3;
         	sym.$("game-resultWrong").show();
         
         	// Hide an element 
         	sym.getSymbol("game-resultWrong").$("showanswer").hide();
         	sym.getSymbol("game-resultWrong").$("close-btn1").hide();
         	sym.getSymbol("game-resultWrong").play(0);
         	if(tries>2){
         		sym.getSymbol("game-resultWrong").$("showanswer").show();
         		sym.getSymbol("game-resultWrong").$("textfeedback").text("Those are the wrong keywords.");
         	}
         	else{
         		sym.getSymbol("game-resultWrong").$("close-btn1").show();
         
         		// Show an element 
         		sym.getSymbol("game-resultWrong").$("textfeedback").text("Those are the wrong keywords. Try again!");
         	}
         }

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 22447, function(sym, e) {
         // insert code here
         sym.stop();
         playSound("4b");

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 25740, function(sym, e) {
         // insert code here
         sym.stop();

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${t1}", "click", function(sym, e) {
         // insert code for mouse click here
         // Show an element 
         sym.$("game-resultWrong").show();
         sym.getSymbol("game-resultWrong").play(0);
         // Show an element 
         sym.getSymbol("game-resultWrong").$("textfeedback").text("That's not the right page. Try again!");

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${t2}", "click", function(sym, e) {
         // insert code for mouse click here
         // Show an element 
         sym.$("game-resultWrong").show();
         sym.getSymbol("game-resultWrong").play(0);
         // Show an element 
         sym.getSymbol("game-resultWrong").$("textfeedback").text("That's not the right page. Try again!");

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${t3}", "click", function(sym, e) {
         // insert code for mouse click here
         // Show an element 
         sym.$("game-resultWrong").show();
         sym.getSymbol("game-resultWrong").play(0);
         // Show an element 
         sym.getSymbol("game-resultWrong").$("textfeedback").text("That's not the right page. Try again!");

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${t4}", "click", function(sym, e) {
         // insert code for mouse click here
         // Show an element 
         sym.$("game-resultWrong").show();
         sym.getSymbol("game-resultWrong").play(0);
         // Show an element 
         sym.getSymbol("game-resultWrong").$("textfeedback").text("That's not the right page. Try again!");

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${t5}", "click", function(sym, e) {
         // insert code for mouse click here
         sym.play("correct");

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${next-btn}", "click", function(sym, e) {
         // insert code for mouse click here
         //loadNextPage("content/topics/primary/1/1.html?action=loaded");
         continueToNextScene();

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 26000, function(sym, e) {
         // insert code here
         sym.stop();
         playSound("4c");

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 15949, function(sym, e) {
         // insert code here
         tries=0;
         instructMC = sym.$("instruction");
         sym.getSymbol("game-resultWrong").$("showanswer").hide();
         sym.getSymbol("game-resultWrong").$("close-btn1").hide();

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 21750, function(sym, e) {
         // insert code here
         
         instructMC = sym.$("instruction2");

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${instruction-btn}", "click", function(sym, e) {
         // insert code for mouse click here
         // Set a toggle to hide or show an element 
         if (instructMC.is(":visible")) {
         	instructMC.hide();
         } else {
         	instructMC.show();
         }

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${next-btn2}", "click", function(sym, e) {
         // insert code for mouse click here
         sym.play("find");

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
   
      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 2436, function(sym, e) {
         // insert code here
         sym.stop();

      });
      //Edge binding end

   })("instruction");
   //Edge symbol end:'instruction'

   //=========================================================
   
   //Edge symbol: 'letters'
   (function(symbolName) {   
   
      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 325, function(sym, e) {
         // insert code here
         var word = "AsianElephants";
         correctAnswer = "Aianlphants";
         var scale = utils.getScale();
         for(var i=0;i<word.length;i++){
         	sym.$("l"+i).data("letter",word.charAt(i));
         	if($($(".letters1")[i]).data("left")){
         		$($(".letters1")[i]).css({
         			left:$($(".letters1")[i]).data("left"),
         			top:$($(".letters1")[i]).data("top")
         		});
         	}
         }
         var letterAr=[undefined,true,undefined,undefined,undefined,true,undefined,true,undefined,undefined,undefined,undefined,undefined,undefined];
         
         $(".letters1").unbind().click(function(){
         console.log(letterAr)
         	if($(this).position().top!=0){
         		if(!$(this).data("left")){
         			$(this).data("left",$(this).position().left/scale);
         			$(this).data("top",$(this).position().top/scale);
         		}
         
         		var idx=-1;
         		for(var i=0;i<letterAr.length;i++){
         			if(letterAr[i]==undefined){
         				idx=i;
         				break;
         			}
         		}
         		if(idx<0)letterAr.push(this);
         		else letterAr[idx]=this;
         
         		for(var i=0;i<letterAr.length;i++){
         			if(letterAr[i]!=undefined){
         				if(letterAr[i]==true){}
         				else{
         					if(i<6){
         						$(letterAr[i]).css({
         							top:0,
         							left:i*45
         						});
         					}
         					else{
         						$(letterAr[i]).css({
         							top:0,
         							left:15+i*45
         						});
         					}
         				}
         			}
         		}
         	}
         	else{
         	console.log("index:"+letterAr.indexOf(this));
         		letterAr[letterAr.indexOf(this)]=undefined;
         		$(this).css({
         			left:$(this).data("left")-20,
         			top:$(this).data("top")-20
         		});
         	}
         	console.log(letterAr);
         	var ctr=0;
         	currentAnswer="";
         	for(var i=0;i<letterAr.length;i++){
         		if(letterAr[i]!=undefined){
         			if($(letterAr[i]).data("letter"))currentAnswer+=$(letterAr[i]).data("letter");
         			ctr++;
         		}
         	}
         
         	if(ctr>=word.length){
         		//show next button
         
         	}
         	else{
         
         	}
         });
         
         
         // Hide an element 
         sym.$("l1").unbind();
         sym.$("l5").unbind();
         sym.$("l7").unbind();
         
         

      });
      //Edge binding end

   })("letters");
   //Edge symbol end:'letters'

   //=========================================================
   
   //Edge symbol: 'instruction2'
   (function(symbolName) {   
   
      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 1591, function(sym, e) {
         // insert code here
         sym.stop();

      });
      //Edge binding end

   })("instruction2");
   //Edge symbol end:'instruction2'

   //=========================================================
   
   //Edge symbol: 'notif1'
   (function(symbolName) {   
   
      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 1149, function(sym, e) {
         // insert code here
         sym.stop();

      });
      //Edge binding end

   })("notif1");
   //Edge symbol end:'notif1'

   //=========================================================
   
   //Edge symbol: 'notif2'
   (function(symbolName) {   
   
      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 1363, function(sym, e) {
         // insert code here
         sym.stop();

      });
      //Edge binding end

   })("notif2");
   //Edge symbol end:'notif2'

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
         

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${showanswer}", "click", function(sym, e) {
         // insert code for mouse click here
         
         // Hide an element 
         sym.getSymbolElement().hide();
         sym.getComposition().getStage().$("search-btn").hide();
         
         console.log("Coming here");
         // Show an element 
         sym.getComposition().getStage().$("next-btn2").show();
         
         letterAr = [sym.getComposition().getStage().getSymbol("letters").$("l0"),true,sym.getComposition().getStage().getSymbol("letters").$("l2"),sym.getComposition().getStage().getSymbol("letters").$("l3"),sym.getComposition().getStage().getSymbol("letters").$("l4"),true,sym.getComposition().getStage().getSymbol("letters").$("l6"),true,sym.getComposition().getStage().getSymbol("letters").$("l8"),sym.getComposition().getStage().getSymbol("letters").$("l9"),sym.getComposition().getStage().getSymbol("letters").$("l10"),sym.getComposition().getStage().getSymbol("letters").$("l11"),sym.getComposition().getStage().getSymbol("letters").$("l12"),sym.getComposition().getStage().getSymbol("letters").$("l13")];
         // Show an element 
         console.log("letterAr.length:"+letterAr.length);
         
         for(var i=0;i<letterAr.length;i++){
         	console.log(letterAr.length)
         		if(letterAr[i]==true){}
         		else{
         			if(i<6){
         				$(letterAr[i]).css({
         					top:0,
         					left:i*45
         				});
         			}
         			else{
         				$(letterAr[i]).css({
         					top:0,
         					left:15+i*45
         				});
         			}
         		}
         }

      });
      //Edge binding end

   })("game-result");
   //Edge symbol end:'game-result'

})(window.jQuery || AdobeEdge.$, AdobeEdge, "EDGE-1646797");