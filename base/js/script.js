// $ is the same as using jquery(function(){});
// this will execute when the page is ready
$(function() {
	
	// ---- changes the CSS property of .gallary to display: none
	$(".gallery").css("display", "none"); // same as .hide()
	$("li").hide();

	// ************** AJAX REQUESTS ************** //

	// ---- $.get(), $.post(), $.ajax(), $.getJSON()

	// ************** FETCHING SERVER FILE ************** //	
	/*
	// ---- $.load(); need to use Internet Explorer because
	// ---- Cross origin requests are only supported for protocol schemes (HTTP etc) on chrome
	// ---- you could use a local server and run on chrome
	$("#code").load("file:///C:/Dev/jQuery%20resources/base/js/script.js");

	// ---- you can check the status and response on the load
	$("#code").load("js/script.js", function(response, status) {
		if (status == "error") {
			alert("Could not find file");
		}
		console.log(response);
	});
	*/

	// ************** Flickr API +JSON ************** //	

	// ---- JSON (used in passing CSS properties in animate function)
	/* // ---- Example of JSON data
	{
		key: value,
		key2: value
	}
	*/
	/*
	// ---- JSON, $.getJSON(); append ?jsoncallback=? makes this a JSONP request, which
	// ---- allows you to retrieve data from a different domain/server (Flickr)
	var flickrApiUrl = "https://api.flickr.com/services/feeds/photos_public.gne?jsoncallback=?";

	// ---- 1st parm is the URL, and the secnd parms is options
	$.getJSON(flickrApiUrl, {
		// options.. https://www.flickr.com/services/feeds/docs/photos_public/ (query string parms)
		tags: "cat, dog",
		tagmode: "any",
		format: "json" // xml or others
	}).done(function(data) {
		// success function gets a parm
		console.log(data); // shows what data/properties we can retrieve
		// if it is a single object the function would be function(key, value)
		$("#flickr").append("<h2>" + data.title + "</h2>");
		// $.each() is a jQuery function to iterate over all objects in an array
		$.each(data.items, function(index, item) {
			console.log(item);
			// create a new image tag and attach the src 
			$("<img>").attr("src", item.media.m).appendTo("#flickr");

			// terminate after 5 images are returned
			if (index == 4) {
				// returning false will terminate each function loop
				return false;
			}
		});
	}).fail(function() {
		// failure case
		alert("Ajax call failed.");
	})
	*/

	// ************** PokeAPI or SWAPI (Star Wars) EXAMPLE RESTFul API ************** //	

	// ---- pokeapi link: https://pokeapi.co/
	// ---- swapi link: https://swapi.co/
	var pokeapiUrl = "https://pokeapi.co/api/v2/generation/1";
	var pokemonByName = "https://pokeapi.co/api/v2/pokemon/";

	$.getJSON(pokeapiUrl).done(function(data) {
		console.log(data); // look at all data attributes of the url passed
		// iterate thru poke species
		$.each(data.pokemon_species, function(index, pokemon) {
			// create variable that holds the name with first letter uppercased
			var name = pokemon.name.charAt(0).toUpperCase() + pokemon.name.slice(1);
			var boldName = $("<strong>").text(name);
			var link = $("<a>")
				.attr("id", pokemon.name)
				.attr("href", "#")
				.append(boldName);
			var par = $("<p>").html("Pokemon species no. " + (index + 1) + " is ").append(link);

			// click handler for the links
			link.click(function(event) {
				$.getJSON(pokemonByName + pokemon.name).done(function(details) {
					console.log(details);
					var pokemonDiv = $("#pokemon-details");
					pokemonDiv.empty();
					pokemonDiv.append("<h2>" + name + "</h2>");
					pokemonDiv.append("<img src='" + details.sprites.front_default + "'>");
					pokemonDiv.append("<img src='" + details.sprites.back_default + "'>");
					pokemonDiv.append("<img src='" + details.sprites.front_shiny + "'>");
					pokemonDiv.append("<img src='" + details.sprites.back_shiny + "'>");
				});
				// this prevents the default from happening when clicking 
				//event.preventDefault();
			});

			par.appendTo("#pokemon");
		});
	}).fail(function() {
		console.log("Request to pokeapi failed.");
	}).always(function() {
		console.log("This will always log dog!");
	});

});