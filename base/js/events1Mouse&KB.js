// $ is the same as using jquery(function(){});
// this will execute when the page is ready
$(function() {
	
	// ---- changes the CSS property of .gallary to display: none
	//$(".gallery").css("display", "none"); // same as .hide()

	// ************** CLICK HANDLERS ************** //
	/*

	// ---- click handler executes user-defined function
	$("#btn-click").click(function() {
		// ---- useful to see all data attached to the even in dev console
		console.log(event);
		alert("Button clickes");
	})

	// ---- add click listener to red-box to change opacity to 50%
	$(".red-box").click(function () {
		$(this).fadeTo(500, .5);
	})
	
	// ---- automatically triggers a click event
	$(".red-box").click();
	*/

	// ************** HOVERING HANDLERS ************** //
	/*
	// ---- hover executes when enter and leave element
	$("#btn-hover").hover(function() {
		alert("button was hovered");
	});

	// ---- select green box, hover changes text to "I WAS HOVERED"
	$(".green-box").hover(function() {
		$(this).text("I WAS HOVERED");
	})
	*/

	// ************** MouseEnter/MouseLeave HANDLERS ************** //
	/*
	// ---- once mouse enters it fades opacity, once it leaves it returns opacity
	// ---- stop() is used so the function stops executing when enter or leave multiple times
	var blueBox = $(".blue-box");
	blueBox.mouseenter(function() {
		$(this).stop().fadeTo(500, .7);
	});
	blueBox.mouseleave(function() {
		$(this).stop().fadeTo(500, 1);
	});

	// ---- another way to do abovehover(handlerIn, handlerOut)
	var greenBox = $(".green-box");
	greenBox.hover(function() {
		// hover in
		$(this).stop().fadeTo(500, .7);
	}, function()  {
		// hover out
		$(this).stop().fadeTo(500, 1);
	});
	*/

	// ************** ADDING SAME HANDLERS FOR MULTIPLE EVENTS ************** //
	/*
	// ---- .on("click", function () { ... })
	// ---- logs the message once a click or any key was pressed
	$("html").on("click keydown", function () {
		console.log("mouse was clicked or key pressed");
	})

	// ---- switch the image once clicked
	var galleryImage = $(".gallery").find("img").first();

	var images = [
		"images/laptop-mobile_small.jpg",
		"images/laptop-on-table_small.jpg",
		"images/people-office-group-team_small.jpg"
	];

	var i = 0;

	galleryImage.on("click", function() {
		i = (i+1) % images.length;  // 0,1,2,0,1,2...
		$(this).fadeOut(function() {
			$(this).attr("src", images[i]).fadeIn();	
		});
	});
	*/

	// ************** MODULARIZING EVENT HANDLERS ************** //
	/*
	// ---- modularizing the click and keydown events thru logEvent
	$("html").on("click keydown", logEvent);

	function logEvent() {
		console.log("mouse was clicked or key pressed");
	}

	var galleryImage = $(".gallery").find("img").first();

	var images = [
		"images/laptop-mobile_small.jpg",
		"images/laptop-on-table_small.jpg",
		"images/people-office-group-team_small.jpg"
	];

	galleryImage.on("click", clickImage);

	var i = 0;
	function clickImage() {
		i = (i+1) % images.length;  // 0,1,2,0,1,2...
		$(galleryImage).fadeOut(function() {
			$(galleryImage).attr("src", images[i]).fadeIn();	
		});
	}
	*/

	// ************** DELEGATED EVENTS ************** //
	/*
	// delegated events, will happen to all child p tags regardless when added 
	$("#content").on("click", "p", function() {
		$(this).slideUp();
	});
	$("#content").append("<p>This is a dynamically added paragraph.</p>");


	// ---- event handler mouse enter on body delegate to li and change color of it
	// ---- more efficient to delegate events to a parent element when dealing with a lot of 
	// ---- child element selectors
	$("body").on("mouseenter", "li", function() {
		$(this).css("color", "red");
	});
	$("body").on("mouseleave", "li", function() {
		$(this).css("color", "black");
	});
	*/

	// ************** PASSING ADDITIONAL DATA TO EVENTS ************** //
	/*

	$("#btn-click").click({
		user: "Peter",
		domain: "peter.com"
	}, function(event) {
		greetUser(event.data);
	});

	function greetUser(userData) {
		username = userData.user || "Anonymous";
		domain = userData.domain || ".com";

		alert("Welcome back " + username + " from " + domain);
	}
	*/

	// ************** CREATE IMAGE GALLERY W/ LIGHTBOX PREVIEW ************** //
	/*
	var galleryItems = $(".gallery").find("img");
	galleryItems.css("width", " 33%").css("opacity", ".7");

	galleryItems.mouseenter(function() {
		$(this).stop().fadeTo(500, 1);
	});
	galleryItems.mouseleave(function() {
		$(this).stop().fadeTo(500, .7);
	});

	// ---- add click event to galleryItems
	galleryItems.click(function() {
		var source = $(this).attr("src");
		var image = $("<img>").attr("src", source).css("width", "100%");
		$(".lightbox").empty().append(image).fadeIn(2000);
	});

	// ---- add click event to lightbox to go back
	$(".lightbox").click(function() {
		$(this).stop().fadeOut();
	});
	*/

	// ************** HANDLING KEYDOWN & KEYUP EVENTS ************** //
	/*
	// ---- keydown/keyup event (usually keydown) keypress exists but unpredictable
	// ---- good for keyboard shortcuts for your web system
	$("html").keydown(function(event) {
		console.log(event.which); // which tells us what key was pressed
		// ---- if the right arrow key is pressed move blue box to the right 10 px
		if (event.which == 39) {
			$(".blue-box").stop().animate({
    			"margin-left": "+=10px"
			});
		}
	})
	*/

});