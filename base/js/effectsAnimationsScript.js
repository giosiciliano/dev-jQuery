// $ is the same as using jquery(function(){});
// this will execute when the page is ready
$(function() {
  // jQuery goes here...

  // ************** FADING FUNCTIONS ************** //
  /*
  // ---- . represents class; # represents id fpr css selectors; also can represent html tags p, a etc
  $(".red-box").fadeOut(2000); 
  // fadeout passed with duration, if blank it uses default 400ms, predefined "slow" and "fast" values

  // ---- fadeout green-box at 2 seconds 2000ms
  $(".green-box").fadeOut(2000); 

  // ---- fadein red-box at 2 seconds
  $(".red-box").fadeIn(2000); 
  $(".green-box").fadeIn(2000);

  // ---- fadeto to an opacity
  $(".red-box").fadeTo(1000, .5);

  // ---- fadeto all boxes 20, 40, 80%
  $(".red-box").fadeTo(3000, .2);
  $(".green-box").fadeTo(2000, .5);
  $(".blue-box").fadeTo(1000, .8);

  // ---- fadeToggle will fade objects in and out again, 
  // ---- but will keep latest opacity; can be used to fade a backgrounds etc
  $(".green-box").fadeToggle();
  $(".green-box").fadeToggle();

  // ---- fadeTo 0% opacity so other elements dont readjust, 
  // ---- changes css to opacity: 0 instead of display: none
  $(".green-box").fadeTo(1000, 0); // only changes opacity will not fade back in if its out
  */

  // **************  SHOWING/HIDING FUNCTIONS ************** //
  /*
  // ---- hide changes style display: none
  $(".blue-box").hide();
  $(".blue-box").show();

  // ---- toggle hidden and shown (good for hovering - showing larger description)
  $(".blue-box").toggle();

  // ---- animate the hide/show
  $(".blue-box").hide(1000);
  $(".blue-box").show(1000);
  */

  // **************  SLIDING UP/DOWN FUNCTIONS ************** //
  /*
  // ---- animate sliding up/down
  $(".blue-box").slideUp(2000);
  $(".blue-box").slideDown(2000);

  // ---- good for expanding text on an HTML tag
  $("p").hide();
  $("p").slideDown(1000);

  // ---- toggles the slide element Up goes Down etc
  $(".blue-box").slideToggle(2000);
  */

  // **************  CUSTOM ANIMATIONS FUNCTIONS ************** //
  /*
  // ---- adds 200px to margin-left, linear adds px evenly within duration
  $(".blue-box").animate({
    "margin-left": "+=200px"
  },1000, "linear");

  $(".blue-box").animate({
  	"margin-left": "-=200px"
  },1000);

  */

  // **************  ADVANCED ANIMATIONS FUNCTIONS ************** //
  /*
  // ---- can use with string or javascript variables marginLeft, marginTop etc
  $(".blue-box").animate({
    "margin-left": "+=200px",
    "opacity": "0",
    "height": "50px",
    "width": "50px",
    "margin-top": "25px"
  },1000);

  // ---- cant change color within animate
  $("p").animate({
  	"font-size": "20px"
  },1000);
  */

  // **************  DELAYING/CHAINING FUNCTIONS ************** //
  /*
  // ---- delay is the function chainged to fadeTo
  $(".red-box").fadeTo(1000, .2);
  $(".green-box").delay(1000).fadeTo(1000, .5);
  $(".blue-box").delay(2000).fadeTo(1000, .8).fadeOut().delay(500).fadeIn();
  */
  
  // **************  TIMING WITH CALLBACK FUNCTIONS ************** //
  /*
  // ---- red will fade first then call nested function to fade green and so on
  // ---- helps perform an action afer an animation
  $(".red-box").fadeTo(1000, 0, function() {
  	$(".green-box").fadeTo(1000, 0, function() {
  		$(".blue-box").fadeTo(1000, 0)
  	});
  });
  
  $(".red-box").delay(3000).fadeTo(1000, 1, function() {
  	$(".green-box").fadeTo(1000, 1, function() {
  		$(".blue-box").fadeTo(1000, 1)
  	});
  });
  */

  // **************  SIGNUP LIGHTBOX ************** //
  /*
  // ---- can be used as an alert or message center when user enters site
  $(".lightbox").delay(500).fadeIn(1000);
  */

});