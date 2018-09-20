// $ is the same as using jquery(function(){});
// this will execute when the page is ready
$(function() {
	
	// ---- changes the CSS property of .gallary to display: none
	$(".gallery").css("display", "none"); // same as .hide()
	$("li").hide();

	// ************** FOCUS AND BLUR EVENTS ************** //
	/*
	// ---- variable to hold all inputs
	var inputFields = $("input:text, input:password, textarea");

	// ---- add gray box shadow when selected
	inputFields.focus(function() {
		$(this).css("box-shadow", "0 0 4px #666");
	})

	// ---- remove box shadow when not selected	
	inputFields.blur(function() {
		$(this).css("box-shadow", "none");	
	})

	// ---- use blur event to indicate if the text input is > 3 chars
	// ---- if not change the box to red if so change box to green
	$("#name").blur(function() {
		if ($(this).val().length < 3) {
			$(this).css("box-shadow", "0 0 4px red");
		} else {
			$(this).css("box-shadow", "0 0 4px green");
		}
	})
	*/

	// ************** CHANGE EVENTS ************** //
	/*
	// ---- change box-shadow style depending if its checked or not
	$("#checkbox").change(function() {
		var isChecked = $(this).is(":checked"); // or prop("checked")
		// this also highlights the label for the cb
		if (isChecked) {
			$(this).add("label[for='cb']").css("box-shadow", "0 0 4px #181");
		} else {
			$(this).add("label[for='cb']").css("box-shadow", "0 0 4px #811");
		}
	});

	// ---- alert currently selected option
	$("#selection").change(function() {
		var selected = $(this).find(":selected").text();
		alert(selected);
	});
	*/

	// ************** SUBMIT EVENTS ************** //
	/*
	// ---- some form validation
	$("#form").submit(function() {
		var textarea = $("#message");
		if (textarea.val().trim() == "") {
			textarea.css("box-shadow", "0 0 4px #811");
			// prevents any default action (form submission etc)
			event.preventDefault();
		} else {
			// form will submit
		}
	});
	*/

	// ************** COMPLETE FORM VALIDATION ON SUBMIT ************** //
	/*
	// ---- perform fast feedback form validation
	var form = $("#form");
	enableFastFeedback(form);

	function enableFastFeedback(formElement) {
		var nameInput = formElement.find("#name");
		var pwInput = formElement.find("#password");
		var msgInput = formElement.find("#message");
		var cbInput = formElement.find("#checkbox");

		nameInput.blur(function() {
			var name = $(this).val();
			validateNameField(name, event);

			if (!isValidName(name)) {
				// red box shadow
				$(this).css({
					"box-shadow": "0 0 4px #811", 
					"border": "1px solid #600"
				});
			} else {
				// green box shadow
				$(this).css({
					"box-shadow": "0 0 4px #181", 
					"border": "1px solid #060"
				});
			}
		});

		pwInput.blur(function() {
			var pw = $(this).val();
			validatePasswordField(pw, event);

			if (!isValidPassword(pw)) {
				// red box shadow
				$(this).css({
					"box-shadow": "0 0 4px #811", 
					"border": "1px solid #600"
				});
			} else {
				// green box shadow
				$(this).css({
					"box-shadow": "0 0 4px #181", 
					"border": "1px solid #060"
				});
			}
		});

		msgInput.blur(function() {
			var msg = $(this).val();
			validateMessageField(msg, event);

			if (!isValidMessage(msg)) {
				// red box shadow
				$(this).css({
					"box-shadow": "0 0 4px #811", 
					"border": "1px solid #600"
				});
			} else {
				// green box shadow
				$(this).css({
					"box-shadow": "0 0 4px #181", 
					"border": "1px solid #060"
				});
			}
		});

		// for checkboxes you have to use change event (execute on change)
		cbInput.change(function() {
			var cb = $(this).prop("checked"); // or is(":checked");
			validateCheckboxField(cb, event);
			
			if (!cb) {
				// red box shadow
				$(this).css({
					"box-shadow": "0 0 4px #811", 
					"border": "1px solid #600"
				});
			} else {
				// green box shadow
				$(this).css({
					"box-shadow": "0 0 4px #181", 
					"border": "1px solid #060"
				});
			}
		});
	}

	// ---- perform form validation (for submit)
	form.submit(function() {
		var name = $("#name").val();
		var password = $("#password").val();
		var message = $("#message").val();
		var checked = $("#checkbox").is(":checked");

		validateNameField(name, event);
		validatePasswordField(password, event);
		validateMessageField(message, event);
		validateCheckboxField(checked, event);

	});

	function validateNameField(name, event) {
		if (!isValidName(name)) {
			$("#name-feedback").text("Please enter at least two characters");
			event.preventDefault();
		} else {
			$("#name-feedback").text("");
		}
	}

	function validatePasswordField(pw, event) {
		if (!isValidPassword(pw)) {
			$("#password-feedback").text("Please enter at least 8 characters and contain a number");
			event.preventDefault();
		} else {
			$("#password-feedback").text("");
		}
	}

	function validateMessageField(message, event) {
		if (!isValidMessage(message)) {
			$("#message-feedback").text("Please enter a message");
			event.preventDefault();
		} else {
			$("#message-feedback").text("");
		}
	}

	function validateCheckboxField(checked, event) {
		if (!checked) {
			$("#checkbox-feedback").text("Must be checked");
			event.preventDefault();
		} else {
			$("#checkbox-feedback").text("");
		}
	}

	function isValidName(name) {
		return name.length >= 2;
	}
	*/

	// had to comment this function out individually bc of the 0-9 number wildcard
	//function isValidPassword(pw) {
		// length must be 8 or greater and include 1 number
	//	return pw.length >= 8 && /.*[0-9].*/.test(pw);
	//}
	/*
	function isValidMessage(message) {
		return message.trim().length > 0;
	}
	*/

});