$(document).ready(function() {
	"use strict";
	//=require partials/_navbar.js
	//=require components/_checkbox.js
	//=require components/_dropdown.js
	setTimeout(
		(function() {
			var $frame = $("#forcecentered");
			var $wrap = $frame.parent();

			// Call Sly on frame
			$frame.sly({
				horizontal: 1,
				itemNav: "centered",
				smart: 1,
				activateOn: "click",
				mouseDragging: 1,
				touchDragging: 1,
				releaseSwing: 1,
				startAt: 0,
				//scrollBar: $wrap.find('.scrollbar'),
				scrollBy: 1,
				speed: 300,
				elasticBounds: 1,
				easing: "easeOutExpo",
				dragHandle: 1,
				dynamicHandle: 1,
				clickBar: 1,

				// Buttons
				prev: $wrap.find(".prev"),
				next: $wrap.find(".nextbtn"),
				// Cycling
				cycleBy: "items",
				cycleInterval: 2000,
				pauseOnHover: 1
			});
		})(),
		100
	);
});
$('.rating')
  .rating({
    initialRating: 2,
    maxRating: 4
  })
;
