// $ is the same as using jquery(function(){});
// this will execute when the page is ready
$(function() {
  // jQuery goes here...

  // ************** CSS SELECTORS ************** //

  // html selector
  //$("p").css("background-color", "rgba(180, 180, 30, .8)");
  // class selector
  //$(".red-box").css("background-color", "rgba(180, 180, 30, .8)");
  // id selector
  //$("#list").css("background-color", "rgba(180, 180, 30, .8)");
  // specific selector for all inputs of type
  //$("input[type='text']").css("background-color", "rgba(180, 180, 30, .8)");
  // multiple selectors
  //$("h2, p, #list").css("background-color", "rgba(180, 180, 30, .8)");
  // select first/last even/odd
  //$("li:first").css("background-color", "rgba(180, 180, 30, .8)");
  //$("li:last").css("background-color", "rgba(180, 180, 30, .8)");
  //$("li:even").css("background-color", "rgba(180, 180, 30, .8)");
  //$("li:odd").css("background-color", "rgba(180, 180, 30, .8)");
  // specific selector for input (wont work for email but everything else it does)
  //$("input:text").css("background-color", "rgba(180, 180, 30, .8)");

  // ************** TRAVERSAL SELECTORS ************** //  

  // selects all selectors with that find
  //$("#list").find("li").css("background-color", "rgba(180, 180, 30, .8)");
  // selects all selectors with children
  //$("#list").children("li").css("background-color", "rgba(180, 180, 30, .8)");
  // selects all selectors with parent(s)
  //$("#list").parents("div").css("background-color", "rgba(180, 180, 30, .8)");
  // selects all siblings() or specific siblings("p") or (":header") headers
  //$("#list").siblings("p").css("background-color", "rgba(180, 180, 30, .8)");
  // selects previous/next elements
  //$("#list").prev().css("background-color", "rgba(180, 180, 30, .8)");
  //$("#list").next().css("background-color", "rgba(180, 180, 30, .8)");
  // select all direct next elements of all headers
  //$(":header").next().css("background-color", "rgba(180, 180, 30, .8)");
  // select all input text form elements
  //$("input:text").css("background-color", "rgba(180, 180, 30, .8)");

  // ************** FILTERING ELEMENTS SELECTED ************** //  

  // filters all even li
  //$("#list").find("li").filter(":even").css("background-color", "rgba(180, 180, 30, .8)");
  // filters all even li children
  //$("#list").children("li").filter(":even").css("background-color", "rgba(180, 180, 30, .8)");
  // you can select which index to filter on
  //$("li").filter(function(index) {
  //	return index % 3 === 1; // return true for 1, 4, 7...
  //}).css("background-color", "rgba(180, 180, 30, .8)");
  //$("li").first().css("background-color", "rgba(180, 180, 30, .8)");
  //$("li").last().css("background-color", "rgba(180, 180, 30, .8)");
  // filter on specific indexes
  //$("li").eq(4).css("background-color", "rgba(180, 180, 30, .8)");
  //$("li").eq(-2).css("background-color", "rgba(180, 180, 30, .8)");
  //
  $("li").not(":first").css("background-color", "rgba(180, 180, 30, .8)");
});