// Gets the enter button
var button = document.getElementById("enter");

// Gets the input box in the form
var input = document.getElementById("userinput");

// Gets the unordered list
var ul = document.querySelector("ul");

// Checks the length of the input   
function inputLength() {
	return input.value.length;
}

// Creates the list element
function createListElement() {
	var li = document.createElement("li");
	li.appendChild(document.createTextNode(input.value));
	ul.appendChild(li);
	input.value = "";
}

// Ensures text box is not empty once the button is clicked on by the mouse
function addListAfterClick() {
	if (inputLength() > 0) {
		createListElement();
	}
}

// Checks to ensure the text box isn't empty and enter is pressed.
function addListAfterKeypress(event) {
	if (inputLength() > 0 && event.keyCode === 13) {
		createListElement();
	}
}

//event listener for the mouse click
//note that the function "addListAfterClick" does not include () because it's not immediately invoked.
button.addEventListener("click", addListAfterClick);

//event listener for the keypress
//note that the function "addListAfterKeypress" does not include () because it's not immediately invoked.
input.addEventListener("keypress", addListAfterKeypress);