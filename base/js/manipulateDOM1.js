// $ is the same as using jquery(function(){});
// this will execute when the page is ready
$(function() {
	
	// ************** ADDING ELEMENTS TO DOM ************** //

	// ---- adds a new child to the element, last li
  	//$("ul ul:first").append("<li>I'm going to be the last sub item");

  	// ---- adds a child elemet to the last ul, last li
  	//$("<li>I'm going to be the last item</li>").appendTo($("ul ul:last"));

  	// ---- adds a child to the beginning of ul, first li
  	//$("ul ul:first").prepend("<li>I'm going to be the first sub item");

  	// ---- just another way of calling prepend w/ prependTo
  	//$("<li>I'm going to be the first item in last ul</li>").prependTo($("ul ul:last"));

  	// ---- add name to top of content div
  	//$("<h4>Giovanni Siciliano</h4>").prependTo($("#content"));

  	// ---- create new sibiling after and before
  	//$(".red-box").after("<div class='red-box'>Another Red</div>");
	//$(".blue-box").before("<div class='blue-box'>Blue Friend</div>");

	// ---- perform a function within after/before
	//$(".blue-box").before(function() {
	//	return "<div class='blue-box'>Blue 2</div>";
	//});

	// ---- you can pass in a string, function, 
	// ---- or element (doesnt clone just moves unless if there are multiple ".blue-box" elements
	//$(".blue-box").before($(".red-box"));

	// ---- function to add boxes based on what the user specified
	/*
	function addBox(color, otherColor, position) {
		var htmlBox = "<div class='" + otherColor + "-box'>Another " + otherColor + "</div>";
		if(position === "before") {
			$("." + color + "-box").before(htmlBox);
		}else{
			$("." + color + "-box").after(htmlBox);
		}
	}

	addBox("blue", "red", "after");
	*/

	// ************** REPLACING ELEMENTS ON DOM ************** //

	// ---- replaces all li elements
	// ---- you can replace with a string, function, or element
	//$("li").replaceWith("<li>Replaced.</li>");

	//$("li").replaceWith(function() {
	//	return "<li>Replaced with function.</li>";
	//});

	// ---- only time it will clone an element is if there is more than 1 element
	// ---- that you are trying to replace
	//var firstListItem = $("li:first");
	//$("p").replaceWith(firstListItem);

	// ---- replace all red and blue with green box
	//$(".red-box, .blue-box").replaceWith("<div class='green-box'>More Green</div>");

	// ---- variant of replaceWith
	//$("<div class='green-box'>More Green</div>").replaceAll(".red-box, .blue-box");

	// ************** REMOVING ELEMENTS FROM DOM ************** //

	// ---- removes all <li> elements
	//$("li").remove();

	// ---- remove all children of form that are not text area or input type text or br
	//$("form").children().not("input:text, textarea, br").remove();

	// ---- retains all event handlers in case you want to re-attach (append)
	//var detachedLI = $("li").detach();
	//$("#content").append(detachedLI);

	// ---- empty removes all data from the tag
	//$("p:first").empty();

	// ---- empty all boxes on the page, just removes data (text)
	//$(".red-box, .blue-box, .green-box").empty();

	// ************** MANIPULATING ATTRIBUTES AND PROPERTIES ************** //

	// ---- attr(), prop(), and val()
	//var specialLink = $("#special-link");
	//console.log(specialLink.attr("href"));
	//console.log(specialLink.attr("title"));

	// ---- changing attr dynamically
	//specialLink.attr("href", "http://www.yahoo.com");

	// ---- cases where you shouldnt use attr() function
	// ---- prop will return the current boolean value
	// ---- attr will return the name value (can't use to see if its checked)
	//var checkbox = $("input:checkbox");
	//console.log(checkbox.prop("checked"));
	//console.log(checkbox.attr("checked"));

	// ---- val function will return the value of the attribute
	// ---- this selects all text inputs (but we only have 1 on page)
	//var textInput = $("input:text");
	//console.log(textInput.val()); 
	
	// ---- dynamically set the attr
	//textInput.val("Peter Summers");
	//console.log(textInput.val());
	//console.log(textInput.prop("type"));

	//var rangeInput = $("input[type='range']");
	//console.log(rangeInput.val());

	// ************** CREATING AN IMAGE SLIDE SHOW ************** //
	/*
	var galleryImage = $(".gallery").find("img").first();

	var images = [
		"images/laptop-mobile_small.jpg",
		"images/laptop-on-table_small.jpg",
		"images/people-office-group-team_small.jpg"
	];

	var i = 0;
	setInterval(function() {
		i = (i+1) % images.length;  // 0,1,2,0,1,2...
		galleryImage.fadeOut(function() {
			$(this).attr("src", images[i]);
			$(this).fadeIn();
		});
		console.log(galleryImage.attr("src"));
	}, 2000);
	*/
});