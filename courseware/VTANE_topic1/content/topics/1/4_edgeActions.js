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
      
      
      

      

      

      

      

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 22120, function(sym, e) {
         // insert code here
         for(var i=0;i<6;i++){
         	sym.getSymbol("game"+(i+1).toString()).stop("start");
         }
         $(".games").fadeIn();
         answerAr=[];
         currentAnswer="";
         answerNavCtr=1;
         counter=1;
         timer=180;
         startGame(sym.getSymbol("game"+counter));
         
         
         
         function getTimeInCDFormat(sec){
         	var min = parseInt(sec/60);
         	var sec = sec - min*60;
         
         	if(min<10)min="0"+min;
         	if(sec<10)sec="0"+sec;
         	return min+":"+sec;
         }
         
         $("#Stage_timer_Text").text(getTimeInCDFormat(timer));
         to = setTimeout(startTimer,1000);
         
         function startTimer(){
         	timer--;
         	if(timer<=0){
         		sym.play("timeup");
         	}
         	else{
         		to = setTimeout(startTimer,1000);
         	}
         	$("#Stage_timer_Text").text(getTimeInCDFormat(timer));
         }
         sym.stop();

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 0, function(sym, e) {
         // insert code here
         //sym.play("test");
         init(sym);
         playBGSound("music1");

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${nextgame}", "click", function(sym, e) {
         // insert code for mouse click here
         $("#Stage_nextgame").hide();
         $("#Stage_game"+counter).hide();
         sym.getSymbol("game"+(counter).toString()).stop("start");
         pushAnswers(currentAnswer);
         if(counter>=7){
         	//$("#Stage_game"+(counter+1)).fadeOut();
         	clearTimeout(to);
         	sym.play("endgame");
         }
         else{
         
         
         	counter++;
         	startGame(sym.getSymbol("game"+counter));
         }
         
         
         
         

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 90, function(sym, e) {
         // insert code here
         for(var i=0;i<6;i++){
         	sym.getSymbol("game"+(i+1).toString()).stop("start");
         }

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 28317, function(sym, e) {
         // insert code here
         $("#Stage_answer").css({
         	fontFamily:"badaboom"
         });
         if(answerAr[0])$("#Stage_answer").text(answerAr[0]);
         else $("#Stage_answer").text("");
         sym.stop();

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${next_but}", "click", function(sym, e) {
         // insert code for mouse click here
         answerNavCtr++;
         if(answerNavCtr>7)sym.play("end");
         else sym.stop("ans"+answerNavCtr);

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${prev_btn}", "click", function(sym, e) {
         // insert code for mouse click here
         answerNavCtr--;
         sym.stop("ans"+answerNavCtr)

      });
      //Edge binding end

      

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 30169, function(sym, e) {
         // insert code here
         if(answerAr[4])$("#Stage_answer").text(answerAr[4]);
         else $("#Stage_answer").text("");

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 32750, function(sym, e) {
         // insert code here
         if(answerAr[3])$("#Stage_answer").text(answerAr[3]);
         else $("#Stage_answer").text("");

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 35750, function(sym, e) {
         // insert code here
         if(answerAr[1])$("#Stage_answer").text(answerAr[1]);
         else $("#Stage_answer").text("");

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 39000, function(sym, e) {
         // insert code here
         if(answerAr[5])$("#Stage_answer").text(answerAr[5]);
         else $("#Stage_answer").text("");

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 42064, function(sym, e) {
         // insert code here
         if(answerAr[6])$("#Stage_answer").text(answerAr[6]);
         else $("#Stage_answer").text("");

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 44500, function(sym, e) {
         // insert code here
         if(answerAr[2])$("#Stage_answer").text(answerAr[2]);
         else $("#Stage_answer").text("");

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 25968, function(sym, e) {
         // insert code here
         clearTimeout(to);
         for(var i=0;i<6;i++){
         	$("#Stage_game"+(i+1).toString()).hide();
         }

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 24750, function(sym, e) {
         // insert code here
         for(var i=0;i<6;i++){
         	$("#Stage_game"+(i+1).toString()).hide();
         }

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 44870, function(sym, e) {
         // insert code here
         for(var i=0;i<6;i++){
         	sym.getSymbol("game"+(i+1).toString()).stop("start");
         }

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${replay-btn}", "click", function(sym, e) {
         // insert code for mouse click here
         sym.play("restart");

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${instruction-btn2}", "click", function(sym, e) {
         // insert code for mouse click here
         if($("#Stage_instruction").css("display")=="none"){
         	sym.getSymbol("instruction").play(0);
         	$("#Stage_instruction").fadeIn();
         }
         else{
         	sym.getSymbol("instruction").play("close");
         	$("#Stage_instruction").fadeOut();
         }

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${mainmenu}", "click", function(sym, e) {
         // insert code for mouse click here
         continueToNextScene();

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 4116, function(sym, e) {
         // insert code here
         sym.stop();
         playSound("4");

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
   
   //Edge symbol: 'timer'
   (function(symbolName) {   
   
   })("timer");
   //Edge symbol end:'timer'

   //=========================================================
   
   //Edge symbol: 'instruction'
   (function(symbolName) {   
   
      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 7250, function(sym, e) {
         // insert code here
         $("#Stage_instruction").hide();

      });
      //Edge binding end

   })("instruction");
   //Edge symbol end:'instruction'

   //=========================================================
   
   //Edge symbol: 'game1'
   (function(symbolName) {   
   
      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 361, function(sym, e) {
         // insert code here
         
         sym.stop();

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 1500, function(sym, e) {
         sym.stop();

      });
      //Edge binding end

   })("game1");
   //Edge symbol end:'game1'

   //=========================================================
   
   //Edge symbol: 'game2'
   (function(symbolName) {   
   
      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 361, function(sym, e) {
         // insert code here
         sym.stop();

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 1500, function(sym, e) {
         // insert code here
         sym.stop();

      });
      //Edge binding end

   })("game2");
   //Edge symbol end:'game2'

   //=========================================================
   
   //Edge symbol: 'game3'
   (function(symbolName) {   
   
      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 361, function(sym, e) {
         // insert code here
         sym.stop();

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 1500, function(sym, e) {
         // insert code here
         sym.stop();

      });
      //Edge binding end

   })("game3");
   //Edge symbol end:'game3'

   //=========================================================
   
   //Edge symbol: 'game4'
   (function(symbolName) {   
   
      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 361, function(sym, e) {
         // insert code here
         sym.stop();

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 1500, function(sym, e) {
         // insert code here
         sym.stop();

      });
      //Edge binding end

   })("game4");
   //Edge symbol end:'game4'

   //=========================================================
   
   //Edge symbol: 'game5'
   (function(symbolName) {   
   
      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 361, function(sym, e) {
         // insert code here
         sym.stop();

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 1500, function(sym, e) {
         // insert code here
         sym.stop();

      });
      //Edge binding end

   })("game5");
   //Edge symbol end:'game5'

   //=========================================================
   
   //Edge symbol: 'game6'
   (function(symbolName) {   
   
      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 361, function(sym, e) {
         // insert code here
         sym.stop();

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 1500, function(sym, e) {
         // insert code here
         sym.stop();

      });
      //Edge binding end

   })("game6");
   //Edge symbol end:'game6'

   //=========================================================
   
   //Edge symbol: 'game7'
   (function(symbolName) {   
   
      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 361, function(sym, e) {
         // insert code here
         sym.stop();

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 1500, function(sym, e) {
         // insert code here
         sym.stop();

      });
      //Edge binding end

   })("game7");
   //Edge symbol end:'game7'

   //=========================================================
   
   //Edge symbol: 'next-btn'
   (function(symbolName) {   
   
   })("next-btn");
   //Edge symbol end:'next-btn'

   //=========================================================
   
   //Edge symbol: 'g1'
   (function(symbolName) {   
   
      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 60, function(sym, e) {
         // insert code here
         var word = "inform";
         
         for(var i=0;i<word.length;i++){
         	$("#Stage_game1_g1_l"+i).data("letter",word.charAt(i));
         	if($($(".letters1")[i]).data("left")){
         		$($(".letters1")[i]).css({
         			left:$($(".letters1")[i]).data("left"),
         			top:$($(".letters1")[i]).data("top")
         		});
         	}
         }
         var letterAr=[];
         
         $(".letters1").unbind().click(function(){
         	if($(this).position().top!=0){
         		if(!$(this).data("left")){
         			$(this).data("left",$(this).position().left);
         			$(this).data("top",$(this).position().top);
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
         				$(letterAr[i]).css({
         					top:0,
         					left:i*$(letterAr[i]).width()-13
         				});
         			}
         		}
         	}
         	else{
         		delete letterAr[letterAr.indexOf(this)];
         		$(this).css({
         			left:$(this).data("left")-20,
         			top:$(this).data("top")-20
         		});
         	}
         	var ctr=0;
         	currentAnswer="";
         	for(var i=0;i<letterAr.length;i++){
         		if(letterAr[i]!=undefined){
         			currentAnswer+=$(letterAr[i]).data("letter");
         			ctr++;
         		}
         	}
         
         	if(ctr>=word.length){
         		//show next button
         		$("#Stage_nextgame").fadeIn();
         	}
         	else{
         		$("#Stage_nextgame").fadeOut();
         	}
         });
         

      });
      //Edge binding end

   })("g1");
   //Edge symbol end:'g1'

   //=========================================================
   
   //Edge symbol: 'g2'
   (function(symbolName) {   
   
      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 60, function(sym, e) {
         // insert code here
         var word = "influence";
         
         for(var i=0;i<word.length;i++){
         	$("#Stage_game2_g2_l"+i).data("letter",word.charAt(i));
         	if($($(".letters2")[i]).data("left")){
         		$($(".letters2")[i]).css({
         			left:$($(".letters2")[i]).data("left"),
         			top:$($(".letters2")[i]).data("top")
         		});
         	}
         }
         var letterAr=[];
         
         $(".letters2").unbind().click(function(){
         	if($(this).position().top!=0){
         		if(!$(this).data("left")){
         			$(this).data("left",$(this).position().left);
         			$(this).data("top",$(this).position().top);
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
         				$(letterAr[i]).css({
         					top:0,
         					left:i*$(letterAr[i]).width()-13
         				});
         			}
         		}
         	}
         	else{
         		delete letterAr[letterAr.indexOf(this)];
         		$(this).css({
         			left:$(this).data("left")-20,
         			top:$(this).data("top")-20
         		});
         	}
         	var ctr=0;
         	currentAnswer="";
         	for(var i=0;i<letterAr.length;i++){
         		if(letterAr[i]!=undefined){
         			currentAnswer+=$(letterAr[i]).data("letter");
         			ctr++;
         		}
         	}
         
         	if(ctr>=word.length){
         		//show next button
         		$("#Stage_nextgame").fadeIn();
         	}
         	else{
         		$("#Stage_nextgame").fadeOut();
         	}
         });

      });
      //Edge binding end

   })("g2");
   //Edge symbol end:'g2'

   //=========================================================
   
   //Edge symbol: 'g3'
   (function(symbolName) {   
   
      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 53, function(sym, e) {
         // insert code here
         var word = "inspire";
         
         for(var i=0;i<word.length;i++){
         	$("#Stage_game3_g3_l"+i).data("letter",word.charAt(i));
         	if($($(".letters3")[i]).data("left")){
         		$($(".letters3")[i]).css({
         			left:$($(".letters3")[i]).data("left"),
         			top:$($(".letters3")[i]).data("top")
         		});
         	}
         }
         var letterAr=[];
         
         $(".letters3").unbind().click(function(){
         	if($(this).position().top!=0){
         		if(!$(this).data("left")){
         			$(this).data("left",$(this).position().left);
         			$(this).data("top",$(this).position().top);
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
         				$(letterAr[i]).css({
         					top:0,
         					left:i*$(letterAr[i]).width()-13
         				});
         			}
         		}
         	}
         	else{
         		delete letterAr[letterAr.indexOf(this)];
         		$(this).css({
         			left:$(this).data("left")-20,
         			top:$(this).data("top")-20
         		});
         	}
         
         	var ctr=0;
         	currentAnswer="";
         	for(var i=0;i<letterAr.length;i++){
         		if(letterAr[i]!=undefined){
         			currentAnswer+=$(letterAr[i]).data("letter");
         			ctr++;
         		}
         	}
         
         	if(ctr>=word.length){
         		//show next button
         		$("#Stage_nextgame").fadeIn();
         	}
         	else{
         		$("#Stage_nextgame").fadeOut();
         	}
         });

      });
      //Edge binding end

   })("g3");
   //Edge symbol end:'g3'

   //=========================================================
   
   //Edge symbol: 'g4'
   (function(symbolName) {   
   
      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 60, function(sym, e) {
         // insert code here
         var word = "entertain";
         
         for(var i=0;i<word.length;i++){
         	$("#Stage_game4_g4_l"+i).data("letter",word.charAt(i));
         	if($($(".letters4")[i]).data("left")){
         		$($(".letters4")[i]).css({
         			left:$($(".letters4")[i]).data("left"),
         			top:$($(".letters4")[i]).data("top")
         		});
         	}
         }
         var letterAr=[];
         
         $(".letters4").unbind().click(function(){
         	if($(this).position().top!=0){
         		if(!$(this).data("left")){
         			$(this).data("left",$(this).position().left);
         			$(this).data("top",$(this).position().top);
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
         				$(letterAr[i]).css({
         					top:0,
         					left:i*$(letterAr[i]).width()-13
         				});
         			}
         		}
         	}
         	else{
         		delete letterAr[letterAr.indexOf(this)];
         		$(this).css({
         			left:$(this).data("left")-20,
         			top:$(this).data("top")-20
         		});
         	}
         
         	var ctr=0;
         	currentAnswer="";
         	for(var i=0;i<letterAr.length;i++){
         		if(letterAr[i]!=undefined){
         			currentAnswer+=$(letterAr[i]).data("letter");
         			ctr++;
         		}
         	}
         
         	if(ctr>=word.length){
         		//show next button
         		$("#Stage_nextgame").fadeIn();
         	}
         	else{
         		$("#Stage_nextgame").fadeOut();
         	}
         });

      });
      //Edge binding end

   })("g4");
   //Edge symbol end:'g4'

   //=========================================================
   
   //Edge symbol: 'g5'
   (function(symbolName) {   
   
      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 60, function(sym, e) {
         // insert code here
         var word = "educate";
         
         for(var i=0;i<word.length;i++){
         	$("#Stage_game5_g5_l"+i).data("letter",word.charAt(i));
         	if($($(".letters5")[i]).data("left")){
         		$($(".letters5")[i]).css({
         			left:$($(".letters5")[i]).data("left"),
         			top:$($(".letters5")[i]).data("top")
         		});
         	}
         }
         var letterAr=[];
         
         $(".letters5").unbind().click(function(){
         	if($(this).position().top!=0){
         		if(!$(this).data("left")){
         			$(this).data("left",$(this).position().left);
         			$(this).data("top",$(this).position().top);
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
         				$(letterAr[i]).css({
         					top:0,
         					left:i*$(letterAr[i]).width()-13
         				});
         			}
         		}
         	}
         	else{
         		delete letterAr[letterAr.indexOf(this)];
         		$(this).css({
         			left:$(this).data("left")-20,
         			top:$(this).data("top")-20
         		});
         	}
         
         	var ctr=0;
         	currentAnswer="";
         	for(var i=0;i<letterAr.length;i++){
         		if(letterAr[i]!=undefined){
         			currentAnswer+=$(letterAr[i]).data("letter");
         			ctr++;
         		}
         	}
         
         	if(ctr>=word.length){
         		//show next button
         		$("#Stage_nextgame").fadeIn();
         	}
         	else{
         		$("#Stage_nextgame").fadeOut();
         	}
         });

      });
      //Edge binding end

   })("g5");
   //Edge symbol end:'g5'

   //=========================================================
   
   //Edge symbol: 'g6'
   (function(symbolName) {   
   
      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 53, function(sym, e) {
         // insert code here
         var word = "insinuate";
         
         for(var i=0;i<word.length;i++){
         	$("#Stage_game6_g6_l"+i).data("letter",word.charAt(i));
         	if($($(".letters6")[i]).data("left")){
         		$($(".letters6")[i]).css({
         			left:$($(".letters6")[i]).data("left"),
         			top:$($(".letters6")[i]).data("top")
         		});
         	}
         }
         var letterAr=[];
         
         $(".letters6").unbind().click(function(){
         	if($(this).position().top!=0){
         		if(!$(this).data("left")){
         			$(this).data("left",$(this).position().left);
         			$(this).data("top",$(this).position().top);
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
         				$(letterAr[i]).css({
         					top:0,
         					left:i*$(letterAr[i]).width()-13
         				});
         			}
         		}
         	}
         	else{
         		delete letterAr[letterAr.indexOf(this)];
         		$(this).css({
         			left:$(this).data("left")-20,
         			top:$(this).data("top")-20
         		});
         	}
         
         	var ctr=0;
         	currentAnswer="";
         	for(var i=0;i<letterAr.length;i++){
         		if(letterAr[i]!=undefined){
         			currentAnswer+=$(letterAr[i]).data("letter");
         			ctr++;
         		}
         	}
         
         	if(ctr>=word.length){
         		//show next button
         		$("#Stage_nextgame").fadeIn();
         	}
         	else{
         		$("#Stage_nextgame").fadeOut();
         	}
         });

      });
      //Edge binding end

   })("g6");
   //Edge symbol end:'g6'

   //=========================================================
   
   //Edge symbol: 'g7'
   (function(symbolName) {   
   
      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 0, function(sym, e) {
         // insert code here
         var word = "imply";
         
         for(var i=0;i<word.length;i++){
         	$("#Stage_game7_g7_l"+i).data("letter",word.charAt(i));
         	if($($(".letters7")[i]).data("left")){
         		$($(".letters7")[i]).css({
         			left:$($(".letters7")[i]).data("left"),
         			top:$($(".letters7")[i]).data("top")
         		});
         	}
         }
         var letterAr=[];
         
         $(".letters7").unbind().click(function(){
         	if($(this).position().top!=0){
         		if(!$(this).data("left")){
         			$(this).data("left",$(this).position().left);
         			$(this).data("top",$(this).position().top);
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
         				$(letterAr[i]).css({
         					top:0,
         					left:i*$(letterAr[i]).width()-13
         				});
         			}
         		}
         	}
         	else{
         		delete letterAr[letterAr.indexOf(this)];
         		$(this).css({
         			left:$(this).data("left")-20,
         			top:$(this).data("top")-20
         		});
         	}
         
         	var ctr=0;
         	currentAnswer="";
         	for(var i=0;i<letterAr.length;i++){
         		if(letterAr[i]!=undefined){
         			currentAnswer+=$(letterAr[i]).data("letter");
         			ctr++;
         		}
         	}
         
         	if(ctr>=word.length){
         		//show next button
         		$("#Stage_nextgame").fadeIn();
         	}
         	else{
         		$("#Stage_nextgame").fadeOut();
         	}
         });

      });
      //Edge binding end

   })("g7");
   //Edge symbol end:'g7'

})(window.jQuery || AdobeEdge.$, AdobeEdge, "EDGE-1646797");