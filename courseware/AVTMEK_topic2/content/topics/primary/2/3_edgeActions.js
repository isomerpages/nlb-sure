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
         
         // Hide an element 
         sym.$("next-btn").hide();
         
         playBGSound("music1");
         init(sym);

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 13800, function(sym, e) {
         // insert code here
         sym.stop();

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 23846, function(sym, e) {
         // insert code here
         sym.stop();

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${t1}", "click", function(sym, e) {
         
         $(".triggerClass").hide();
         $(".contents").hide();
         // Show an element 
         sym.$("image-content").show();
         sym.getSymbol("image-content").play(0);
         
         // Show an element 
         sym.$("next-btn").show();
         

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${t2}", "click", function(sym, e) {
         
         $(".triggerClass").hide();
         $(".contents").hide();
         // Show an element 
         sym.$("text-content").show();
         sym.getSymbol("text-content").play();
         
         // Show an element 
         sym.$("next-btn").show();

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${t3}", "click", function(sym, e) {
         
         // insert code for mouse click here
         $(".triggerClass").hide();
         $(".contents").hide();
         // Show an element 
         sym.$("colour-content").show();
         sym.getSymbol("colour-content").play(0);
         
         // Show an element 
         sym.$("next-btn").show();

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${next-btn}", "click", function(sym, e) {
         // insert code for mouse click here
         continueToNextScene();

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 2624, function(sym, e) {
         // insert code here
         sym.stop();
         playSound("3");

      });
      //Edge binding end

   })("stage");
   //Edge symbol end:'stage'

   //=========================================================
   
   //Edge symbol: 'text'
   (function(symbolName) {   
   
   })("text");
   //Edge symbol end:'text'

   //=========================================================
   
   //Edge symbol: 'image'
   (function(symbolName) {   
   
   })("image");
   //Edge symbol end:'image'

   //=========================================================
   
   //Edge symbol: 'colour'
   (function(symbolName) {   
   
   })("colour");
   //Edge symbol end:'colour'

   //=========================================================
   
   //Edge symbol: 'image-content'
   (function(symbolName) {   
   
      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 18912, function(sym, e) {
         // insert code here
         var scale;
         var mc;
         var dropCorrect;
         
         
         sym.$("curious").data("x",1027);
         sym.$("curious").data("y",185);
         sym.$("curious").data("emotion","curios");
         
         sym.$("anxious").data("x",1242);
         sym.$("anxious").data("y",397);
         sym.$("anxious").data("emotion","anxious");
         
         sym.$("sad").data("x",1234);
         sym.$("sad").data("y",192);
         sym.$("sad").data("emotion","sad");
         
         sym.$("happy").data("x",1021);
         sym.$("happy").data("y",378);
         sym.$("happy").data("emotion","happy");
         
         
         
         // Show an element 
         sym.$("next_but").css("z-index",10000);
         
         // Show an element 
         sym.$("right-select3").css("z-index",10000);
         
         
         $(".emoticons").draggable({
         	start:function(event, ui){
         	  mc=this;
         	  $(this).css({
         			zIndex:9999
         	  });
         	  scale=utils.getScale();
         	  ui.position.left = 0;
         	  ui.position.top = 0; 
         	  dropCorrect=false;
         	},
         	drag: function(event, ui) {
         	  var changeLeft = ui.position.left - ui.originalPosition.left; // find change in left
         	  var newLeft = ui.originalPosition.left + changeLeft / (( scale)); // adjust new left by our zoomScale
         
         	  var changeTop = ui.position.top - ui.originalPosition.top; // find change in top
         	  var newTop = ui.originalPosition.top + changeTop / scale // adjust new top by our zoomScale
         
         	  ui.position.left = newLeft;
         	  ui.position.top = newTop;
         	},
         	stop:function(event,ui){
         		if(!dropCorrect){
         			  var xpos=$(mc).data("x");
         			  var ypos=$(mc).data("y");
         			  playSFX("wrong1");
         			  $(this).stop().animate({
         					left:xpos,
         					top:ypos
         			  })
         		 }
         	}
         });
         
         sym.$("d1").data("emotion","anxious");
         // Show an element 
         sym.$("d1").droppable({
         	drop:function(){
         		if($(this).data("emotion")==$(mc).data("emotion")){
         			dropCorrect=true;
         			playSFX("correct1");
         			sym.play();
         		}
         		else{
         			dropCorrect=false;
         		}
         
         	}
         });
         
         sym.$("d2").data("emotion","curios");
         // Show an element 
         sym.$("d2").droppable({
         	drop:function(){
         		if($(this).data("emotion")==$(mc).data("emotion")){
         			dropCorrect=true;
         			playSFX("correct1");
         			sym.play();
         		}
         		else{
         			dropCorrect=false;
         		}
         
         	}
         });
         
         
         sym.$("d3").data("emotion","happy");
         // Show an element 
         sym.$("d3").droppable({
         	drop:function(){
         		if($(this).data("emotion")==$(mc).data("emotion")){
         			dropCorrect=true;
         			playSFX("correct1");
         			sym.play();
         		}
         		else{
         			dropCorrect=false;
         		}
         
         	}
         });
         
         
         sym.$("d4").data("emotion","sad");
         // Show an element 
         sym.$("d4").droppable({
         	drop:function(){
         		if($(this).data("emotion")==$(mc).data("emotion")){
         			dropCorrect=true;
         			playSFX("correct1");
         			sym.play();
         		}
         		else{
         			dropCorrect=false;
         		}
         
         	}
         });
         
         sym.stop();

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 17289, function(sym, e) {
         // insert code here
         sym.play("sk1");
         //sym.stop();

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${next_but}", "click", function(sym, e) {
         // insert code for mouse click here
         sym.play();

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 19153, function(sym, e) {
         // insert code here
         sym.stop();

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 19196, function(sym, e) {
         // insert code here
         
         for(var i=0;i<$(".emoticons").length;i++){
         	$($(".emoticons")[i]).css({
         		left:$($(".emoticons")[i]).data("x"),
         		top:$($(".emoticons")[i]).data("y")
         	})
         }

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 19631, function(sym, e) {
         // insert code here
         
         sym.stop();

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 19864, function(sym, e) {
         // insert code here
         sym.stop();

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 19898, function(sym, e) {
         // insert code here
         for(var i=0;i<$(".emoticons").length;i++){
         	$($(".emoticons")[i]).css({
         		left:$($(".emoticons")[i]).data("x"),
         		top:$($(".emoticons")[i]).data("y")
         	})
         }

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 20394, function(sym, e) {
         // insert code here
         
         sym.stop();

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 20575, function(sym, e) {
         // insert code here
         sym.stop();

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 21047, function(sym, e) {
         // insert code here
         
         sym.stop();

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 21286, function(sym, e) {
         // insert code here
         sym.stop();

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 22353, function(sym, e) {
         // insert code here
         for(var i=0;i<$(".emoticons").length;i++){
         	$($(".emoticons")[i]).css({
         		left:$($(".emoticons")[i]).data("x"),
         		top:$($(".emoticons")[i]).data("y")
         	})
         }
         // Hide an element 
         sym.getSymbolElement().hide();
         $(".triggerClass").show();

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${close-btn}", "click", function(sym, e) {
         // insert code for mouse click here
         stopSound();
         sym.play("end");

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 20600, function(sym, e) {
         // insert code here
         for(var i=0;i<$(".emoticons").length;i++){
         	$($(".emoticons")[i]).css({
         		left:$($(".emoticons")[i]).data("x"),
         		top:$($(".emoticons")[i]).data("y")
         	})
         }

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 21322, function(sym, e) {
         // insert code here
         for(var i=0;i<$(".emoticons").length;i++){
         	$($(".emoticons")[i]).css({
         		left:$($(".emoticons")[i]).data("x"),
         		top:$($(".emoticons")[i]).data("y")
         	})
         }

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 3000, function(sym, e) {
         // insert code here
         sym.stop();
         playSound("3ab",sym);

      });
      //Edge binding end

   })("image-content");
   //Edge symbol end:'image-content'

   //=========================================================
   
   //Edge symbol: 'text-content'
   (function(symbolName) {   
   
      Symbol.bindElementAction(compId, symbolName, "${next_but}", "click", function(sym, e) {
         // insert code for mouse click here
         sym.play();

      });
      //Edge binding end

      

      

      

      

      

      

      

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 30943, function(sym, e) {
         // insert code here
         var mc;
         var scale;
         var dropCorrect;
         
         
         // Show an element 
         sym.$("adopt-slogan").data("x",498);
         sym.$("adopt-slogan").data("y",282);
         sym.$("adopt-slogan").data("partner","a");
         
         sym.$("water-slogan").data("x",493);
         sym.$("water-slogan").data("y",354);
         sym.$("water-slogan").data("partner","b");
         
         sym.$("help-slogan").data("x",518);
         sym.$("help-slogan").data("y",452);
         sym.$("help-slogan").data("partner","c");
         
         sym.$("win-slogan").data("x",522);
         sym.$("win-slogan").data("y",185);
         sym.$("win-slogan").data("partner","d");
         
         
         // Show an element 
         sym.$("ta").data("partner","a");
         sym.$("ta").droppable({
         	drop:function(){
         		if($(this).data("partner")==$(mc).data("partner")){
         			dropCorrect=true;
         			playSFX("correct1");
         			sym.play();
         		}
         		else{
         			dropCorrect=false;
         		}
         
         	}
         });
         
         sym.$("tb").data("partner","b");
         sym.$("tb").droppable({
         	drop:function(){
         		if($(this).data("partner")==$(mc).data("partner")){
         			dropCorrect=true;
         			playSFX("correct1");
         			sym.play();
         		}
         		else{
         			dropCorrect=false;
         		}
         
         	}
         });
         
         sym.$("tc").data("partner","c");
         sym.$("tc").droppable({
         	drop:function(){
         		if($(this).data("partner")==$(mc).data("partner")){
         			dropCorrect=true;
         			playSFX("correct1");
         			sym.play();
         		}
         		else{
         			dropCorrect=false;
         		}
         
         	}
         });
         
         sym.$("td").data("partner","d");
         sym.$("td").droppable({
         	drop:function(){
         		if($(this).data("partner")==$(mc).data("partner")){
         			dropCorrect=true;
         			playSFX("correct1");
         			sym.play();
         		}
         		else{
         			dropCorrect=false;
         		}
         	}
         });
         
         $(".slogans").draggable({
         	start:function(event, ui){
         	  mc=this;
         	  $(this).css({
         			zIndex:9999
         	  });
         	  scale=utils.getScale();
         	  ui.position.left = 0;
         	  ui.position.top = 0; 
         	  dropCorrect=false;
         	},
         	drag: function(event, ui) {
         	  var changeLeft = ui.position.left - ui.originalPosition.left; // find change in left
         	  var newLeft = ui.originalPosition.left + changeLeft / (( scale)); // adjust new left by our zoomScale
         
         	  var changeTop = ui.position.top - ui.originalPosition.top; // find change in top
         	  var newTop = ui.originalPosition.top + changeTop / scale // adjust new top by our zoomScale
         
         	  ui.position.left = newLeft;
         	  ui.position.top = newTop;
         	},
         	stop:function(event,ui){
         		if(!dropCorrect){
         			  var xpos=$(mc).data("x");
         			  var ypos=$(mc).data("y");
         			  playSFX("wrong1");
         			  $(this).stop().animate({
         					left:xpos,
         					top:ypos
         			  })
         		 }
         	}
         });
         //sym.stop();

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 30962, function(sym, e) {
         // insert code here
         sym.play("p1");

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 31663, function(sym, e) {
         // insert code here
         sym.stop();

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 31968, function(sym, e) {
         // insert code here
         sym.stop();

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 32842, function(sym, e) {
         // insert code here
         sym.stop();

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 33124, function(sym, e) {
         // insert code here
         sym.stop();

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 34000, function(sym, e) {
         // insert code here
         sym.stop();

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 34274, function(sym, e) {
         // insert code here
         sym.stop();

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 35086, function(sym, e) {
         // insert code here
         sym.stop();

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 35411, function(sym, e) {
         // insert code here
         sym.stop();

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 36211, function(sym, e) {
         // insert code here
         $(".triggerClass").show();
         
         for(var i=0;i<$(".slogans").length;i++){
         	$($(".slogans")[i]).css({
         		left:$($(".slogans")[i]).data("x"),
         		top:$($(".slogans")[i]).data("y")
         	})
         }
         // Hide an element 
         sym.getSymbolElement().hide();

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${close-btn}", "click", function(sym, e) {
         // insert code for mouse click here
         stopSound();
         sym.play("end");

      });
      //Edge binding end

      

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 32000, function(sym, e) {
         // insert code here
         for(var i=0;i<$(".slogans").length;i++){
         	$($(".slogans")[i]).css({
         		left:$($(".slogans")[i]).data("x"),
         		top:$($(".slogans")[i]).data("y")
         	})
         }

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 33148, function(sym, e) {
         // insert code here
         for(var i=0;i<$(".slogans").length;i++){
         	$($(".slogans")[i]).css({
         		left:$($(".slogans")[i]).data("x"),
         		top:$($(".slogans")[i]).data("y")
         	})
         }

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 34304, function(sym, e) {
         // insert code here
         for(var i=0;i<$(".slogans").length;i++){
         	$($(".slogans")[i]).css({
         		left:$($(".slogans")[i]).data("x"),
         		top:$($(".slogans")[i]).data("y")
         	})
         }

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 35438, function(sym, e) {
         // insert code here
         for(var i=0;i<$(".slogans").length;i++){
         	$($(".slogans")[i]).css({
         		left:$($(".slogans")[i]).data("x"),
         		top:$($(".slogans")[i]).data("y")
         	})
         }

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 1081, function(sym, e) {
         // insert code here
         sym.stop();
         playSound("3b",sym);

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 23635, function(sym, e) {
         // insert code here
         sym.play("skip1");

      });
      //Edge binding end

   })("text-content");
   //Edge symbol end:'text-content'

   //=========================================================
   
   //Edge symbol: 'colour-content'
   (function(symbolName) {   
   
      

      Symbol.bindElementAction(compId, symbolName, "${next_but2}", "click", function(sym, e) {
         // insert code for mouse click here
         sym.play();

      });
      //Edge binding end

      

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 19800, function(sym, e) {
         // insert code here
         sym.stop();

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 20126, function(sym, e) {
         // insert code here
         sym.stop();

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 21010, function(sym, e) {
         // insert code here
         sym.stop();

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 21300, function(sym, e) {
         // insert code here
         sym.stop();

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 22222, function(sym, e) {
         // insert code here
         sym.stop();

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 22516, function(sym, e) {
         // insert code here
         sym.stop();

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 23432, function(sym, e) {
         // insert code here
         $(".triggerClass").show();
         // Hide an element 
         sym.getSymbolElement().hide();

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${close-btn}", "click", function(sym, e) {
         // insert code for mouse click here
         stopSound();
         sym.play("end");

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 20164, function(sym, e) {
         // insert code here
         for(var i=0;i<$(".icons").length;i++){
         	$($(".icons")[i]).css({
         		left:$($(".icons")[i]).data("x"),
         		top:$($(".icons")[i]).data("y")
         	})
         }

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 21323, function(sym, e) {
         // insert code here
         for(var i=0;i<$(".icons").length;i++){
         	$($(".icons")[i]).css({
         		left:$($(".icons")[i]).data("x"),
         		top:$($(".icons")[i]).data("y")
         	})
         }

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 22550, function(sym, e) {
         // insert code here
         for(var i=0;i<$(".icons").length;i++){
         	$($(".icons")[i]).css({
         		left:$($(".icons")[i]).data("x"),
         		top:$($(".icons")[i]).data("y")
         	})
         }

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 1122, function(sym, e) {
         // insert code here
         sym.stop();
         playSound("3aa",sym);

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 11802, function(sym, e) {
         // insert code here
         var mc;
         var scale;
         var dropCorrect;
         
         // Show an element 
         sym.$("danger-icon").data("x",568);
         sym.$("danger-icon").data("y",396);
         sym.$("danger-icon").data("partner","a");
         
         sym.$("fun-icon").data("x",480);
         sym.$("fun-icon").data("y",240);
         sym.$("fun-icon").data("partner","c");
         
         sym.$("sad-icon").data("x",663);
         sym.$("sad-icon").data("y",167);
         sym.$("sad-icon").data("partner","b");
         
         
         // Show an element 
         sym.$("ta").data("partner","a");
         sym.$("ta").droppable({
         	drop:function(){
         		if($(this).data("partner")==$(mc).data("partner")){
         			dropCorrect=true;
         			playSFX("correct1");
         			sym.play();
         		}
         		else{
         			dropCorrect=false;
         		}
         
         	}
         });
         
         sym.$("tb").data("partner","b");
         sym.$("tb").droppable({
         	drop:function(){
         		if($(this).data("partner")==$(mc).data("partner")){
         			dropCorrect=true;
         			playSFX("correct1");
         			sym.play();
         		}
         		else{
         			dropCorrect=false;
         		}
         
         	}
         });
         
         sym.$("tc").data("partner","c");
         sym.$("tc").droppable({
         	drop:function(){
         		if($(this).data("partner")==$(mc).data("partner")){
         			dropCorrect=true;
         			playSFX("correct1");
         			sym.play();
         		}
         		else{
         			dropCorrect=false;
         		}
         
         	}
         });
         
         $(".icons").draggable({
         	start:function(event, ui){
         	  mc=this;
         	  $(this).css({
         			zIndex:9999
         	  });
         	  scale=utils.getScale();
         	  ui.position.left = 0;
         	  ui.position.top = 0; 
         	  dropCorrect=false;
         	},
         	drag: function(event, ui) {
         	  var changeLeft = ui.position.left - ui.originalPosition.left; // find change in left
         	  var newLeft = ui.originalPosition.left + changeLeft / (( scale)); // adjust new left by our zoomScale
         
         	  var changeTop = ui.position.top - ui.originalPosition.top; // find change in top
         	  var newTop = ui.originalPosition.top + changeTop / scale // adjust new top by our zoomScale
         
         	  ui.position.left = newLeft;
         	  ui.position.top = newTop;
         	},
         	stop:function(event,ui){
         		if(!dropCorrect){
         			  var xpos=$(mc).data("x");
         			  var ypos=$(mc).data("y");
         			  playSFX("wrong1");
         			  $(this).stop().animate({
         					left:xpos,
         					top:ypos
         			  })
         		 }
         	}
         });
         sym.stop();

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 11820, function(sym, e) {
         // insert code here
         sym.play("s1");

      });
      //Edge binding end

   })("colour-content");
   //Edge symbol end:'colour-content'

   //=========================================================
   
   //Edge symbol: 'curious'
   (function(symbolName) {   
   
   })("curious");
   //Edge symbol end:'curious'

   //=========================================================
   
   //Edge symbol: 'sad'
   (function(symbolName) {   
   
   })("sad");
   //Edge symbol end:'sad'

   //=========================================================
   
   //Edge symbol: 'happy'
   (function(symbolName) {   
   
   })("happy");
   //Edge symbol end:'happy'

   //=========================================================
   
   //Edge symbol: 'anxious'
   (function(symbolName) {   
   
   })("anxious");
   //Edge symbol end:'anxious'

   //=========================================================
   
   //Edge symbol: 'help-slogan'
   (function(symbolName) {   
   
   })("help-slogan");
   //Edge symbol end:'help-slogan'

   //=========================================================
   
   //Edge symbol: 'water-slogan'
   (function(symbolName) {   
   
   })("water-slogan");
   //Edge symbol end:'water-slogan'

   //=========================================================
   
   //Edge symbol: 'adopt-slogan'
   (function(symbolName) {   
   
   })("adopt-slogan");
   //Edge symbol end:'adopt-slogan'

   //=========================================================
   
   //Edge symbol: 'win-slogan'
   (function(symbolName) {   
   
   })("win-slogan");
   //Edge symbol end:'win-slogan'

   //=========================================================
   
   //Edge symbol: 'adopt-poster'
   (function(symbolName) {   
   
      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 834, function(sym, e) {
         // insert code here
         sym.stop();

      });
      //Edge binding end

   })("adopt-poster");
   //Edge symbol end:'adopt-poster'

   //=========================================================
   
   //Edge symbol: 'water-poster'
   (function(symbolName) {   
   
      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 834, function(sym, e) {
         // insert code here
         sym.stop();

      });
      //Edge binding end

   })("water-poster");
   //Edge symbol end:'water-poster'

   //=========================================================
   
   //Edge symbol: 'help-poster'
   (function(symbolName) {   
   
      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 834, function(sym, e) {
         // insert code here
         sym.stop();

      });
      //Edge binding end

   })("help-poster");
   //Edge symbol end:'help-poster'

   //=========================================================
   
   //Edge symbol: 'win-poster'
   (function(symbolName) {   
   
      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 834, function(sym, e) {
         // insert code here
         sym.stop();

      });
      //Edge binding end

   })("win-poster");
   //Edge symbol end:'win-poster'

   //=========================================================
   
   //Edge symbol: 'danger-icon'
   (function(symbolName) {   
   
   })("danger-icon");
   //Edge symbol end:'danger-icon'

   //=========================================================
   
   //Edge symbol: 'fun-icon'
   (function(symbolName) {   
   
   })("fun-icon");
   //Edge symbol end:'fun-icon'

   //=========================================================
   
   //Edge symbol: 'sad-icon'
   (function(symbolName) {   
   
   })("sad-icon");
   //Edge symbol end:'sad-icon'

})(window.jQuery || AdobeEdge.$, AdobeEdge, "EDGE-1646797");