// Animated UL lists- by JavaScript Kit (www.javascriptkit.com)
// Date created: Nov 12th, 2012
// Last updated: Nov 14th, 2012 for minor bug fixes
// Visit JavaScript Kit at http://www.javascriptkit.com/ for full source code

(function($){

	var defaults = {
		duration: 0.5,
		pause: 0.5,
		delaybeforestart: 'onvisible',
		postclass: 'animated-after'
	}

	function css3propmap(){ // param: {css3prop1: value1, css3prop2: value2, etc}
		var vendorprefixes = ['-ms-', '-o-', '-moz-', '-webkit-'],
			propmap = {}
			for (var i=0; i<arguments.length; i++){
				propmap[arguments[i][0]] = arguments[i][1]
				for (var t=0; t<vendorprefixes.length; t++){
					propmap[vendorprefixes[t] + arguments[i][0]] = arguments[i][1]
				}
			}
		return propmap
	}

	
	$.fn.animatelist = function(options){
		if (typeof $.animatedlists == "undefined") // global var to store ref to ULs that will be animated
			$.animatedlists=[]

		function inrange(range, field){ // check if "playing field" is inside range
			var rangespan = range[1]-range[0], fieldspan = field[1]-field[0]
			if ( (range[0]-field[0]) > 0 && (range[0]-field[0]) <= fieldspan ) // if top of range (viewport) is on field
				return true
			else{
				if ( (range[0]-field[0]) < 0 && (range[0]+rangespan) >= field[0] ) // if part of range overlaps field
					return true
			}
			return false
		}

		if (Array.filter && !$(window).data('scrollbind')){ // on window scroll
			var $window = $(window)
			$window.bind('scroll.scrollbind', function(){
				var scrolltop = $window.scrollTop(), animatedlists = $.animatedlists
				animatedlists = animatedlists.filter(function(el, index){ // find ULs that are visible on the screen and should be shown
					return (!el.shownflag && inrange([el.offsettop, el.offsettop+el.ulheight], [scrolltop, scrolltop+$window.height()]))
				})
				for (var i=0; i < animatedlists.length; i++){
					animatedlists[i].$ul.addClass(animatedlists[i].postclass)
					animatedlists[i].shownflag = true
				}			
			})
			$window.bind('load', function(){ // refresh UL top offsets when the page fully loads
				var animatedlists = $.animatedlists
				for (var i=0; i < animatedlists.length; i++){
					animatedlists[i].offsettop = animatedlists[i].$ul.offset().top
					animatedlists[i].ulheight = animatedlists[i].$ul.outerHeight()
				}
				$window.trigger('scroll.scrollbind')
			})
			$(window).data('scrollbind', true)
		}

		return this.each(function(){
			var $ul = $(this).css({overflow:'hidden'})
			var o = $.extend({}, defaults, options)
			var $lis = $ul.children('li').css({position:'relative'})
			$lis.each(function(i){
				$(this).css(css3propmap(['transition', 'all ' + o.duration + 's ease-in-out ' + i * (o.pause) + 's']))
			})
			if (typeof o.delaybeforestart == "number"){
				setTimeout(function(){$ul.addClass(o.postclass)}, o.delaybeforestart * 1000)
			}
			else if (o.delaybeforestart == "onvisible" && Array.filter){
				var offsettop = $ul.offset().top
				$.animatedlists.push({$ul:$ul, offsettop:offsettop, ulheight:$ul.outerHeight(), shownflag:false, postclass:o.postclass})
			}
			else{
				$ul.addClass(o.postclass)
			}
		}) // end return
	}

})(jQuery);