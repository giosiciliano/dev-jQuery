// $ is the same as using jquery(function(){});
// this will execute when the page is ready
$(function() {
	
	// ************** CHANGING CSS PROPERTIES ************** //

	// ---- changes the CSS property of .gallary to display: none
	$(".gallery").css("display", "none"); // same as .hide()
	/*
	// ---- sets the red-box element to a js var
	// ---- log the red-box width
	var redBox = $(".red-box");
	console.log(redBox.css("width")); // shows 80px
	console.log(redBox.width());	  // shows 80

	// ---- change background-color of red-box
	redBox.css("background-color", "#AA7700");
	$("p").css("font-size", "18px")
	redBox.css("width", "+=20px");

	// ---- array of properties
	var properties = $("p").css(["font-size", "line-height", "color"]);
	console.log(properties);
	console.log(properties["font-size"]);

	// ---- won't allow a user to select the text
	redBox.css("user-select", "none");

	// ---- variant way to do the same as above
	redBox.css("user-select", function() {
		return "none";
	});
	*/

	// ************** ADDING/REMOVING CSS CLASSES ************** //

	// ---- adding a CSS class the a html elements
	//$("a").addClass("fancy-link");

	//$("p:first").addClass("large emphasize");

	// ---- loops thru all lists and addClass to them all
	//$("li li").addClass(function(index) {
	//	$(this).addClass("item-" + index);
	//});

	// ---- if any div has currentClass = dummy then add red-box
	//$("div").addClass(function(index, currentClass) {
	//	if (currentClass === "dummy") {
	//		return "red-box";
	//	}
	//});

	// ---- removes all red-boxs and adds the blue instead
	//$(".red-box").removeClass("red-box").addClass("blue-box");

	// ---- select dummy element, remove, add green-box
	//$(".dummy").removeClass("dummy").addClass("green-box");

	// ************** CHANGING THE DATA OF AN ELEMENT ************** //
	/*
	// ---- setting the gallery item to a js variable
	var gallery = $(".gallery");
	var images = [
		"images/laptop-mobile_small.jpg",
		"images/laptop-on-table_small.jpg",
		"images/people-office-group-team_small.jpg"
	];

	// ---- setting the images to the gallery.data availableImages
	gallery.data("availableImages", images);
	console.log(gallery.data("availableImages"));

	// ---- setting the name of gallery.data to The Awesome Gallery
	gallery.data("name", "The Awesome Gallery");

	// ---- logs all data in gallery.data
	console.log(gallery.data());

	// ---- remove data from gallery, and print to make sure its gone
	gallery.removeData("name");
	console.log(gallery.data("name"));

	// ---- grab first p tag
	var firstPar = $("p:first");
	// ---- log mydata value in p tag (that is stored in the html)
	console.log(firstPar.data("mydata"));
	*/

	// ************** RETRIEVING/CHANGING CONTENT OF AN ELEMENT ************** //
	/*
	// ---- text() - prints just the text of the p tag
	// ---- html() - prints the html tags along with the text within the p tag
	var firstPar = $("p:first");
	console.log(firstPar.text());
	console.log(firstPar.html());
	console.log($("p").html()); // only prints the first element

	firstPar.text("<strong>Hello</strong> World!"); // prints the actual tags
	firstPar.html("<strong>Hello</strong> World!"); // prints html

	// ---- append text to the first p tag; you can add function return the append
	firstPar.html(firstPar.html() + " This was just appended.");
	*/
});