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
         init(sym);
         playBGSound("music1");

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 22000, function(sym, e) {
         // insert code here
         
         sym.getSymbol("movement-btn").play("loop");
         
         sym.getSymbol("layout-btn").play("loop");
         
         sym.getSymbol("colour-btn").play("loop");
         
         sym.stop();

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${layoutBtn}", "click", function(sym, e) {
         // insert code for mouse click here
         $(".buttons").hide();
         
         $(".pictures").hide();
         $("#Stage_picture2").show();
         sym.getSymbol("picture2").play(0);
         
         
         // Hide an element 
         sym.$("mainmenu").hide();
         

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${movementBtn}", "click", function(sym, e) {
         // insert code for mouse click here
         $(".buttons").hide();
         
         $(".pictures").hide();
         $("#Stage_picture3").show();
         sym.getSymbol("picture3").play(0);
         
         // Hide an element 
         sym.$("mainmenu").hide();

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${colourBtn}", "click", function(sym, e) {
         // insert code for mouse click here
         $(".buttons").hide();
         
         $(".pictures").hide();
         $("#Stage_picture1").show();
         sym.getSymbol("picture1").play(0);
         
         // Hide an element 
         sym.$("mainmenu").hide();

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${mainmenu}", "click", function(sym, e) {
         // insert code for mouse click here
         continueToNextScene();

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 4000, function(sym, e) {
         // insert code here
         sym.stop();
         playSound("5");

      });
      //Edge binding end

   })("stage");
   //Edge symbol end:'stage'

   //=========================================================
   
   //Edge symbol: 'movement-btn'
   (function(symbolName) {   
   
      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 500, function(sym, e) {
         // insert code here
         sym.stop();

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 2500, function(sym, e) {
         // insert code here
         sym.play("loop");

      });
      //Edge binding end

   })("movement-btn");
   //Edge symbol end:'movement-btn'

   //=========================================================
   
   //Edge symbol: 'layout-btn'
   (function(symbolName) {   
   
      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 500, function(sym, e) {
         // insert code here
         sym.stop();

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 2500, function(sym, e) {
         // insert code here
         sym.play("loop");

      });
      //Edge binding end

   })("layout-btn");
   //Edge symbol end:'layout-btn'

   //=========================================================
   
   //Edge symbol: 'colour-btn'
   (function(symbolName) {   
   
      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 500, function(sym, e) {
         // insert code here
         sym.stop();

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 2500, function(sym, e) {
         // insert code here
         sym.play("loop");

      });
      //Edge binding end

   })("colour-btn");
   //Edge symbol end:'colour-btn'

   //=========================================================
   
   //Edge symbol: 'picture1'
   (function(symbolName) {   
   
      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 5000, function(sym, e) {
         // insert code here
         sym.stop();

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 0, function(sym, e) {
         // insert code here
         var startFrame = 5000;
         var endFrame = 8500;
         var totalFrames = endFrame-startFrame;
         var currentFrame = 0;
         var sX=0;
         var sW=0;
         var eX=0;
         var cX=0;
         var scale;
         $("#Stage_picture1_slider-handle").draggable({
         	axis:"x",
         	//containment:"#Stage_picture1_sliderContainer",
         	start:function(event, ui){
         		sX = $("#Stage_picture1_sliderContainer").position().left;
         		sW = $("#Stage_picture1_sliderContainer").width();
         		scale=utils.getScale();
         		console.log("scale:"+scale);
         		ui.position.left = 0;
         		ui.position.top = 0; 
         	},
         	drag: function(event, ui) {
         		eX = $("#Stage_picture1_slider-handle").position().left-sX;
         		if(eX>sW)eX=sW;
         		cX = eX/sW;
         		console.log(eX+":"+sW);
         		currentFrame = parseInt((startFrame+totalFrames*cX));
         		sym.stop(currentFrame);
         
         		var changeLeft = ui.position.left - ui.originalPosition.left; // find change in left
         		var newLeft = ui.originalPosition.left + changeLeft / (( scale)); // adjust new left by our zoomScale
         
         		var changeTop = ui.position.top - ui.originalPosition.top; // find change in top
         		var newTop = ui.originalPosition.top + changeTop / scale // adjust new top by our zoomScale
         		if(newLeft<330)newLeft=330;
         		if(newLeft>694)newLeft=694;
         		ui.position.left = newLeft;
         		ui.position.top = newTop;
         	}
         });

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 10320, function(sym, e) {
         // insert code here
         $(".buttons").show();
         sym.stop(0);

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${close-btn}", "click", function(sym, e) {
         // insert code for mouse click here
         
         // Show an element 
         sym.getComposition().getStage().$("mainmenu").show();
         
         sym.play("end");

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 51, function(sym, e) {
         // insert code here
         var html="<table border='1'>"
         				+"<tr style='background-color:#eeeeee' style='border-collapse: collapse; padding:3px'>"
         					+"<th>Colours</th><th>Meaning</th>"
         				+"</tr>"
         				+"<tr>"
         					+"<td>Blue</td><td>Warmth and Welcoming</td>"
         				+"</tr>"
         				+"<tr>"
         					+"<td>Green</td><td>Calmness, Serenity or even Jealousy</td>"
         				+"</tr>"
         				+"<tr>"
         					+"<td>Red</td><td>Urgency or Danger</td>"
         				+"</tr>"
         				+"<tr>"
         					+"<td>Yellow</td><td>Happiness</td>"
         				+"</tr>"
         			+"</table>"
         
         // Show an element 
         sym.$("tableTxt").html(html);

      });
      //Edge binding end

   })("picture1");
   //Edge symbol end:'picture1'

   //=========================================================
   
   //Edge symbol: 'picture2'
   (function(symbolName) {   
   
      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 4500, function(sym, e) {
         // insert code here
         sym.stop();

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 0, function(sym, e) {
         // insert code here
         var startFrame = 4750;
         var endFrame = 7750;
         var totalFrames = endFrame-startFrame;
         var currentFrame = 0;
         var sX=0;
         var sW=0;
         var eX=0;
         var cX=0;
         var scale;
         $("#Stage_picture2_slider-handle").draggable({
         	axis:"x",
         	//containment:"#Stage_picture2_sliderContainer",
         	start:function(event, ui){
         		sX = $("#Stage_picture2_sliderContainer").position().left;
         		sW = $("#Stage_picture2_sliderContainer").width();
         		scale=utils.getScale();
         		ui.position.left = 0;
         		ui.position.top = 0; 
         	},
         	drag: function(event, ui) {
         		eX = $("#Stage_picture2_slider-handle").position().left-sX;
         		if(eX>sW)eX=sW;
         		cX = eX/sW;
         		currentFrame = parseInt(startFrame+totalFrames*cX);
         		sym.stop(currentFrame);
         		var changeLeft = ui.position.left - ui.originalPosition.left; // find change in left
         		var newLeft = ui.originalPosition.left + changeLeft / (( matches[1])); // adjust new left by our zoomScale
         
         		var changeTop = ui.position.top - ui.originalPosition.top; // find change in top
         		var newTop = ui.originalPosition.top + changeTop / matches[1] // adjust new top by our zoomScale
         		if(newLeft<401)newLeft=401;
         		if(newLeft>767)newLeft=767;
         		ui.position.left = newLeft;
         		ui.position.top = newTop;
         
         	}
         });

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${close-btn}", "click", function(sym, e) {
         // insert code for mouse click here
         
         // Show an element 
         sym.getComposition().getStage().$("mainmenu").show();
         
         sym.play("end");

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 8707, function(sym, e) {
         // insert code here
         $(".buttons").show();
         sym.stop(0);

      });
      //Edge binding end

   })("picture2");
   //Edge symbol end:'picture2'

   //=========================================================
   
   //Edge symbol: 'picture3'
   (function(symbolName) {   
   
      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 4122, function(sym, e) {
         // insert code here
         sym.stop();

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 0, function(sym, e) {
         // insert code here
         // insert code here
         var startFrame = 4250;
         var endFrame = 6500;
         var totalFrames = endFrame-startFrame;
         var currentFrame = 0;
         var sX=0;
         var sW=0;
         var eX=0;
         var cX=0;
         var scale;
         $("#Stage_picture3_slider-handle").draggable({
         	axis:"x",
         	//containment:"#Stage_picture3_sliderContainer",
         	start:function(event, ui){
         		sX = $("#Stage_picture3_sliderContainer").position().left;
         		sW = $("#Stage_picture3_sliderContainer").width();
         		scale = utils.getScale();
         		ui.position.left = 0;
         		ui.position.top = 0; 
         	},
         	drag: function(event, ui) {
         		eX = $("#Stage_picture3_slider-handle").position().left-sX;
         		if(eX>sW)eX=sW;
         		cX = eX/sW;
         		currentFrame = parseInt(startFrame+totalFrames*cX);
         		if(currentFrame>endFrame)currentFrame=endFrame;
         		sym.stop(currentFrame);
         		var changeLeft = ui.position.left - ui.originalPosition.left; // find change in left
         		var newLeft = ui.originalPosition.left + changeLeft / (( scale)); // adjust new left by our zoomScale
         
         		var changeTop = ui.position.top - ui.originalPosition.top; // find change in top
         		var newTop = ui.originalPosition.top + changeTop / scale // adjust new top by our zoomScale
         		if(newLeft<551)newLeft=551;
         		if(newLeft>916)newLeft=916;
         		ui.position.left = newLeft;
         		ui.position.top = newTop;
         
         	}
         });

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${close-btn}", "click", function(sym, e) {
         // insert code for mouse click here
         
         // Show an element 
         sym.getComposition().getStage().$("mainmenu").show();
         
         sym.play("end");

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 7897, function(sym, e) {
         // insert code here
         $(".buttons").show();
         sym.stop(0);

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 53, function(sym, e) {
         // insert code here
         var html="<table border='1'>"
         				+"<tr style='background-color:#eeeeee' cellspacing='0'>"
         					+"<th>Positioning</th><th>Interpretation</th>"
         				+"</tr>"
         				+"<tr>"
         					+"<td>Centre focus</td><td>Rose scent for deep love</td>"
         				+"</tr>"
         				+"<tr>"
         					+"<td>Yellow line</td><td>Flower scent for hope</td>"
         				+"</tr>"
         				+"<tr>"
         					+"<td>Full colour</td><td>Everlasting love and hope</td>"
         				+"</tr>"
         			+"</table>"
         
         // Show an element 
         sym.$("tableTxt").html(html);

      });
      //Edge binding end

   })("picture3");
   //Edge symbol end:'picture3'

})(window.jQuery || AdobeEdge.$, AdobeEdge, "EDGE-1646797");