jQuery.fn.center=function(){this.css("position","absolute");this.css("top",Math.max(0,($(window).height()-this.outerHeight())/2+$(window).scrollTop())+"px");this.css("left",Math.max(0,($(window).width()-this.outerWidth())/2+$(window).scrollLeft())+"px");return this};
$.fn.grvLiveModal=function(options){var record=$(this),body=$("body"),ovrlay=$(".overlay");var defaults={auto:true,event:"click",post:true,callback:false,iframe:false,iframeUrl:false};var options=$.extend(defaults,options);return this.each(function(){function init(){if(ovrlay.length>0)ovrlay.show();else{var overlay=$("<div>").addClass("overlay");overlay.css({"top":"0","display":"none","opacity":".5","left":"0","width":"100%","height":"100%","background-color":"#000","text-align":"center"});
body.append(overlay);overlay.fadeIn(1E3)}loadContent()}function loadContent(){
	
	var contentWrap=$("<div>").addClass("overlay-content-wrap");
	$(".overlay").after(contentWrap);
	if(options.post)
	if(options.iframeUrl)
	{ $(".overlay-content-wrap").append("<div/>").css({"height":options.height,"width":options.width}).html($('<iframe width="100%" height="100%"  frameBorder="0"/>').attr("id","timesheet-form").attr("src",options.iframeUrl)).center();autoResizePop();
	}else $.post(options.url,options.data,
function(r){if(options.iframe){var nwdata=$("<div/>").append($("<iframe/>").attr("id","iform"));$(".overlay-content-wrap").append(nwdata).center();$("#iform").contents().find("body").append(r)}else if(r)$(".overlay-content-wrap").append(r).center();if(options.callback)options.callback()});else{$(".overlay-content-wrap").append(options.data).center();if(options.callback)options.callback()}}$(document).delegate('.overlay',"click",function(){$(this).hide();$(".overlay-content-wrap").remove()});$("#Close").delegate('.overlay',"click",function(e){e.preventDefault();$(".overlay").hide();$(".overlay-content-wrap").remove()});init()})};

