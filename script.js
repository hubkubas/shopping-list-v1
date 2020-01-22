var button = document.getElementById("enter");
var input = document.getElementById("userinput");
var ul = document.querySelector("ul");


function inputLength() {
	return input.value.length;
}

function createListElement() {
	var li = document.createElement("li");
	li.appendChild(document.createTextNode(input.value));
	ul.appendChild(li);
	input.value = "";
}

function addListAfterClick() {
	if (inputLength() > 0) {
		createListElement();
	}
}

function deleteAfterClick() {
	var ul = document.getElementById("myList");
	list.removeChild(list.childNodes[0]);
}

function addListAfterClickPress(event) {
	if (inputLength() > 0 && event.keyCode === 13) {
		createListElement();
	}
}

function toggleClassDoneOnAndOff(event) {
    if (event.target.tagName === "LI") {
        event.target.classList.toggle("done");
    }
}

button.addEventListener("click", addListAfterClick);

button.addEventListener("click", deleteAfterClick);

input.addEventListener("keypress", addListAfterClickPress);

ul.addEventListener("click", toggleClassDoneOnAndOff);